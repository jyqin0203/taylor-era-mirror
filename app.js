const questionBank = {
  mood: {
    name: "情绪状态",
    prompts: [
      {
        title: "最近你更常被哪种感受牵动？",
        options: [
          { text: "想把声音放低一点，先听清自己心里到底在说什么", eras: ["folklore", "evermore"] },
          { text: "明明很累，却仍然在暗暗计算下一步怎么赢回来", eras: ["midnights", "reputation"] },
          { text: "很想重新相信一些轻盈的东西，哪怕只是一点点", eras: ["lover", "debut"] },
          { text: "很多事已经过去，但身体好像还记得当时的温度", eras: ["red", "fearless"] },
        ],
      },
      {
        title: "如果今天只能保留一种情绪，你会留下哪一种？",
        options: [
          { text: "安静的确定感，不需要别人马上理解", eras: ["folklore", "evermore"] },
          { text: "漂亮的胜负欲，提醒自己别再退让", eras: ["reputation", "midnights"] },
          { text: "柔软的期待，给生活一点可爱的缝隙", eras: ["lover", "debut"] },
          { text: "浓烈的清醒，把没说完的话慢慢消化", eras: ["red", "fearless"] },
        ],
      },
      {
        title: "你现在最需要哪种心理空间？",
        options: [
          { text: "能一个人待着，也不会被误会为冷漠的空间", eras: ["folklore", "midnights"] },
          { text: "可以重新制定规则，不用解释太多的空间", eras: ["reputation", "1989"] },
          { text: "被温柔对待，也能自然表达喜欢的空间", eras: ["lover", "fearless"] },
          { text: "允许复杂、反复和慢慢释怀的空间", eras: ["red", "evermore"] },
        ],
      },
    ],
  },
  stage: {
    name: "人生阶段",
    prompts: [
      {
        title: "最近你对“改变”的态度更接近哪一种？",
        options: [
          { text: "先小步开始，哪怕看起来还不够成熟", eras: ["debut", "fearless"] },
          { text: "把旧东西收好，不再让它决定接下来的路", eras: ["red", "evermore"] },
          { text: "先把边界画清楚，再考虑谁能走近", eras: ["reputation", "midnights"] },
          { text: "换一套节奏，像给自己重新排版", eras: ["1989", "lover"] },
        ],
      },
      {
        title: "你最近最像在完成哪件事？",
        options: [
          { text: "从零搭起一个新的自己，还带着一点紧张", eras: ["debut", "fearless"] },
          { text: "把一个故事讲完，然后把门轻轻带上", eras: ["evermore", "red"] },
          { text: "停止过度解释，把能量留给真正重要的部分", eras: ["reputation", "midnights"] },
          { text: "清理生活噪音，给未来腾出更亮的位置", eras: ["1989", "lover"] },
        ],
      },
      {
        title: "如果给当下的你一个任务，会是什么？",
        options: [
          { text: "允许自己青涩，但不要因此停在原地", eras: ["fearless", "debut"] },
          { text: "承认有些东西很珍贵，但不一定还适合拥有", eras: ["red", "evermore"] },
          { text: "把主动权拿回来，哪怕别人暂时不习惯", eras: ["reputation", "1989"] },
          { text: "重新靠近生活，把日常过得更像自己", eras: ["lover", "folklore"] },
        ],
      },
    ],
  },
  aesthetic: {
    name: "审美偏好",
    prompts: [
      {
        title: "你最近更想靠近哪种画面质感？",
        options: [
          { text: "低饱和、留白多，像一段被认真保存的私人记录", eras: ["folklore", "evermore"] },
          { text: "强对比、线条利落，有一点不好接近的锋芒", eras: ["reputation", "midnights"] },
          { text: "明亮、柔和、带一点不怕被看见的甜", eras: ["lover", "debut"] },
          { text: "有颗粒、有温度，像情绪被封存在一张旧照片里", eras: ["red", "fearless"] },
        ],
      },
      {
        title: "选一个你最想拥有的房间氛围。",
        options: [
          { text: "灯光很低，适合写字、发呆和慢慢想明白", eras: ["folklore", "evermore"] },
          { text: "干净克制，物品不多，但每一样都很有态度", eras: ["reputation", "1989"] },
          { text: "柔软明亮，随手放着让人心情变好的小东西", eras: ["lover", "debut"] },
          { text: "温暖厚重，适合放老照片和不急着忘掉的回忆", eras: ["red", "fearless"] },
        ],
      },
      {
        title: "哪种穿搭状态更像现在的你？",
        options: [
          { text: "舒服、自然、有故事感，不刻意证明什么", eras: ["folklore", "evermore"] },
          { text: "轮廓明确，越简单越有距离感", eras: ["reputation", "midnights"] },
          { text: "颜色让人靠近，细节里藏一点浪漫", eras: ["lover", "debut"] },
          { text: "看似随意，但每个配件都连着一段情绪", eras: ["red", "1989"] },
        ],
      },
    ],
  },
  relationship: {
    name: "关系处理",
    prompts: [
      {
        title: "当一段关系让你不安时，你更容易怎么反应？",
        options: [
          { text: "先退后半步，观察自己真正介意的是什么", eras: ["folklore", "midnights"] },
          { text: "直接把底线说出来，不再猜对方会不会满意", eras: ["reputation", "1989"] },
          { text: "还是愿意温柔，但不会再无限自我消耗", eras: ["lover", "fearless"] },
          { text: "会回看很多细节，直到找到该放下的那一刻", eras: ["red", "evermore"] },
        ],
      },
      {
        title: "你现在最希望别人怎样靠近你？",
        options: [
          { text: "慢一点，认真一点，别急着定义我", eras: ["folklore", "evermore"] },
          { text: "尊重我的节奏，也尊重我说不的权利", eras: ["reputation", "midnights"] },
          { text: "清楚表达喜欢，也愿意照顾我的敏感", eras: ["lover", "fearless"] },
          { text: "能理解我偶尔反复，但不把我困在过去", eras: ["red", "1989"] },
        ],
      },
      {
        title: "如果关系里出现误解，你更想先保护什么？",
        options: [
          { text: "保护内心的安静，不急着把自己摊开", eras: ["folklore", "evermore"] },
          { text: "保护自己的边界，不再用讨好换和平", eras: ["reputation", "midnights"] },
          { text: "保护彼此的善意，尽量把话说得柔和但清楚", eras: ["lover", "debut"] },
          { text: "保护真实感受，即使它们暂时不够体面", eras: ["red", "fearless"] },
        ],
      },
    ],
  },
};

