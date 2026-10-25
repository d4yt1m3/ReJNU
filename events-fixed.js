/* =========================================================
   固定节点事件：大学四年的骨架
   sem: 0-7 对应大一上到大四下；turn: 0-3
   ========================================================= */

const JNU_FIXED = [
  /* ---------------- 大一上 ---------------- */
  {
    id: "military",
    fixed: true,
    sem: 0,
    turn: 0,
    title: "军训：太阳底下的第一课",
    scene: "蠡湖校区 · 西北操场 · 九月",
    kicker: "入学第一课",
    text: "军训第一天，太阳把操场晒得发白。教官说，站军姿是最基本的修行。你站在队列里，感觉汗水从后背一路滑到脚跟，前面的同学晃了一下，又迅速站直。",
    choices: [
      {
        label: "咬牙站到哨响，绝不第一个倒",
        hint: "精力 -14 · 心情 -4 · 学识 +2",
        effects: { energy: -14, mood: -4, knowledge: 2, study: 1, flags: { military: true } },
        result: "你撑到了哨响。腿麻得像别人的，但教官在队列前点了你的名字，说“这个同学不错”。你忽然觉得，大学好像也没那么难。"
      },
      {
        label: "假装头晕，去医务室吹空调",
        hint: "精力 -2 · 心情 +4 · 社交 -2",
        effects: { energy: -2, mood: 4, social: -2, flags: { military: true, slacker: true } },
        result: "医务室的空调很足，你躺了半小时，顺便认识了两个同样“头晕”的同学。回到队列时，教官看了你一眼，什么也没说。"
      },
      {
        label: "主动帮连队搬矿泉水",
        hint: "精力 -8 · 社交 +7 · 心情 +3",
        effects: { energy: -8, social: 7, mood: 3, flags: { military: true } },
        result: "你搬了三箱水，成了连队里最被需要的人。休息时有人递给你一瓶冰水，说“哥们儿，够意思”。这是你在江大交到的第一批朋友。"
      }
    ]
  },
  {
    id: "club_fair",
    fixed: true,
    sem: 0,
    turn: 1,
    title: "百团大战：把兴趣塞进课表",
    scene: "蠡湖校区 · 西北操场 · 百团大战",
    kicker: "社团招新",
    text: "近六十个社团在西北操场支起帐篷，吉他声、口号声和发传单的手一起涌过来。你手里攥着一张报名表，忽然发现大学的选择比高中多了不止十倍。",
    choices: [
      {
        label: "加入话剧社，去台上演别人的人生",
        hint: "社交 +6 · 心情 +5",
        effects: { social: 6, mood: 5, energy: -3, flags: { club: "话剧社" } },
        result: "你在话剧社的面试里念了一段《雷雨》，紧张得把台词念成了绕口令。学长笑着说：“有灵气，留下吧。”"
      },
      {
        label: "加入信息安全俱乐部，继续和代码死磕",
        hint: "学识 +5 · 精力 -4 · 社交 +2",
        effects: { knowledge: 5, energy: -4, social: 2, flags: { club: "信息安全俱乐部" } },
        result: "你第一次进到攻防靶场，屏幕上滚过一串串日志。学长说，这里不看绩点，只看你能不能找到那个后门。"
      },
      {
        label: "加入美食社，把食堂吃成田野调查",
        hint: "心情 +6 · 存款 -50 · 干饭 +1",
        effects: { mood: 6, money: -50, flags: { club: "美食社", food: 1 } },
        result: "美食社的第一次活动是测评三食堂的拌饭。你认真写了三百字点评，社长说你是“天生做美食博主的料”。"
      },
      {
        label: "只领周边不报名，做一个清醒的旁观者",
        hint: "心情 +3 · 社交 -3 · 精力 +2",
        effects: { mood: 3, social: -3, energy: 2 },
        result: "你领了三个帆布袋、五张贴纸和一把扇子，在操场边看完了整场招新。夕阳落下去的时候，你觉得自己好像也没那么需要加入什么。"
      }
    ]
  },
  {
    id: "first_finals",
    fixed: true,
    sem: 0,
    turn: 5,
    title: "第一次期末：高数不会陪你演戏",
    scene: "图书馆 · 期末周 · 凌晨一点",
    kicker: "期末周",
    text: "高数、英语、专业导论挤在同一周考试。图书馆的座位在早上七点就被占满，走廊里全是背单词的人。你翻开高数书，发现第一章的极限还没完全搞懂。",
    choices: [
      {
        label: "在图书馆通宵，把极限刷成肌肉记忆",
        hint: "学习 +4 · 精力 -18 · 心情 -5 · 熬夜 +1",
        effects: { study: 4, energy: -18, mood: -5, knowledge: 3, flags: { night: 1, library: 1 } },
        result: "你刷完了三套真题，凌晨四点趴在桌上睡了半小时。考场上，最后一道大题你居然见过类似的。走出考场时，天刚亮，曲水桥上的雾还没散。"
      },
      {
        label: "找学长要重点，精准复习",
        hint: "学习 +2 · 社交 +3 · 存款 -50",
        effects: { study: 2, social: 3, money: -50, knowledge: 2 },
        result: "学长发来一份祖传重点，你如获至宝。考完发现重点覆盖率大约六成，但已经比室友强了。你请学长喝了一杯奶茶，完成了江大知识传承的闭环。"
      },
      {
        label: "佛系复习，能过就行",
        hint: "心情 +7 · 精力 +5 · 学习 +0",
        effects: { mood: 7, energy: 5, study: 0 },
        result: "你复习了两小时，然后看了一部电影。成绩出来，高数 61 分，刚好飘过。你长舒一口气，决定把“及格万岁”写进大学座右铭。"
      }
    ]
  },

  /* ---------------- 大一下 ---------------- */
  {
    id: "major_and_cet4",
    fixed: true,
    sem: 1,
    turn: 0,
    title: "转专业窗口，只开三天",
    scene: "教务系统 · 大一下 · 转专业申请",
    kicker: "选择",
    text: "教务系统弹出一条通知：转专业申请本周开放。你盯着屏幕，想起高考填志愿那天的自己。窗外有人在曲水桥边拍照，阳光很好，像什么都没发生。",
    choices: [
      {
        label: "留在原专业，把这条路走深",
        hint: "学习 +2 · 心情 +3 · 学识 +2",
        effects: { study: 2, mood: 3, knowledge: 2, flags: { stayed: true } },
        result: "你关掉页面，去上了下午的专业课。老师讲到一个你感兴趣的方向，你第一次觉得，这个专业也许真的可以。"
      },
      {
        label: "报名四级，先把能抓住的抓住",
        hint: "学习 +2 · 存款 -30 · 四级备考",
        effects: { study: 2, money: -30, knowledge: 2, flags: { cet4Prep: true } },
        result: "你报了十二月的四级，买了一套真题。室友说“裸考也能过”，你还是默默把单词书塞进了书包。"
      },
      {
        label: "认真考虑转专业，去听了一节目标专业的课",
        hint: "社交 +3 · 心情 +4 · 学习 +1",
        effects: { social: 3, mood: 4, study: 1, flags: { explored: true } },
        result: "你蹭了一节计算机导论，发现代码并没有想象中那么可怕。下课后你问了老师三个问题，老师说：“有兴趣就多来听。”你最终还是没提交申请，但心里多了一条备选路线。"
      }
    ]
  },
  {
    id: "summer_plan",
    fixed: true,
    sem: 1,
    turn: 4,
    title: "第一个暑假，用来做什么",
    scene: "大学生活动中心 · 暑期项目宣讲",
    kicker: "暑假规划",
    text: "暑期社会实践、大创申报、回家陪父母——第一个没有作业的暑假，反而比有作业时更难安排。宣讲会散场后，你手里多了三张报名表。",
    choices: [
      {
        label: "组队做暑期社会实践，去基层看一看",
        hint: "社交 +6 · 学识 +3 · 精力 -8",
        effects: { social: 6, knowledge: 3, energy: -8, mood: 4, flags: { practice: true } },
        result: "你们去了宜兴的一个村子做调研，白天走访，晚上在民宿改报告。蚊子很多，但村民请你们吃了刚摘的西瓜。回校后，你们的调研报告拿了个校级优秀。"
      },
      {
        label: "申报大创项目，提前进实验室",
        hint: "需要学识 30 · 学习 +3 · 学识 +4",
        require: { knowledge: 30 },
        effects: { study: 3, knowledge: 4, energy: -8, flags: { innovation: true } },
        result: "你跟着导师写了一份大创申报书，改到第七版才交上去。虽然最后只拿了校级立项，但你第一次知道“科研”两个字具体长什么样。"
      },
      {
        label: "回家躺平，把前十八年缺的觉补回来",
        hint: "心情 +9 · 精力 +12 · 存款 -500",
        effects: { mood: 9, energy: 12, money: -500, flags: { homeSummer: true } },
        result: "你在家待了两个月，吃了妈妈做的饭，见了高中同学，睡到自然醒。返校那天，行李箱里塞满了特产，你觉得自己又活过来了。"
      }
    ]
  },

  /* ---------------- 大二上 ---------------- */
  {
    id: "sophomore_lab",
    fixed: true,
    sem: 2,
    turn: 0,
    title: "大二开学：专业课开始动真格",
    scene: "教学楼 · 曲水桥边 · 九月",
    kicker: "专业课",
    text: "大二的课表突然变厚，专业课一门接一门。学长说，大一是通识教育，大二才开始“上强度”。你看着课表上的实验课，既期待又有点心虚。",
    choices: [
      {
        label: "跟着老师的节奏，把专业课啃下来",
        hint: "学习 +3 · 学识 +4 · 精力 -8",
        effects: { study: 3, knowledge: 4, energy: -8, mood: 2 },
        result: "你开始每节课坐前三排，笔记记得密密麻麻。期中之后，你发现自己居然能听懂老师随口提的延伸内容了。"
      },
      {
        label: "加入学长的实验室，提前感受科研",
        hint: "需要学识 35 · 学识 +6 · 精力 -10",
        require: { knowledge: 35 },
        effects: { knowledge: 6, energy: -10, study: 1, flags: { research: true } },
        result: "你第一次穿上白大褂，站在实验台前手足无措。师兄让你先洗一百个试管，你洗了一下午。晚上回去，你在朋友圈发了一张实验室的窗户，配文：科研，从洗试管开始。"
      },
      {
        label: "先把生活过好，课能过就行",
        hint: "心情 +6 · 精力 +4 · 学习 +0",
        effects: { mood: 6, energy: 4 },
        result: "你给自己排了一张“快乐课表”：专业课坐中间，水课坐后排，周末去长广溪骑车。成绩不温不火，但你确实比大一开心了。"
      }
    ]
  },
  {
    id: "competition_team",
    fixed: true,
    sem: 2,
    turn: 3,
    title: "竞赛组队：缺一个写 PPT 的",
    scene: "大学生活动中心 · 竞赛组队墙",
    kicker: "学科竞赛",
    text: "挑战杯、数学建模、互联网+——竞赛群里的消息一条接一条。有人缺编程，有人缺建模，有人缺一个“能把大家的工作讲清楚”的人。你站在组队墙前，看见自己的名字被人圈了起来。",
    choices: [
      {
        label: "加入数模队，负责建模和编程",
        hint: "需要学识 40 · 成功率 70% · 学识 +6",
        require: { knowledge: 40 },
        roll: 0.7,
        rollStat: "knowledge",
        success: {
          text: "你们在三天三夜里只睡了六个小时，最后交出了一篇自己都不敢细看的论文。结果出来，省二等奖。你盯着证书上的名字，觉得那六个小时睡得值。",
          effects: { knowledge: 6, study: 2, energy: -12, mood: 8, flags: { competition: 1 } }
        },
        fail: {
          text: "你们的模型在最后一步跑崩了，三个人对着电脑沉默了很久。没获奖，但你们成了朋友。学长说，数模的意义是让你知道，有些问题真的没有标准答案。",
          effects: { energy: -10, mood: -4, social: 4, knowledge: 3 }
        }
      },
      {
        label: "负责写申报书和答辩 PPT",
        hint: "社交 +4 · 学习 +2 · 心情 +4",
        effects: { social: 4, study: 2, mood: 4, energy: -5, flags: { competition: 0 } },
        result: "你把大家零散的思路整理成了一份漂亮的申报书，导师说“这版可以”。答辩那天，你站在台上讲得比组员还投入。虽然最后只是校赛三等奖，但你发现自己挺喜欢这种把复杂事情讲清楚的感觉。"
      },
      {
        label: "不参加，把时间留给自己的节奏",
        hint: "心情 +5 · 学习 +1 · 精力 +3",
        effects: { mood: 5, study: 1, energy: 3 },
        result: "你退出了竞赛群，把周末还给了自己。有人觉得你不上进，你只是觉得，大学不该只有一种活法。"
      }
    ]
  },

  /* ---------------- 大二下 ---------------- */
  {
    id: "internship_season",
    fixed: true,
    sem: 3,
    turn: 4,
    title: "第一份实习：简历上终于有东西了",
    scene: "商学院报告厅 · 实习宣讲会",
    kicker: "实习季",
    text: "大二暑假的实习宣讲会挤满了人。你打开简历，发现除了课程和社团，几乎一片空白。前排的同学在讨论“大厂暑期实习”，你默默把简历又改了一版。",
    choices: [
      {
        label: "冲大厂暑期实习，哪怕当分母",
        hint: "需要学识 45 · 成功率 55% · 存款 +1500",
        require: { knowledge: 45 },
        roll: 0.55,
        rollStat: "knowledge",
        success: {
          text: "你过了三轮面试，拿到了大厂暑期实习的 offer。实习工资到账那天，你请室友吃了一顿烧烤。虽然每天通勤两小时，但你第一次知道，自己学的东西真的能换成钱。",
          effects: { money: 1500, knowledge: 3, social: 3, energy: -10, mood: 8, flags: { internship: 1, bigIntern: true } }
        },
        fail: {
          text: "你在终面前被刷了。HR 发来一封模板拒信，你在宿舍躺了一下午。晚上室友拉你去三食堂吃了顿拌饭，你决定先找一份本地实习。",
          effects: { mood: -5, social: 3, energy: -4 }
        }
      },
      {
        label: "去无锡本地企业，先积累经验",
        hint: "存款 +800 · 社交 +4 · 实习经历 +1",
        effects: { money: 800, social: 4, knowledge: 2, energy: -6, flags: { internship: 1 } },
        result: "你在一家本地制造企业做暑期实习，跟着师傅跑车间、整理数据。公司不大，但每个人都愿意教你。实习结束，师傅说：“毕业了想来，随时联系。”"
      },
      {
        label: "回家陪父母，顺便准备考研",
        hint: "心情 +8 · 精力 +10 · 学习 +2",
        effects: { mood: 8, energy: 10, study: 2, flags: { homeSummer: true } },
        result: "你回家待了一个暑假，白天陪父母买菜，晚上看考研数学。妈妈每晚给你切一盘水果，你觉得这种日子也挺好。"
      }
    ]
  },
  {
    id: "junior_crossroad",
    fixed: true,
    sem: 4,
    turn: 0,
    title: "大三上：人生开始分岔",
    scene: "图书馆 · 三楼靠窗 · 晚上十点",
    kicker: "毕业去向",
    text: "辅导员在群里发了一条消息：“请各位同学开始思考毕业去向。”图书馆里，有人在刷考研数学，有人在改保研材料，有人在看招聘网站。你合上电脑，忽然发现自己已经大三了。",
    choices: [
      {
        label: "冲保研：把绩点、科研和竞赛继续往上堆",
        hint: "需要绩点 3.3 · 学习 +3 · 心情 -3",
        require: { gpa: 3.3 },
        effects: { study: 3, energy: -6, mood: -3, flags: { path: "保研" } },
        result: "你把保研细则打印出来，逐条对照自己的履历，发现还差一篇论文和一次竞赛。你在手机备忘录里写下：从今天起，做一个功利但清醒的人。"
      },
      {
        label: "考研：再给自己一次选择学校的机会",
        hint: "学习 +2 · 学识 +2 · 精力 -4",
        effects: { study: 2, knowledge: 2, energy: -4, flags: { path: "考研" } },
        result: "你买了一套考研数学，把目标院校的分数线贴在床头。室友说你是“逆行者”，你笑了笑：总得试试，不试怎么知道。"
      },
      {
        label: "就业：尽早进职场，用实践说话",
        hint: "社交 +4 · 心情 +3 · 实习优先",
        effects: { social: 4, mood: 3, flags: { path: "工作" } },
        result: "你开始整理简历，把社团经历写成项目经验，把课程作业写成作品集。你决定不再等“准备好”的那一天，先上路再说。"
      },
      {
        label: "出国：去看看更大的世界",
        hint: "需要存款 3000 · 心情 +4 · 语言备考",
        require: { money: 3000 },
        effects: { mood: 4, money: -500, flags: { path: "出国" } },
        result: "你报了雅思班，开始每天早起背单词。中介说你的均分不错，但还需要一段科研经历。你看着账户余额，第一次认真计算“梦想”的价格。"
      },
      {
        label: "考公：把稳定写进未来",
        hint: "学习 +1 · 心情 +2 · 考公备考",
        effects: { study: 1, mood: 2, flags: { path: "考公" } },
        result: "你下载了粉笔 APP，开始刷行测。父母在电话里听说后，明显高兴了几分。你没有告诉他们，其实你只是想要一份不用加班到凌晨的工作。"
      }
    ]
  },

  /* ---------------- 大三下 ---------------- */
  {
    id: "camp_apply",
    fixed: true,
    sem: 5,
    turn: 0,
    cond: (s) => s.flags.path === "保研",
    title: "夏令营：海投、被拒与入营通知",
    scene: "宿舍 · 凌晨 · 夏令营申请季",
    kicker: "保研夏令营",
    text: "五月的宿舍，空调嗡嗡作响，你在电脑前填第十所学校的夏令营系统。个人陈述改了七版，推荐信找老师签了三次字。邮箱每响一次，你的心跳就快一拍。",
    choices: [
      {
        label: "海投十所，总有一所会要我",
        hint: "学习 +2 · 精力 -10 · 成功率 65%",
        roll: 0.65,
        rollStat: "gpa",
        success: {
          text: "你收到了三所学校的入营通知，其中一所是你梦校。面试前一晚，你在酒店对着镜子练了二十遍自我介绍。后来你拿到了“优秀营员”，回程的高铁上，你第一次觉得未来有了形状。",
          effects: { study: 2, energy: -10, mood: 10, flags: { camp: 1 } }
        },
        fail: {
          text: "你投了十所，收到了七封拒信和三封“候补”。最想去的那所连面试都没进。你在宿舍躺了一天，第二天还是爬起来继续投预推免。",
          effects: { mood: -6, energy: -8, flags: { camp: 0 } }
        }
      },
      {
        label: "只投两所梦校，把材料做到极致",
        hint: "学习 +3 · 精力 -8 · 成功率 45% · 心情 +4",
        roll: 0.45,
        rollStat: "gpa",
        success: {
          text: "你只投了两所，但材料打磨了整整一个月。面试时，老师问的问题你几乎都准备过。最后，你拿到了梦校的优营。你截了图，发给爸妈，手有点抖。",
          effects: { study: 3, energy: -8, mood: 14, flags: { camp: 2 } }
        },
        fail: {
          text: "梦校的面试只进行了八分钟。老师问了一个你没准备好的问题，你答得磕磕绊绊。结果出来的那天，你在图书馆坐了很久，然后打开电脑，开始准备预推免。",
          effects: { mood: -5, study: 2, flags: { camp: 0 } }
        }
      },
      {
        label: "放弃夏令营，专心准备考研",
        hint: "学习 +3 · 心情 -2 · 转向考研",
        effects: { study: 3, mood: -2, flags: { path: "考研", camp: 0 } },
        result: "你退出了夏令营群，把保研细则塞进抽屉最底层。你告诉自己：没关系，考也能考上。那天晚上，你第一次梦到考场。"
      }
    ]
  },
  {
    id: "camp_work",
    fixed: true,
    sem: 5,
    turn: 0,
    cond: (s) => s.flags.path === "工作",
    title: "暑期实习：把学生气收一收",
    scene: "无锡 · 早高峰地铁 · 实习第一天",
    kicker: "暑期实习",
    text: "你拿到了暑期实习，第一天上班就迟到了十分钟。带你的姐姐说没关系，但你还是红了脸。午休时，你发现同事们的工位上都有一个小水杯和一盆绿植。",
    choices: [
      {
        label: "主动揽活，快速成为组里最可靠的人",
        hint: "社交 +5 · 学识 +3 · 精力 -10 · 存款 +1200",
        effects: { social: 5, knowledge: 3, energy: -10, money: 1200, flags: { internship: 2, workReady: true } },
        result: "你每天第一个到，最后一个走。临走时，组长说：“毕业了直接来找我。”你把这句话记在手机备忘录里，标题是“第一份底气”。"
      },
      {
        label: "按时上下班，把生活和工作分开",
        hint: "心情 +6 · 存款 +900 · 社交 +2",
        effects: { mood: 6, money: 900, social: 2, flags: { internship: 2 } },
        result: "你准点打卡，下班后去健身房。同事说你不像实习生，像来养老的。你笑了笑：我只是不想把大学最后一点自由也交出去。"
      },
      {
        label: "觉得不合适，提前结束实习",
        hint: "心情 +3 · 学习 +2 · 存款 +300",
        effects: { mood: 3, study: 2, money: 300, flags: { internship: 1 } },
        result: "你干了三周就提了离职。HR 问你原因，你说想回学校准备秋招。其实你只是发现，自己不喜欢这份工作。及时止损，也是一种收获。"
      }
    ]
  },
  {
    id: "camp_kaoyan",
    fixed: true,
    sem: 5,
    turn: 0,
    cond: (s) => s.flags.path === "考研",
    title: "暑期留校：考研人的夏天",
    scene: "图书馆 · 暑期 · 早上六点半",
    kicker: "考研备考",
    text: "暑假的校园空了一半，图书馆却坐得满满当当。你六点半到馆，发现靠窗的位置已经被人用一本书占了。空调开得很足，走廊里全是背书声。",
    choices: [
      {
        label: "留校全职备考，把每一天排满",
        hint: "学习 +5 · 精力 -14 · 心情 -2",
        effects: { study: 5, energy: -14, mood: -2, flags: { kaoyanPrep: true } },
        result: "你给自己做了张时间表：六点半起床，十一点回宿舍。两周后，你发现自己居然真的能坐住。数学题从“看不懂”变成“做得慢”，这已经是很大的进步。"
      },
      {
        label: "回家备考，至少有人做饭",
        hint: "学习 +3 · 心情 +5 · 精力 +2",
        effects: { study: 3, mood: 5, energy: 2, flags: { kaoyanPrep: true } },
        result: "你在家附近的自习室办了卡，每天骑车十分钟。妈妈每天换着花样做饭，你胖了三斤。学习效率不高，但心态意外地稳。"
      },
      {
        label: "先实习一段时间，给自己留条后路",
        hint: "存款 +800 · 社交 +3 · 学习 +1",
        effects: { money: 800, social: 3, study: 1, flags: { internship: 1, kaoyanPrep: false } },
        result: "你在一家公司实习了六周，发现职场没有想象中可怕。回校后，你重新打开考研书，心里多了一点底气：就算考不上，也不至于没饭吃。"
      }
    ]
  },
  {
    id: "camp_abroad",
    fixed: true,
    sem: 5,
    turn: 0,
    cond: (s) => s.flags.path === "出国",
    title: "雅思、文书和凌晨的网申系统",
    scene: "宿舍 · 凌晨 · 申请季",
    kicker: "出国申请",
    text: "你的电脑上开着五个网页：雅思报名、学校官网、文书修改、推荐信邮件、汇率换算。中介发来消息：“你的均分不错，但文书还要再改一版。”",
    choices: [
      {
        label: "咬牙报雅思冲刺班，把分数刷上去",
        hint: "存款 -3000 · 学习 +3 · 成功率 60%",
        effects: { money: -3000, study: 3, knowledge: 3 },
        result: "冲刺班每天早上八点上课，你重新过上了高三作息。第二次考雅思，你终于刷到了目标分。出分那天，你在图书馆门口给妈妈打了电话。"
      },
      {
        label: "自己改文书，省下中介费",
        hint: "学习 +3 · 精力 -8 · 心情 +3",
        effects: { study: 3, energy: -8, mood: 3, knowledge: 2 },
        result: "你把个人陈述改了十一版，找了三个老师帮忙看。最后交上去的那一版，几乎每个句子都是你自己写的。中介说“不够华丽”，但你很喜欢。"
      },
      {
        label: "再想想，也许不出国了",
        hint: "心情 +5 · 存款 +3000 · 转向工作",
        effects: { mood: 5, money: 3000, flags: { path: "工作" } },
        result: "你退掉了雅思课，把留学中介的微信设成了免打扰。你算了算账，觉得先工作几年也挺好。世界很大，不一定非要现在就去。"
      }
    ]
  },
  {
    id: "camp_civil",
    fixed: true,
    sem: 5,
    turn: 0,
    cond: (s) => s.flags.path === "考公",
    title: "行测、申论和一张又一张准考证",
    scene: "图书馆 · 考公自习区",
    kicker: "考公备考",
    text: "图书馆靠墙的那排桌子，已经成了“考公专区”。每个人桌上都堆着行测题库、申论范文和保温杯。你做了三套行测，正确率稳定在 55%。",
    choices: [
      {
        label: "报一个线下班，系统学一遍",
        hint: "存款 -3000 · 学习 +4 · 学识 +3",
        effects: { money: -3000, study: 4, knowledge: 3, flags: { civilPrep: true } },
        result: "你报了一个周末班，老师把数量关系讲得像相声。你第一次觉得，行测也可以不那么痛苦。一个月后，你的正确率到了 70%。"
      },
      {
        label: "自学刷题，用题海战术",
        hint: "学习 +3 · 精力 -10 · 心情 -2",
        effects: { study: 3, energy: -10, mood: -2, flags: { civilPrep: true } },
        result: "你给自己定了每天两百题的目标，错题本写满了半本。室友说你像回到了高三，你说：差不多，但这次是我自己选的。"
      },
      {
        label: "边准备边找保底工作",
        hint: "学习 +1 · 社交 +3 · 存款 +500",
        effects: { study: 1, social: 3, money: 500, flags: { civilPrep: false, internship: 1 } },
        result: "你投了几家公司，也继续刷题。面试和模考撞在一起时，你在高铁上做行测，在酒店里改简历。累，但心里踏实。"
      }
    ]
  },

  /* ---------------- 大四上 ---------------- */
  {
    id: "baoyan_interview",
    fixed: true,
    sem: 6,
    turn: 0,
    cond: (s) => s.flags.path === "保研",
    title: "预推免：最后一场信息战",
    scene: "宿舍 · 凌晨 · 预推免系统",
    kicker: "预推免",
    text: "预推免系统在凌晨开放。你的排名在保研边缘，前面有人放弃，后面有人在追。你手里有三个选择：冲顶尖、稳华五、留本校。每一个都通向不同的人生。",
    choices: [
      {
        label: "冲顶尖高校，哪怕只有三成机会",
        hint: "需要绩点 3.7 · 学识 60 · 成功率 35%",
        require: { gpa: 3.7, knowledge: 60 },
        roll: 0.35,
        rollStat: "knowledge",
        success: {
          text: "你拿到了顶尖高校的拟录取。面试时老师问了一个很刁钻的问题，你把自己做过的项目讲得清清楚楚。挂断视频后，你在宿舍里原地跳了一下，又迅速坐下，怕室友发现。",
          effects: { mood: 16, energy: -8, flags: { baoyan: "top" } }
        },
        fail: {
          text: "你止步于面试。老师很客气地说“欢迎报考”，你听懂了。回程高铁上，你看着窗外的太湖，决定接受另一所华五的拟录取。",
          effects: { mood: -4, energy: -6, flags: { baoyan: "elite" } }
        }
      },
      {
        label: "稳投华五，把确定性握在手里",
        hint: "需要绩点 3.5 · 成功率 65%",
        require: { gpa: 3.5 },
        roll: 0.65,
        rollStat: "gpa",
        success: {
          text: "你拿到了华五的拟录取。虽然不是最想去的那所，但专业方向很合适。你给家里打电话，爸爸说：“不错了，别太累。”你忽然有点想哭。",
          effects: { mood: 12, energy: -5, flags: { baoyan: "elite" } }
        },
        fail: {
          text: "华五的面试没过。你回到学校，发现本校的预推免也快截止了。你连夜填了系统，第二天收到了本校的面试通知。",
          effects: { mood: -5, energy: -4, flags: { baoyan: "jnu" } }
        }
      },
      {
        label: "留在本校，跟着熟悉的导师继续做",
        hint: "心情 +6 · 精力 +2 · 保研本校",
        effects: { mood: 6, energy: 2, flags: { baoyan: "jnu" } },
        result: "你联系了本校的导师，老师很快回了消息：“欢迎来组里。”你走在曲水桥上，忽然觉得，留下来也没什么不好。"
      },
      {
        label: "放弃保研，加入秋招",
        hint: "心情 -4 · 社交 +3 · 转向工作",
        effects: { mood: -4, social: 3, flags: { path: "工作", baoyan: "" } },
        result: "你退出了保研群，把材料收进文件夹。室友不理解，你说：“我想先去看看真实的世界。”第二天，你改好了简历。"
      }
    ]
  },
  {
    id: "autumn_recruit",
    fixed: true,
    sem: 6,
    turn: 0,
    cond: (s) => s.flags.path === "工作",
    title: "秋招：把简历投进人海",
    scene: "大学生活动中心 · 秋招双选会",
    kicker: "秋招",
    text: "秋招双选会挤满了穿正装的人。你印了二十份简历，排了四十分钟队，终于把第一份递给 HR。对方扫了一眼，问：“你为什么想来我们公司？”你准备好的答案忽然卡在喉咙里。",
    choices: [
      {
        label: "冲大厂，把能投的都投一遍",
        hint: "需要学识 55 · 成功率 45% · 存款 +?",
        require: { knowledge: 55 },
        roll: 0.45,
        rollStat: "knowledge",
        success: {
          text: "你拿到了大厂 offer。HR 在电话里报出薪资时，你假装平静地说“我考虑一下”，挂了电话就在宿舍群里发了三个感叹号。那天晚上，你们去南长街吃了一顿好的。",
          effects: { mood: 14, money: 1000, flags: { offer: "big" } }
        },
        fail: {
          text: "你面了八家，挂了七家。最后一家国企给了 offer，薪资不高，但稳定。你签了三方，心里有点不甘，但更多的是“终于结束了”的轻松。",
          effects: { mood: -3, flags: { offer: "soe" } }
        }
      },
      {
        label: "稳投国企和事业单位，求一个踏实",
        hint: "成功率 72% · 心情 +4 · 稳定",
        roll: 0.72,
        success: {
          text: "你拿到了一家国企的 offer。父母很满意，你也觉得踏实。签三方那天，你在食堂点了一份最贵的套餐，庆祝自己正式成为一个“有单位的人”。",
          effects: { mood: 7, flags: { offer: "soe" } }
        },
        fail: {
          text: "国企的终面没过。你重新打开招聘网站，发现秋招已经接近尾声。你决定先去一家小公司实习，等春招再战。",
          effects: { mood: -5, social: 2, flags: { internship: 2 } }
        }
      },
      {
        label: "不急着签，先试试创业",
        hint: "需要存款 1000 · 成功率 50% · 创业",
        require: { money: 1000 },
        roll: 0.5,
        success: {
          text: "你和朋友做的校园项目拿到了第一笔订单。虽然只有两千块，但你们在商业街上吃了一顿很贵的烤肉。你决定不投简历了，先给自己发工资。",
          effects: { mood: 10, money: 2000, flags: { startup: true } }
        },
        fail: {
          text: "项目做了两个月，用户没做起来。你注销了公司，重新开始投简历。创业失败不丢人，至少你知道了，自己不适合当老板。",
          effects: { mood: -6, money: -500, flags: { startup: false } }
        }
      },
      {
        label: "转考公，把稳定进行到底",
        hint: "学习 +2 · 心情 +2 · 转向考公",
        effects: { study: 2, mood: 2, flags: { path: "考公" } },
        result: "你把简历收进抽屉，买了省考教材。室友说你现在才转，来得及吗？你说：试了才知道。"
      }
    ]
  },
  {
    id: "autumn_recruit_late",
    fixed: true,
    sem: 6,
    turn: 1,
    cond: (s) => s.flags.path === "工作" && !s.flags.offer,
    title: "补招：秋招的尾巴",
    scene: "大学生活动中心 · 秋招补录",
    kicker: "补录",
    text: "秋招接近尾声，群里还在零星发着补录信息。你之前没拿到满意的 offer，或者刚刚从别的赛道转过来。室友已经签了三方，你的邮箱还停在“感谢投递”。",
    choices: [
      {
        label: "投国企补录，先拿到一个确定的答案",
        hint: "成功率 75% · 稳定 · 心情 +4",
        roll: 0.75,
        success: {
          text: "你投了一家国企的补录岗位，面试很顺利。签三方那天，你在食堂点了一份最贵的套餐，庆祝自己终于有了着落。",
          effects: { mood: 7, flags: { offer: "soe" } }
        },
        fail: {
          text: "补录岗位也满了。你收到一封模板拒信，坐在宿舍里发了一会儿呆，然后打开电脑继续投。",
          effects: { mood: -5 }
        }
      },
      {
        label: "再冲一次大厂补录，赌最后一把",
        hint: "需要学识 50 · 成功率 40% · 存款 +1000",
        require: { knowledge: 50 },
        roll: 0.4,
        rollStat: "knowledge",
        success: {
          text: "你拿到了一家大厂的补录 offer。HR 说岗位很急，希望你尽快入职。你挂了电话，在宿舍里原地转了一圈。",
          effects: { money: 1000, mood: 12, flags: { offer: "big" } }
        },
        fail: {
          text: "补录也挂了。你有点麻木，关掉招聘网站，去三食堂吃了一碗拌饭。至少饭还是热的。",
          effects: { mood: -4 }
        }
      },
      {
        label: "签一家小公司，先让自己落地",
        hint: "存款 +500 · 心情 +3 · 保底 offer",
        effects: { money: 500, mood: 3, flags: { offer: "soe" } },
        result: "你签了一家无锡本地的小公司，工资不高，但离家近、节奏稳。你告诉自己：先上路，以后再换。"
      },
      {
        label: "转考公，再给自己一次机会",
        hint: "学习 +2 · 心情 +2 · 转向考公",
        effects: { study: 2, mood: 2, flags: { path: "考公" } },
        result: "你关掉招聘网站，买了省考教材。距离考试还有一段时间，你决定再赌一次。"
      }
    ]
  },
  {
    id: "kaoyan_sprint",
    fixed: true,
    sem: 6,
    turn: 0,
    cond: (s) => s.flags.path === "考研",
    title: "冲刺期：图书馆的灯比星星亮",
    scene: "图书馆 · 考研自习室 · 晚上十一点",
    kicker: "考研冲刺",
    text: "距离初试还有七十天。你的桌上堆着数学真题、英语阅读和政治背诵手册。对面的人每天都在同一时间收拾书包，你们从没说过话，但彼此都认识。",
    choices: [
      {
        label: "全力冲刺，把能挤的时间都挤出来",
        hint: "学习 +4 · 精力 -16 · 心情 -3",
        effects: { study: 4, energy: -16, mood: -3, knowledge: 3, flags: { kaoyanPrep: true } },
        result: "你每天学到闭馆，回宿舍路上听政治带背。有天晚上你边走边哭，哭完又回去做了一套数学卷。第二天，你发现自己居然比昨天多对了两道题。"
      },
      {
        label: "稳住节奏，保证睡眠和心态",
        hint: "学习 +2 · 心情 +5 · 精力 +2",
        effects: { study: 2, mood: 5, energy: 2, flags: { kaoyanPrep: true } },
        result: "你给自己定了规矩：十一点必须回宿舍，每周跑两次步。室友说你不像考研的，你说：我要考的是持久战，不是短跑。"
      },
      {
        label: "放弃考研，转向秋招补录",
        hint: "心情 -3 · 社交 +4 · 转向工作",
        effects: { mood: -3, social: 4, flags: { path: "工作", kaoyan: "fail" } },
        result: "你把考研书打包卖给了学弟，第二天穿上正装去了招聘会。没人问你为什么放弃，但你自己知道，这个决定想了一个月。"
      }
    ]
  },
  {
    id: "overseas_apply",
    fixed: true,
    sem: 6,
    turn: 0,
    cond: (s) => s.flags.path === "出国",
    title: "网申提交前，你检查了最后一遍",
    scene: "宿舍 · 凌晨两点 · 申请系统",
    kicker: "网申",
    text: "网申系统显示“提交成功”的那一刻，你靠在椅背上，长长地吐了一口气。申请费花掉了你半个月生活费，推荐信老师改了三遍，个人陈述里每一个词你都查过词典。",
    choices: [
      {
        label: "冲刺名校，赌一把",
        hint: "需要绩点 3.5 · 成功率 40% · 存款 -1000",
        require: { gpa: 3.5 },
        roll: 0.4,
        rollStat: "gpa",
        success: {
          text: "你收到了梦校的 offer。邮件开头是“Congratulations”，你反反复复看了三遍，才确认没有看错。你截了图，发给爸妈，妈妈回了一个语音，声音有点抖。",
          effects: { money: -1000, mood: 15, flags: { overseas: true } }
        },
        fail: {
          text: "梦校把你放进了 waitlist，最后没有转正。你难过了一阵，但很快收到了另一所学校的 offer。虽然不是第一选择，但那个城市有你喜欢的实验室。",
          effects: { money: -1000, mood: 3, flags: { overseas: true } }
        }
      },
      {
        label: "稳妥申请，优先拿 offer",
        hint: "成功率 70% · 存款 -800 · 心情 +3",
        roll: 0.7,
        success: {
          text: "你收到了两所学校的 offer，选了一所专业最匹配的。中介说你的选择太保守，你说：我要的是出去，不是排名。",
          effects: { money: -800, mood: 8, flags: { overseas: true } }
        },
        fail: {
          text: "你只申了三所，结果都被拒了。你坐在宿舍里，看着邮箱里的拒信，忽然觉得世界很大，但没有一扇门为你打开。后来你决定先去工作，明年再申。",
          effects: { money: -800, mood: -8, flags: { overseas: false, path: "工作" } }
        }
      },
      {
        label: "放弃出国，留在国内工作",
        hint: "心情 +2 · 社交 +3 · 转向工作",
        effects: { mood: 2, social: 3, flags: { path: "工作", overseas: false } },
        result: "你关掉了申请系统，把雅思书收进箱子。你告诉自己：不是放弃，是暂时不去。以后还有机会。"
      }
    ]
  },
  {
    id: "civil_sprint",
    fixed: true,
    sem: 6,
    turn: 0,
    cond: (s) => s.flags.path === "考公",
    title: "国考报名：岗位表比专业课还厚",
    scene: "图书馆 · 考公自习区 · 十月",
    kicker: "国考报名",
    text: "国考岗位表出来了，你翻了一晚上。能报的岗位不多，限专业的更少。爸妈在电话里说“报个稳的”，你看着屏幕上的“竞争比 1:387”，不知道该稳到哪里去。",
    choices: [
      {
        label: "报一个竞争比没那么夸张的岗位",
        hint: "学习 +3 · 心情 +2 · 成功率提升",
        effects: { study: 3, mood: 2, knowledge: 2, flags: { civilSafe: true } },
        result: "你选了一个偏远一些但竞争比低很多的岗位。室友说你“怂”，你说：“先上岸再说。”"
      },
      {
        label: "冲热门岗位，赌一把",
        hint: "学习 +2 · 心情 +4 · 高风险",
        effects: { study: 2, mood: 4, flags: { civilSafe: false } },
        result: "你报了那个 1:387 的岗位，截图发了朋友圈。有人点赞，有人评论“勇士”。你关掉手机，开始刷题。"
      },
      {
        label: "同时准备省考和国考",
        hint: "学习 +4 · 精力 -10 · 心情 -2",
        effects: { study: 4, energy: -10, mood: -2, flags: { civilSafe: true } },
        result: "你给自己排了两套复习计划，国考省考一起准备。每天的时间被切得很碎，但你觉得多一条路总没错。"
      }
    ]
  },
  {
    id: "kaoyan_exam",
    fixed: true,
    sem: 6,
    turn: 3,
    cond: (s) => s.flags.path === "考研",
    title: "考研初试：两天，四张卷子",
    scene: "无锡 · 考研考点 · 十二月",
    kicker: "考研初试",
    text: "考点在另一所学校，你提前一天去看了考场。酒店隔音不好，隔壁的人在背政治。你躺在床上，把专业课的框架在脑子里过了一遍，凌晨一点才睡着。",
    choices: [
      {
        label: "正常发挥，把会的都写上",
        hint: "成功率 60% · 学识加成",
        roll: 0.6,
        rollStat: "knowledge",
        success: {
          text: "考完最后一门，你走出考场，发现天已经黑了。你估了分，觉得有希望进复试。回酒店的路上，你给自己买了一杯热奶茶，那是两个月来第一次喝。",
          effects: { mood: 9, energy: -10, flags: { kaoyan: "pass" } }
        },
        fail: {
          text: "数学比想象中难，最后两道大题空了一半。考完你坐在台阶上，看着别人对答案，没有走过去。成绩出来，差了几分，你决定先找工作。",
          effects: { mood: -9, energy: -10, flags: { kaoyan: "fail" } }
        }
      },
      {
        label: "搏一搏，把不会的也编满",
        hint: "成功率 45% · 高风险高回报",
        roll: 0.45,
        rollStat: "knowledge",
        success: {
          text: "你把所有能写的都写满了，连答题卡边角都没放过。成绩出来，居然过了线。你盯着屏幕看了很久，觉得自己可能是被运气选中的那一个。",
          effects: { mood: 12, energy: -10, flags: { kaoyan: "pass" } }
        },
        fail: {
          text: "你写满了，但写偏了。成绩出来，专业课比预估低了二十分。你在自习室坐到熄灯，然后开始改简历。",
          effects: { mood: -10, energy: -10, flags: { kaoyan: "fail" } }
        }
      },
      {
        label: "弃考，承认自己没准备好",
        hint: "心情 -5 · 社交 +3 · 转向工作",
        effects: { mood: -5, social: 3, flags: { kaoyan: "fail", path: "工作" } },
        result: "考试那天，你没有去考点。你在宿舍睡到中午，然后打开招聘网站。你对自己说：不是逃，是想清楚了。"
      }
    ]
  },
  {
    id: "civil_exam",
    fixed: true,
    sem: 6,
    turn: 3,
    cond: (s) => s.flags.path === "考公",
    title: "省考：行测涂卡，申论写满",
    scene: "无锡 · 省考考点 · 十二月",
    kicker: "公务员笔试",
    text: "考场里坐满了人，年龄从二十出头到三十多。你带了两个准考证、三支笔和一块巧克力。行测开考后，你发现数量关系比模考难，资料分析还有两篇没做完。",
    choices: [
      {
        label: "稳住，把能拿的分都拿到",
        hint: "成功率 55% · 学识加成",
        roll: 0.55,
        rollStat: "knowledge",
        success: {
          text: "你进了面试。面试那天，你穿了一套不太合身的西装，回答问题时手心全是汗。最后综合成绩出来，你上岸了。妈妈在电话里哭了，你反而很平静。",
          effects: { mood: 12, energy: -8, flags: { civil: true } }
        },
        fail: {
          text: "你差了三分进面。你把成绩单截图存进相册，标题写“下次”。然后你打开招聘网站，决定先找份工作。",
          effects: { mood: -8, energy: -8, flags: { civil: false, path: "工作" } }
        }
      },
      {
        label: "裸考试水，主要来感受气氛",
        hint: "成功率 25% · 心情 +4",
        roll: 0.25,
        success: {
          text: "你几乎没怎么准备，居然压线进了面试。你不敢相信，又去查了一遍排名。后来你说，那可能是你人生中最幸运的一次。",
          effects: { mood: 10, flags: { civil: true } }
        },
        fail: {
          text: "你裸考得很彻底，行测只做了一半。走出考场时，你反而很轻松：至少知道自己不适合裸考。",
          effects: { mood: 2, study: 1, flags: { civil: false } }
        }
      },
      {
        label: "弃考，去参加一场面试",
        hint: "社交 +3 · 心情 +3 · 转向工作",
        effects: { social: 3, mood: 3, flags: { civil: false, path: "工作" } },
        result: "考试那天，你去了一家公司面试。HR 问你职业规划，你第一次答得那么流畅。走出写字楼时，你觉得自己可能更适合这里。"
      }
    ]
  },

  /* ---------------- 大四下 ---------------- */
  {
    id: "kaoyan_retest",
    fixed: true,
    sem: 7,
    turn: 0,
    cond: (s) => s.flags.path === "考研" && s.flags.kaoyan === "pass",
    title: "复试：从初试第一到最后一场面试",
    scene: "目标院校 · 复试现场 · 三月",
    kicker: "考研复试",
    text: "初试过线只是入场券。你拖着行李箱去了另一座城市，住在考点附近的快捷酒店。面试教室门口排着长队，每个人手里都攥着一沓材料。",
    choices: [
      {
        label: "认真准备，把项目和研究计划讲清楚",
        hint: "成功率 80% · 学识加成",
        roll: 0.8,
        rollStat: "knowledge",
        success: {
          text: "老师问了你本科做过的项目，你讲得很细。面试结束，其中一位老师说“基础不错”。四月，拟录取名单出来，你的名字在上面。",
          effects: { mood: 12, energy: -8, flags: { kaoyan: "pass", retest: true } }
        },
        fail: {
          text: "你太紧张，把准备好的研究计划讲乱了。最后你被调剂到了另一所学校，虽然不是第一志愿，但也是不错的去处。",
          effects: { mood: -5, energy: -8, flags: { kaoyan: "adjust" } }
        }
      },
      {
        label: "提前联系导师，争取印象分",
        hint: "社交 +4 · 成功率 75%",
        effects: { social: 4, energy: -4 },
        roll: 0.75,
        rollStat: "social",
        success: {
          text: "你提前给导师发了邮件，附上成绩单和项目经历。导师回了一句“复试见”。面试时，他果然问了你邮件里提到的东西。",
          effects: { mood: 10, social: 3, flags: { kaoyan: "pass", retest: true } }
        },
        fail: {
          text: "导师没有回复。面试时你发挥一般，最后被调剂。你有点失落，但调剂结果出来后，你发现那所学校也不错。",
          effects: { mood: -4, flags: { kaoyan: "adjust" } }
        }
      },
      {
        label: "放弃复试，直接去找工作",
        hint: "心情 -5 · 社交 +3 · 转向工作",
        effects: { mood: -5, social: 3, flags: { path: "工作", kaoyan: "fail" } },
        result: "你把复试通知截图存进相册，然后打开了招聘网站。你告诉自己：不是没考上，是我不想去了。"
      }
    ]
  },
  {
    id: "spring_plan",
    fixed: true,
    sem: 7,
    turn: 0,
    title: "最后一学期：把悬念收尾",
    scene: "蠡湖校区 · 三月 · 玉兰开了",
    kicker: "毕业前",
    text: (s) => {
      if (s.flags.path === "考研" && s.flags.kaoyan === "pass") return "初试过线后，你开始准备复试。图书馆里的人换了一批，你的座位还在。玉兰开了，风里有一点春天的甜味。";
      if (s.flags.path === "考研") return "初试成绩不理想，你一边准备春招，一边犹豫要不要二战。三月的校园很热闹，只有你的心里还悬着一件事。";
      if (s.flags.path === "工作" && !s.flags.offer) return "秋招没有拿到满意的 offer，你开始跑春招。宿舍里有人签了三方，有人准备读研，你还在修改简历。";
      if (s.flags.path === "工作") return "三方已经签了，毕业论文还没动。你一边实习，一边在学校和公司之间来回跑，地铁一号线坐成了通勤专线。";
      if (s.flags.path === "保研") return "保研已经尘埃落定。你忽然多出很多时间，开始重新逛校园，发现自己有好多地方没去过。";
      if (s.flags.path === "出国") return "offer 已经拿到，你在准备签证和行前清单。妈妈开始往你的行李箱里塞东西，从感冒药到电饭煲。";
      if (s.flags.path === "考公") return "省考成绩出来了。你一边准备面试，一边写毕业论文，时间被切成了一小块一小块。";
      return "最后一学期，你忽然发现校园里的每一处都变得好看。你开始拍照，开始珍惜。";
    },
    choices: [
      {
        label: "继续冲刺：复试 / 春招 / 面试，最后一搏",
        hint: "学习 +3 · 精力 -10 · 心情 -2",
        effects: { study: 3, energy: -10, mood: -2, knowledge: 2, flags: { finalSprint: true } },
        result: "你把最后一学期过成了高三。图书馆、食堂、宿舍三点一线，手机里全是闹钟。你告诉自己：再撑一下，就一下。"
      },
      {
        label: "找一份保底工作，先让自己有退路",
        hint: "社交 +4 · 存款 +500 · 保底 offer",
        show: (s) => s.flags.path === "考研" || s.flags.path === "考公" || s.flags.path === "工作",
        effects: { social: 4, money: 500, flags: { offer: "soe", path: "工作" } },
        result: "你签了一家还不错的公司，薪资不高但稳定。签完三方，你给爸妈打了电话，他们说“挺好”。你心里那块石头，终于落下去一点。"
      },
      {
        label: "享受最后半年，把没做的事补上",
        hint: "心情 +10 · 精力 +5 · 存款 -200",
        effects: { mood: 10, energy: 5, money: -200, flags: { enjoySenior: true, freelance: true } },
        result: "你去了鼋头渚，坐了游船，在南长街吃了小笼包。你开始和室友拍很多照片，好像这样就能把时间留住。"
      }
    ]
  },
  {
    id: "thesis",
    fixed: true,
    sem: 7,
    turn: 2,
    title: "毕业设计：从选题到致谢",
    scene: "实验室 / 工作室 · 四月",
    kicker: "毕业设计",
    text: "导师给你发来毕设题目，附件里还有一份格式规范。你打开一看，光参考文献格式就有三页。你回头看了看室友，他也在看同一份文件，表情和你一样。",
    choices: [
      {
        label: "认真做，把四年学到的东西都用上",
        hint: "学习 +3 · 学识 +4 · 精力 -12",
        effects: { study: 3, knowledge: 4, energy: -12, flags: { thesisGood: true } },
        result: "你每周都去实验室，数据做得扎实，图也画得认真。导师看了初稿，说“可以”。你差点把这句话截图保存。"
      },
      {
        label: "抱师兄大腿，跟着他的框架走",
        hint: "社交 +4 · 学习 +1 · 心情 +3",
        effects: { social: 4, study: 1, mood: 3, flags: { thesisOk: true } },
        result: "师兄把他当年的代码和数据给了你，你改了两周，终于跑通。答辩前，他请你吃了顿饭，说：“别慌，老师不会为难你的。”"
      },
      {
        label: "复制粘贴，先交上去再说",
        hint: "成功率 45% · 风险：查重",
        roll: 0.45,
        success: {
          text: "查重率惊险地过了线。你松了口气，但答辩时老师问了两个问题，你答得磕磕绊绊。好在最后还是有惊无险。",
          effects: { mood: 3, flags: { thesisOk: true } }
        },
        fail: {
          text: "查重报告出来，重复率 38%。导师把你叫到办公室，沉默了很久，说：“重写。”你看着窗外，第一次觉得毕业离自己很远。",
          effects: { mood: -12, flags: { thesisFail: true } }
        }
      }
    ]
  },
  {
    id: "defense",
    fixed: true,
    sem: 7,
    turn: 4,
    title: "答辩：五分钟讲完四年",
    scene: "教学楼 · 答辩教室 · 五月",
    kicker: "毕业答辩",
    text: "答辩教室里坐着三位老师，其中一位一直在翻你的论文。你站在讲台上，PPT 第一页是你的名字、学号和题目。你深吸一口气，点了下一页。",
    choices: [
      {
        label: "认真准备，把每个问题都预演一遍",
        hint: "成功率 85% · 学识加成",
        roll: 0.85,
        rollStat: "knowledge",
        success: {
          text: "你讲了十二分钟，老师问了四个问题，你答出了三个半。最后老师说“可以了”，你鞠了一躬，走出教室，发现手心全是汗。",
          effects: { mood: 10, energy: -6, flags: { defensePass: true } }
        },
        fail: {
          text: "老师问了一个你完全没准备的问题，你支支吾吾了半分钟。最后虽然过了，但被要求修改后再提交。你在致谢里加了一句：感谢老师的耐心。",
          effects: { mood: -4, flags: { defensePass: true, thesisRevise: true } }
        }
      },
      {
        label: "临场发挥，靠嘴把逻辑圆回来",
        hint: "成功率 55% · 心情 +2",
        roll: 0.55,
        rollStat: "social",
        success: {
          text: "你讲得不算严谨，但故事讲得很顺。老师笑着说：“你这个思路挺有意思。”你松了口气，知道自己赌赢了。",
          effects: { mood: 8, flags: { defensePass: true } }
        },
        fail: {
          text: "老师连续追问了三个“为什么”，你答不上来。答辩组给了你“修改后通过”，但要求延期提交。你在走廊里站了很久。",
          effects: { mood: -8, flags: { thesisFail: true } }
        }
      },
      {
        label: "提前找导师救场，把风险降到最低",
        hint: "社交 +3 · 成功率 75%",
        effects: { social: 3, energy: -4 },
        roll: 0.75,
        rollStat: "social",
        success: {
          text: "导师提前帮你捋了一遍论文，还替你跟答辩老师打了招呼。答辩很顺利，你第一次觉得，有个靠谱的导师真的很重要。",
          effects: { mood: 8, flags: { defensePass: true } }
        },
        fail: {
          text: "导师尽力了，但你的论文确实有硬伤。答辩组让你回去补实验，毕业延期半年。你看着导师，他叹了口气，说：“我陪你再走一遍。”",
          effects: { mood: -10, flags: { thesisFail: true } }
        }
      }
    ]
  },
  {
    id: "graduation",
    fixed: true,
    sem: 7,
    turn: 5,
    title: "毕业：把学士帽抛向天空",
    scene: "蠡湖校区 · 图书馆前 · 六月",
    kicker: "毕业季",
    text: (s) => `毕业典礼那天，图书馆前的草坪站满了人。你穿着学士服，排队等着拍照。风把帽子吹歪了，你伸手扶了一下。四年像一条很长的走廊，你终于走到了尽头。`,
    choices: [
      {
        label: "和室友拍一张正经的合影",
        hint: "心情 +10 · 社交 +4 · 存款 -100",
        effects: { mood: 10, social: 4, money: -100, flags: { graduated: true, photo: true } },
        result: "你们在图书馆前拍了一张正经的合影，又拍了一张搞怪的。快门按下的瞬间，你忽然想起大一报到那天，大家还都不认识。"
      },
      {
        label: "去吃最后一顿散伙饭，喝到微醺",
        hint: "心情 +8 · 社交 +6 · 存款 -150",
        effects: { mood: 8, social: 6, money: -150, flags: { graduated: true, dinner: true } },
        result: "散伙饭吃到十点，有人哭了，有人还在讲大一的笑话。你喝了两瓶啤酒，回去的路上扶着曲水桥的栏杆，看了很久的湖面。"
      },
      {
        label: "一个人去曲水桥，和四年告别",
        hint: "心情 +6 · 精力 +2",
        effects: { mood: 6, energy: 2, flags: { graduated: true, alone: true } },
        result: "你一个人走到曲水桥上，站了很久。湖面上有晚归的鸟，远处的图书馆还亮着灯。你没有拍照，只是把这一刻记在心里。"
      }
    ]
  }
];
