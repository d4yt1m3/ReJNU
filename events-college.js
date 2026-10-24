/* =========================================================
   学院专属随机事件：让 20 个学院各有各的日常
   ========================================================= */

JNU_RANDOM.push(
  {
    id: "cosmetics_lab",
    title: "化妆品配方实验：一支口红的色号",
    scene: "化工学院 · 化妆品实验室",
    kicker: "专业实验",
    minSem: 0,
    maxSem: 6,
    college: "chem",
    text: "实验课上，老师让你们调一支正红色口红。你称量蜡、油和色粉，加热搅拌，最后倒进模具。脱模的时候，颜色比想象中深了一点。",
    choices: [
      {
        label: "认真记录配方，再调一版",
        hint: "学识 +4 · 学习 +1 · 心情 +2",
        effects: { knowledge: 4, study: 1, mood: 2, energy: -4 },
        result: "你调整了色粉比例，第二支的颜色终于对了。老师把你的配方拍下来，说可以放进课程案例。"
      },
      {
        label: "把样品带给室友试色",
        hint: "社交 +4 · 心情 +5 · 存款 -30",
        effects: { social: 4, mood: 5, money: -30 },
        result: "室友们围着你试色，讨论了半天“适不适合黄皮”。你忽然觉得，化妆品行业确实有市场。"
      },
      {
        label: "偷偷多倒一支，留作纪念",
        hint: "心情 +3 · 风险",
        effects: { mood: 3, flags: { warning: true } },
        result: "你把多出来的一支装进口袋，被老师看见了。老师没发火，只说：“下次记得先申请。”"
      }
    ]
  },
  {
    id: "env_sample",
    title: "环境采样：太湖边的一瓶水",
    scene: "长广溪湿地 · 环境监测点",
    kicker: "专业实践",
    minSem: 1,
    maxSem: 6,
    college: "env",
    text: "环境监测课组织去长广溪采样。你穿着救生衣，蹲在岸边把采样瓶按进水里。水比想象中清，但瓶底还是沉了一层细泥。",
    choices: [
      {
        label: "认真记录水温和浊度，按规范保存",
        hint: "学识 +4 · 精力 -8 · 学习 +1",
        effects: { knowledge: 4, energy: -8, study: 1 },
        result: "你按规范贴好标签，把样品放进冷藏箱。回去测出来，氨氮比上学期低了一点，你居然有点欣慰。"
      },
      {
        label: "拍几张照片，发一条环保朋友圈",
        hint: "社交 +4 · 心情 +4",
        effects: { social: 4, mood: 4 },
        result: "你拍了一张湖面和采样瓶的照片，配文“今天替太湖做了个体检”。评论区有人问：水能喝吗？你回：不能。"
      },
      {
        label: "嫌麻烦，让同组的人采",
        hint: "精力 +2 · 社交 -2",
        effects: { energy: 2, social: -2 },
        result: "你站在岸边看同组的人忙活，最后报告上还是署了你的名字。你有点心虚，但没说什么。"
      }
    ]
  },
  {
    id: "metal_working",
    title: "金工实习：车一个不太圆的锤子",
    scene: "机械学院 · 金工实习车间",
    kicker: "金工实习",
    minSem: 0,
    maxSem: 5,
    college: "mech",
    text: "金工实习第一课，老师发给你一块圆柱形铁料，让你车一个锤子。车床一开，铁屑飞出来，你的手有点抖。",
    choices: [
      {
        label: "认真车完，接受它不圆的事实",
        hint: "学识 +4 · 精力 -10 · 心情 +3",
        effects: { knowledge: 4, energy: -10, mood: 3 },
        result: "你的锤子柄有点歪，锤头也不够圆。老师拿起来看了看，说“能用”。你把锤子带回宿舍，后来一直放在书架最上层。"
      },
      {
        label: "找同学帮忙，两个人一起磨",
        hint: "社交 +4 · 学识 +2 · 精力 -6",
        effects: { social: 4, knowledge: 2, energy: -6 },
        result: "你和同学轮流摇手柄，最后磨出了一个还算像样的锤子。你们在锤柄上刻了各自的名字。"
      },
      {
        label: "摸鱼，等下课去吃饭",
        hint: "心情 +4 · 精力 +2 · 学识 -1",
        effects: { mood: 4, energy: 2, knowledge: -1 },
        result: "你在车间角落站了一节课，回宿舍路上买了个烤红薯。锤子没做完，下周还得补。"
      }
    ]
  },
  {
    id: "pharmacy_lab",
    title: "药剂实验：一颗药片的崩解时间",
    scene: "生命健康学院 · 药剂实验室",
    kicker: "专业实验",
    minSem: 1,
    maxSem: 6,
    college: "life",
    text: "药剂实验课上，你们做了一片普通的片剂，测它的崩解时间。老师强调：这个数字不是给考试看的，是给病人看的。",
    choices: [
      {
        label: "认真测三次，取平均值",
        hint: "学识 +5 · 学习 +1 · 精力 -6",
        effects: { knowledge: 5, study: 1, energy: -6 },
        result: "你测了三次，数据有一点波动。老师帮你分析原因，你第一次意识到“重复实验”不是一句空话。"
      },
      {
        label: "和同学讨论处方，顺便吐槽",
        hint: "社交 +3 · 心情 +3 · 学识 +2",
        effects: { social: 3, mood: 3, knowledge: 2 },
        result: "你们讨论了半天崩解剂的比例，最后发现老师给的处方已经是最优解。你们决定尊重科学。"
      },
      {
        label: "快速做完，提前去食堂",
        hint: "心情 +4 · 精力 +2 · 学识 -1",
        effects: { mood: 4, energy: 2, knowledge: -1 },
        result: "你十分钟就测完了，数据随便记了两笔。老师看了一眼你的记录，没说话。"
      }
    ]
  },
  {
    id: "math_proof",
    title: "数学证明：第三页开始，你发现前提错了",
    scene: "数学学院 · 自习室",
    kicker: "证明题",
    minSem: 0,
    maxSem: 6,
    college: "math",
    text: "你花了两天写一道证明题，写到第三页，忽然发现第一步的假设就错了。你盯着草稿纸，想把前面两页吃掉。",
    choices: [
      {
        label: "从头再来，把漏洞补上",
        hint: "学识 +5 · 精力 -10 · 学习 +1",
        effects: { knowledge: 5, energy: -10, study: 1, mood: 2 },
        result: "你重新写了一遍，这次每一步都检查了两遍。写完最后一个“证毕”，你在自习室伸了个懒腰，觉得世界很安静。"
      },
      {
        label: "找同学讨论，看看有没有别的路",
        hint: "社交 +3 · 学识 +3 · 心情 +2",
        effects: { social: 3, knowledge: 3, mood: 2 },
        result: "同学看了一眼，说：“你这个前提可以用另一个定理绕过去。”你们在黑板上推了一小时，终于通了。"
      },
      {
        label: "放弃，换一道简单点的题",
        hint: "心情 +4 · 精力 +4 · 学习 -1",
        effects: { mood: 4, energy: 4, study: -1 },
        result: "你把草稿纸揉成一团，换了一道课本上的习题。写完只用了半小时，你有点不甘心。"
      }
    ]
  },
  {
    id: "optics_lab",
    title: "光学实验：激光穿过一片透镜",
    scene: "光电学院 · 光学实验室",
    kicker: "专业实验",
    minSem: 0,
    maxSem: 6,
    college: "optics",
    text: "光学实验课上，你要把激光调过三片透镜，最后打在屏幕中心。你戴着护目镜，拧了半天旋钮，光斑还是偏在左上角。",
    choices: [
      {
        label: "慢慢调，直到光斑落在中心",
        hint: "学识 +5 · 精力 -8 · 心情 +3",
        effects: { knowledge: 5, energy: -8, mood: 3 },
        result: "你调了四十分钟，光斑终于落在中心。那一刻你忽然理解了“光路”两个字，不只是课本上的线。"
      },
      {
        label: "拍下光斑，发个朋友圈",
        hint: "心情 +4 · 社交 +2",
        effects: { mood: 4, social: 2 },
        result: "你拍了一张红色光斑的照片，配文“追光的人”。同学在下面评论：调好了吗？你回：还没有。"
      },
      {
        label: "按步骤抄数据，差不多就行",
        hint: "学识 +2 · 精力 +2",
        effects: { knowledge: 2, energy: 2 },
        result: "你按实验指导书抄了数据，报告写得很整齐。老师看不出问题，但你心里知道，自己没有真的调通。"
      }
    ]
  },
  {
    id: "english_corner",
    title: "外语角：第一次用英语讲完整件事",
    scene: "外国语学院 · 外语角",
    kicker: "外语角",
    minSem: 0,
    maxSem: 6,
    college: "foreign",
    text: "每周三晚上的外语角，今天的话题是“你最后悔的一个决定”。你坐在一圈人里，脑子里把英文句子过了三遍，还是没敢开口。",
    choices: [
      {
        label: "举手，磕磕绊绊讲完自己的故事",
        hint: "社交 +5 · 心情 +5 · 学识 +2",
        effects: { social: 5, mood: 5, knowledge: 2 },
        result: "你讲得不太流利，中间还卡了两次，但大家都听懂了。结束时，一个交换生说你的故事很有趣。你忽然不怕开口了。"
      },
      {
        label: "当听众，记下好用的表达",
        hint: "学识 +4 · 学习 +1",
        effects: { knowledge: 4, study: 1 },
        result: "你记了满满一页表达，回宿舍后整理成了笔记。虽然没有开口，但你觉得自己离开口近了一点。"
      },
      {
        label: "提前离开，去图书馆背单词",
        hint: "学习 +2 · 心情 +2 · 社交 -1",
        effects: { study: 2, mood: 2, social: -1 },
        result: "你悄悄走了，去图书馆背了五十个单词。你知道自己不是社恐，只是还没准备好。"
      }
    ]
  },
  {
    id: "mock_court",
    title: "模拟法庭：第一次为一个人辩护",
    scene: "法学院 · 模拟法庭",
    kicker: "模拟法庭",
    minSem: 1,
    maxSem: 6,
    college: "law",
    text: "模拟法庭的案例是一个盗窃案。你被分到辩护人，要在二十分钟内说服“法官”和“陪审团”。你翻着案卷，发现证据里有一个时间漏洞。",
    choices: [
      {
        label: "抓住时间漏洞，认真辩护",
        hint: "学识 +4 · 社交 +5 · 精力 -8",
        effects: { knowledge: 4, social: 5, energy: -8, mood: 4 },
        result: "你把监控时间和证人证言对在一起，指出了一处矛盾。老师点评时说：“这个点抓得好。”你第一次觉得，法律不是背书。"
      },
      {
        label: "当书记员，把流程记清楚",
        hint: "学识 +3 · 学习 +1 · 心情 +2",
        effects: { knowledge: 3, study: 1, mood: 2 },
        result: "你负责记录庭审流程，写满了五页纸。结束后，老师说你的记录可以直接当模板。"
      },
      {
        label: "旁听，顺便观察大家的表达",
        hint: "心情 +3 · 社交 +2",
        effects: { mood: 3, social: 2 },
        result: "你坐在旁听席，看同学在台上交锋。你发现真正有说服力的，不是声音大，而是逻辑清楚。"
      }
    ]
  },
  {
    id: "chip_design",
    title: "芯片版图：指甲盖上的城市",
    scene: "集成电路学院 · 版图实验室",
    kicker: "专业实验",
    minSem: 1,
    maxSem: 6,
    college: "ic",
    text: "版图课上，你要画一个简单的反相器。放大到纳米级，每一根线都要对齐。你画到一半，发现设计规则检查报了几十个错误。",
    choices: [
      {
        label: "通宵改版图，把 DRC 清干净",
        hint: "学识 +6 · 精力 -14 · 熬夜 +1",
        effects: { knowledge: 6, energy: -14, study: 1, mood: -2, inc: { night: 1 } },
        result: "你改到凌晨三点，DRC 终于全绿。你看着屏幕上那块小小的版图，第一次觉得“中国芯”四个字离自己这么近。"
      },
      {
        label: "和同学分工，一个人查规则一个人改",
        hint: "社交 +4 · 学识 +3 · 精力 -6",
        effects: { social: 4, knowledge: 3, energy: -6 },
        result: "你们一个查手册一个改线，效率高了一倍。最后提交时，你们的版图是全班最干净的。"
      },
      {
        label: "用开源 IP 拼一个，先交作业",
        hint: "学识 +2 · 心情 +3",
        effects: { knowledge: 2, mood: 3 },
        result: "你找了一个开源模块，改了改端口就交了。老师没说什么，但你知道自己没真正画过。"
      }
    ]
  },
  {
    id: "robot_debug",
    title: "机器人调试：机械臂就是抓不准",
    scene: "智能制造学院 · 机器人实验室",
    kicker: "专业实验",
    minSem: 0,
    maxSem: 6,
    college: "smart",
    text: "你们组的机械臂要抓取一个方块，放到指定位置。试了十次，成功了两次。老师说：“先别怀疑机器人，看看你们的标定。”",
    choices: [
      {
        label: "重新标定，一遍遍调到准确",
        hint: "学识 +5 · 精力 -10 · 学习 +1",
        effects: { knowledge: 5, energy: -10, study: 1, mood: 3 },
        result: "你重新标定了相机和末端执行器，又调了抓取高度。第十三次测试，机械臂终于稳稳抓住了方块。全组鼓掌。"
      },
      {
        label: "找队友一起排查，分工看代码",
        hint: "社交 +4 · 学识 +3",
        effects: { social: 4, knowledge: 3, energy: -5 },
        result: "一个看坐标变换，一个看控制参数，最后发现是单位搞错了。你们笑了半天，把 bug 写进了组会记录。"
      },
      {
        label: "改成手动抓取，能演示就行",
        hint: "心情 +3 · 学识 -1",
        effects: { mood: 3, knowledge: -1 },
        result: "你们把自动模式关了，手动完成了演示。老师看出来了，但没有扣分，只说：“下次把自动模式调通。”"
      }
    ]
  },
  {
    id: "interaction_design",
    title: "交互原型：用户说“挺好”，然后没有下文",
    scene: "数字科技学院 · 用户体验实验室",
    kicker: "用户测试",
    minSem: 0,
    maxSem: 6,
    college: "digital",
    text: "你们的交互原型做了两周，今天请三位同学来做用户测试。第一位用户点了两下就说“挺好”，然后问能不能退出。你有点慌。",
    choices: [
      {
        label: "追问用户，找出真正的卡点",
        hint: "社交 +5 · 学识 +3 · 精力 -6",
        effects: { social: 5, knowledge: 3, energy: -6, mood: 2 },
        result: "你追问了十分钟，用户终于说：“我不知道下一步该点哪里。”你们回去把按钮层级重做了一版，测试通过率翻了一倍。"
      },
      {
        label: "熬夜重做原型，明天再测",
        hint: "精力 -10 · 作品集 · 熬夜 +1",
        effects: { energy: -10, knowledge: 3, flags: { portfolio: true }, inc: { night: 1 } },
        result: "你通宵改了一版原型，把主流程从五步减到三步。第二天测试，用户第一次说“这个顺”。"
      },
      {
        label: "接受“挺好”，把作业交了",
        hint: "心情 +3 · 学习 +1",
        effects: { mood: 3, study: 1 },
        result: "你把测试记录整理成报告，写上了“用户反馈良好”。老师给了个中等分数，你知道自己本可以做得更好。"
      }
    ]
  },
  {
    id: "uav_flight",
    title: "试飞：风比图纸更难预测",
    scene: "纤维装备学院 · 低空试验场",
    kicker: "试飞",
    minSem: 1,
    maxSem: 6,
    college: "aero",
    text: "你们做的低空飞行器第一次试飞。天气看起来不错，但操场上的风一阵一阵。学长为飞机装上电池，问你：“准备好了吗？”",
    choices: [
      {
        label: "按计划起飞，记录每一项数据",
        hint: "学识 +5 · 精力 -8 · 心情 +5",
        effects: { knowledge: 5, energy: -8, mood: 5 },
        result: "飞行器晃晃悠悠地升起来，飞了四十秒，比预期少了十秒，但数据完整。你们围在电脑前看曲线，像看一场小型奇迹。"
      },
      {
        label: "先做地面测试，稳一点",
        hint: "学识 +3 · 学习 +1 · 心情 +2",
        effects: { knowledge: 3, study: 1, mood: 2 },
        result: "你们把地面测试做了一遍，发现舵机响应有点慢。虽然没飞成，但避免了一次可能的坠机。"
      },
      {
        label: "让学长飞，你在旁边看",
        hint: "社交 +3 · 心情 +4 · 学识 +1",
        effects: { social: 3, mood: 4, knowledge: 1 },
        result: "学长飞得很稳，你在旁边负责录像。落地时全场鼓掌，你也跟着鼓掌，虽然你只是拍了视频。"
      }
    ]
  }
);
