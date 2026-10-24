/* =========================================================
   江南大学本科生模拟器 · 基础数据
   学院 / 性格 / 生源地 / 课程 / 成就 / 结局
   ========================================================= */

const JNU = (() => {
  const colleges = [
    {
      id: "food",
      name: "食品学院",
      short: "食品",
      major: "食品科学与工程",
      desc: "民以食为天，我们研究天。实验室里的酸奶，比外面卖的更酸。",
      motto: "把一日三餐，做成一生事业。",
      bonusText: "学识 +6 · 精力 -4",
      stats: { knowledge: 6, energy: -4 },
      studyBonus: 0.04,
      courses: ["食品化学", "食品微生物学", "食品工程原理", "食品营养学", "食品分析", "食品安全学"],
      color: "#c07a2c"
    },
    {
      id: "bio",
      name: "生物工程学院",
      short: "生工",
      major: "生物工程",
      desc: "发酵一切，包括你的青春。啤酒、酱油和毕业论文，都要等时间。",
      motto: "一生二，二生三，三生发酵罐。",
      bonusText: "学识 +5 · 心情 -3",
      stats: { knowledge: 5, mood: -3 },
      studyBonus: 0.05,
      courses: ["生物化学", "微生物学", "发酵工程", "化工原理", "基因工程", "啤酒工艺学"],
      color: "#3e6b5a"
    },
    {
      id: "design",
      name: "设计学院",
      short: "设计",
      major: "工业设计",
      desc: "凌晨三点的图，也是图。你会在打印机前，第一次理解什么叫“再改一版”。",
      motto: "让好看的东西，也能好用。",
      bonusText: "心情 +6 · 社交 +4 · 精力 -4",
      stats: { mood: 6, social: 4, energy: -4 },
      studyBonus: 0.02,
      courses: ["设计素描", "构成基础", "产品设计", "人机工程学", "设计史", "材料与工艺"],
      color: "#8a5a9e"
    },
    {
      id: "textile",
      name: "纺织科学与工程学院",
      short: "纺织",
      major: "纺织工程",
      desc: "从一根纱线，到一场秀。你摸过的面料，可能比摸过的手还多。",
      motto: "经纬之间，自有天地。",
      bonusText: "社交 +5 · 学识 +2",
      stats: { social: 5, knowledge: 2 },
      studyBonus: 0.03,
      courses: ["纺织材料学", "纺纱学", "织造学", "染整工艺", "服装设计", "纺织品贸易"],
      color: "#a05a72"
    },
    {
      id: "iot",
      name: "自动化与智能科学学院",
      short: "物联网",
      major: "物联网工程",
      desc: "万物互联，除了你和早八。焊板子的松香味，是工科生的香水。",
      motto: "让每个物件，都学会说话。",
      bonusText: "学识 +4 · 存款 +200",
      stats: { knowledge: 4, money: 200 },
      studyBonus: 0.04,
      courses: ["电路", "信号与系统", "嵌入式系统", "传感器技术", "自动控制原理", "物联网通信"],
      color: "#2f6f8f"
    },
    {
      id: "cs",
      name: "人工智能与计算机学院",
      short: "计算机",
      major: "计算机科学与技术",
      desc: "代码改变世界，bug 改变你。你会学会在凌晨两点，和一行报错对视。",
      motto: "先跑通，再优雅。",
      bonusText: "学识 +6 · 精力 -3",
      stats: { knowledge: 6, energy: -3 },
      studyBonus: 0.05,
      courses: ["数据结构", "操作系统", "计算机网络", "机器学习", "数据库原理", "程序设计"],
      color: "#31559e"
    },
    {
      id: "business",
      name: "商学院",
      short: "商院",
      major: "工商管理",
      desc: "PPT 是生产力，实习是硬通货。你会在小组作业里，第一次见识人间百态。",
      motto: "把复杂的世界，讲成一个模型。",
      bonusText: "社交 +8 · 存款 +500",
      stats: { social: 8, money: 500 },
      studyBonus: 0.02,
      courses: ["管理学", "微观经济学", "会计学", "市场营销", "财务管理", "统计学"],
      color: "#9a6b2f"
    },
    {
      id: "humanities",
      name: "人文学院",
      short: "人文",
      major: "汉语言文学",
      desc: "在蠡湖边读诗，在现实里找路。你会在图书馆的旧书页里，闻到时间的味道。",
      motto: "文章合为时而著。",
      bonusText: "心情 +8 · 社交 +2 · 学识 +2",
      stats: { mood: 8, social: 2, knowledge: 2 },
      studyBonus: 0.03,
      courses: ["中国古代文学", "现代汉语", "文学理论", "基础写作", "中国文化史", "美学原理"],
      color: "#7a6a4f"
    }
  ];

  const traits = [
    {
      id: "grinder",
      name: "卷王",
      desc: "绩点是唯一的信仰，图书馆是你的第二宿舍。",
      bonusText: "学习收益 +18% · 心情 -6 · 精力 -4",
      stats: { mood: -6, energy: -4 },
      studyBonus: 0.18
    },
    {
      id: "social",
      name: "社牛",
      desc: "整个江大都是你的朋友，包括食堂阿姨和宿管大叔。",
      bonusText: "社交 +12 · 心情 +4",
      stats: { social: 12, mood: 4 },
      studyBonus: 0
    },
    {
      id: "arty",
      name: "文艺青年",
      desc: "在曲水桥上看晚霞，在长广溪边写没人看的诗。",
      bonusText: "心情 +10 · 存款 -200",
      stats: { mood: 10, money: -200 },
      studyBonus: 0.02
    },
    {
      id: "chill",
      name: "佛系选手",
      desc: "及格万岁，快乐第一。天塌下来，先睡个午觉。",
      bonusText: "精力 +10 · 心情 +8 · 学习收益 -12%",
      stats: { energy: 10, mood: 8 },
      studyBonus: -0.12
    },
    {
      id: "allround",
      name: "六边形战士",
      desc: "什么都沾一点，什么都不精。但看起来，什么都会。",
      bonusText: "全属性 +3 · 存款 -300",
      stats: { knowledge: 3, energy: 3, mood: 3, social: 3, money: -300 },
      studyBonus: 0.04
    },
    {
      id: "striver",
      name: "小镇做题家",
      desc: "从题海里游出来，终于游进了一片更大的海。",
      bonusText: "学识 +10 · 社交 -5 · 存款 -300 · 学习收益 +8%",
      stats: { knowledge: 10, social: -5, money: -300 },
      studyBonus: 0.08
    }
  ];

  const hometowns = [
    { id: "wuxi", name: "江苏 · 无锡", allowance: 6000, money: 300, desc: "家门口上大学，周末被妈妈叫回家吃饭。" },
    { id: "nanjing", name: "江苏 · 南京", allowance: 6400, money: 0, desc: "从一座古都，到另一座水乡。" },
    { id: "suzhou", name: "江苏 · 苏州", allowance: 6400, money: 0, desc: "园林看惯了，来蠡湖边换换风景。" },
    { id: "hangzhou", name: "浙江 · 杭州", allowance: 6800, money: 0, desc: "西湖到太湖，只隔一张高铁票。" },
    { id: "shanghai", name: "上海", allowance: 7200, money: 100, desc: "从魔都的霓虹，来到无锡的晚风。" },
    { id: "anhui", name: "安徽 · 合肥", allowance: 6200, money: 0, desc: "带着一口皖中口音，住进江南的宿舍。" },
    { id: "shandong", name: "山东 · 济南", allowance: 6400, money: 0, desc: "从泉水边来，第一次见这么宽的湖。" },
    { id: "henan", name: "河南 · 郑州", allowance: 6200, money: 0, desc: "高考大省出来的孩子，最不怕考试。" },
    { id: "sichuan", name: "四川 · 成都", allowance: 6600, money: 0, desc: "带着火锅味的行李箱，和一颗慢慢来的心。" },
    { id: "guangdong", name: "广东 · 广州", allowance: 7000, money: 0, desc: "从早茶到太湖三白，你开始研究甜口的边界。" },
    { id: "xinjiang", name: "新疆 · 乌鲁木齐", allowance: 7600, money: 0, desc: "跨越三千公里，第一次离家这么远。" },
    { id: "xizang", name: "西藏 · 拉萨", allowance: 8000, money: 0, desc: "从高原到平原，连呼吸都变得不一样。" }
  ];

  const commonCourses = [
    "高等数学", "大学英语", "大学物理", "大学体育", "思想道德与法治",
    "军事理论", "程序设计基础", "线性代数", "概率论与数理统计", "大学化学"
  ];

  const electiveCourses = [
    "江南园林鉴赏", "锡剧艺术", "食品与文化", "恋爱心理学", "大学生职业规划",
    "陶艺基础", "摄影基础", "葡萄酒文化", "江南饮食文化", "昆曲赏析",
    "创新创业基础", "人工智能导论", "书法鉴赏", "桥牌入门"
  ];

  const semesters = [
    { name: "大一上", year: 2026, season: "秋", weeks: ["第1-4周", "第5-8周", "第9-12周", "第13-16周"] },
    { name: "大一下", year: 2027, season: "春", weeks: ["第1-4周", "第5-8周", "第9-12周", "第13-16周"] },
    { name: "大二上", year: 2027, season: "秋", weeks: ["第1-4周", "第5-8周", "第9-12周", "第13-16周"] },
    { name: "大二下", year: 2028, season: "春", weeks: ["第1-4周", "第5-8周", "第9-12周", "第13-16周"] },
    { name: "大三上", year: 2028, season: "秋", weeks: ["第1-4周", "第5-8周", "第9-12周", "第13-16周"] },
    { name: "大三下", year: 2029, season: "春", weeks: ["第1-4周", "第5-8周", "第9-12周", "第13-16周"] },
    { name: "大四上", year: 2029, season: "秋", weeks: ["第1-4周", "第5-8周", "第9-12周", "第13-16周"] },
    { name: "大四下", year: 2030, season: "春", weeks: ["第1-4周", "第5-8周", "第9-12周", "第16周"] }
  ];

  const achievements = [
    { id: "first", glyph: "启", name: "启程", desc: "做出大学里的第一个选择。" },
    { id: "military", glyph: "军", name: "军训幸存者", desc: "完整走完军训，并活着回来。" },
    { id: "club", glyph: "社", name: "百团归位", desc: "加入一个社团。" },
    { id: "cet4", glyph: "四", name: "四级通关", desc: "大学英语四级达到 425 分。" },
    { id: "cet6", glyph: "六", name: "六级通关", desc: "大学英语六级达到 425 分。" },
    { id: "fullgpa", glyph: "满", name: "满绩传说", desc: "单学期绩点达到 3.95。" },
    { id: "scholar", glyph: "奖", name: "奖学金选手", desc: "拿到一次奖学金。" },
    { id: "national", glyph: "国", name: "国奖候选人", desc: "拿到国家奖学金。" },
    { id: "research", glyph: "研", name: "实验室新人", desc: "正式进入实验室。" },
    { id: "paper", glyph: "文", name: "第一作者", desc: "发表一篇论文。" },
    { id: "competition", glyph: "竞", name: "竞赛领奖台", desc: "在省级以上竞赛中获奖。" },
    { id: "intern", glyph: "实", name: "实习达人", desc: "完成三段实习。" },
    { id: "romance", glyph: "恋", name: "脱单成功", desc: "在江大遇见那个人。" },
    { id: "breakup", glyph: "散", name: "爱过", desc: "经历一次分手。" },
    { id: "foodie", glyph: "饭", name: "干饭王", desc: "在食堂认真吃过四顿以上。" },
    { id: "library", glyph: "馆", name: "图书馆钉子户", desc: "在图书馆泡过四次以上。" },
    { id: "night", glyph: "夜", name: "熬夜冠军", desc: "熬过四次以上的夜。" },
    { id: "fitness", glyph: "跑", name: "体测合格", desc: "顺利通过体测。" },
    { id: "singer", glyph: "歌", name: "十佳歌手", desc: "站上校园十佳歌手的舞台。" },
    { id: "startup", glyph: "创", name: "创业起步", desc: "把一个小想法变成生意。" },
    { id: "rich", glyph: "财", name: "存款破万", desc: "大学期间存款达到一万元。" },
    { id: "social", glyph: "人", name: "社交达人", desc: "社交属性达到 80。" },
    { id: "knowledge", glyph: "学", name: "学识渊博", desc: "学识属性达到 90。" },
    { id: "allround", glyph: "全", name: "六边形毕业生", desc: "四项主属性均达到 65。" },
    { id: "graduate", glyph: "毕", name: "毕业快乐", desc: "走完四年，拿到毕业档案。" },
    { id: "legend", glyph: "传", name: "传说级结局", desc: "达成一个传说结局。" }
  ];

  const endings = [
    {
      id: "dropout",
      title: "退学通知书",
      rarity: "secret",
      tag: "提前离场",
      when: (s) => Boolean(s.flags.dropout),
      desc: "你没有等到毕业照。某天下午，你拖着行李箱从南门走出去，地铁一号线照常进站，校园里没人抬头。后来你偶尔会梦见曲水桥，桥上的风还是那样，带着一点湖水的腥气。",
      comment: () => "人生不是只有一条跑道。离开，有时也是一种抵达——只是这一次，你比所有人早了一点。"
    },
    {
      id: "delay",
      title: "延毕一年",
      rarity: "common",
      tag: "留级 · 未完待续",
      when: (s) => s.flags.thesisFail || s.stats.gpa < 1.9,
      desc: "答辩名单上，你的名字后面多了一个“延期”。室友们穿上学士服那天，你还在图书馆改论文。蠡湖的荷花开了又谢，你终于明白，有些路只能一个人慢慢走完。",
      comment: () => "你多了一年，也少了一年。好在，毕业证不会因为迟到而失效。"
    },
    {
      id: "academic",
      title: "学术新星",
      rarity: "legend",
      tag: "科研 · 继续深造",
      when: (s) => Boolean(s.flags.paper && s.flags.research) && s.stats.knowledge >= 75,
      desc: "你的名字出现在一篇论文的第一作者栏里，导师在组会上难得地夸了你一句。毕业那年，你决定留下来继续读研。实验室的灯还会亮到很晚，但你终于知道自己在为什么熬夜。",
      comment: () => "从“搬砖”到“做研究”，中间隔的不是天赋，是无数个想放弃又没放弃的夜晚。"
    },
    {
      id: "top_grad",
      title: "未名湖的下一站",
      rarity: "legend",
      tag: "保研 · 顶尖学府",
      when: (s) => s.flags.path === "保研" && s.flags.baoyan === "top",
      desc: "推免系统开放的那个凌晨，你盯着屏幕上的“拟录取”三个字看了很久。四年里所有早八、占座、实验和崩溃，在这一刻突然有了重量。你给家里打电话，妈妈第一句问的是：北京冷不冷？",
      comment: () => "你不是天赋最好的那个，但你是把每一步都走完的那个。"
    },
    {
      id: "grad_elite",
      title: "向东，再向东",
      rarity: "rare",
      tag: "保研 · 华五",
      when: (s) => s.flags.path === "保研" && s.flags.baoyan === "elite",
      desc: "你拿到了另一所名校的拟录取通知。离开无锡那天，你在高铁上翻看四年里的照片：樱花大道、曲水桥、凌晨的实验室、食堂的糖醋排骨。你忽然发现，自己已经开始想念这座还没离开的城市。",
      comment: () => "你带走了录取通知，也带走了一整个蠡湖的夏天。"
    },
    {
      id: "grad_jnu",
      title: "留在蠡湖畔",
      rarity: "rare",
      tag: "保研 · 本校",
      when: (s) => s.flags.path === "保研" && s.flags.baoyan === "jnu",
      desc: "你留在了本校读研。还是熟悉的食堂，熟悉的曲水桥，熟悉的导师。室友说你没走出江大，你笑了笑：有些地方，待久了就成了故乡。",
      comment: () => "不是所有远方都叫远方。留在原地，也需要勇气。"
    },
    {
      id: "overseas",
      title: "飞跃重洋",
      rarity: "rare",
      tag: "出国 · 继续读书",
      when: (s) => s.flags.path === "出国" && Boolean(s.flags.overseas),
      desc: "雅思成绩出来那天，你在图书馆门口站了很久。后来你拿到了大洋彼岸的 offer，在机场和父母告别。飞机越过云层时，你想起蠡湖的晚风，想起自己第一次在曲水桥上迷路。",
      comment: () => "世界很大，你先去看一看。回来的时候，记得带一包无锡酱排骨。"
    },
    {
      id: "kaoyan",
      title: "一战成硕",
      rarity: "rare",
      tag: "考研 · 上岸",
      when: (s) => s.flags.path === "考研" && s.flags.kaoyan === "pass",
      desc: "初试、复试、拟录取。你在考研自习室收拾书的那一刻，才发现桌角被自己磨出了一块浅痕。窗外的玉兰开了，你终于可以睡一个不用定闹钟的觉。",
      comment: () => "那些一个人走过的清晨和深夜，最后都变成了录取通知上的名字。"
    },
    {
      id: "kaoyan_adjust",
      title: "调剂也是岸",
      rarity: "common",
      tag: "考研 · 调剂",
      when: (s) => s.flags.path === "考研" && s.flags.kaoyan === "adjust",
      desc: "第一志愿差了六分。你打了三十七个电话，最后调剂到了一所还不错的学校。虽然不是最初想去的地方，但通知书寄到那天，你还是拍了张照，发了朋友圈。",
      comment: () => "人生很少按第一志愿走。能上岸，就已经赢过了很多个昨天的自己。"
    },
    {
      id: "kaoyan_fail",
      title: "二战预备役",
      rarity: "common",
      tag: "考研 · 再来一次",
      when: (s) => s.flags.path === "考研" && s.flags.kaoyan === "fail",
      desc: "成绩出来那天，你在自习室坐到熄灯。第二年，你又回来了，坐在同一个位置，桌上多了一行自己写的小字：这次一定。",
      comment: () => "失败不是结局，只是把你送回了起跑线。你还有力气再跑一次。"
    },
    {
      id: "bigtech",
      title: "大厂工牌",
      rarity: "rare",
      tag: "就业 · 互联网大厂",
      when: (s) => s.flags.path === "工作" && s.flags.offer === "big",
      desc: "你拿到了那家公司的 offer。工牌是蓝色的，挂在脖子上有点沉。入职第一天，你在园区里迷了路，忽然想起自己大一也在江大迷过路。",
      comment: () => "你终于把简历上的“熟悉”变成了“负责”。接下来，学会和生活和解。"
    },
    {
      id: "soe",
      title: "稳稳的幸福",
      rarity: "common",
      tag: "就业 · 国企",
      when: (s) => s.flags.path === "工作" && s.flags.offer === "soe",
      desc: "你签了一家国企，工作稳定，离家不远。父母很满意，你也觉得踏实。偶尔加班到晚上，你会想起大学里那些不切实际的梦想，然后笑了笑，继续改方案。",
      comment: () => "稳定不是妥协，是你给自己选的一种安全感。"
    },
    {
      id: "civil",
      title: "上岸体制内",
      rarity: "common",
      tag: "考公 · 上岸",
      when: (s) => s.flags.path === "考公" && Boolean(s.flags.civil),
      desc: "公示名单出来那天，你把链接转发给了爸妈。面试时背的那些话，后来都用不上了；真正留下来的，是四年里学会的耐心和分寸。",
      comment: () => "你走进了另一套系统。希望你还记得，自己为什么出发。"
    },
    {
      id: "startup",
      title: "校园创业家",
      rarity: "rare",
      tag: "创业 · 自己做老板",
      when: (s) => Boolean(s.flags.startup) && s.stats.money >= 8000,
      desc: "你和朋友做的校园项目，从一张海报变成了一个小公司。毕业那年，你没有投简历，而是在南门附近租了间办公室。窗外的地铁一号线一趟趟开过，像在提醒你：时间还早。",
      comment: () => "你没找到工作，于是给自己造了一个。"
    },
    {
      id: "food_blogger",
      title: "无锡美食活地图",
      rarity: "secret",
      tag: "隐藏 · 美食博主",
      when: (s) => Boolean(s.flags.blog) && (s.flags.food || 0) >= 5,
      desc: "你的账号从一条“江大食堂测评”开始，慢慢做到了几万粉丝。毕业那年，你决定留在无锡，继续拍小笼包、酱排骨和太湖三白。你终于把“干饭”做成了一份事业。",
      comment: () => "别人毕业拿学位证，你毕业拿到了一张无锡美食地图的版权。"
    },
    {
      id: "design_star",
      title: "设计新星",
      rarity: "secret",
      tag: "隐藏 · 设计之路",
      when: (s) => s.player.college === "design" && Boolean(s.flags.portfolio),
      desc: "你的毕业设计被放在展厅最显眼的位置。有公司来问价，有学弟学妹来合影。你站在自己的作品前，想起那些改到凌晨的图和被否掉的方案，忽然觉得它们都值了。",
      comment: () => "你终于把“再改一版”，改成了“这一版很好”。"
    },
    {
      id: "esports",
      title: "电竞选手",
      rarity: "secret",
      tag: "隐藏 · 另一种赛场",
      when: (s) => (s.flags.esports || 0) >= 2,
      desc: "你和室友组的队伍打进了城市赛，后来签了一家俱乐部。父母一开始不同意，直到你在决赛直播里出现。你没有成为学霸，但你在另一个赛场上，找到了自己的位置。",
      comment: () => "人生不止一个排位赛。你选的那个，也值得认真打。"
    },
    {
      id: "singer",
      title: "校园歌手",
      rarity: "secret",
      tag: "隐藏 · 十佳歌手",
      when: (s) => Boolean(s.flags.singer),
      desc: "你在十佳歌手的决赛上唱了一首自己写的歌。最后没有拿到冠军，但台下有人举着写你名字的灯牌。毕业晚会上，你又唱了一遍，这次全场跟着你一起唱。",
      comment: () => "有些人用绩点被记住，你用一首歌被记住。"
    },
    {
      id: "love",
      title: "毕业就结婚",
      rarity: "secret",
      tag: "隐藏 · 校园爱情",
      when: (s) => Boolean(s.flags.romance) && s.stats.mood >= 60,
      desc: "你们从图书馆的偶遇，走到毕业照上的并肩。四年里吵过架、冷战过、也一起在曲水桥上看过很多次日落。毕业典礼结束那天，TA 问你：以后住无锡还是回你老家？你说：都行，有你就行。",
      comment: () => "你没拿到最漂亮的绩点，但拿到了一个愿意和你一起交房租的人。"
    },
    {
      id: "teacher",
      title: "去支教的人",
      rarity: "secret",
      tag: "隐藏 · 支教",
      when: (s) => Boolean(s.flags.teach),
      desc: "毕业那年，你报名去了西部支教。火车开了两天两夜，窗外的绿色越来越少。你给孩子们上的第一堂课，黑板上写了四个字：笃学尚行。",
      comment: () => "你把江大的校训，带到了更远的地方。"
    },
    {
      id: "freelance",
      title: "自由职业者",
      rarity: "common",
      tag: "就业 · 自由职业",
      when: (s) => Boolean(s.flags.freelance),
      desc: "你没有去公司上班，靠接项目和写稿养活自己。收入不稳定，但时间是自己的。你会在工作日的下午去蠡湖边散步，看一群退休老人下棋，然后回家继续改稿。",
      comment: () => "你放弃了稳定，换回了自己的时间表。"
    },
    {
      id: "home",
      title: "回家考编",
      rarity: "common",
      tag: "就业 · 返乡",
      when: (s) => Boolean(s.flags.home),
      desc: "毕业后你回了老家，考进了当地一个事业单位。工资不高，但离家近。下班后你骑车经过母校，想起江大的食堂和蠡湖的风，觉得那是另一个自己。",
      comment: () => "你把四年装进行李箱，带回了出发的地方。"
    },
    {
      id: "ordinary",
      title: "普通毕业生",
      rarity: "common",
      tag: "毕业 · 普通的一天",
      when: () => true,
      desc: "你毕业了。没有惊天动地的成就，也没有跌宕起伏的故事。你穿着学士服在图书馆前拍了照，和室友吃了最后一顿散伙饭，然后坐上地铁一号线，去赶一场普通的面试。",
      comment: () => "普通不是失败。四年里那些认真生活的瞬间，已经足够把你变成现在的你。"
    }
  ];

  return { colleges, traits, hometowns, commonCourses, electiveCourses, semesters, achievements, endings };
})();
