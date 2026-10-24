/* =========================================================
   扩展固定节点：六回合学期里的中段选择
   ========================================================= */

JNU_FIXED.push(
  {
    id: "first_midterm",
    fixed: true,
    sem: 0,
    turn: 3,
    title: "第一次小测：高数只考了 58",
    scene: "教学楼 · 高数小测 · 十月",
    kicker: "第一次小测",
    text: "高数第一次小测发下来，58 分。班里一半人不及格，老师站在讲台上说：“这只是摸底，别慌。”你看着卷子上的红叉，忽然觉得大学并没有比高三轻松。",
    choices: [
      {
        label: "认真订正，每天多学一小时",
        hint: "学习 +2 · 学识 +2 · 精力 -5",
        effects: { study: 2, knowledge: 2, energy: -5, mood: 2 },
        result: "你把错题抄了一遍，又找了十道类似的题。两周后的第二次小测，你考了 76 分。分数不高，但你知道自己在往上走。"
      },
      {
        label: "找学霸补课，请他喝奶茶",
        hint: "学识 +3 · 社交 +2 · 存款 -50",
        effects: { knowledge: 3, social: 2, money: -50, study: 1 },
        result: "学霸用一晚上给你讲明白了极限的定义。你请他喝了一杯奶茶，他说明天继续。你忽然觉得，大学里的朋友有时候比老师还管用。"
      },
      {
        label: "安慰自己：只是小测，期末再努力",
        hint: "心情 +4 · 学习 -1",
        effects: { mood: 4, study: -1 },
        result: "你把卷子塞进书包最底层，去食堂吃了一顿好的。期末还有两个月，你决定先把今天过好。"
      }
    ]
  },
  {
    id: "major_track",
    fixed: true,
    sem: 2,
    turn: 2,
    title: "专业方向：你开始知道自己想做什么了吗",
    scene: "学院楼 · 专业导论课 · 大二上",
    kicker: "专业分流",
    text: (s) => `大二上，${s.player.major} 的课程开始分方向。老师在课上讲了三件事：有人准备读研，有人准备进企业，有人想走一条交叉的路。你坐在教室中间，第一次认真想“以后靠什么吃饭”这个问题。`,
    choices: [
      {
        label: "走科研路线：进实验室、准备读研",
        hint: "学识 +4 · 精力 -6 · 科研入门",
        effects: { knowledge: 4, energy: -6, study: 1, flags: { research: true, track: "科研" } },
        result: "你联系了导师，开始每周去实验室。第一次组会你几乎听不懂，但你把每个听不懂的词都记了下来。"
      },
      {
        label: "走工程路线：做项目、找实习",
        hint: "社交 +3 · 学识 +2 · 工程实践",
        effects: { social: 3, knowledge: 2, flags: { track: "工程" } },
        result: "你加入了一个课程项目，负责把大家做的东西整合起来。你发现自己不一定是技术最强的，但很擅长让事情往前推进。"
      },
      {
        label: "走交叉路线：辅修、竞赛、作品集都试试",
        hint: "心情 +4 · 学习 +1 · 交叉探索",
        effects: { mood: 4, study: 1, flags: { track: "交叉" } },
        result: "你选了一门跨学院的课，认识了一群和你专业完全不同的人。你们聊了一下午，你忽然觉得未来不一定只有一条路。"
      }
    ]
  },
  {
    id: "path_check_baoyan",
    fixed: true,
    sem: 4,
    turn: 3,
    cond: (s) => s.flags.path === "保研",
    title: "保研进度：绩点、论文和一场没完的焦虑",
    scene: "图书馆 · 保研自习区 · 大三上",
    kicker: "保研中段",
    text: "保研群里每天都有人在问“这个竞赛算不算加分”。你的绩点够线，但论文还没有着落。学长说，大三上是最后能补材料的窗口。",
    choices: [
      {
        label: "再冲一篇论文或一个竞赛",
        hint: "学识 +5 · 精力 -10 · 心情 -3",
        effects: { knowledge: 5, energy: -10, mood: -3, flags: { research: true } },
        result: "你去找导师要了一个小课题，又拉了两个同学组队。接下来的一个月，你几乎没有周末。"
      },
      {
        label: "稳住绩点，别在最后翻车",
        hint: "学习 +3 · 学识 +2 · 心情 +2",
        effects: { study: 3, knowledge: 2, mood: 2 },
        result: "你把选修课退了两门，把时间留给核心课。绩点没有暴涨，但稳住了。你开始明白，保研有时候拼的是谁少犯错。"
      },
      {
        label: "加保研群刷一晚上信息",
        hint: "心情 -4 · 学识 +1",
        effects: { mood: -4, knowledge: 1, energy: -2 },
        result: "你刷到凌晨一点，收藏了三十条经验帖，越看越焦虑。第二天起床，你发现自己什么也没做。"
      }
    ]
  },
  {
    id: "path_check_kaoyan",
    fixed: true,
    sem: 4,
    turn: 3,
    cond: (s) => s.flags.path === "考研",
    title: "考研中段：模拟卷上的分数",
    scene: "图书馆 · 考研自习室 · 大三上",
    kicker: "考研中段",
    text: "你做了第一套完整的考研模拟卷，数学 78，英语 61，政治还没开始背。自习室里有人已经在刷第三轮真题，你忽然不确定自己是不是开始得太晚。",
    choices: [
      {
        label: "认真复盘，把错题按类型整理",
        hint: "学习 +3 · 学识 +3 · 精力 -8",
        effects: { study: 3, knowledge: 3, energy: -8, flags: { kaoyanPrep: true } },
        result: "你把错题分了五类，发现自己不是不会，而是总在同一个地方粗心。第二次模考，你多了 21 分。"
      },
      {
        label: "换一所更稳的目标院校",
        hint: "心情 +4 · 学习 +1 · 心态调整",
        effects: { mood: 4, study: 1, flags: { kaoyanSafe: true } },
        result: "你把目标院校从“梦校”换成了“够得着的好学校”。心里有点不甘，但睡觉终于踏实了。"
      },
      {
        label: "崩溃一天，明天再学",
        hint: "心情 -3 · 精力 +5",
        effects: { mood: -3, energy: 5 },
        result: "你在宿舍躺了一天，刷完了半部剧。晚上你忽然有点愧疚，但第二天还是回到了自习室。"
      }
    ]
  },
  {
    id: "path_check_work",
    fixed: true,
    sem: 4,
    turn: 3,
    cond: (s) => s.flags.path === "工作",
    title: "就业中段：简历上还缺一段实习",
    scene: "商学院 · 就业指导中心 · 大三上",
    kicker: "就业中段",
    text: "就业指导老师看了你的简历，说：“项目经历不错，但还缺一段像样的实习。”你打开招聘软件，发现大三家教、运营、测试的岗位都在招人。",
    choices: [
      {
        label: "冲一段大厂实习，哪怕从基础做起",
        hint: "存款 +1200 · 学识 +3 · 精力 -8 · 实习 +1",
        effects: { money: 1200, knowledge: 3, energy: -8, inc: { internship: 1 }, flags: { bigIntern: true } },
        result: "你投了二十份简历，面了五家，最后进了一家大厂做实习生。每天通勤两小时，但你第一次知道真实项目是怎么跑的。"
      },
      {
        label: "整理作品集和项目，把经历讲清楚",
        hint: "学识 +3 · 社交 +2 · 作品集",
        effects: { knowledge: 3, social: 2, flags: { portfolio: true } },
        result: "你把做过的课程项目重新整理了一遍，写成了三个案例。老师看完说：“这才像找工作的样子。”"
      },
      {
        label: "先享受大学生活，工作以后再说",
        hint: "心情 +6 · 精力 +4",
        effects: { mood: 6, energy: 4 },
        result: "你决定这个学期不找实习，去看了两场演出，学会了做三道菜。你安慰自己：以后要工作一辈子，不差这半年。"
      }
    ]
  },
  {
    id: "path_check_abroad",
    fixed: true,
    sem: 4,
    turn: 3,
    cond: (s) => s.flags.path === "出国",
    title: "申请中段：雅思、推荐信和汇率",
    scene: "图书馆 · 靠窗 · 大三上",
    kicker: "出国中段",
    text: "你的雅思还差 0.5 分，推荐信老师答应了但还没写，网申系统下个月开放。你打开汇率页面，又迅速关掉。",
    choices: [
      {
        label: "刷雅思，冲一个能用的分数",
        hint: "学识 +4 · 学习 +2 · 存款 -500",
        effects: { knowledge: 4, study: 2, money: -500 },
        result: "你报了一对一的口语课，每天对着镜子练 Part 2。第二次考试，你终于到了目标分。"
      },
      {
        label: "找老师写推荐信，把材料补齐",
        hint: "社交 +4 · 心情 +2",
        effects: { social: 4, mood: 2 },
        result: "老师答应得很爽快，还帮你改了一段个人陈述。你走出办公室，觉得申请这件事终于有了实感。"
      },
      {
        label: "重新考虑：也许先工作几年更合适",
        hint: "心情 +3 · 学习 +1 · 犹豫",
        effects: { mood: 3, study: 1, flags: { abroadDoubt: true } },
        result: "你算了一笔账：学费、生活费、机会成本。你没有立刻放弃，但开始认真考虑另一条路。"
      }
    ]
  },
  {
    id: "path_check_civil",
    fixed: true,
    sem: 4,
    turn: 3,
    cond: (s) => s.flags.path === "考公",
    title: "考公中段：行测正确率卡在 60%",
    scene: "图书馆 · 考公自习区 · 大三上",
    kicker: "考公中段",
    text: "你刷了半个月行测，正确率卡在 60%。资料分析做得慢，数量关系干脆放弃。旁边的同学已经能稳定在 75%，你开始怀疑自己是不是不适合考试。",
    choices: [
      {
        label: "刷完一套行测，按模块复盘",
        hint: "学习 +3 · 学识 +2 · 精力 -8",
        effects: { study: 3, knowledge: 2, energy: -8, flags: { civilPrep: true } },
        result: "你把错题按模块统计，发现资料分析只是公式不熟。针对性练了一周，正确率到了 70%。"
      },
      {
        label: "报一个线下班，系统学一遍",
        hint: "存款 -3000 · 学习 +4 · 学识 +3",
        effects: { money: -3000, study: 4, knowledge: 3, flags: { civilPrep: true } },
        result: "你报了一个周末班，老师把数量关系讲得像段子。你第一次觉得，行测也可以不那么痛苦。"
      },
      {
        label: "动摇：也许该换一条赛道",
        hint: "心情 +3 · 学习 -1 · 犹豫",
        effects: { mood: 3, study: -1, flags: { civilDoubt: true } },
        result: "你关掉题库，去操场走了两圈。你没有决定放弃，只是允许自己犹豫一会儿。"
      }
    ]
  },
  {
    id: "thesis_proposal",
    fixed: true,
    sem: 7,
    turn: 1,
    title: "毕设开题：三个题目，三种人生",
    scene: "学院楼 · 导师办公室 · 大四下",
    kicker: "开题",
    text: "导师给你三个毕设方向：一个是他最熟悉的课题，稳；一个是你感兴趣但风险高的方向；还有一个是“稍微水一点、但一定能毕业”的题目。你拿着那张纸，忽然觉得这不只是选题。",
    choices: [
      {
        label: "选导师最熟悉的方向，稳一点",
        hint: "学识 +2 · 心情 +2 · 稳妥",
        effects: { knowledge: 2, mood: 2, flags: { thesisStable: true } },
        result: "你选了最稳的题目。导师满意地点点头，给你发了一摞参考文献。你知道这篇论文不会惊艳，但应该能顺利毕业。"
      },
      {
        label: "选自己感兴趣但风险高的方向",
        hint: "心情 +5 · 精力 -4 · 冒险",
        effects: { mood: 5, energy: -4, flags: { thesisAmbitious: true } },
        result: "你选了那个没人做过的方向。导师看了你一眼，说：“有想法，但你要做好失败的准备。”你说：“我想试试。”"
      },
      {
        label: "换一个更容易毕业的题目",
        hint: "学习 +2 · 心情 +2 · 保底",
        effects: { study: 2, mood: 2, flags: { thesisSafe: true } },
        result: "你选了一个工作量小、数据好找的题目。同学说你“太现实”，你说：“先毕业，再谈理想。”"
      }
    ]
  }
);
