const MODEL = process.env.BAILIAN_MODEL || "qwen-plus";
const BASE_URL = process.env.BAILIAN_BASE_URL || "https://dashscope.aliyuncs.com/compatible-mode/v1";

const ERA_NAMES = {
  debut: "Taylor Swift Era",
  fearless: "Fearless Era",
  speaknow: "Speak Now Era",
  red: "Red Era",
  "1989": "1989 Era",
  reputation: "Reputation Era",
  lover: "Lover Era",
  folklore: "Folklore Era",
  evermore: "Evermore Era",
  midnights: "Midnights Era",
  ttpd: "The Tortured Poets Department Era",
  showgirl: "The Life of a Showgirl Era",
};

const SONG_CANDIDATES = {
  debut: ["Our Song", "Tim McGraw", "Teardrops On My Guitar"],
  fearless: ["Fearless", "Love Story", "You Belong With Me"],
  speaknow: ["Long Live", "Enchanted", "Sparks Fly"],
  red: ["All Too Well", "Begin Again", "State Of Grace"],
  "1989": ["Clean", "Style", "New Romantics"],
  reputation: ["Delicate", "Ready For It?", "Call It What You Want"],
  lover: ["Daylight", "Lover", "The Archer"],
  folklore: ["mirrorball", "august", "cardigan"],
  evermore: ["evermore", "willow", "champagne problems"],
  midnights: ["You're On Your Own, Kid", "Anti-Hero", "Mastermind"],
  ttpd: ["The Black Dog", "Fortnight", "I Can Do It With a Broken Heart"],
  showgirl: ["The Fate of Ophelia", "Elizabeth Taylor", "Opalite"],
};

exports.main = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return response(204, "");
  }

  try {
    const apiKey = process.env.DASHSCOPE_API_KEY;
    if (!apiKey) {
      return response(500, { error: "Missing DASHSCOPE_API_KEY" });
    }

    const body = parseBody(event);
    const completion = await fetch(`${BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.75,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content:
              "你是一个活泼、有梗、懂 Taylor Swift 各个 Era 氛围的“人生状态分析师”。只输出 JSON，不要 Markdown。输出中文，适合放在网页结果页。语气像朋友在认真鼓励用户：有趣、温暖、轻松但不空洞，不要太鸡汤。不要输出 Taylor Swift 原歌词，也不要仿写具体歌词句子。",
          },
          {
            role: "user",
            content: buildPrompt(body),
          },
        ],
      }),
    });

    if (!completion.ok) {
      const detail = await completion.text();
      return response(502, { error: "Model request failed", detail });
    }

    const data = await completion.json();
    const content = data.choices?.[0]?.message?.content || "{}";
    const result = normalizeResult(JSON.parse(content), body);
    return response(200, result);
  } catch (error) {
    return response(500, { error: error.message || "Unknown error" });
  }
};

function parseBody(event) {
  if (!event.body) return event;
  if (typeof event.body === "object") return event.body;
  return JSON.parse(event.body);
}

function buildPrompt(body) {
  const fallbackEra = body.fallbackEra || "midnights";
  const songCandidates = SONG_CANDIDATES[fallbackEra] || [];

  return JSON.stringify({
    role: "你是一个活泼、有梗、懂 Taylor Swift 各个 Era 氛围的人生状态分析师。",
    task:
      "用户完成了 Taylor Swift Era Personality Test。系统已经根据用户答案判断出用户当前最接近的专辑 Era。请根据该 Era 生成有趣、温暖、轻松但不空洞的个性化结果。",
    allowedEras: body.allowedEras || Object.keys(ERA_NAMES),
    eraName: ERA_NAMES[fallbackEra] || ERA_NAMES.midnights,
    eraScores: body.scores,
    fallbackEra,
    fallbackConfidence: body.confidence,
    recentNote: body.note,
    answers: body.answers,
    songCandidates,
    requirements: [
      "根据用户所属 Era，生成一段具体的状态分析，不要泛泛而谈。",
      "给用户 3 条针对性建议，分别偏情绪/心态、行动/生活、人际/成长，并且要和该 Era 的精神气质对应。",
      "从 songCandidates 中推荐一首 Taylor Swift 歌曲，并说明为什么适合用户现在的状态。",
      "不要输出任何 Taylor Swift 原歌词。",
      "可以生成一句受该 Era 氛围启发的原创文案，但必须是原创短句，不要仿写具体歌词句子。",
      "语气像朋友在认真鼓励用户，可以有梗，但不要油腻、不要鸡汤。",
    ],
    outputSchema: {
      id: "优先使用 fallbackEra；除非用户答案明显更适合 allowedEras 中其他 Era，才可改为其他 id",
      confidence: "65-96 的整数",
      title: "Era 英文名",
      zh: "一句抓人的中文结果标题，18 个中文字以内，例如：会发光但还在偷偷紧张的小金人",
      copy: "【状态分析】120-180 字中文，解释用户为什么像这个 Era，要具体、有趣、温暖",
      keywords: "4 个中文关键词数组",
      adviceTitle: "【给你的 3 条 Era 建议】的小标题，10 个中文字以内",
      adviceItems: ["建议一：偏情绪/心态", "建议二：偏行动/生活", "建议三：偏人际/成长"],
      songTitle: "从 songCandidates 中选择的一首歌曲名",
      songReason: "【今日推荐歌】推荐理由，40-80 字中文",
      originalLine: "【你的专属原创文案】一句原创短句，不使用真实歌词",
      easterEgg: "【页面小彩蛋】一句适合按钮/卡片/贴纸的小文案",
    },
  });
}

function normalizeResult(raw, body) {
  const allowed = new Set(body.allowedEras || Object.keys(ERA_NAMES));
  const id = allowed.has(raw.id) ? raw.id : body.fallbackEra || "midnights";
  const confidence = Math.max(65, Math.min(96, Number(raw.confidence) || Number(body.confidence) || 78));

  return {
    id,
    confidence,
    title: raw.title || ERA_NAMES[id],
    zh: String(raw.zh || "").slice(0, 24),
    copy: String(raw.copy || ""),
    keywords: Array.isArray(raw.keywords) ? raw.keywords.slice(0, 4).map(String) : [],
    adviceTitle: String(raw.adviceTitle || "").slice(0, 16),
    advice: String(raw.advice || ""),
    adviceItems: Array.isArray(raw.adviceItems) ? raw.adviceItems.slice(0, 3).map(String) : [],
    songTitle: String(raw.songTitle || ""),
    songReason: String(raw.songReason || ""),
    originalLine: String(raw.originalLine || ""),
    easterEgg: String(raw.easterEgg || ""),
  };
}

function response(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST,OPTIONS",
      "Content-Type": "application/json; charset=utf-8",
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  };
}
