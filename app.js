const questionBank = {
  mood: {
    name: "情绪状态",
    prompts: [
      {
        title: "最近你的整体状态更接近哪一种？",
        options: [
          { text: "想安静一点，把自己的感受先整理清楚。", eras: ["folklore", "evermore"] },
          { text: "有点累，但还是在想办法把节奏拿回来。", eras: ["midnights", "reputation"] },
          { text: "想让生活轻一点，多一点喜欢和期待。", eras: ["lover", "debut"] },
          { text: "压力不小，但希望自己看起来依然漂亮、有精神。", eras: ["showgirl", "fearless"] },
        ],
      },
      {
        title: "如果只能保留一种心情，你会选哪一种？",
        options: [
          { text: "稳定和安心，不需要马上被所有人理解。", eras: ["folklore", "evermore"] },
          { text: "清醒和坚定，提醒自己别再轻易退让。", eras: ["reputation", "midnights"] },
          { text: "柔软和期待，给今天留一点可爱的空间。", eras: ["lover", "debut"] },
          { text: "直接和坦诚，把想说的话完整说出来。", eras: ["ttpd", "red"] },
        ],
      },
      {
        title: "你现在最需要什么样的空间？",
        options: [
          { text: "可以独处、放空、慢慢恢复能量的空间。", eras: ["folklore", "midnights"] },
          { text: "可以重新定规则，不必解释太多的空间。", eras: ["reputation", "1989"] },
          { text: "被温柔对待，也能自然表达喜欢的空间。", eras: ["lover", "fearless"] },
          { text: "允许自己复杂、反复、慢慢想明白的空间。", eras: ["red", "evermore"] },
        ],
      },
    ],
  },
  stage: {
    name: "人生阶段",
    prompts: [
      {
        title: "你最近对改变的态度更像哪一种？",
        options: [
          { text: "先从小事开始，不急着马上变得很成熟。", eras: ["debut", "fearless"] },
          { text: "把旧的情绪收好，不再让它影响接下来的路。", eras: ["red", "evermore"] },
          { text: "先把边界画清楚，再决定谁能靠近。", eras: ["reputation", "midnights"] },
          { text: "想换一种生活节奏，像给自己重新排版。", eras: ["1989", "lover"] },
        ],
      },
      {
        title: "你最近最像在处理哪件事？",
        options: [
          { text: "重新开始一件事，虽然紧张但也有点兴奋。", eras: ["debut", "fearless"] },
          { text: "给一个过去的故事收尾，然后继续往前走。", eras: ["evermore", "red"] },
          { text: "停止过度解释，把精力留给真正重要的人和事。", eras: ["reputation", "midnights"] },
          { text: "在压力和期待里保持体面，也承认自己想被看见。", eras: ["showgirl", "1989"] },
        ],
      },
      {
        title: "如果给当下的你一个任务，会是什么？",
        options: [
          { text: "允许自己不完美，但不要因此停在原地。", eras: ["fearless", "debut"] },
          { text: "承认有些东西很珍贵，但未必还适合继续拥有。", eras: ["red", "evermore"] },
          { text: "把主动权拿回来，即使别人一开始不习惯。", eras: ["reputation", "1989"] },
          { text: "把混乱整理成文字，不再责怪自己的敏感。", eras: ["ttpd", "folklore"] },
        ],
      },
    ],
  },
  aesthetic: {
    name: "审美偏好",
    prompts: [
      {
        title: "你最近更喜欢哪种画面感？",
        options: [
          { text: "低饱和、安静、有留白，像认真保存的私人日记。", eras: ["folklore", "evermore"] },
          { text: "线条清楚、对比强，有一点不好接近的锋利感。", eras: ["reputation", "midnights"] },
          { text: "明亮、柔和、颜色轻快，让人愿意靠近。", eras: ["lover", "debut"] },
          { text: "黑白纸面、墨迹、舞台灯光，带一点戏剧感。", eras: ["ttpd", "showgirl"] },
        ],
      },
      {
        title: "如果布置一个房间，你会更想要哪种氛围？",
        options: [
          { text: "灯光很低，适合写字、发呆、慢慢想事情。", eras: ["folklore", "evermore"] },
          { text: "干净克制，东西不多，但每一件都很有态度。", eras: ["reputation", "1989"] },
          { text: "柔软明亮，放着让人心情变好的小物件。", eras: ["lover", "debut"] },
          { text: "一半像后台化妆间，一半像深夜书桌。", eras: ["showgirl", "ttpd"] },
        ],
      },
      {
        title: "哪种穿搭状态更像现在的你？",
        options: [
          { text: "舒服自然，有故事感，不刻意证明什么。", eras: ["folklore", "evermore"] },
          { text: "轮廓明确，越简单越有距离感。", eras: ["reputation", "midnights"] },
          { text: "颜色让人开心，细节里藏一点浪漫。", eras: ["lover", "debut"] },
          { text: "看似随意，但每个配件都和某段回忆有关。", eras: ["red", "1989"] },
        ],
      },
    ],
  },
  relationship: {
    name: "关系处理",
    prompts: [
      {
        title: "当一段关系让你不安时，你通常会怎么做？",
        options: [
          { text: "先退半步，想清楚自己到底在意什么。", eras: ["folklore", "midnights"] },
          { text: "直接说出底线，不再靠猜来维持关系。", eras: ["reputation", "1989"] },
          { text: "还是愿意温柔沟通，但不会一直消耗自己。", eras: ["lover", "fearless"] },
          { text: "会反复回想细节，直到找到可以放下的理由。", eras: ["red", "evermore"] },
        ],
      },
      {
        title: "你现在最希望别人怎样靠近你？",
        options: [
          { text: "慢一点，认真一点，不急着定义关系。", eras: ["folklore", "evermore"] },
          { text: "尊重我的节奏，也尊重我拒绝的权利。", eras: ["reputation", "midnights"] },
          { text: "表达得清楚一点，也照顾我的敏感。", eras: ["lover", "fearless"] },
          { text: "理解我偶尔会反复，但不要把我困在过去。", eras: ["red", "1989"] },
        ],
      },
      {
        title: "如果关系里出现误解，你更想先保护什么？",
        options: [
          { text: "保护内心的安静，不急着把自己摊开解释。", eras: ["folklore", "evermore"] },
          { text: "保护自己的边界，不再用讨好换和平。", eras: ["reputation", "midnights"] },
          { text: "保护彼此的善意，尽量把话说得清楚但柔和。", eras: ["lover", "debut"] },
          { text: "保护真实感受，即使它暂时不够体面。", eras: ["red", "fearless"] },
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
    title: "Taylor Swift Era",
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
  speaknow: {
    title: "Speak Now Era",
    zh: "紫色宣言型",
    palette: ["#b58ad7", "#f2dcff", "#6f4a91", "#fff6fb"],
    ink: "#3b2450",
    keywords: ["表达", "幻想", "紫色", "自我书写"],
    copy:
      "你正在把憋了很久的话重新拿回自己手里。这个阶段的你不一定要说得完美，但需要亲自发声、亲自定义自己的故事。你的浪漫里带着勇气，也带着一点戏剧性的决心。",
    adviceTitle: "把一句真话说出口",
    advice:
      "今天适合写下一封不会被修改的信，或认真表达一个你一直压着的想法。你的声音值得被完整听见。",
    roomText: "purple curtain, open letter, castle light, clear voice, magic hour, handwritten vow",
    track: "Purple Letter Stage",
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
  ttpd: {
    title: "The Tortured Poets Department Era",
    zh: "白纸审讯型",
    palette: ["#f2eee7", "#b8afa5", "#2d2a28", "#7b7168"],
    ink: "#24211f",
    keywords: ["剖白", "锋利", "失眠", "墨迹"],
    copy:
      "你正在把混乱变成清楚的句子。这个阶段的你不再害怕承认矛盾、疲惫和执念，也不急着把自己修饰得轻松。你需要的不是假装没事，而是把真实完整地写下来。",
    adviceTitle: "给情绪一个准确标题",
    advice:
      "今天不要只说自己还好。给一种复杂感受命名，再写下它从哪里来。表达不是放大痛苦，是把主动权拿回来。",
    roomText: "white paper, black ink, late desk, quiet trial, sharp sentence, open file",
    track: "Late Desk Manuscript",
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
  showgirl: {
    title: "The Life of a Showgirl Era",
    zh: "华丽谢幕型",
    palette: ["#1f7f86", "#f6a640", "#fff4de", "#0f4f55"],
    ink: "#2b1b22",
    keywords: ["舞台", "绽放", "体面", "高光"],
    copy:
      "你正在学习把疲惫和光芒同时带上舞台。现在的你不只是想被看见，也想用更成熟的方式享受成果、爱与掌声。华丽不是伪装，而是你终于允许自己站在灯下。",
    adviceTitle: "把今天过得有一点高光",
    advice:
      "穿一件让你更有状态的衣服，完成一个能被看见的小成果。你不需要等到完美才值得登场。",
    roomText: "orange lights, green velvet, final bow, bright mirror, soft applause, opal glow",
    track: "Showgirl Dressing Room",
  },
};

const state = {
  step: 0,
  answers: {},
  currentEra: null,
  isGenerating: false,
};

const quizStage = document.querySelector("#quizStage");
const resultStage = document.querySelector("#resultStage");
const roomStage = document.querySelector("#roomStage");
const questionView = document.querySelector("#questionView");
const aiLoading = document.querySelector("#aiLoading");
const progressFill = document.querySelector("#progressFill");
const stepLabel = document.querySelector("#stepLabel");
const stepName = document.querySelector("#stepName");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const roomBtn = document.querySelector("#roomBtn");
const cardBtn = document.querySelector("#cardBtn");
const restartBtn = document.querySelector("#restartBtn");
const backResultBtn = document.querySelector("#backResultBtn");
const shareModal = document.querySelector("#shareModal");
const shareBackdrop = document.querySelector("#shareBackdrop");
const closeShareBtn = document.querySelector("#closeShareBtn");
const downloadCardBtn = document.querySelector("#downloadCardBtn");
const resultEraPhotoWrap = document.querySelector("#resultEraPhotoWrap");
const resultEraPhoto = document.querySelector("#resultEraPhoto");
const eraStickerLayer = document.querySelector("#eraStickerLayer");
const eraVideoFrame = document.querySelector("#eraVideoFrame");
const eraVideoFallback = document.querySelector("#eraVideoFallback");
const eraVideoChoices = document.querySelector("#eraVideoChoices");
const eraVideoDescription = document.querySelector("#eraVideoDescription");
const eraVideoSourceLink = document.querySelector("#eraVideoSourceLink");

const eraImageSources = {
  debut: "./assets/eras/taylor-swift.jpg",
  fearless: "./assets/eras/fearless.jpg",
  speaknow: "./assets/eras/speak-now.jpg",
  red: "./assets/eras/red.jpg",
  "1989": "./assets/eras/1989.jpg",
  reputation: "./assets/eras/reputation.jpg",
  lover: "./assets/eras/lover.jpg",
  folklore: "./assets/eras/folklore.jpg",
  evermore: "./assets/eras/evermore.jpg",
  midnights: "./assets/eras/midnights.jpg",
  ttpd: "./assets/eras/ttpd.jpg",
  showgirl: "./assets/eras/showgirl.jpg",
};

const AI_ENDPOINT = window.TAYLOR_ERA_AI_ENDPOINT || "/api/era-ai";

const resultEffectCounts = {
  debut: 14,
  fearless: 28,
  speaknow: 10,
  red: 12,
  "1989": 12,
  reputation: 16,
  lover: 18,
  folklore: 10,
  evermore: 16,
  midnights: 24,
  ttpd: 8,
  showgirl: 22,
};

const eraSongAdvice = {
  debut: {
    title: "Our Song",
    reason: "适合把今天当成一个轻盈开头，不急着把所有事都定义清楚。",
    quote: "把日常小事也听成一段旋律。",
  },
  fearless: {
    title: "Fearless",
    reason: "适合需要一点金色勇气的时候，提醒自己可以先迈出去。",
    quote: "喜欢和勇敢可以同时发生。",
  },
  speaknow: {
    title: "Long Live",
    reason: "适合把自己的声音放大一点，认真纪念一个由你亲自选择的瞬间。",
    quote: "今晚的掌声先留给自己。",
  },
  red: {
    title: "All Too Well",
    reason: "适合整理复杂回忆，把情绪写清楚，而不是继续闷在心里。",
    quote: "记得很深，也可以慢慢放下。",
  },
  "1989": {
    title: "Clean",
    reason: "适合想换一个节奏、清理旧噪音、重新呼吸的时候。",
    quote: "雨停之后，你会更像自己。",
  },
  reputation: {
    title: "Delicate",
    reason: "适合在强边界和柔软心事之间找到平衡。",
    quote: "脆弱不是退让，是诚实。",
  },
  lover: {
    title: "Daylight",
    reason: "适合给生活补一点光，也给自己多一点温柔。",
    quote: "把自己从阴影里牵出来。",
  },
  folklore: {
    title: "mirrorball",
    reason: "适合敏感、安静、仍然努力发光的时刻。",
    quote: "不必照亮所有人，也能被看见。",
  },
  evermore: {
    title: "evermore",
    reason: "适合相信低谷不是永久状态，经验会慢慢沉淀成力量。",
    quote: "漫长冬天也会走到尽头。",
  },
  midnights: {
    title: "You're On Your Own, Kid",
    reason: "适合在深夜清醒地承认野心、疲惫和成长。",
    quote: "孤独走过的路也算勋章。",
  },
  ttpd: {
    title: "The Black Dog",
    reason: "适合把反复想起的事写下来，让情绪从脑内循环里出来。",
    quote: "有些痛需要被准确命名。",
  },
  showgirl: {
    title: "The Fate of Ophelia",
    reason: "适合在聚光灯下重新选择自己，把疲惫和漂亮一起带上台。",
    quote: "谢幕之前，也可以重新登场。",
  },
};

function makeEraVideos(label, defaultBvid, tracks) {
  return tracks.map(([track, title, page, bvid = defaultBvid]) => ({
    track,
    title,
    kind: label + " - Bilibili",
    bvid,
    page,
  }));
}

const eraVideoLibrary = {
  debut: makeEraVideos("Taylor Swift", "BV1cf421B7yn", [
    ["01", "Tim McGraw", 2],
    ["02", "Picture To Burn", 3],
    ["03", "Teardrops On My Guitar", 4],
    ["04", "A Place In This World", 5],
    ["05", "Cold As You", 6],
    ["06", "The Outside", 7],
    ["07", "Tied Together With A Smile", 8],
    ["08", "Stay Beautiful", 9],
    ["09", "Should've Said No", 10],
    ["10", "Mary's Song (Oh My My My)", 11],
    ["11", "Our Song", 12],
    ["12", "I'm Only Me When I'm With You", 13],
    ["13", "Invisible", 14],
    ["14", "A Perfectly Good Heart", 15],
    ["15", "Taylor's 1st Phone Call With Tim McGraw", 16],
  ]),
  fearless: makeEraVideos("Fearless TV", "BV1sy411z7to", [
    ["01", "Fearless (Taylor's Version)", 2],
    ["02", "Fifteen (Taylor's Version)", 3],
    ["03", "Love Story (Taylor's Version)", 4],
    ["04", "Hey Stephen (Taylor's Version)", 5],
    ["05", "White Horse (Taylor's Version)", 6],
    ["06", "You Belong With Me (Taylor's Version)", 7],
    ["07", "Breathe (Taylor's Version)", 8],
    ["08", "Tell Me Why (Taylor's Version)", 9],
    ["09", "You're Not Sorry (Taylor's Version)", 10],
    ["10", "The Way I Loved You (Taylor's Version)", 11],
    ["11", "Forever & Always (Taylor's Version)", 12],
    ["12", "The Best Day (Taylor's Version)", 13],
    ["13", "Change (Taylor's Version)", 14],
    ["14", "Jump Then Fall (Taylor's Version)", 15],
    ["15", "Untouchable (Taylor's Version)", 16],
    ["16", "Forever & Always (Piano Version) (Taylor's Version)", 17],
    ["17", "Come In With The Rain (Taylor's Version)", 18],
    ["18", "Superstar (Taylor's Version)", 19],
    ["19", "The Other Side Of The Door (Taylor's Version)", 20],
    ["20", "Today Was A Fairytale (Taylor's Version)", 21],
    ["21", "You All Over Me (Taylor's Version)", 22],
    ["22", "Mr. Perfectly Fine (Taylor's Version)", 23],
    ["23", "We Were Happy (Taylor's Version)", 24],
    ["24", "That's When (Taylor's Version)", 25],
    ["25", "Don't You (Taylor's Version)", 26],
    ["26", "Bye Bye Baby (Taylor's Version)", 27],
  ]),
  speaknow: makeEraVideos("Speak Now", "BV1mkyhYDEsL", [
    ["01", "Mine", 2],
    ["02", "Sparks Fly", 3],
    ["03", "Back To December", 4],
    ["04", "Speak Now", 5],
    ["05", "Dear John", 6],
    ["06", "Mean", 7],
    ["07", "The Story Of Us", 8],
    ["08", "Never Grow Up", 9],
    ["09", "Enchanted", 10],
    ["10", "Better Than Revenge", 11],
    ["11", "Innocent", 12],
    ["12", "Haunted", 13],
    ["13", "Last Kiss", 14],
    ["14", "Long Live", 15],
    ["15", "Ours", 16],
    ["16", "If This Was A Movie", 17],
    ["17", "Superman", 18],
    ["18", "Back To December (Acoustic)", 19],
    ["19", "Haunted (Acoustic)", 20],
    ["20", "Mine (US Version)", 21],
    ["21", "Back To December (US Version)", 22],
    ["22", "The Story Of Us (US Version)", 23],
  ]),
  red: makeEraVideos("Red TV", "BV1aS421R7UB", [
    ["01", "State Of Grace (Taylor's Version)", 2],
    ["02", "Red (Taylor's Version)", 3],
    ["03", "Treacherous (Taylor's Version)", 4],
    ["04", "I Knew You Were Trouble (Taylor's Version)", 5],
    ["05", "All Too Well (Taylor's Version)", 6],
    ["06", "22 (Taylor's Version)", 7],
    ["07", "I Almost Do (Taylor's Version)", 8],
    ["08", "We Are Never Ever Getting Back Together (Taylor's Version)", 9],
    ["09", "Stay Stay Stay (Taylor's Version)", 10],
    ["10", "The Last Time (Taylor's Version)", 11],
    ["11", "Holy Ground (Taylor's Version)", 12],
    ["12", "Sad Beautiful Tragic (Taylor's Version)", 13],
    ["13", "The Lucky One (Taylor's Version)", 14],
    ["14", "Everything Has Changed (Taylor's Version)", 15],
    ["15", "Starlight (Taylor's Version)", 16],
    ["16", "Begin Again (Taylor's Version)", 17],
    ["17", "The Moment I Knew (Taylor's Version)", 18],
    ["18", "Come Back...Be Here (Taylor's Version)", 19],
    ["19", "Girl At Home (Taylor's Version)", 20],
    ["20", "State Of Grace (Acoustic Version) (Taylor's Version)", 21],
    ["21", "Ronan (Taylor's Version)", 22],
    ["22", "Better Man (Taylor's Version)", 23],
    ["23", "Nothing New (Taylor's Version)", 24],
    ["24", "Babe (Taylor's Version)", 25],
    ["25", "Message In A Bottle (Taylor's Version)", 26],
    ["26", "I Bet You Think About Me (Taylor's Version)", 27],
    ["27", "Forever Winter (Taylor's Version)", 28],
    ["28", "Run (Taylor's Version)", 29],
    ["29", "The Very First Night (Taylor's Version)", 30],
    ["30", "All Too Well (10 Minute Version) (Taylor's Version)", 31],
  ]),
  "1989": makeEraVideos("1989", "BV1Pz421B7g5", [
    ["01", "Welcome To New York", 2],
    ["02", "Blank Space", 3],
    ["03", "Style", 4],
    ["04", "Out Of The Woods", 5],
    ["05", "All You Had To Do Was Stay", 6],
    ["06", "Shake It Off", 7],
    ["07", "I Wish You Would", 8],
    ["08", "Bad Blood", 9],
    ["09", "Wildest Dreams", 10],
    ["10", "How You Get The Girl", 11],
    ["11", "This Love", 12],
    ["12", "I Know Places", 13],
    ["13", "Clean", 14],
    ["14", "Wonderland", 15],
    ["15", "You Are In Love", 16],
    ["16", "New Romantics", 17],
    ["17", "I Know Places (Voice Memo)", 18],
    ["18", "I Wish You Would (Voice Memo)", 19],
    ["19", "Blank Space (Voice Memo)", 20],
  ]),
  reputation: makeEraVideos("Reputation", "BV1Dw4m1Y7W3", [
    ["01", "...Ready For It?", 2],
    ["02", "End Game", 3],
    ["03", "I Did Something Bad", 4],
    ["04", "Don't Blame Me", 5],
    ["05", "Delicate", 6],
    ["06", "Look What You Made Me Do", 7],
    ["07", "So It Goes...", 8],
    ["08", "Gorgeous", 9],
    ["09", "Getaway Car", 10],
    ["10", "King Of My Heart", 11],
    ["11", "Dancing With Our Hands Tied", 12],
    ["12", "Dress", 13],
    ["13", "This Is Why We Can't Have Nice Things", 14],
    ["14", "Call It What You Want", 15],
    ["15", "New Year's Day", 16],
  ]),
  lover: makeEraVideos("Lover", "BV1sE421N744", [
    ["01", "I Forgot That You Existed", 2],
    ["02", "Cruel Summer", 3],
    ["03", "Lover", 4],
    ["04", "The Man", 5],
    ["05", "The Archer", 6],
    ["06", "I Think He Knows", 7],
    ["07", "Miss Americana & The Heartbreak Prince", 8],
    ["08", "Paper Rings", 9],
    ["09", "Cornelia Street", 10],
    ["10", "Death By A Thousand Cuts", 11],
    ["11", "London Boy", 12],
    ["12", "Soon You'll Get Better", 13],
    ["13", "False God", 14],
    ["14", "You Need To Calm Down", 15],
    ["15", "Afterglow", 16],
    ["16", "ME!", 17],
    ["17", "It's Nice To Have A Friend", 18],
    ["18", "Daylight", 19],
  ]),
  folklore: makeEraVideos("Folklore", "BV1ei421e7R5", [
    ["01", "the 1", 2],
    ["02", "cardigan", 3],
    ["03", "the last great american dynasty", 4],
    ["04", "exile", 5],
    ["05", "my tears ricochet", 6],
    ["06", "mirrorball", 7],
    ["07", "seven", 8],
    ["08", "august", 9],
    ["09", "this is me trying", 10],
    ["10", "illicit affairs", 11],
    ["11", "invisible string", 12],
    ["12", "mad woman", 13],
    ["13", "epiphany", 14],
    ["14", "betty", 15],
    ["15", "peace", 16],
    ["16", "hoax", 17],
    ["17", "the lakes", 18],
  ]),
  evermore: makeEraVideos("Evermore", "BV1kM4m1r7rL", [
    ["01", "willow", 2],
    ["02", "champagne problems", 4],
    ["03", "gold rush", 6],
    ["04", "'tis the damn season", 8],
    ["05", "tolerate it", 10],
    ["06", "no body, no crime", 12],
    ["07", "happiness", 14],
    ["08", "dorothea", 16],
    ["09", "coney island", 18],
    ["10", "ivy", 20],
    ["11", "cowboy like me", 22],
    ["12", "long story short", 24],
    ["13", "marjorie", 26],
    ["14", "closure", 28],
    ["15", "evermore", 30],
    ["16", "right where you left me", 32],
    ["17", "it's time to go", 34],
  ]),
  midnights: makeEraVideos("Midnights", "BV1Hr421F7HZ", [
    ["01", "Lavender Haze", 2],
    ["02", "Maroon", 3],
    ["03", "Anti-Hero", 4],
    ["04", "Snow On The Beach", 5],
    ["05", "You're On Your Own, Kid", 6],
    ["06", "Midnight Rain", 7],
    ["07", "Question...?", 8],
    ["08", "Vigilante Shit", 9],
    ["09", "Bejeweled", 10],
    ["10", "Labyrinth", 11],
    ["11", "Karma", 12],
    ["12", "Sweet Nothing", 13],
    ["13", "Mastermind", 14],
    ["14", "The Great War", 15],
    ["15", "Bigger Than The Whole Sky", 16],
    ["16", "Paris", 17],
    ["17", "High Infidelity", 18],
    ["18", "Glitch", 19],
    ["19", "Would've, Could've, Should've", 20],
    ["20", "Dear Reader", 21],
    ["21", "Hits Different", 22],
    ["22", "Snow On The Beach (feat. More Lana Del Rey)", 23],
    ["23", "Karma (feat. Ice Spice)", 24],
  ]),
  ttpd: makeEraVideos("TTPD", "BV15C41137Gq", [
    ["01", "Fortnight", 2],
    ["02", "The Tortured Poets Department", 3],
    ["03", "My Boy Only Breaks His Favorite Toys", 4],
    ["04", "Down Bad", 5],
    ["05", "So Long, London", 6],
    ["06", "But Daddy I Love Him", 7],
    ["07", "Fresh Out The Slammer", 8],
    ["08", "Florida!!!", 9],
    ["09", "Guilty As Sin?", 10],
    ["10", "Who's Afraid Of Little Old Me?", 11],
    ["11", "I Can Fix Him (No Really I Can)", 12],
    ["12", "loml", 13],
    ["13", "I Can Do It With a Broken Heart", 14],
    ["14", "The Smallest Man Who Ever Lived", 15],
    ["15", "The Alchemy", 16],
    ["16", "Clara Bow", 17],
    ["17", "The Black Dog", 18],
    ["18", "imgonnagetyouback", 19],
    ["19", "The Albatross", 20],
    ["20", "Chloe or Sam or Sophia or Marcus", 21],
    ["21", "How Did It End?", 22],
    ["22", "So High School", 23],
    ["23", "I Hate It Here", 24],
    ["24", "thanK you aIMee", 25],
    ["25", "I Look in People's Windows", 26],
    ["26", "The Prophecy", 27],
    ["27", "Cassandra", 28],
    ["28", "Peter", 29],
    ["29", "The Bolter", 30],
    ["30", "Robin", 31],
    ["31", "The Manuscript", 32],
  ]),
  showgirl: makeEraVideos("Showgirl", "BV1f2H3zKERR", [
    ["01", "The Fate of Ophelia", 139],
    ["02", "Elizabeth Taylor", 143],
    ["03", "Opalite", 141],
    ["04", "Father Figure", 140],
    ["05", "Eldest Daughter", 147],
    ["06", "Ruin The Friendship", 146],
    ["07", "Actually Romantic", 148],
    ["08", "Wi$h Li$t", 145],
    ["09", "Wood", 144],
    ["10", "CANCELLED!", 142],
    ["11", "Honey", 1, "BV1Tfxnz9Eby"],
    ["12", "The Life of a Showgirl", 138],
  ]),
};

const eraStickerConfigs = {
  debut: {
    mode: "fall",
    colors: ["#f6d88f", "#7b9a73", "#fff8e8"],
    stickers: ["guitar", "boot", "butterfly", "star"],
  },
  fearless: {
    mode: "twinkle",
    colors: ["#ffe18a", "#f3c96a", "#fff4c7"],
    stickers: ["star", "heart", "sparkle", "guitar"],
  },
  speaknow: {
    mode: "fall",
    colors: ["#b58ad7", "#f2dcff", "#6f4a91"],
    stickers: ["star", "castle", "skirt", "mic", "sparkle"],
  },
  red: {
    mode: "fall",
    colors: ["#b9232f", "#e9745f", "#f4b36d"],
    stickers: ["scarf", "leaf", "heart", "camera"],
  },
  "1989": {
    mode: "drift",
    colors: ["#8cc5df", "#273d5f", "#f5efe4"],
    stickers: ["polaroid", "seagull", "sunglasses", "city"],
  },
  reputation: {
    mode: "drift",
    colors: ["#15151a", "#77737f", "#d8d2c9"],
    stickers: ["snake", "newspaper", "lightning", "chain"],
  },
  lover: {
    mode: "float",
    colors: ["#f5a7bd", "#a9c6ef", "#fff0cc"],
    stickers: ["heart", "butterfly", "cloud", "rainbow", "rose"],
  },
  folklore: {
    mode: "drift",
    colors: ["#d9d7ce", "#8f9691", "#f7f4ec"],
    stickers: ["tree", "cabin", "mist", "cardigan", "film"],
  },
  evermore: {
    mode: "fall",
    colors: ["#9b5e3f", "#d8b77f", "#2d4739"],
    stickers: ["willow", "ivy", "champagne", "leaf"],
  },
  midnights: {
    mode: "twinkle",
    colors: ["#c9b7e8", "#f0d08a", "#5a6aa0"],
    stickers: ["moon", "star", "clock", "lavender", "gem"],
  },
  ttpd: {
    mode: "fall",
    colors: ["#f2eee7", "#b8afa5", "#2d2a28"],
    stickers: ["paper", "quill", "typewriter", "sparkle"],
  },
  showgirl: {
    mode: "fall",
    colors: ["#1f7f86", "#f6a640", "#fff4de"],
    stickers: ["curtain", "spotlight", "feather", "gem", "theater"],
  },
};

function renderQuestion() {
  const isTextStep = state.step === questions.length;
  const total = questions.length + 1;
  setAiGenerating(false);
  stepLabel.textContent = `${String(state.step + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  stepName.textContent = isTextStep ? "最近状态" : questions[state.step].name;
  progressFill.style.width = `${((state.step + 1) / total) * 100}%`;
  prevBtn.style.visibility = state.step === 0 ? "hidden" : "visible";
  nextBtn.textContent = isTextStep ? "照进我的 Era" : "下一题";

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

function setAiGenerating(isGenerating) {
  state.isGenerating = isGenerating;
  quizForm.classList.toggle("is-generating", isGenerating);
  quizForm.setAttribute("aria-busy", String(isGenerating));
  aiLoading.classList.toggle("hidden", !isGenerating);
  prevBtn.disabled = isGenerating;
  nextBtn.disabled = isGenerating;
  nextBtn.classList.toggle("is-loading", isGenerating);

  if (isGenerating) {
    nextBtn.innerHTML = `<span class="button-spinner" aria-hidden="true"></span><span>AI 正在生成，请稍等几秒...</span>`;
    document.querySelector("#stateText")?.setAttribute("disabled", "");
    return;
  }

  nextBtn.classList.remove("is-loading");
  nextBtn.textContent = state.step === questions.length ? "照进我的 Era" : "下一题";
  document.querySelector("#stateText")?.removeAttribute("disabled");
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

  if (["说出口", "表达", "紫色", "城堡", "speak"].some((signal) => note.includes(signal))) {
    scores.speaknow += 2;
  }

  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return {
    id: ranked[0][0],
    confidence: Math.min(96, 64 + ranked[0][1] * 4),
    scores,
  };
}

function setEraTheme(era) {
  document.documentElement.style.setProperty("--era-a", era.palette[0]);
  document.documentElement.style.setProperty("--era-b", era.palette[1]);
  document.documentElement.style.setProperty("--era-c", era.palette[2]);
  document.documentElement.style.setProperty("--era-ink", era.ink);
}

async function renderResult() {
  const localResult = scoreEra();
  const aiResult = await requestAiEraResult(localResult);
  const result = aiResult || localResult;
  const baseEra = eras[result.id] || eras[localResult.id];
  const era = mergeEraResult(baseEra, result);
  state.currentEra = { id: result.id, ...era, confidence: result.confidence };
  setEraTheme(era);
  clearEraStickers();

  document.querySelector("#eraTitle").textContent = era.title;
  document.querySelector("#scoreLine").textContent = `${era.zh} · mirror match ${result.confidence}%`;
  document.querySelector("#resultCopy").textContent = era.copy;
  document.querySelector("#adviceTitle").textContent = era.adviceTitle;
  renderAdviceCopy(era);
  renderSongAdvice(result.id, era);
  renderResultEraPhoto(result.id, era.title);

  document.querySelector("#keywordRow").innerHTML = era.keywords.map((keyword) => `<span>${keyword}</span>`).join("");
  document.querySelector("#paletteRow").innerHTML = era.palette
    .map((color) => `<span style="background:${color}" title="${color}"></span>`)
    .join("");

  quizStage.classList.add("hidden");
  resultStage.classList.remove("hidden");
  roomStage.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function mergeEraResult(baseEra, result) {
  return {
    ...baseEra,
    title: result.title || baseEra.title,
    zh: result.zh || baseEra.zh,
    copy: result.copy || baseEra.copy,
    keywords: Array.isArray(result.keywords) && result.keywords.length ? result.keywords : baseEra.keywords,
    adviceTitle: result.adviceTitle || baseEra.adviceTitle,
    advice: result.advice || baseEra.advice,
    adviceItems: Array.isArray(result.adviceItems) && result.adviceItems.length ? result.adviceItems : baseEra.adviceItems,
    songTitle: result.songTitle || baseEra.songTitle,
    songReason: result.songReason || baseEra.songReason,
    originalLine: result.originalLine || baseEra.originalLine,
    easterEgg: result.easterEgg || baseEra.easterEgg,
  };
}

async function requestAiEraResult(localResult) {
  if (!AI_ENDPOINT) return null;

  try {
    const payload = {
      fallbackEra: localResult.id,
      confidence: localResult.confidence,
      scores: localResult.scores,
      note: state.answers.note || "",
      answers: questions.map((question) => ({
        id: question.id,
        name: question.name,
        title: question.title,
        answer: question.options[state.answers[question.id]]?.text || "",
      })),
      allowedEras: Object.keys(eras),
    };

    const response = await fetch(AI_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) return null;
    const data = await response.json();
    if (!data || !eras[data.id]) return null;

    return {
      id: data.id,
      confidence: Number(data.confidence) || localResult.confidence,
      title: data.title,
      zh: data.zh,
      copy: data.copy,
      keywords: data.keywords,
      adviceTitle: data.adviceTitle,
      advice: data.advice,
      adviceItems: data.adviceItems,
      songTitle: data.songTitle,
      songReason: data.songReason,
      originalLine: data.originalLine,
      easterEgg: data.easterEgg,
    };
  } catch (error) {
    return null;
  }
}

function renderAdviceCopy(era) {
  const adviceCopy = document.querySelector("#adviceCopy");
  if (Array.isArray(era.adviceItems) && era.adviceItems.length) {
    adviceCopy.innerHTML = `<ol class="advice-list">${era.adviceItems
      .slice(0, 3)
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("")}</ol>`;
    return;
  }

  adviceCopy.textContent = era.advice;
}

function renderSongAdvice(eraId, era = {}) {
  const song = eraSongAdvice[eraId] || eraSongAdvice.debut;
  const signatureLines = [era.originalLine, era.easterEgg].filter(Boolean);
  document.querySelector("#songTitle").textContent = era.songTitle || song.title;
  document.querySelector("#songReason").textContent = era.songReason || song.reason;
  document.querySelector("#songQuote").textContent = signatureLines.length ? signatureLines.join(" ") : song.quote;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });
}

function renderEraStickers(eraId) {
  const config = eraStickerConfigs[eraId] || eraStickerConfigs.debut;
  const count = config.mode === "twinkle" ? 34 : config.mode === "drift" ? 22 : 26;
  eraStickerLayer.innerHTML = "";

  for (let index = 0; index < count; index += 1) {
    const type = config.stickers[index % config.stickers.length];
    const sticker = document.createElement("span");
    sticker.className = `era-sticker ${config.mode}`;
    sticker.style.setProperty("--x", `${Math.random() * 100}%`);
    sticker.style.setProperty("--y", `${8 + Math.random() * 78}%`);
    sticker.style.setProperty("--s", `${28 + Math.random() * 42}px`);
    sticker.style.setProperty("--d", `${5.5 + Math.random() * 7}s`);
    sticker.style.setProperty("--delay", `${Math.random() * 7}s`);
    sticker.style.setProperty("--dx", `${-90 + Math.random() * 180}px`);
    sticker.style.setProperty("--r", `${Math.random() * 360}deg`);
    sticker.style.setProperty("--sticker-color", config.colors[index % config.colors.length]);
    sticker.innerHTML = stickerSvg(type);
    eraStickerLayer.appendChild(sticker);
  }
}

function clearEraStickers() {
  eraStickerLayer.innerHTML = "";
}

function stickerSvg(type) {
  const common = 'viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"';
  const stroke = 'stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"';

  const shapes = {
    guitar: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".18" d="M24 37c-7 0-13 5-13 12 0 6 5 10 11 10 5 0 8-3 10-7 3 4 7 6 12 4 7-2 10-10 6-16-3-5-9-7-14-4l-5-5 7-7 5 5 15-15-8-8-15 15 5 5-7 7-5-5c2-5 0-10-5-13-6-4-14-1-16 6-2 5 0 10 4 13 2 2 5 3 8 3Z"/><circle cx="33" cy="42" r="6" fill="currentColor"/></svg>`,
    boot: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".2" d="M20 7h18l3 31 16 8v8H21c-7 0-12-4-12-10 0-5 4-9 11-9V7Z"/><path ${stroke} d="M20 35h21"/></svg>`,
    butterfly: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".18" d="M31 31C21 9 5 11 7 27c2 12 15 11 24 4ZM33 31c10-22 26-20 24-4-2 12-15 11-24 4ZM31 34c-9 4-18 9-14 18 4 10 16 4 15-14M33 34c9 4 18 9 14 18-4 10-16 4-15-14"/><path ${stroke} d="M32 28v28"/></svg>`,
    star: `<svg ${common}><path fill="currentColor" d="m32 5 7 19 20 1-16 12 5 20-16-12-17 12 6-20L5 25l20-1 7-19Z"/></svg>`,
    heart: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".22" d="M32 55S8 41 8 22c0-8 6-14 14-14 5 0 9 3 10 7 1-4 5-7 10-7 8 0 14 6 14 14 0 19-24 33-24 33Z"/></svg>`,
    sparkle: `<svg ${common}><path fill="currentColor" d="m32 2 6 22 22 8-22 8-6 22-6-22-22-8 22-8 6-22Z"/></svg>`,
    castle: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".18" d="M10 56V24l8 5 8-5 8 5 8-5 8 5 4-3v30H10Z"/><path ${stroke} d="M18 56V39h12v17M8 24V10l5 4 5-4v19M46 29V10l5 4 5-4v46"/></svg>`,
    skirt: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".2" d="M25 10h14l3 13 12 33H10l12-33 3-13Z"/><path ${stroke} d="M22 24h20M32 24v30"/></svg>`,
    mic: `<svg ${common}><rect x="22" y="5" width="20" height="34" rx="10" ${stroke} fill="currentColor" fill-opacity=".18"/><path ${stroke} d="M14 28c0 10 8 18 18 18s18-8 18-18M32 46v12M22 58h20"/></svg>`,
    scarf: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".2" d="M16 10h19c8 0 13 5 13 12s-5 12-13 12H23v20l-7-5-7 5V17c0-4 3-7 7-7Z"/><path ${stroke} d="M24 10v24M16 44h14"/></svg>`,
    leaf: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".24" d="M52 8C31 9 13 21 12 42c0 8 6 14 14 14 21-1 30-26 26-48Z"/><path ${stroke} d="M14 52C25 35 36 24 52 8M25 39l-10-2M34 30l-2-11M41 23l8 2"/></svg>`,
    camera: `<svg ${common}><rect x="8" y="18" width="48" height="34" rx="6" ${stroke} fill="currentColor" fill-opacity=".18"/><path ${stroke} d="M20 18l4-7h16l4 7"/><circle cx="32" cy="35" r="9" ${stroke}/></svg>`,
    polaroid: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".16" d="M12 6h40v52H12z"/><path ${stroke} d="M18 12h28v29H18zM22 50h20"/></svg>`,
    seagull: `<svg ${common}><path ${stroke} d="M4 35c10-13 20-13 28 0 8-13 18-13 28 0"/></svg>`,
    sunglasses: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".22" d="M7 24h20l-3 18H11L7 24Zm30 0h20l-4 18H40l-3-18Z"/><path ${stroke} d="M27 28c4-3 6-3 10 0"/></svg>`,
    city: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".18" d="M8 56V26h11v30M19 56V12h13v44M32 56V30h10v26M42 56V18h14v38"/><path ${stroke} d="M6 56h52"/></svg>`,
    snake: `<svg ${common}><path ${stroke} d="M49 12c-14-4-27 2-26 12 1 9 16 7 17 16 1 8-10 12-24 8"/><path fill="currentColor" d="m48 10 10 5-9 6-3-6 2-5Z"/></svg>`,
    newspaper: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".12" d="M10 12h44v40H10z"/><path ${stroke} d="M18 22h16M18 30h28M18 38h28M39 20h8v8h-8z"/></svg>`,
    lightning: `<svg ${common}><path fill="currentColor" d="M37 3 11 36h18l-4 25 28-36H35l2-22Z"/></svg>`,
    chain: `<svg ${common}><path ${stroke} d="M26 22 20 16a10 10 0 0 0-14 14l8 8a10 10 0 0 0 14 0l2-2M38 42l6 6a10 10 0 0 0 14-14l-8-8a10 10 0 0 0-14 0l-2 2M24 40l16-16"/></svg>`,
    cloud: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".18" d="M18 49h30c7 0 12-5 12-11s-5-11-12-11h-1C45 18 38 12 29 14c-7 1-12 7-13 14-7 1-12 5-12 11 0 5 5 10 14 10Z"/></svg>`,
    rainbow: `<svg ${common}><path ${stroke} d="M8 50c0-14 11-25 24-25s24 11 24 25"/><path ${stroke} d="M18 50c0-8 6-15 14-15s14 7 14 15"/><path ${stroke} d="M28 50c0-3 2-5 4-5s4 2 4 5"/></svg>`,
    rose: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".2" d="M32 28c-9 0-15-5-15-11 0-5 4-9 9-9 3 0 5 1 6 4 1-3 4-4 7-4 5 0 8 4 8 9 0 6-6 11-15 11Z"/><path ${stroke} d="M32 28v29M32 43c-9-8-18-4-20 4 8 3 15 1 20-4Zm0 5c8-8 16-6 20 1-7 4-14 3-20-1Z"/></svg>`,
    tree: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".18" d="M32 6 12 34h11L10 52h44L41 34h11L32 6Z"/><path ${stroke} d="M32 50v9"/></svg>`,
    cabin: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".18" d="M8 31 32 12l24 19v27H8V31Z"/><path ${stroke} d="M24 58V41h16v17M18 33h8M38 33h8"/></svg>`,
    mist: `<svg ${common}><path ${stroke} d="M7 22h36M18 32h39M8 42h48"/></svg>`,
    cardigan: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".16" d="M22 8h20l12 12-8 10-5-5v31H23V25l-5 5-8-10L22 8Z"/><path ${stroke} d="M32 10v46M27 30h10"/></svg>`,
    film: `<svg ${common}><rect x="8" y="16" width="48" height="32" rx="3" ${stroke} fill="currentColor" fill-opacity=".16"/><path ${stroke} d="M18 16v32M46 16v32M8 26h10M46 26h10M8 38h10M46 38h10"/></svg>`,
    willow: `<svg ${common}><path ${stroke} d="M32 8v48M32 16c-14 0-22 10-22 22M32 20c13 1 20 10 20 23M32 27c-8 3-12 10-13 19M32 29c8 3 12 9 13 18"/></svg>`,
    ivy: `<svg ${common}><path ${stroke} d="M14 55C28 38 36 23 48 8"/><path ${stroke} fill="currentColor" fill-opacity=".18" d="M24 37c-9-7-18-4-19 7 10 4 16 0 19-7Zm13-15c-8-8-4-17 7-18 4 10 1 16-7 18Zm-2 20c9-6 18-2 18 9-10 3-16-1-18-9Z"/></svg>`,
    champagne: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".16" d="M20 8h24v10c0 9-5 16-12 16s-12-7-12-16V8Z"/><path ${stroke} d="M32 34v18M22 56h20M22 20h20"/></svg>`,
    moon: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".22" d="M44 8C33 12 26 22 26 33s7 20 18 23C27 60 10 47 10 32S27 4 44 8Z"/></svg>`,
    clock: `<svg ${common}><circle cx="32" cy="32" r="24" ${stroke} fill="currentColor" fill-opacity=".14"/><path ${stroke} d="M32 18v16l11 7"/></svg>`,
    lavender: `<svg ${common}><path ${stroke} d="M33 58V8"/><path fill="currentColor" d="M25 12c0-4 3-7 7-7s7 3 7 7-3 7-7 7-7-3-7-7Zm-2 16c0-4 3-7 7-7s7 3 7 7-3 7-7 7-7-3-7-7Zm4 16c0-4 3-7 7-7s7 3 7 7-3 7-7 7-7-3-7-7Z"/></svg>`,
    gem: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".18" d="M16 10h32l10 16-26 30L6 26l10-16Z"/><path ${stroke} d="M6 26h52M22 10l-6 16 16 30 16-30-6-16"/></svg>`,
    paper: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".12" d="M16 6h24l10 10v42H16V6Z"/><path ${stroke} d="M40 6v12h10M23 28h18M23 38h18M23 48h10"/></svg>`,
    quill: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".18" d="M53 6C29 8 14 21 12 45c18-3 34-17 41-39Z"/><path ${stroke} d="M12 45 5 59M20 39 48 11"/></svg>`,
    typewriter: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".14" d="M16 8h32v18H16zM8 28h48v28H8z"/><path ${stroke} d="M18 38h28M18 47h28"/></svg>`,
    curtain: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".2" d="M8 7h48v50c-8-8-16-8-24 0-8-8-16-8-24 0V7Z"/><path ${stroke} d="M20 8v45M32 8v47M44 8v45"/></svg>`,
    spotlight: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".18" d="M24 6h16l18 52H6L24 6Z"/><circle cx="32" cy="14" r="7" fill="currentColor"/></svg>`,
    feather: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".16" d="M54 6C30 8 12 23 10 54c24-4 40-22 44-48Z"/><path ${stroke} d="M10 54 48 13M25 39h-9M34 30h-9M42 21h-8"/></svg>`,
    theater: `<svg ${common}><path ${stroke} fill="currentColor" fill-opacity=".16" d="M10 16c13-7 31-7 44 0v16c0 14-9 25-22 25S10 46 10 32V16Z"/><path ${stroke} d="M21 28h.1M43 28h.1M23 42c6 5 12 5 18 0"/></svg>`,
  };

  return shapes[type] || shapes.sparkle;
}

function renderResultEraPhoto(eraId, title) {
  const src = eraImageSources[eraId];
  resultEraPhotoWrap.classList.add("hidden");
  resultEraPhotoWrap.className = "result-era-photo hidden";
  resultEraPhotoWrap.querySelector(".era-effect-layer")?.remove();
  resultEraPhoto.removeAttribute("src");

  if (!src) return;

  resultEraPhoto.alt = `${title} image`;
  resultEraPhoto.onload = () => {
    resultEraPhotoWrap.classList.add("has-photo", `effect-${eraId}`);
    resultEraPhotoWrap.appendChild(createEraEffectLayer(eraId, resultEffectCounts[eraId] || 14));
    resultEraPhotoWrap.classList.remove("hidden");
  };
  resultEraPhoto.onerror = () => {
    resultEraPhotoWrap.classList.add("hidden");
    resultEraPhoto.removeAttribute("src");
  };
  resultEraPhoto.src = src;
}

function createEraEffectLayer(eraId, count) {
  const layer = document.createElement("div");
  layer.className = "era-effect-layer";
  layer.setAttribute("aria-hidden", "true");

  for (let index = 0; index < count; index += 1) {
    const item = document.createElement("span");
    item.style.setProperty("--x", `${Math.random() * 100}%`);
    item.style.setProperty("--delay", `${Math.random() * 4.5}s`);
    item.style.setProperty("--dur", `${4 + Math.random() * 5}s`);
    item.style.setProperty("--size", `${8 + Math.random() * 18}px`);
    item.style.setProperty("--drift", `${-40 + Math.random() * 80}px`);
    item.style.setProperty("--rot", `${Math.random() * 360}deg`);
    layer.appendChild(item);
  }

  return layer;
}

async function drawShareCard() {
  await renderShareCard({ includePhoto: true });
}

async function renderShareCard({ includePhoto }) {
  const canvas = document.querySelector("#shareCanvas");
  const image = document.querySelector("#shareImage");
  canvas.width = canvas.width;
  const ctx = canvas.getContext("2d");
  const era = state.currentEra;
  const eraPhoto = includePhoto ? await loadEraImage(era.id) : null;
  const gradient = ctx.createLinearGradient(0, 0, 1200, 1600);
  gradient.addColorStop(0, era.palette[2]);
  gradient.addColorStop(0.45, era.palette[0]);
  gradient.addColorStop(1, era.palette[1]);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 1600);

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

  if (eraPhoto) {
    ctx.save();
    roundRect(ctx, 800, 170, 252, 356, 20);
    ctx.clip();
    drawCoverImage(ctx, eraPhoto, 800, 170, 252, 356);
    ctx.restore();
    ctx.strokeStyle = "rgba(29, 24, 32, 0.14)";
    ctx.lineWidth = 4;
    roundRect(ctx, 800, 170, 252, 356, 20);
    ctx.stroke();
  }

  const titleLayout = drawFittedWrappedText(ctx, era.title, 140, 395, {
    maxWidth: eraPhoto ? 610 : 880,
    maxFontSize: 120,
    minFontSize: 74,
    maxLines: 4,
    lineHeightRatio: 1.02,
    fontWeight: 700,
    fontFamily: "Georgia, serif",
  });
  const scoreY = eraPhoto ? Math.max(titleLayout.bottom + 44, 625) : titleLayout.bottom + 44;

  ctx.font = "800 34px Inter, sans-serif";
  ctx.fillText(`${era.zh} · mirror match ${era.confidence}%`, 140, scoreY);

  ctx.font = "500 38px Inter, sans-serif";
  wrapText(ctx, era.copy, 140, scoreY + 130, 900, 62);

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

  try {
    image.src = canvas.toDataURL("image/png");
    shareModal.classList.remove("hidden");
  } catch (error) {
    if (includePhoto) {
      await renderShareCard({ includePhoto: false });
      return;
    }
    throw error;
  }
}

function loadEraImage(eraId) {
  const src = eraImageSources[eraId];
  if (!src) return Promise.resolve(null);

  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function drawCoverImage(ctx, img, x, y, width, height) {
  const scale = Math.max(width / img.width, height / img.height);
  const drawWidth = img.width * scale;
  const drawHeight = img.height * scale;
  const drawX = x + (width - drawWidth) / 2;
  const drawY = y + (height - drawHeight) / 2;
  ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
}

function closeShareModal() {
  shareModal.classList.add("hidden");
}

function downloadShareCard() {
  const canvas = document.querySelector("#shareCanvas");
  const link = document.createElement("a");
  link.download = `taylor-era-mirror-${state.currentEra.id}.png`;
  try {
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (error) {
    drawShareCard();
  }
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
  const lines = getWrappedLines(ctx, text, maxWidth);
  lines.forEach((line, index) => {
    ctx.fillText(line, x, y + index * lineHeight);
  });
}

function drawFittedWrappedText(ctx, text, x, y, options) {
  const {
    maxWidth,
    maxFontSize,
    minFontSize,
    maxLines,
    lineHeightRatio,
    fontWeight,
    fontFamily,
  } = options;
  let fontSize = maxFontSize;
  let lines = [];

  while (fontSize >= minFontSize) {
    ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    lines = getWrappedLines(ctx, text, maxWidth);
    const fitsWidth = lines.every((line) => ctx.measureText(line).width <= maxWidth);
    if (fitsWidth && lines.length <= maxLines) break;
    fontSize -= 2;
  }

  ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
  lines = getWrappedLines(ctx, text, maxWidth).slice(0, maxLines);
  const lineHeight = Math.round(fontSize * lineHeightRatio);
  lines.forEach((line, index) => {
    ctx.fillText(line, x, y + index * lineHeight);
  });

  return {
    bottom: y + Math.max(0, lines.length - 1) * lineHeight,
    fontSize,
    lineCount: lines.length,
  };
}

function getWrappedLines(ctx, text, maxWidth) {
  const tokens = tokenizeForWrap(text);
  let line = "";
  const lines = [];

  tokens.forEach((token) => {
    const testLine = line + token;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = token.trimStart();
    } else {
      line = testLine;
    }
  });

  if (line) {
    lines.push(line);
  }

  return lines;
}

function tokenizeForWrap(text) {
  return Array.from(text.matchAll(/[A-Za-z0-9]+(?:['-][A-Za-z0-9]+)*|[^\S\r\n]+|[\u4e00-\u9fff]|./gu), (match) => match[0]);
}

function openRoom() {
  const era = state.currentEra;
  setEraTheme(era);
  document.querySelector("#roomTitle").textContent = era.title;
  document.querySelector("#roomEra").textContent = era.title;
  renderEraVideos(era.id);
  resultStage.classList.add("hidden");
  roomStage.classList.remove("hidden");
}

function renderEraVideos(eraId) {
  const videos = eraVideoLibrary[eraId] || eraVideoLibrary.debut;
  const initialVideoIndex = Math.max(0, videos.findIndex((video) => video.bvid));
  eraVideoChoices.innerHTML = videos
    .map(
      (video, index) => `
        <button class="era-video-choice${index === initialVideoIndex ? " active" : ""}" type="button" data-video-index="${index}">
          <span>${escapeHtml(video.track || String(index + 1).padStart(2, "0"))} · ${escapeHtml(video.kind)}</span>
          <strong>${escapeHtml(video.title)}</strong>
        </button>
      `,
    )
    .join("");

  eraVideoChoices.querySelectorAll(".era-video-choice").forEach((button) => {
    button.addEventListener("click", () => {
      const videoIndex = Number(button.dataset.videoIndex);
      setEraVideo(videos[videoIndex] || videos[0]);
      eraVideoChoices.querySelectorAll(".era-video-choice").forEach((choice) => choice.classList.remove("active"));
      button.classList.add("active");
    });
  });

  setEraVideo(videos[initialVideoIndex]);
}

function setEraVideo(video) {
  const sourceUrl = getBilibiliSourceUrl(video);
  eraVideoDescription.textContent = `${video.track || "播放"} · ${video.kind} · ${video.title}`;
  eraVideoSourceLink.href = sourceUrl;

  if (video.bvid) {
    eraVideoFrame.classList.remove("hidden");
    eraVideoFallback.classList.add("hidden");
    eraVideoFrame.src = getBilibiliEmbedUrl(video);
    return;
  }

  eraVideoFrame.classList.add("hidden");
  eraVideoFallback.classList.remove("hidden");
  eraVideoFrame.removeAttribute("src");
}

function getBilibiliEmbedUrl(video) {
  const params = new URLSearchParams({
    bvid: video.bvid,
    page: String(video.page || 1),
    p: String(video.page || 1),
    high_quality: "1",
    danmaku: "0",
    autoplay: "1",
    as_wide: "1",
  });

  return `https://player.bilibili.com/player.html?${params.toString()}`;
}

function getBilibiliSourceUrl(video) {
  if (video.url) return video.url;
  const params = new URLSearchParams({ p: String(video.page || 1) });
  return `https://www.bilibili.com/video/${video.bvid}/?${params.toString()}`;
}

prevBtn.addEventListener("click", () => {
  state.step = Math.max(0, state.step - 1);
  renderQuestion();
});

nextBtn.addEventListener("click", async () => {
  if (state.isGenerating) return;

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
    setAiGenerating(true);
    try {
      await renderResult();
    } finally {
      setAiGenerating(false);
    }
    return;
  }

  state.step += 1;
  renderQuestion();
});

roomBtn.addEventListener("click", openRoom);
cardBtn.addEventListener("click", drawShareCard);
restartBtn.addEventListener("click", () => {
  questions = buildQuestionSet();
  state.step = 0;
  state.answers = {};
  state.currentEra = null;
  state.isGenerating = false;
  resultStage.classList.add("hidden");
  roomStage.classList.add("hidden");
  quizStage.classList.remove("hidden");
  closeShareModal();
  renderQuestion();
});
backResultBtn.addEventListener("click", () => {
  roomStage.classList.add("hidden");
  resultStage.classList.remove("hidden");
});
shareBackdrop.addEventListener("click", closeShareModal);
closeShareBtn.addEventListener("click", closeShareModal);
downloadCardBtn.addEventListener("click", downloadShareCard);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !shareModal.classList.contains("hidden")) {
    closeShareModal();
  }
});

renderQuestion();