let questions = buildQuestionSet();

function buildQuestionSet() {
  return Object.entries(questionBank).map(([id, group]) => {
    const prompt = sampleOne(group.prompts);
    return {
      id,
      name: group.name,
      title: prompt.title,
      options: shuffle(prompt.options).map((option) => ({ ...option })),
    };
  });
}

function sampleOne(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

const eras = {
  debut: {
    title: "Debut Era",
    zh: "清晨出发型",
    palette: ["#b8d9c0", "#f6d88f", "#fff8e8", "#7b9a73"],
    ink: "#213827",
    keywords: ["真诚", "试探", "新鲜感", "乡野月光"],
    copy:
      "你正在和世界重新打招呼。现在的你不需要急着显得成熟，反而适合保留一点笨拙的真诚，把没被定义的部分当成自由。你的能量来自开始，而不是确定答案。",
    adviceTitle: "给今天留一个小开始",
    advice:
      "做一件不用证明成果的小事：发出一条消息、整理一个角落、写下一个愿望。你的好运通常从轻轻迈出去开始。",
    roomText: "green room light, open window, first page, soft courage, honest weather",
    track: "Open Window Demo",
  },
  fearless: {
    title: "Fearless Era",
    zh: "金色勇气型",
    palette: ["#f3c96a", "#fff4c7", "#d49a45", "#72513a"],
    ink: "#4b351b",
    keywords: ["勇敢", "心动", "金色", "向前走"],
    copy:
      "你心里仍然有一种相信美好会发生的能力。哪怕最近有犹豫，你也不是天真，而是愿意在看见风险之后继续选择热烈。你的当下关键词是把期待变成行动。",
    adviceTitle: "把喜欢说得更具体",
    advice:
      "今天适合主动一点。约一个人、投一个作品、确认一个计划，让模糊的期待落到现实里。",
    roomText: "golden hallway, bright shoes, brave pulse, handwritten yes, morning applause",
    track: "Golden Hallway Pulse",
  },
  red: {
    title: "Red Era",
    zh: "浓烈复盘型",
    palette: ["#b9232f", "#e9745f", "#f4d7bd", "#2e1f23"],
    ink: "#2e1f23",
    keywords: ["浓烈", "告别", "复盘", "秋天"],
    copy:
      "你正处在情绪密度很高的阶段。很多感受并不是要立刻被解决，而是需要被看见、命名、存档。你不是困在过去，你是在把旧故事翻译成更清楚的自己。",
    adviceTitle: "让情绪有出口",
    advice:
      "写下一件你反复想起的小事，再写下它真正伤到你的原因。别急着体面，清楚比漂亮更重要。",
    roomText: "red signal, film grain, last train, warm coat, brave goodbye, autumn mirror",
    track: "Autumn Signal Tape",
  },
  "1989": {
    title: "1989 Era",
    zh: "城市重启型",
    palette: ["#8cc5df", "#f5efe4", "#273d5f", "#e2a7a1"],
    ink: "#172a44",
    keywords: ["重启", "清爽", "自由", "城市感"],
    copy:
      "你正在把生活重新排版。比起解释过去，你更想创造一个新的节奏、新的形象和新的出口。你适合给自己更多空间，去试验一个更轻、更亮、更独立的版本。",
    adviceTitle: "换一个可见的节奏",
    advice:
      "今天调整一个外部秩序：路线、歌单、穿搭、桌面或日程。外在更新会帮你更快进入新状态。",
    roomText: "blue skyline, clean page, taxi light, fresh air, new rhythm, open city",
    track: "Clean Skyline Loop",
  },
  reputation: {
    title: "Reputation Era",
    zh: "边界重塑型",
    palette: ["#15151a", "#77737f", "#d8d2c9", "#4d624f"],
    ink: "#101015",
    keywords: ["边界", "反击", "冷静", "掌控"],
    copy:
      "你已经不太想解释自己了。现在的你更重视边界、选择权和真正站在你这边的人。外界的误读不再值得你耗费太多能量，你正在把注意力收回到自己手里。",
    adviceTitle: "少解释，多行动",
    advice:
      "今天只回应真正重要的人和事。把一个消耗你的入口关掉，让沉默成为一种清晰的选择。",
    roomText: "black glass, low bass, silver smoke, sealed door, chosen circle, quiet power",
    track: "Black Glass Bass",
  },
  lover: {
    title: "Lover Era",
    zh: "柔软发光型",
    palette: ["#f5a7bd", "#a9c6ef", "#fff0cc", "#8f6aa6"],
    ink: "#563653",
    keywords: ["温柔", "浪漫", "疗愈", "开放"],
    copy:
      "你正在重新允许自己柔软。你不只是想被爱，也在学习用更健康的方式爱自己、爱生活。你的当下能量很适合修复关系、创造美感，以及把日常过得更有仪式感。",
    adviceTitle: "做一件让生活变甜的事",
    advice:
      "买一束花、换一张壁纸、认真吃一顿饭，或把感谢说出口。温柔不是退让，是给自己补光。",
    roomText: "pink window, paper heart, soft bloom, warm kitchen, gentle mirror, daylight wish",
    track: "Paper Heart Room",
  },
  folklore: {
    title: "Folklore Era",
    zh: "内省叙事型",
    palette: ["#d9d7ce", "#8f9691", "#f7f4ec", "#39403d"],
    ink: "#29302d",
    keywords: ["内省", "安静", "故事感", "灰绿色"],
    copy:
      "你正在进入一个需要安静和理解的阶段。你对细节很敏感，也更愿意从旁观角度看待自己的人生。现在最重要的不是热闹，而是把心里的线索慢慢理顺。",
    adviceTitle: "给自己一段无打扰时间",
    advice:
      "关掉通知二十分钟，散步、阅读或写一段独白。你的答案通常藏在安静之后。",
    roomText: "misty forest, pencil note, old porch, quiet thread, hidden lake, inward light",
    track: "Misty Porch Notes",
  },
  evermore: {
    title: "Evermore Era",
    zh: "成熟沉淀型",
    palette: ["#9b5e3f", "#d8b77f", "#2d4739", "#f1dfc8"],
    ink: "#2d261f",
    keywords: ["沉淀", "释怀", "长线", "森林棕"],
    copy:
      "你不再只追求一个漂亮答案，而是开始理解人生的复杂纹理。你正在学会把遗憾放回它的位置，让经验变成稳定的力量。你的成熟感来自不再急着证明什么。",
    adviceTitle: "把一个旧结论更新掉",
    advice:
      "找出一句你曾经对自己下的判断，问问它现在还准不准确。你已经走到新的季节了。",
    roomText: "amber woods, long road, quiet dinner, late letter, winter sun, steady flame",
    track: "Amber Woods Letter",
  },
  midnights: {
    title: "Midnights Era",
    zh: "午夜清醒型",
    palette: ["#1d2545", "#5a6aa0", "#c9b7e8", "#f0d08a"],
    ink: "#151a35",
    keywords: ["清醒", "自问", "夜色", "欲望"],
    copy:
      "你正在夜里和自己谈判。你看得见渴望，也看得见焦虑；你想变好，但不想再假装一切轻松。这个阶段适合诚实面对自己的野心、疲惫和真正需要的安全感。",
    adviceTitle: "把脑内循环写成清单",
    advice:
      "睡前列出三件正在占用你的事，并给每件事一个最小下一步。清醒需要出口，不需要反复消耗。",
    roomText: "midnight mirror, violet clock, city hush, secret wish, clear eyes, late blue",
    track: "Violet Clock Afterdark",
  },
};

const state = {
  step: 0,
  answers: {},
  currentEra: null,
  audio: null,
  playing: false,
};

const quizStage = document.querySelector("#quizStage");
const resultStage = document.querySelector("#resultStage");
const roomStage = document.querySelector("#roomStage");
const questionView = document.querySelector("#questionView");
const progressFill = document.querySelector("#progressFill");
const stepLabel = document.querySelector("#stepLabel");
const stepName = document.querySelector("#stepName");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const roomBtn = document.querySelector("#roomBtn");
const cardBtn = document.querySelector("#cardBtn");
const restartBtn = document.querySelector("#restartBtn");
const backResultBtn = document.querySelector("#backResultBtn");
const playBtn = document.querySelector("#playBtn");
const shareModal = document.querySelector("#shareModal");
const shareBackdrop = document.querySelector("#shareBackdrop");
const closeShareBtn = document.querySelector("#closeShareBtn");
const downloadCardBtn = document.querySelector("#downloadCardBtn");

function renderQuestion() {
  const isTextStep = state.step === questions.length;
  const total = questions.length + 1;
  stepLabel.textContent = `${String(state.step + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  stepName.textContent = isTextStep ? "最近状态" : questions[state.step].name;
  progressFill.style.width = `${((state.step + 1) / total) * 100}%`;
  prevBtn.style.visibility = state.step === 0 ? "hidden" : "visible";
  nextBtn.textContent = isTextStep ? "照见我的 Era" : "下一题";

  if (isTextStep) {
    questionView.innerHTML = `
      <h2>用一句话描述最近的你。</h2>
      <textarea class="state-input" id="stateText" maxlength="120" placeholder="例如：我好像终于不想再解释自己了，但还是希望生活能温柔一点。">${
        state.answers.note || ""
      }</textarea>
    `;
    document.querySelector("#stateText").addEventListener("input", (event) => {
      state.answers.note = event.target.value;
    });
    return;
  }

  const question = questions[state.step];
  questionView.innerHTML = `
    <h2>${question.title}</h2>
    <div class="option-grid">
      ${question.options
        .map(
          (option, index) => `
          <label class="option-card">
            <input type="radio" name="${question.id}" value="${index}" ${
              String(state.answers[question.id]) === String(index) ? "checked" : ""
            } />
            <span>${option.text}</span>
          </label>
        `,
        )
        .join("")}
    </div>
  `;

  document.querySelectorAll(`input[name="${question.id}"]`).forEach((input) => {
    input.addEventListener("change", (event) => {
      state.answers[question.id] = Number(event.target.value);
    });
  });
}

function scoreEra() {
  const scores = Object.fromEntries(Object.keys(eras).map((era) => [era, 0]));

  questions.forEach((question) => {
    const answer = question.options[state.answers[question.id]];
    if (!answer) return;
    answer.eras.forEach((era, index) => {
      scores[era] += index === 0 ? 3 : 2;
    });
  });

  const note = (state.answers.note || "").toLowerCase();
  const textSignals = [
    ["开始", "新", "勇敢", "试试", "未知", "start"],
    ["爱", "温柔", "浪漫", "粉", "疗愈", "soft"],
    ["边界", "解释", "反击", "讨厌", "冷", "power"],
    ["夜", "睡不着", "焦虑", "清醒", "想太多", "midnight"],
    ["告别", "遗憾", "难过", "秋", "旧", "放下"],
    ["安静", "一个人", "故事", "森林", "沉默", "quiet"],
  ];
  const signalEras = [
    ["debut", "fearless"],
    ["lover"],
    ["reputation"],
    ["midnights"],
    ["red", "evermore"],
    ["folklore", "evermore"],
  ];

  textSignals.forEach((signals, index) => {
    if (signals.some((signal) => note.includes(signal))) {
      signalEras[index].forEach((era) => {
        scores[era] += 2;
      });
    }
  });

  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return {
    id: ranked[0][0],
    confidence: Math.min(96, 64 + ranked[0][1] * 4),
  };
}

function setEraTheme(era) {
  document.documentElement.style.setProperty("--era-a", era.palette[0]);
  document.documentElement.style.setProperty("--era-b", era.palette[1]);
  document.documentElement.style.setProperty("--era-c", era.palette[2]);
  document.documentElement.style.setProperty("--era-ink", era.ink);
}

function renderResult() {
  const result = scoreEra();
  const era = eras[result.id];
  state.currentEra = { id: result.id, ...era, confidence: result.confidence };
  setEraTheme(era);

  document.querySelector("#eraTitle").textContent = era.title;
  document.querySelector("#scoreLine").textContent = `${era.zh} · mirror match ${result.confidence}%`;
  document.querySelector("#resultCopy").textContent = era.copy;
  document.querySelector("#adviceTitle").textContent = era.adviceTitle;
  document.querySelector("#adviceCopy").textContent = era.advice;

  document.querySelector("#keywordRow").innerHTML = era.keywords.map((keyword) => `<span>${keyword}</span>`).join("");
  document.querySelector("#paletteRow").innerHTML = era.palette
    .map((color) => `<span style="background:${color}" title="${color}"></span>`)
    .join("");

  quizStage.classList.add("hidden");
  resultStage.classList.remove("hidden");
  roomStage.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function drawShareCard() {
  const canvas = document.querySelector("#shareCanvas");
  const image = document.querySelector("#shareImage");
  const ctx = canvas.getContext("2d");
  const era = state.currentEra;
  const gradient = ctx.createLinearGradient(0, 0, 1200, 1600);
  gradient.addColorStop(0, era.palette[2]);
  gradient.addColorStop(0.45, era.palette[0]);
  gradient.addColorStop(1, era.palette[1]);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 1600);

  ctx.globalAlpha = 0.16;
  for (let i = 0; i < 16; i += 1) {
    ctx.beginPath();
    ctx.arc(120 + i * 86, 190 + (i % 5) * 210, 220, 0, Math.PI * 2);
    ctx.strokeStyle = era.ink;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  ctx.fillStyle = "rgba(255, 250, 245, 0.92)";
  roundRect(ctx, 80, 80, 1040, 1440, 26);
  ctx.fill();

  era.palette.forEach((color, index) => {
    ctx.fillStyle = color;
    roundRect(ctx, 140 + index * 88, 128, 62, 14, 7);
    ctx.fill();
  });

  ctx.fillStyle = era.ink;
  ctx.font = "700 42px Inter, sans-serif";
  ctx.fillText("TAYLOR ERA MIRROR", 140, 210);
  ctx.font = "700 128px Georgia, serif";
  wrapText(ctx, era.title, 140, 395, 880, 128);

  ctx.font = "800 34px Inter, sans-serif";
  ctx.fillText(`${era.zh} · mirror match ${era.confidence}%`, 140, 625);

  ctx.font = "500 38px Inter, sans-serif";
  wrapText(ctx, era.copy, 140, 755, 900, 62);

  ctx.font = "800 32px Inter, sans-serif";
  era.keywords.forEach((keyword, index) => {
    const x = 140 + (index % 2) * 360;
    const y = 1160 + Math.floor(index / 2) * 84;
    ctx.fillStyle = era.palette[index % era.palette.length];
    roundRect(ctx, x, y + 10, 42, 14, 7);
    ctx.fill();
    ctx.fillStyle = era.ink;
    ctx.fillText(`# ${keyword}`, x + 60, y + 34);
  });

  ctx.fillStyle = era.ink;
  ctx.font = "600 30px Inter, sans-serif";
  ctx.fillText("生成你的当下 Era：Taylor Era Mirror", 140, 1440);

  image.src = canvas.toDataURL("image/png");
  shareModal.classList.remove("hidden");
}

function closeShareModal() {
  shareModal.classList.add("hidden");
}

function downloadShareCard() {
  const canvas = document.querySelector("#shareCanvas");
  const link = document.createElement("a");
  link.download = `taylor-era-mirror-${state.currentEra.id}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const chars = Array.from(text);
  let line = "";
  let currentY = y;
  chars.forEach((char) => {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line = char;
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  });
  ctx.fillText(line, x, currentY);
}

function openRoom() {
  const era = state.currentEra;
  setEraTheme(era);
  document.querySelector("#roomTitle").textContent = era.title;
  document.querySelector("#roomEra").textContent = era.title;
  document.querySelector("#trackTitle").textContent = era.track;
  const text = `${era.roomText} · `;
  document.querySelector("#marqueeText").textContent = text.repeat(8);
  resultStage.classList.add("hidden");
  roomStage.classList.remove("hidden");
}

function toggleAudio() {
  if (!state.audio) {
    state.audio = createAmbientAudio();
  }

  if (state.playing) {
    state.audio.stop();
    state.playing = false;
  } else {
    state.audio.start();
    state.playing = true;
  }

  document.querySelector(".player").classList.toggle("playing", state.playing);
  document.querySelector("#playIcon").textContent = state.playing ? "Ⅱ" : "▶";
}

function createAmbientAudio() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const context = new AudioContext();
  const gain = context.createGain();
  gain.gain.value = 0.045;
  gain.connect(context.destination);
  let oscillators = [];

  return {
    start() {
      context.resume();
      const base = 180 + state.currentEra.title.length * 5;
      oscillators = [base, base * 1.5, base * 2.01].map((frequency, index) => {
        const oscillator = context.createOscillator();
        const filter = context.createBiquadFilter();
        oscillator.type = index === 0 ? "sine" : "triangle";
        oscillator.frequency.value = frequency;
        filter.type = "lowpass";
        filter.frequency.value = 580 + index * 120;
        oscillator.connect(filter);
        filter.connect(gain);
        oscillator.start();
        return oscillator;
      });
    },
    stop() {
      oscillators.forEach((oscillator) => oscillator.stop());
      oscillators = [];
    },
  };
}

prevBtn.addEventListener("click", () => {
  state.step = Math.max(0, state.step - 1);
  renderQuestion();
});

nextBtn.addEventListener("click", () => {
  if (state.step < questions.length) {
    const question = questions[state.step];
    if (state.answers[question.id] === undefined) {
      questionView.animate([{ transform: "translateX(-6px)" }, { transform: "translateX(6px)" }, { transform: "translateX(0)" }], {
        duration: 180,
      });
      return;
    }
  }

  if (state.step === questions.length) {
    renderResult();
    return;
  }

  state.step += 1;
  renderQuestion();
});

roomBtn.addEventListener("click", openRoom);
cardBtn.addEventListener("click", drawShareCard);
restartBtn.addEventListener("click", () => {
  if (state.audio && state.playing) toggleAudio();
  questions = buildQuestionSet();
  state.step = 0;
  state.answers = {};
  state.currentEra = null;
  resultStage.classList.add("hidden");
  roomStage.classList.add("hidden");
  quizStage.classList.remove("hidden");
  closeShareModal();
  renderQuestion();
});
backResultBtn.addEventListener("click", () => {
  if (state.audio && state.playing) toggleAudio();
  roomStage.classList.add("hidden");
  resultStage.classList.remove("hidden");
});
playBtn.addEventListener("click", toggleAudio);
shareBackdrop.addEventListener("click", closeShareModal);
closeShareBtn.addEventListener("click", closeShareModal);
downloadCardBtn.addEventListener("click", downloadShareCard);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !shareModal.classList.contains("hidden")) {
    closeShareModal();
  }
});

renderQuestion();
