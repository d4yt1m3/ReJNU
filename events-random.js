/* =========================================================
   随机事件：四年里那些不在计划里的日子
   ========================================================= */

const JNU_RANDOM = [
  {
    id: "early_class",
    title: "早八：被窝是青春的坟墓",
    scene: "南区宿舍 · 早上七点二十",
    kicker: "早八",
    minSem: 0,
    maxSem: 7,
    text: "闹钟响了第三遍。窗外天还没完全亮，室友的被子裹成一个茧。今天早上八点，有一节你并不想上、但点名占分的课。",
    choices: [
      {
        label: "爬起来，踩着铃声冲进教室",
        hint: "精力 -10 · 学识 +3 · 学习 +1",
        effects: { energy: -10, knowledge: 3, study: 1, mood: 1, inc: { early: 1 } },
        result: "你在铃声响完的最后一秒坐进座位，老师看了你一眼，继续点名。你喘着气翻开书，发现自己居然是宿舍唯一到课的人。"
      },
      {
        label: "翘掉，睡到自然醒",
        hint: "心情 +6 · 精力 +8 · 学习 -1",
        effects: { mood: 6, energy: 8, study: -1, knowledge: -1, inc: { skip: 1 } },
        result: "你睡到十点，醒来时宿舍已经空了。阳光照在被子上，你伸了个懒腰。后来听说那节课点了名。"
      },
      {
        label: "让室友帮你答到，自己继续睡",
        hint: "社交 +2 · 成功率 70%",
        roll: 0.7,
        rollStat: "social",
        success: {
          text: "室友帮你答了到，老师没发现。你睡到九点半，醒来第一件事是给室友发了个红包。",
          effects: { energy: 6, social: 2, money: -10, inc: { skip: 1 } }
        },
        fail: {
          text: "老师点名时多问了一句“×××来了吗”，室友答得慢了半拍。你被记了旷课，辅导员在群里@了你。",
          effects: { mood: -5, flags: { warning: true }, inc: { skip: 1 } }
        }
      }
    ]
  },
  {
    id: "canteen",
    title: "三食堂的糖醋排骨，今天限量",
    scene: "南区 · 蠡溪苑（三食堂）",
    kicker: "干饭",
    minSem: 0,
    maxSem: 7,
    text: "下课铃一响，人流涌向三食堂。你听说今天的糖醋排骨只剩最后两盘，前面排着二十多个人。窗口阿姨的勺子，决定了你中午的心情。",
    choices: [
      {
        label: "排队，必须吃到糖醋排骨",
        hint: "存款 -18 · 心情 +6 · 干饭 +1",
        effects: { money: -18, mood: 6, energy: 2, inc: { food: 1 } },
        result: "你排了十八分钟，终于端到最后一盘糖醋排骨。甜口，肉很软。你找了个靠窗的位置，吃得干干净净。"
      },
      {
        label: "去江南苑吃红烧肉，换个口味",
        hint: "存款 -20 · 心情 +5 · 干饭 +1",
        effects: { money: -20, mood: 5, energy: 2, inc: { food: 1 } },
        result: "你跨过曲水桥去了北区，一食堂的红烧肉炖得很入味。你配了两碗米饭，吃完在校园里走了半小时。"
      },
      {
        label: "点外卖回宿舍，边吃边看剧",
        hint: "存款 -25 · 心情 +4 · 干饭 +1",
        effects: { money: -25, mood: 4, energy: 3, inc: { food: 1 } },
        result: "外卖送到楼下，你穿着拖鞋去取。回到宿舍，你打开一部下饭剧，把午饭吃成了一个漫长的仪式。"
      }
    ]
  },
  {
    id: "library_seat",
    title: "图书馆的座位，比奖学金还难抢",
    scene: "图书馆 · 早上六点五十",
    kicker: "占座",
    minSem: 0,
    maxSem: 7,
    text: "你六点五十到图书馆，发现门口已经排了三十多人。门一开，人群像潮水一样涌进去。三楼靠窗的位置，是你最喜欢的那个。",
    choices: [
      {
        label: "冲进去，抢下靠窗的位置",
        hint: "精力 -10 · 学习 +2 · 心情 +3",
        effects: { energy: -10, study: 2, mood: 3, inc: { library: 1 } },
        result: "你抢到了靠窗的位置，阳光正好落在桌角。你学了一上午，效率高得不像自己。"
      },
      {
        label: "不挤了，去教学楼找个空教室",
        hint: "学习 +1 · 心情 +2",
        effects: { study: 1, mood: 2, knowledge: 1, inc: { library: 1 } },
        result: "你在教学楼找到一间没人的教室，整间教室只有你和窗外的鸟。虽然没有图书馆的氛围，但安静得让人心安。"
      },
      {
        label: "回宿舍学，反正有床",
        hint: "精力 +4 · 学习 -1 · 心情 +3",
        effects: { energy: 4, mood: 3, study: -1 },
        result: "你回到宿舍，翻开书，然后打开了手机。两个小时后，你意识到自己只看了三页。"
      }
    ]
  },
  {
    id: "roommate_night",
    title: "宿舍夜谈：从游戏聊到人生",
    scene: "南区宿舍 · 晚上十一点半",
    kicker: "室友",
    minSem: 0,
    maxSem: 4,
    text: "熄灯后，宿舍照例开始夜谈。上铺在讲他高中的暗恋，对床在聊游戏段位，隔壁床忽然问了一句：“你们以后想干嘛？”房间安静了两秒。",
    choices: [
      {
        label: "聊到凌晨，把心里话都说出来",
        hint: "心情 +9 · 社交 +5 · 精力 -8 · 熬夜 +1",
        effects: { mood: 9, social: 5, energy: -8, inc: { night: 1 } },
        result: "你们聊到两点，从高考聊到毕业，从喜欢的人聊到害怕的事。第二天集体迟到，但你觉得这是大学里最值的一个晚上。"
      },
      {
        label: "加入开黑，先赢一把再说",
        hint: "心情 +5 · 社交 +3 · 精力 -5 · 电竞 +1",
        effects: { mood: 5, social: 3, energy: -5, inc: { night: 1, esports: 1 } },
        result: "你们五排到凌晨一点，赢了两把输了一把。最后一把输在打野没来，上铺骂了十分钟。你笑着关掉电脑，觉得这种日子也挺好。"
      },
      {
        label: "戴上耳机，先睡了",
        hint: "精力 +7 · 学习 +1",
        effects: { energy: 7, study: 1, social: -1 },
        result: "你戴上耳机，把音量调到能盖住说话声。第二天你第一个起床，去食堂吃了顿安静的早饭。"
      }
    ]
  },
  {
    id: "campus_card",
    title: "校园卡丢了，照片被全校看见",
    scene: "二食堂门口 · 中午",
    kicker: "校园卡",
    minSem: 0,
    maxSem: 7,
    text: "你刷卡时发现校园卡不见了。更糟的是，有人在学校墙墙上发了失物招领，配图是你卡上那张入学时拍的证件照。评论区已经有人开始笑了。",
    choices: [
      {
        label: "赶紧去补办，顺便换个照片",
        hint: "存款 -20 · 精力 -5 · 心情 -3",
        effects: { money: -20, energy: -5, mood: -3 },
        result: "你在行政楼排了半小时队，补办了一张新卡。照片还是原来那张，工作人员说系统里只有这个版本。你决定以后再也不丢卡了。"
      },
      {
        label: "在墙墙上留言，自嘲一下",
        hint: "社交 +4 · 心情 +4",
        effects: { social: 4, mood: 4 },
        result: "你在评论区回了一句“照片拍得挺好，就是我本人”，收获了一百多个赞。后来卡被一个学妹捡到，她加你微信时第一句是：学长，你比照片好看。"
      },
      {
        label: "先借室友的卡用，能拖就拖",
        hint: "社交 -3 · 心情 -2 · 存款 0",
        effects: { social: -3, mood: -2, energy: -2 },
        result: "你蹭了室友三天饭，最后室友把卡设了密码。你只好去补办，还多花了十块钱工本费。"
      }
    ]
  },
  {
    id: "delivery",
    title: "外卖被偷：一份黄焖鸡的失踪",
    scene: "宿舍楼下 · 外卖架",
    kicker: "外卖",
    minSem: 0,
    maxSem: 7,
    text: "你下楼取外卖，架上只剩别人的麻辣烫。你的黄焖鸡不翼而飞，骑手说“已送达”，系统显示“已签收”。你站在楼下，肚子叫了一声。",
    choices: [
      {
        label: "调监控，找回你的黄焖鸡",
        hint: "精力 -5 · 成功率 60%",
        roll: 0.6,
        rollStat: "social",
        success: {
          text: "你找宿管看了监控，发现是隔壁楼的同学拿错了。对方连连道歉，还赔了你一份新的。你端着黄焖鸡回宿舍，觉得这波不亏。",
          effects: { energy: -5, mood: 4, money: 0 }
        },
        fail: {
          text: "监控死角，什么也没拍到。你折腾了半小时，最后又点了一份。这一次，你备注：请放在最里面，谢谢。",
          effects: { energy: -6, mood: -5, money: -22 }
        }
      },
      {
        label: "算了，再点一份",
        hint: "存款 -22 · 心情 -2 · 干饭 +1",
        effects: { money: -22, mood: -2, inc: { food: 1 } },
        result: "你又点了一份，这次备注写得像一封律师函。外卖送到时，你亲自下楼，站在骑手面前接过袋子。"
      },
      {
        label: "去食堂吃，健康又便宜",
        hint: "存款 -12 · 心情 +2 · 干饭 +1",
        effects: { money: -12, mood: 2, energy: 2, inc: { food: 1 } },
        result: "你去一食堂吃了碗面，顺便买了一杯豆浆。虽然没有黄焖鸡，但你觉得自己像个成熟的大人。"
      }
    ]
  },
  {
    id: "express",
    title: "快递站的长队，像一场小型春运",
    scene: "南区商业街 · 快递驿站",
    kicker: "取快递",
    minSem: 0,
    maxSem: 7,
    text: "双十一的快递堆成了山，驿站门口排了四排人。你前面那个同学一次取了八个包裹，队伍每五分钟才动一下。",
    choices: [
      {
        label: "老老实实排队",
        hint: "精力 -4 · 心情 -2",
        effects: { energy: -4, mood: -2 },
        result: "你排了二十五分钟，终于拿到快递。拆开发现是一包纸巾和两个手机壳，你忽然不理解自己为什么要买。"
      },
      {
        label: "找代取，花五块钱买时间",
        hint: "存款 -5 · 精力 +3 · 心情 +3",
        effects: { money: -5, energy: 3, mood: 3 },
        result: "你找了个代取的同学，五块钱，十分钟送到宿舍楼下。你觉得这五块钱花得比奶茶值。"
      },
      {
        label: "晚上再来，人少一点",
        hint: "精力 -2 · 心情 +1",
        effects: { energy: -2, mood: 1 },
        result: "你晚上九点去，驿站果然没什么人。取完快递，你在商业街买了一根烤肠，边走边吃。"
      }
    ]
  },
  {
    id: "rainy_day",
    title: "无锡的雨，下得像一场没有结尾的连续剧",
    scene: "教学楼 · 窗外 · 梅雨季",
    kicker: "梅雨",
    minSem: 1,
    maxSem: 5,
    text: "雨从早上一直下到傍晚，伞根本挡不住。你的鞋已经湿了，裤脚也湿了。手机弹出提醒：未来一周，持续有雨。",
    choices: [
      {
        label: "冒雨去上课，湿就湿吧",
        hint: "精力 -6 · 学习 +1 · 心情 -3",
        effects: { energy: -6, study: 1, mood: -3, knowledge: 1 },
        result: "你踩着水去上课，到教室时像刚从湖里捞出来。老师看了你一眼，说：“这位同学值得表扬。”你打了个喷嚏。"
      },
      {
        label: "点杯热奶茶，窝在宿舍",
        hint: "存款 -18 · 心情 +6 · 精力 +4",
        effects: { money: -18, mood: 6, energy: 4 },
        result: "你点了杯热奶茶，裹着被子看电影。雨打在窗上，你觉得这种天气最适合什么都不做。"
      },
      {
        label: "去图书馆，听雨看书",
        hint: "心情 +5 · 学习 +2 · 神秘加成",
        effects: { mood: 5, study: 2, knowledge: 1, inc: { library: 1 } },
        result: "你坐在图书馆三楼靠窗的位置，雨声很轻。你看完了一整章书，抬头时天已经黑了。"
      }
    ]
  },
  {
    id: "class_dinner",
    title: "班级聚餐：敬酒、八卦和一桌甜口菜",
    scene: "南长街 · 本帮菜馆",
    kicker: "班级聚餐",
    minSem: 0,
    maxSem: 4,
    text: "班级在群里组织了聚餐，AA 每人八十。你到的时候，桌上已经坐满了人，辅导员也在。菜单上的菜名都很江南：酱排骨、油面筋、太湖三白。",
    choices: [
      {
        label: "去，和所有人碰一杯",
        hint: "存款 -80 · 社交 +7 · 心情 +4",
        effects: { money: -80, social: 7, mood: 4, energy: -4, inc: { food: 1 } },
        result: "你坐了一整晚，听了很多八卦，也说了不少话。散场时，班长拍着你的肩说：“以后常联系。”虽然你知道大概率不会，但那一刻还是有点感动。"
      },
      {
        label: "去，但吃得差不多就早退",
        hint: "存款 -80 · 社交 +2 · 学习 +1",
        effects: { money: -80, social: 2, study: 1, mood: 2, inc: { food: 1 } },
        result: "你吃了一顿，敬了两杯，然后借口有事提前走了。回宿舍的路上，你觉得这种社交像一场短暂的演出。"
      },
      {
        label: "不去，一个人在食堂吃",
        hint: "社交 -3 · 心情 +3 · 存款 +80",
        effects: { social: -3, mood: 3, money: 80, inc: { food: 1 } },
        result: "你在食堂吃了碗面，八块钱。晚上班级群里发了合照，你放大看了看，觉得自己不在也挺好。"
      }
    ]
  },
  {
    id: "singer_try",
    title: "十佳歌手：报名表在桌上放了三天",
    scene: "大学生活动中心 · 报名点",
    kicker: "十佳歌手",
    minSem: 0,
    maxSem: 6,
    text: "校园十佳歌手开始报名了。你唱歌不算难听，但也没有在很多人面前唱过。报名表在桌上放了三天，室友每天都在问：“你到底去不去？”",
    choices: [
      {
        label: "报名，站上舞台唱一次",
        hint: "成功率 55% · 心情 +12 · 社交 +8",
        roll: 0.55,
        rollStat: "social",
        success: {
          text: "你在初赛唱了一首《江南》，虽然高音破了一点，但台下有人跟着鼓掌。你进了复赛，最后没进决赛，但你一点都不后悔。",
          effects: { mood: 12, social: 8, energy: -8, flags: { singer: true } }
        },
        fail: {
          text: "你紧张得第一句就进错了拍子，唱到一半忘了词。下台后你脸红了一整晚。但室友说：“你敢上去，就已经比很多人强了。”",
          effects: { mood: -4, social: 3, energy: -6 }
        }
      },
      {
        label: "当观众，在台下跟着唱",
        hint: "心情 +5 · 社交 +2",
        effects: { mood: 5, social: 2 },
        result: "你坐在台下，跟着每一首歌轻轻唱。决赛结束时，全场合唱《朋友》，你忽然觉得青春就该这样。"
      },
      {
        label: "不去，回宿舍录一段自己听",
        hint: "心情 +4 · 学习 +1",
        effects: { mood: 4, study: 1 },
        result: "你在宿舍用手机录了一首歌，发给了高中同学。对方回：“还是那个味儿。”你笑了笑，把文件存进了收藏夹。"
      }
    ]
  },
  {
    id: "sports_test",
    title: "体测：八百米和人生的极限",
    scene: "西北操场 · 下午",
    kicker: "体测",
    minSem: 0,
    maxSem: 5,
    text: "体测通知下来，八百米（男生一千米）像一座山。你上一次跑步还是高中体育课。操场边已经有人在压腿，表情比期末还严肃。",
    choices: [
      {
        label: "提前两周练，认真跑完",
        hint: "精力 -10 · 心情 +4 · 体测合格",
        effects: { energy: -10, mood: 4, knowledge: 0, flags: { fitness: true } },
        result: "你练了两次，正式测试时跑得气喘吁吁，但及格了。冲过终点线那一刻，你觉得自己的肺在燃烧，但心里很爽。"
      },
      {
        label: "临场发挥，能过就行",
        hint: "成功率 60% · 精力 -6",
        roll: 0.6,
        rollStat: "energy",
        success: {
          text: "你跟着大部队跑，最后两百米咬牙冲了一下，刚好及格。你躺在草地上，觉得天空特别蓝。",
          effects: { energy: -8, mood: 5, flags: { fitness: true } }
        },
        fail: {
          text: "你跑完最后一圈，眼前发黑，成绩差了三秒。老师说可以补测，你决定下次一定提前练。",
          effects: { energy: -8, mood: -5 }
        }
      },
      {
        label: "找免测，体育课分数照拿",
        hint: "社交 +2 · 心情 +2 · 风险",
        effects: { social: 2, mood: 2, flags: { warning: true } },
        result: "你找了个理由申请免测，手续办得很顺利。但体育老师记住了你的名字，期末给分时不太好看。"
      }
    ]
  },
  {
    id: "night_run",
    title: "夜跑：蠡湖边的风是免费的",
    scene: "蠡湖校区 · 环湖步道 · 晚上九点",
    kicker: "夜跑",
    minSem: 0,
    maxSem: 7,
    text: "晚上九点，操场和环湖步道都有人。你换上运动鞋，出门跑了十分钟，发现风比想象中舒服。远处图书馆的灯还亮着。",
    choices: [
      {
        label: "跑完五公里，出一身汗",
        hint: "精力 -8 · 心情 +6 · 体测合格",
        effects: { energy: -8, mood: 6, flags: { fitness: true } },
        result: "你跑完五公里，在湖边拉伸。风把汗吹干，你觉得自己可以原谅今天所有的糟糕。"
      },
      {
        label: "散散步，看看湖",
        hint: "心情 +4 · 精力 +2",
        effects: { mood: 4, energy: 2 },
        result: "你走了两圈，看了一会儿湖。有人在钓鱼，有人在遛狗。你忽然觉得，大学生活不只有绩点。"
      },
      {
        label: "走到一半，去买夜宵",
        hint: "存款 -15 · 心情 +5 · 干饭 +1",
        effects: { money: -15, mood: 5, energy: 2, inc: { food: 1 } },
        result: "你本来想跑步，最后在商业街买了一份烤冷面。回去的路上，你安慰自己：走路也算运动。"
      }
    ]
  },
  {
    id: "part_time",
    title: "家教兼职：一小时八十，心动吗",
    scene: "学校墙墙 · 兼职信息",
    kicker: "兼职",
    minSem: 1,
    maxSem: 6,
    text: "墙墙上有人招家教，辅导高二数学，一小时八十。你算了算，一周两次，一个月能赚六百多。但你也知道，备课要时间。",
    choices: [
      {
        label: "接一份，每周去两次",
        hint: "存款 +600 · 精力 -12 · 社交 +2 · 学习 -1",
        effects: { money: 600, energy: -12, social: 2, study: -1, knowledge: 1 },
        result: "你教了一个月，学生成绩提高了十分。家长多给了你两百块奖金。你拿到钱的那天，请自己吃了一顿好的。"
      },
      {
        label: "接两份，趁年轻多赚点",
        hint: "存款 +1200 · 精力 -22 · 心情 -5",
        effects: { money: 1200, energy: -22, mood: -5, study: -2 },
        result: "你同时在两个区上课，周末全在路上。月底拿到钱时很开心，但你在课堂上睡着了两次。"
      },
      {
        label: "不接，把时间留给学习",
        hint: "学习 +2 · 心情 +2",
        effects: { study: 2, mood: 2, knowledge: 1 },
        result: "你拒绝了兼职，把周末用来补专业课。看着室友兼职回来累瘫的样子，你觉得自己做了一个正确的决定。"
      }
    ]
  },
  {
    id: "volunteer",
    title: "志愿服务：被需要的感觉",
    scene: "大学生活动中心 · 志愿招募",
    kicker: "志愿",
    minSem: 0,
    maxSem: 7,
    text: "志愿者协会在招人：敬老院陪伴、社区辅导、校园献血。你看了看周末的安排，发现其实也没有那么满。",
    choices: [
      {
        label: "去敬老院陪老人聊天",
        hint: "社交 +6 · 心情 +5 · 精力 -6",
        effects: { social: 6, mood: 5, energy: -6 },
        result: "你陪一位奶奶聊了一下午，她给你看了她孙女的照片，说和你差不多大。离开时，她塞给你两个橘子。"
      },
      {
        label: "校园献血，做件有意义的事",
        hint: "心情 +4 · 精力 -8 · 纪念品",
        effects: { mood: 4, energy: -8, money: 0, flags: { blood: true } },
        result: "你献了 300ml，拿到一张献血证和一盒牛奶。回宿舍的路上有点晕，但你觉得心里很踏实。"
      },
      {
        label: "不去，周末想休息",
        hint: "精力 +6 · 心情 +2",
        effects: { energy: 6, mood: 2 },
        result: "你在宿舍睡了个午觉，醒来时阳光正好。你没有做什么有意义的事，但你觉得休息本身也有意义。"
      },
      {
        label: "报名暑期支教，去更远的地方看看",
        hint: "社交 +4 · 心情 +6 · 精力 -6",
        effects: { social: 4, mood: 6, energy: -6, flags: { teach: true } },
        result: "你报名了暑期支教，面试时被问到“为什么想去”。你想了想，说：“想看看自己除了考试，还能做什么。”"
      }
    ]
  },
  {
    id: "dorm_check",
    title: "查寝：吹风机和锅的藏匿艺术",
    scene: "南区宿舍 · 晚上八点",
    kicker: "查寝",
    minSem: 0,
    maxSem: 5,
    text: "辅导员在群里发通知：今晚查寝，重点检查违规电器。宿舍里瞬间兵荒马乱，有人把锅塞进衣柜，有人把吹风机藏进被窝。",
    choices: [
      {
        label: "老老实实收拾，把违规电器交出去",
        hint: "精力 -4 · 心情 -2 · 安全",
        effects: { energy: -4, mood: -2 },
        result: "你把锅和吹风机装进袋子，交给了宿管。虽然心疼，但晚上睡得踏实。"
      },
      {
        label: "把东西藏好，赌一把",
        hint: "成功率 65% · 心情 +2",
        roll: 0.65,
        success: {
          text: "你把吹风机塞进了行李箱最底层，锅藏在了阳台的纸箱里。辅导员转了一圈，什么也没发现。你们宿舍逃过一劫。",
          effects: { mood: 3, energy: -2 }
        },
        fail: {
          text: "辅导员打开了你的衣柜，吹风机和锅一起掉了出来。你被记了名字，还写了一份检查。",
          effects: { mood: -8, flags: { warning: true } }
        }
      },
      {
        label: "主动承认，顺便和辅导员聊两句",
        hint: "社交 +3 · 心情 +1",
        effects: { social: 3, mood: 1, energy: -2 },
        result: "你把吹风机交了出去，顺便和辅导员聊了聊最近的学习。她走的时候说：“有问题随时来找我。”你忽然觉得她也没那么可怕。"
      }
    ]
  },
  {
    id: "course_select",
    title: "选课系统：一场手速与网速的战争",
    scene: "宿舍 · 选课开放前一分钟",
    kicker: "选课",
    minSem: 0,
    maxSem: 2,
    text: "选课系统十二点开放。你提前十分钟打开页面，室友们也都盯着屏幕。十二点整，页面卡住了。刷新之后，你想选的那门课已经满了。",
    choices: [
      {
        label: "蹲点捡漏，等有人退课",
        hint: "精力 -4 · 学习 +1 · 心情 +3",
        effects: { energy: -4, study: 1, mood: 3 },
        result: "你蹲了三天，终于捡到一个退课名额。点下确认的那一刻，你像抢到了演唱会门票。"
      },
      {
        label: "随缘选，剩下的课也未必差",
        hint: "心情 +3 · 学习 +1",
        effects: { mood: 3, study: 1, knowledge: 1 },
        result: "你选了一门冷门通识课，老师讲得意外地好。期末考核是写一篇影评，你写得比专业课作业还认真。"
      },
      {
        label: "找学长打听给分高的课",
        hint: "社交 +2 · 学习 +1 · 心情 +2",
        effects: { social: 2, study: 1, mood: 2 },
        result: "学长给你列了一份“江大通识课避雷指南”。你按图索骥，选到了一门给分高、作业少的课。"
      }
    ]
  },
  {
    id: "internet_down",
    title: "校园网断了，世界安静了",
    scene: "宿舍 · 晚上十点",
    kicker: "断网",
    minSem: 0,
    maxSem: 7,
    text: "你正在看视频，画面突然卡住。校园网断了。室友们同时发出哀嚎，随后宿舍陷入一种奇怪的安静。",
    choices: [
      {
        label: "去图书馆蹭网",
        hint: "精力 -4 · 学习 +2 · 图书馆 +1",
        effects: { energy: -4, study: 2, mood: 2, inc: { library: 1 } },
        result: "你抱着电脑去了图书馆，发现那里也坐满了同样断网的人。你干脆关了网页，看了两章书。"
      },
      {
        label: "开手机热点，继续冲浪",
        hint: "存款 -10 · 心情 +3",
        effects: { money: -10, mood: 3 },
        result: "你开了热点，流量跑得飞快。一个小时后，你的套餐提醒你：本月流量已用完。"
      },
      {
        label: "早点睡，明天再说",
        hint: "精力 +8 · 心情 +2",
        effects: { energy: 8, mood: 2 },
        result: "你洗漱完躺下，发现没有手机的声音，宿舍其实很安静。你很快就睡着了。"
      }
    ]
  },
  {
    id: "double11",
    title: "双十一：购物车里的另一个你",
    scene: "宿舍 · 凌晨 · 购物车",
    kicker: "双十一",
    minSem: 0,
    maxSem: 2,
    text: "零点快到了，购物车里躺着十二件东西：三件衣服、两双鞋、一箱零食、一个筋膜枪，还有你上周加购但已经想不起来为什么要买的摆件。",
    choices: [
      {
        label: "清空购物车，青春只有一次",
        hint: "存款 -300 · 心情 +9",
        effects: { money: -300, mood: 9 },
        result: "你一键付款，看着“待发货”的数字，心里很爽。一周后快递堆成山，你拆到手软，也有一点点后悔。"
      },
      {
        label: "只买刚需，剩下的删掉",
        hint: "存款 -80 · 心情 +3 · 学习 +1",
        effects: { money: -80, mood: 3, study: 1 },
        result: "你删掉了十件，只留下纸巾、洗衣液和一双袜子。第二天醒来，你觉得自己是个成熟的大人。"
      },
      {
        label: "什么都不买，早睡",
        hint: "精力 +6 · 心情 +2",
        effects: { energy: 6, mood: 2, money: 0 },
        result: "你关掉手机，零点前就睡了。第二天看到室友的黑眼圈和一堆快递，你忽然觉得很庆幸。"
      }
    ]
  },
  {
    id: "winter_solstice",
    title: "冬至：饺子、汤圆和家里的电话",
    scene: "三食堂 · 冬至",
    kicker: "冬至",
    minSem: 0,
    maxSem: 1,
    text: "冬至那天，食堂挂起了红灯笼，窗口多了饺子和汤圆。你排着队，忽然想起家里每年冬至都会煮一锅饺子。",
    choices: [
      {
        label: "和室友一起包饺子",
        hint: "存款 -30 · 社交 +5 · 心情 +6",
        effects: { money: -30, social: 5, mood: 6, inc: { food: 1 } },
        result: "你们在食堂的活动区包了三十个奇形怪状的饺子，有的像元宝，有的像包子。煮熟后，你们把自己包的都吃完了。"
      },
      {
        label: "吃一碗汤圆，给家里打个电话",
        hint: "存款 -12 · 心情 +6",
        effects: { money: -12, mood: 6, inc: { food: 1 } },
        result: "你端着汤圆坐在窗边，给妈妈打了电话。她问你吃了吗，你说吃了。挂电话后，你看着碗里剩下的两个汤圆，有点想家。"
      },
      {
        label: "不过节，继续复习",
        hint: "学习 +2 · 心情 -1",
        effects: { study: 2, mood: -1 },
        result: "你在图书馆复习到闭馆。回去的路上，食堂已经关门了，你只好泡了一碗面。"
      }
    ]
  },
  {
    id: "sakura_road",
    title: "樱花大道：春天只营业两周",
    scene: "南区 · 峨眉山路 · 樱花大道",
    kicker: "樱花",
    minSem: 1,
    maxSem: 5,
    text: "三月的樱花大道开满了人。有人在拍照，有人在直播，有人只是抬头看。风一吹，花瓣落在你的肩上，又滑下去。",
    choices: [
      {
        label: "拍照发朋友圈，记录春天",
        hint: "心情 +6 · 社交 +3",
        effects: { mood: 6, social: 3 },
        result: "你拍了很多张，最后选了一张没有人的。配文写了半天，最后只发了三个字：春天啊。"
      },
      {
        label: "在树下坐一会儿，什么都不做",
        hint: "心情 +8 · 精力 +3",
        effects: { mood: 8, energy: 3 },
        result: "你坐在樱花树下的长椅上，看花瓣落在书包上。有人从你面前走过，有人在笑。你忽然觉得，大学也有很温柔的时刻。"
      },
      {
        label: "带喜欢的人一起来看",
        hint: "心情 +9 · 社交 +5 · 心动",
        effects: { mood: 9, social: 5, inc: { romanceChance: 1 } },
        result: "你约了那个人来看樱花。你们走了很长一段路，说了很多不重要的话。分别时，TA 说：“明年还来吗？”你说：“来。”"
      }
    ]
  },
  {
    id: "changguangxi",
    title: "长广溪骑行：把城市甩在身后",
    scene: "长广溪湿地公园 · 周末下午",
    kicker: "骑行",
    minSem: 0,
    maxSem: 5,
    text: "室友提议去长广溪骑行。你们扫了四辆共享单车，沿着湿地一路骑。风里有水草的味道，远处有人在放风筝。",
    choices: [
      {
        label: "环湖骑一圈，累到腿软",
        hint: "存款 -30 · 精力 -10 · 心情 +9",
        effects: { money: -30, energy: -10, mood: 9, flags: { fitness: true } },
        result: "你们骑了两个小时，在湖边停下来买水。夕阳把水面染成金色，你拍了一张照片，后来设成了手机壁纸。"
      },
      {
        label: "找个草地野餐，躺一下午",
        hint: "存款 -60 · 社交 +5 · 心情 +7 · 干饭 +1",
        effects: { money: -60, social: 5, mood: 7, energy: 4, inc: { food: 1 } },
        result: "你们在草地上铺了野餐垫，吃了三明治和水果。有人弹吉他，有人睡觉。你躺着看云，觉得时间过得很慢。"
      },
      {
        label: "在宿舍躺着，下次一定",
        hint: "精力 +6 · 心情 +1",
        effects: { energy: 6, mood: 1 },
        result: "你刷着室友发来的照片，点了个赞。下次一定。"
      }
    ]
  },
  {
    id: "wuxi_trip",
    title: "周末去无锡：太湖、古镇和小笼包",
    scene: "无锡 · 鼋头渚 / 南长街",
    kicker: "周末出走",
    minSem: 0,
    maxSem: 5,
    text: "周末没有课，你在宿舍躺到十点，忽然觉得不能再这样下去。打开地图，鼋头渚、南长街、惠山古镇都在一小时车程内。",
    choices: [
      {
        label: "去鼋头渚，看太湖",
        hint: "存款 -150 · 心情 +10 · 社交 +2",
        effects: { money: -150, mood: 10, social: 2, energy: -4 },
        result: "你在鼋头渚坐了很久，看太湖的水一层一层推过来。回程的公交上，你睡着了，醒来时已经到校门口。"
      },
      {
        label: "去南长街，吃小笼包和酱排骨",
        hint: "存款 -80 · 心情 +8 · 干饭 +1",
        effects: { money: -80, mood: 8, energy: 2, inc: { food: 1 } },
        result: "你吃了两笼小笼包、一份酱排骨和一碗银丝面。甜口，但你居然很喜欢。回去的地铁上，你还在想那家店的位置。"
      },
      {
        label: "去惠山古镇，走一走青石板路",
        hint: "存款 -60 · 心情 +7 · 学识 +1",
        effects: { money: -60, mood: 7, knowledge: 1 },
        result: "古镇人不多，你沿着河走了一圈，看了泥人作坊和祠堂。你买了一个小泥人，放在宿舍桌上。"
      }
    ]
  },
  {
    id: "love_encounter",
    title: "图书馆三楼，那个人总坐靠窗",
    scene: "图书馆 · 三楼 · 下午",
    kicker: "心动",
    minSem: 1,
    maxSem: 6,
    cond: (s) => !s.flags.romance,
    text: "你连续三周在图书馆三楼看到同一个人。对方总坐在靠窗的位置，桌上放着一杯美式和一本很厚的书。今天，TA 抬头看了你一眼。",
    choices: [
      {
        label: "走过去要微信",
        hint: "成功率 60% · 心情 +10 · 社交 +5",
        roll: 0.6,
        rollStat: "social",
        success: {
          text: "你走过去，紧张得把“你好”说成了“你好，请问”。对方笑了，把微信二维码递给你。你回到座位，心跳了很久才平复。",
          effects: { mood: 10, social: 5, flags: { romance: true, partner: "图书馆靠窗的人" } }
        },
        fail: {
          text: "对方礼貌地说“不好意思，我在复习”。你点点头，回到座位，假装什么都没发生。那天晚上，你换了楼层。",
          effects: { mood: -5, social: 1 }
        }
      },
      {
        label: "写一张纸条，夹进书里",
        hint: "成功率 50% · 心情 +8",
        roll: 0.5,
        rollStat: "mood",
        success: {
          text: "你在纸条上写了一句话，趁对方去接水时夹进了书里。第二天，你收到一条陌生好友申请，备注是：纸条上的字很好看。",
          effects: { mood: 8, social: 4, flags: { romance: true, partner: "纸条另一端的人" } }
        },
        fail: {
          text: "你写了又改，改了又揉，最后纸条没送出去。你把它夹进了自己的书里，偶尔翻到，会笑一下。",
          effects: { mood: 2, social: 1 }
        }
      },
      {
        label: "远远看着，把心动留给自己",
        hint: "心情 +3 · 学习 +1",
        effects: { mood: 3, study: 1 },
        result: "你没有走过去。后来对方不再来了，那个靠窗的位置空了很久。你偶尔会想起那杯美式，和那个下午。"
      }
    ]
  },
  {
    id: "love_date",
    title: "恋爱日常：自习、约会和吵架",
    scene: "蠡湖校区 · 曲水桥 · 傍晚",
    kicker: "恋爱",
    minSem: 1,
    maxSem: 7,
    cond: (s) => Boolean(s.flags.romance),
    text: "你们在一起之后，最常去的地方是图书馆和食堂。今天对方问：“晚上去干嘛？”你看了看手里的作业，又看了看窗外。",
    choices: [
      {
        label: "一起去图书馆自习",
        hint: "学习 +2 · 心情 +6 · 精力 -3",
        effects: { study: 2, mood: 6, energy: -3, social: 2 },
        result: "你们坐在同一张桌子两边，各自写作业。偶尔抬头对上眼神，又假装若无其事地低下头。三个小时过去了，你居然真的学进去了。"
      },
      {
        label: "去南长街约会，作业明天再说",
        hint: "存款 -100 · 心情 +9 · 社交 +2",
        effects: { money: -100, mood: 9, social: 2, energy: -3 },
        result: "你们在南长街吃了小笼包，沿着河走了很久。回去的地铁上，对方靠在你肩上睡着了。你一动不敢动。"
      },
      {
        label: "因为一件小事吵架，冷战一晚",
        hint: "心情 -6 · 社交 -2 · 学习 +1",
        effects: { mood: -6, social: -2, study: 1 },
        result: "你们因为“到底谁先回消息”吵了一架。晚上你一个人去食堂，吃了两口就吃不下了。第二天，对方发来一句“在干嘛”，你就原谅了。"
      }
    ]
  },
  {
    id: "breakup",
    title: "分手：蠡湖的风还是那样",
    scene: "蠡湖校区 · 曲水桥 · 晚上",
    kicker: "分手",
    minSem: 3,
    maxSem: 6,
    cond: (s) => Boolean(s.flags.romance),
    text: "你们坐在曲水桥边，沉默了很久。对方说：“我们好像都不太开心了。”你想反驳，但发现自己说不出话。湖面上有灯，风把水面吹皱。",
    choices: [
      {
        label: "和平分手，把回忆留下",
        hint: "心情 -8 · 社交 +2 · 分手",
        effects: { mood: -8, social: 2, flags: { romance: false, breakup: true } },
        result: "你们把话说开，然后各自回宿舍。你走到一半，回头看了一眼，对方已经走远了。你没有哭，只是觉得心里空了一块。"
      },
      {
        label: "试着挽回，再努力一次",
        hint: "成功率 45% · 心情 +4 / -10",
        roll: 0.45,
        rollStat: "social",
        success: {
          text: "你把心里话都说了出来，对方沉默了很久，最后说：“那就再试试。”你们重新牵了手，但你知道，有些东西已经不一样了。",
          effects: { mood: 4, social: 3 }
        },
        fail: {
          text: "你说完，对方摇了摇头。你站在桥上，看着 TA 的背影消失在路灯下。那天晚上，你在操场上走了很多圈。",
          effects: { mood: -10, flags: { romance: false, breakup: true } }
        }
      },
      {
        label: "各自忙起来，用学习填满生活",
        hint: "心情 -4 · 学习 +3 · 分手",
        effects: { mood: -4, study: 3, flags: { romance: false, breakup: true } },
        result: "你把课表排得满满的，每天学到闭馆。忙起来的时候确实不会想，但回宿舍的路上，还是会习惯性地点开那个对话框。"
      }
    ]
  },
  {
    id: "club_election",
    title: "社团换届：你要不要当社长",
    scene: "大学生活动中心 · 社团例会",
    kicker: "社团",
    minSem: 2,
    maxSem: 6,
    cond: (s) => Boolean(s.flags.club),
    text: (s) => `${s.flags.club}的社长要毕业了。例会上，大家开始讨论接班人的事。有人看向你，说：“你留下来也挺久了，要不要试试？”`,
    choices: [
      {
        label: "竞选社长，把社团带下去",
        hint: "社交 +7 · 精力 -8 · 心情 +4",
        effects: { social: 7, energy: -8, mood: 4, flags: { clubLeader: true } },
        result: "你当上了社长。第一次主持会议时，你紧张得把流程念错了。但学期结束时，社团招到了二十个新成员，你觉得一切都值了。"
      },
      {
        label: "留任部长，做具体的事",
        hint: "社交 +3 · 学习 +1 · 心情 +2",
        effects: { social: 3, study: 1, mood: 2 },
        result: "你没有当社长，继续做部长。你负责的活动办得很顺利，社长说：“幸好你没走。”"
      },
      {
        label: "退社，把时间还给学习",
        hint: "社交 -2 · 学习 +2 · 心情 +2",
        effects: { social: -2, study: 2, mood: 2, flags: { clubRetired: true } },
        result: "你在例会上说了再见，把工作交接给了学弟。走出活动中心时，你有点舍不得，但也觉得轻松。"
      }
    ]
  },
  {
    id: "lab_work",
    title: "实验室搬砖：洗试管也是科研",
    scene: "食品/生工楼 · 实验室 · 晚上",
    kicker: "实验室",
    minSem: 1,
    maxSem: 5,
    college: "food",
    text: "师兄让你先洗一百个试管，说这是科研的第一步。你站在水池前，看着堆积如山的玻璃器皿，开始怀疑人生。",
    choices: [
      {
        label: "认真洗完，顺便问师兄实验原理",
        hint: "学识 +5 · 精力 -10 · 科研入门",
        effects: { knowledge: 5, energy: -10, study: 1, flags: { research: true } },
        result: "你洗了两个小时，师兄在旁边给你讲了整个实验的设计思路。你忽然发现，洗试管只是表面，真正要学的是背后的逻辑。"
      },
      {
        label: "准点走人，明天再洗",
        hint: "心情 +4 · 学识 +2",
        effects: { mood: 4, knowledge: 2 },
        result: "你把剩下的试管泡在水里，按时下班。师兄没说什么，但第二天你发现自己的杯子被洗得特别干净。"
      },
      {
        label: "找借口请假，回宿舍打游戏",
        hint: "心情 +5 · 学识 -1 · 社交 -2",
        effects: { mood: 5, knowledge: -1, social: -2 },
        result: "你请了假，回宿舍开黑。第二天师兄看你的眼神，让你有点心虚。"
      }
    ]
  },
  {
    id: "yogurt_lab",
    title: "食品学院日常：酸奶感官评定",
    scene: "食品学院 · 感官评定实验室",
    kicker: "专业实验",
    minSem: 0,
    maxSem: 6,
    college: "food",
    text: "实验课上，老师端出六杯不同配方的酸奶，让你们做感官评定。你喝到第四杯时，已经完全分不清哪杯是哪杯。",
    choices: [
      {
        label: "认真记录每一杯的酸度和口感",
        hint: "学识 +4 · 学习 +1 · 干饭 +1",
        effects: { knowledge: 4, study: 1, inc: { food: 1 } },
        result: "你在记录表上写满了“酸甜比”“稠度”“后味”。老师看了你的表，说“这个描述很准确”。你第一次觉得，吃货也可以很专业。"
      },
      {
        label: "偷偷多喝两杯，反正不花钱",
        hint: "心情 +5 · 精力 +3 · 干饭 +1",
        effects: { mood: 5, energy: 3, inc: { food: 1 } },
        result: "你又喝了两杯，喝到打嗝。下课后，你发现自己真的不想再看到酸奶了。"
      },
      {
        label: "和同学讨论配方，顺便吐槽",
        hint: "社交 +3 · 心情 +3",
        effects: { social: 3, mood: 3, knowledge: 1 },
        result: "你们一致认为第三杯最好喝，但老师说那是“对照组”。你们沉默了，然后一起笑了。"
      }
    ]
  },
  {
    id: "beer_lab",
    title: "生工学院：啤酒酿造实验",
    scene: "生物工程学院 · 中试车间",
    kicker: "专业实验",
    minSem: 1,
    maxSem: 6,
    college: "bio",
    text: "发酵罐冒着热气，空气里是麦芽的甜味。老师让你们观察发酵过程，师兄在旁边小声说：“这罐出来，能喝。”",
    choices: [
      {
        label: "认真记录发酵曲线",
        hint: "学识 +5 · 学习 +1 · 精力 -6",
        effects: { knowledge: 5, study: 1, energy: -6 },
        result: "你每隔半小时记一次数据，画出了一条漂亮的曲线。老师把你的记录投影到屏幕上，说：“这才叫实验报告。”"
      },
      {
        label: "偷喝半杯，尝尝自己的手艺",
        hint: "心情 +7 · 成功率 80%",
        roll: 0.8,
        success: {
          text: "你趁老师不注意，接了小半杯。有点苦，但确实有啤酒味。师兄说：“你这杯还没发酵完。”你假装没听见。",
          effects: { mood: 7, energy: 3, inc: { food: 1 } }
        },
        fail: {
          text: "你刚接完，老师就转了过来。你端着杯子，尴尬地站在原地。老师看了你一眼，说：“好喝吗？”全班都笑了。",
          effects: { mood: -3, social: 2 }
        }
      },
      {
        label: "带一瓶回宿舍，给室友尝尝",
        hint: "社交 +4 · 心情 +4 · 风险",
        effects: { social: 4, mood: 4, flags: { warning: true } },
        result: "你灌了一瓶带回宿舍，室友们围着尝了一圈，都说“有股实验室味儿”。你决定下次还是买现成的。"
      }
    ]
  },
  {
    id: "design_night",
    title: "设计学院：凌晨三点的打印机",
    scene: "设计学院 · 工作室 · 凌晨",
    kicker: "熬夜赶图",
    minSem: 0,
    maxSem: 6,
    college: "design",
    text: "明天上午交图，你的模型还有一半没建完。工作室里坐满了人，打印机在角落里发热，空气里是咖啡和橡皮屑的味道。",
    choices: [
      {
        label: "通宵赶完，把图做到最好",
        hint: "精力 -16 · 学习 +2 · 作品集成型 · 熬夜",
        effects: { energy: -16, study: 2, knowledge: 3, mood: -4, flags: { portfolio: true }, inc: { night: 1 } },
        result: "你在早上七点按下打印键，看着图一点一点出来。交图时，老师多看了两眼，说“这次有想法”。你回到宿舍，睡到下午三点。"
      },
      {
        label: "先睡，明天早上起来再改",
        hint: "精力 +5 · 心情 +4 · 学习 -1",
        effects: { energy: 5, mood: 4, study: -1 },
        result: "你回宿舍睡了，早上六点爬起来改图。最后交上去的版本不算完美，但至少没有通宵。"
      },
      {
        label: "找同学帮忙，两个人一起赶",
        hint: "社交 +4 · 存款 -100 · 作品集成型",
        effects: { social: 4, money: -100, knowledge: 2, study: 1, flags: { portfolio: true } },
        result: "你找了同组的同学帮忙，两个人分工建模、排版。凌晨两点，你们在工作室吃了泡面。图交上去后，你们成了真正的战友。"
      }
    ]
  },
  {
    id: "fashion_show",
    title: "纺织学院：服装秀的后台",
    scene: "大学生活动中心 · 服装秀后台",
    kicker: "服装秀",
    minSem: 1,
    maxSem: 6,
    college: "textile",
    text: "服装秀彩排到晚上十点，后台全是别针、高跟鞋和跑来跑去的人。学姐问你：“要不要上台走一圈？”",
    choices: [
      {
        label: "上台当模特，走一次 T 台",
        hint: "社交 +7 · 心情 +7 · 精力 -6",
        effects: { social: 7, mood: 7, energy: -6, flags: { runway: true } },
        result: "你穿着学姐设计的衣服上台，灯光打下来的时候，你紧张得忘了怎么走路。但音乐一响，你居然走完了全程。台下有人鼓掌。"
      },
      {
        label: "留在后台帮忙，做幕后",
        hint: "学识 +3 · 学习 +1 · 社交 +2",
        effects: { knowledge: 3, study: 1, social: 2 },
        result: "你在后台负责换装和别针，忙得脚不沾地。秀结束时，设计师抱了你一下，说：“没有你，这场秀走不完。”"
      },
      {
        label: "只看秀，顺便拍照",
        hint: "心情 +4 · 社交 +1",
        effects: { mood: 4, social: 1 },
        result: "你坐在台下看完了整场秀，拍了很多照片。灯光、音乐、衣服，一切都很好看。"
      }
    ]
  },
  {
    id: "solder_board",
    title: "物联网学院：焊板子焊到怀疑人生",
    scene: "物联网学院 · 实验室",
    kicker: "专业实验",
    minSem: 0,
    maxSem: 6,
    college: "iot",
    text: "实验课上，你要在一块巴掌大的电路板上焊三十个元件。松香的味道有点刺鼻，你的手一抖，焊锡糊成了一团。",
    choices: [
      {
        label: "一口气焊完，点亮第一颗 LED",
        hint: "学识 +5 · 精力 -8 · 学习 +1",
        effects: { knowledge: 5, energy: -8, study: 1 },
        result: "你焊了两个小时，最后通电时，LED 亮了一下。你差点叫出来。虽然只是一个小灯，但那是你亲手点亮的。"
      },
      {
        label: "找队友帮忙，两个人一起焊",
        hint: "社交 +3 · 学识 +3",
        effects: { social: 3, knowledge: 3, energy: -4 },
        result: "你和队友分工，一个人焊，一个人检查。板子终于通了，你们击了个掌。"
      },
      {
        label: "放弃，改用面包板",
        hint: "心情 +2 · 学识 +1",
        effects: { mood: 2, knowledge: 1 },
        result: "你放弃了焊接，用面包板搭了电路。老师看了说：“能跑就行。”你觉得这句话很有道理。"
      }
    ]
  },
  {
    id: "hackathon",
    title: "黑客松：四十八小时，一个能跑的 demo",
    scene: "人工智能与计算机学院 · 创客空间",
    kicker: "黑客松",
    minSem: 1,
    maxSem: 6,
    college: "cs",
    text: "黑客松在周五晚上开始，主题是“让校园生活更简单”。你们队决定做一个食堂排队预测小程序。第一行代码写完，离提交还有四十七小时。",
    choices: [
      {
        label: "通宵肝代码，把 demo 跑通",
        hint: "学识 +7 · 精力 -16 · 熬夜 +1 · 可能获奖",
        effects: { knowledge: 7, energy: -16, study: 2, mood: 4, inc: { night: 1 } },
        result: "你们熬到第二天早上，终于把 demo 跑通了。演示时，评委问了一个问题，你答得很流利。最后拿了三等奖，奖金不多，但你们在台上合了影。"
      },
      {
        label: "负责产品和路演，代码交给队友",
        hint: "社交 +5 · 心情 +4 · 学习 +1",
        effects: { social: 5, mood: 4, study: 1, energy: -8 },
        result: "你写了产品文档和路演讲稿，队友负责实现。路演时你讲得很投入，评委说“这个场景抓得准”。"
      },
      {
        label: "中途退出，回宿舍睡觉",
        hint: "精力 +8 · 心情 +2 · 社交 -3",
        effects: { energy: 8, mood: 2, social: -3 },
        result: "你在凌晨两点回了宿舍。第二天看到队友发的获奖照片，你点了个赞，心里有点后悔。"
      }
    ]
  },
  {
    id: "business_contest",
    title: "商学院：商赛、PPT 和凌晨的会议室",
    scene: "商学院 · 案例室",
    kicker: "商业比赛",
    minSem: 1,
    maxSem: 6,
    college: "business",
    text: "商赛的案例是一个快消品牌的市场进入策略。你们组六个人，三个人在划水，一个人在改 PPT，还有一个人在群里发“大家辛苦了”。",
    choices: [
      {
        label: "当组长，把所有人拉回正轨",
        hint: "社交 +6 · 学习 +1 · 精力 -8 · 成功率 60%",
        roll: 0.6,
        rollStat: "social",
        success: {
          text: "你重新分了工，定了截止时间，最后带着团队拿了校赛一等奖。答辩结束那晚，你们在商业街吃了烧烤，有人说：“下次还跟你组队。”",
          effects: { social: 6, study: 1, energy: -8, money: 500, mood: 8 }
        },
        fail: {
          text: "你尽力了，但团队还是不齐。最后交上去的方案很普通，没进决赛。你有点累，但也学到了怎么和不靠谱的人合作。",
          effects: { social: 3, mood: -4, energy: -6 }
        }
      },
      {
        label: "负责做 PPT，把story讲漂亮",
        hint: "学识 +3 · 学习 +1 · 心情 +3",
        effects: { knowledge: 3, study: 1, mood: 3 },
        result: "你把 PPT 做得很漂亮，逻辑也顺。答辩时老师问“数据来源呢”，你愣了一下，然后诚实地说“假设”。老师笑了。"
      },
      {
        label: "抱大腿，跟着混个奖",
        hint: "社交 +2 · 心情 +3 · 学习 -1",
        effects: { social: 2, mood: 3, study: -1 },
        result: "你几乎没做什么，但团队拿了奖，证书上也有你的名字。你有点心虚，决定下次认真一点。"
      }
    ]
  },
  {
    id: "poetry_night",
    title: "人文学院：在蠡湖边读一首诗",
    scene: "人文学院 · 蠡湖边 · 傍晚",
    kicker: "人文气质",
    minSem: 0,
    maxSem: 6,
    college: "humanities",
    text: "学院办了一场湖畔诗会，傍晚的蠡湖边摆了一圈椅子。有人读海子，有人读自己写的诗。轮到你时，你手里只有一张空白纸。",
    choices: [
      {
        label: "即兴写一首，读给湖听",
        hint: "心情 +8 · 社交 +5 · 学识 +2",
        effects: { mood: 8, social: 5, knowledge: 2 },
        result: "你写了四句，读得有点抖。读完，大家安静了两秒，然后鼓掌。有个老师说：“有真情。”你把那张纸折好，放进了口袋。"
      },
      {
        label: "读一段喜欢的诗，不原创",
        hint: "心情 +5 · 学识 +2",
        effects: { mood: 5, knowledge: 2 },
        result: "你读了北岛的一段诗。风吹过来，声音散在湖面上。你忽然觉得，诗这种东西，还是要在户外读。"
      },
      {
        label: "坐在后排听，不上去",
        hint: "心情 +4 · 学习 +1",
        effects: { mood: 4, study: 1 },
        result: "你坐在最后一排，听完所有人的诗。散场时天已经黑了，你沿着湖边走了很久。"
      }
    ]
  },
  {
    id: "join_research",
    title: "进实验室：从“想试试”到“真的做”",
    scene: "学院楼 · 导师办公室",
    kicker: "科研",
    minSem: 1,
    maxSem: 5,
    cond: (s) => !s.flags.research,
    text: "你在学院群里看到导师招本科生的消息。你点开看了看，又关掉。第二天，你又点开了。邮箱里那封自我介绍，写了一半。",
    choices: [
      {
        label: "发邮件，去实验室试试",
        hint: "需要学识 45 · 成功率 65% · 科研入门",
        require: { knowledge: 45 },
        roll: 0.65,
        rollStat: "knowledge",
        success: {
          text: "导师回了邮件，让你周五去办公室聊聊。你紧张了一周，见面后发现老师比想象中随和。他说：“先来组会听听，不急着出成果。”",
          effects: { knowledge: 4, study: 1, energy: -6, flags: { research: true } }
        },
        fail: {
          text: "导师说组里暂时没有位置，让你下学期再联系。你有点失落，但还是回了一句“谢谢老师”。",
          effects: { mood: -4, knowledge: 2 }
        }
      },
      {
        label: "先做课程项目，积累一点经验",
        hint: "学识 +3 · 学习 +1 · 心情 +2",
        effects: { knowledge: 3, study: 1, mood: 2 },
        result: "你选了一门有课程项目的课，做得很认真。项目结题时，老师说：“你这个可以再往下做。”你把这句话记了很久。"
      },
      {
        label: "不着急，先把绩点稳住",
        hint: "学习 +2 · 心情 +3",
        effects: { study: 2, mood: 3 },
        result: "你没有联系导师，把时间用在了专业课上。期末绩点涨了一点，你觉得这也是一种进步。"
      }
    ]
  },
  {
    id: "paper_submit",
    title: "论文投稿：邮箱里的“Major Revision”",
    scene: "实验室 · 凌晨 · 投稿系统",
    kicker: "论文",
    minSem: 4,
    maxSem: 7,
    cond: (s) => Boolean(s.flags.research),
    text: "你跟着师兄做的课题终于有了结果。导师说可以投一个会议试试。你花了三周写初稿，提交前检查了十遍格式。",
    choices: [
      {
        label: "投核心期刊，赌一把大的",
        hint: "成功率 40% · 学识 +6 · 论文",
        roll: 0.4,
        rollStat: "knowledge",
        success: {
          text: "三个月后，你收到了“小修”意见。导师说：“不错。”你改完回复，又等了两个月，终于收到录用通知。你的名字第一次出现在论文上。",
          effects: { knowledge: 6, mood: 14, study: 2, flags: { paper: true } }
        },
        fail: {
          text: "审稿意见是“创新性不足”。你盯着那行字看了很久，师兄拍拍你的肩说：“正常，改改再投。”",
          effects: { mood: -6, knowledge: 3 }
        }
      },
      {
        label: "投一个会议，先有个成果",
        hint: "成功率 65% · 学识 +4 · 论文",
        roll: 0.65,
        rollStat: "knowledge",
        success: {
          text: "会议录用了你的论文。你去外地做了第一次学术报告，台下只有十几个人，但你讲得很认真。回来时，你觉得自己好像真的入门了。",
          effects: { knowledge: 4, mood: 10, energy: -6, flags: { paper: true } }
        },
        fail: {
          text: "会议拒了你的论文，理由是和主题不够匹配。你有点沮丧，但导师说：“换个会再投，不着急。”",
          effects: { mood: -4, knowledge: 2 }
        }
      },
      {
        label: "再改改，等更好的结果",
        hint: "学习 +2 · 学识 +2 · 心情 +2",
        effects: { study: 2, knowledge: 2, mood: 2 },
        result: "你决定再补一组实验。虽然慢了一点，但你对课题的理解更深了。"
      }
    ]
  },
  {
    id: "internship_interview",
    title: "实习面试：HR 问你最大的缺点",
    scene: "写字楼 · 面试间",
    kicker: "面试",
    minSem: 3,
    maxSem: 7,
    text: "面试官翻着你的简历，问：“你觉得自己最大的缺点是什么？”你准备过这个问题，但此刻脑子一片空白。窗外是无锡的天际线。",
    choices: [
      {
        label: "诚实回答，说自己有时太追求完美",
        hint: "成功率 60% · 社交 +3 · 存款 +800",
        roll: 0.6,
        rollStat: "social",
        success: {
          text: "面试官笑了一下，说：“这个答案我听过很多次，但你讲得比较真。”一周后你收到实习 offer，工资不高，但足够 cover 生活费。",
          effects: { money: 800, social: 3, mood: 7, flags: { internship: 2 } }
        },
        fail: {
          text: "面试官追问：“那你能举一个具体的例子吗？”你答得不太顺。面试结束后，你知道自己没戏了。",
          effects: { mood: -4, social: 2 }
        }
      },
      {
        label: "把缺点说成优点，背标准答案",
        hint: "成功率 45% · 社交 +2",
        roll: 0.45,
        rollStat: "knowledge",
        success: {
          text: "你背了一段“我太热爱工作”的答案，面试官居然点了点头。你拿到了 offer，但心里有点虚。",
          effects: { money: 800, mood: 5, flags: { internship: 2 } }
        },
        fail: {
          text: "面试官听完，说：“这个答案太标准了。”你尴尬地笑了笑。结果可想而知。",
          effects: { mood: -5, social: 1 }
        }
      },
      {
        label: "反问面试官，把问题抛回去",
        hint: "成功率 40% · 社交 +4 · 心情 +4",
        roll: 0.4,
        rollStat: "social",
        success: {
          text: "你问：“您觉得这个岗位最需要什么特质？”面试官愣了一下，然后认真回答了。你们聊了很久，最后他给了你 offer。",
          effects: { money: 800, social: 4, mood: 8, flags: { internship: 2 } }
        },
        fail: {
          text: "面试官觉得你在回避问题，脸色不太好。面试草草结束，你走出写字楼，觉得今天风有点大。",
          effects: { mood: -4, social: 1 }
        }
      }
    ]
  },
  {
    id: "job_fair",
    title: "秋招宣讲会：人人都在找出路",
    scene: "大学生活动中心 · 宣讲会",
    kicker: "秋招",
    minSem: 5,
    maxSem: 7,
    text: "宣讲会现场发着免费的矿泉水和公司周边。台上 HR 讲着“我们重视年轻人”，台下有人认真记笔记，有人低头改简历。你坐在中间，觉得自己像一颗待售的螺丝钉。",
    choices: [
      {
        label: "排队投简历，和 HR 聊两句",
        hint: "社交 +4 · 精力 -6 · 心情 +2",
        effects: { social: 4, energy: -6, mood: 2, flags: { jobFair: true } },
        result: "你排了二十分钟，和 HR 聊了三分钟。对方说“回去等通知”，你知道大概率不会。但至少你迈出了第一步。"
      },
      {
        label: "听完宣讲，拿了周边就走",
        hint: "心情 +4 · 存款 0 · 周边 +1",
        effects: { mood: 4, energy: 1 },
        result: "你拿了一个帆布袋和一支笔，听完了整场宣讲。回宿舍后，你把帆布袋送给了室友。"
      },
      {
        label: "不听了，回去继续学习",
        hint: "学习 +2 · 心情 +1",
        effects: { study: 2, mood: 1 },
        result: "你走出活动中心，去了图书馆。路上你看到很多穿正装的人，忽然觉得自己还没准备好毕业。"
      }
    ]
  },
  {
    id: "parents_call",
    title: "家里的电话：钱够不够花",
    scene: "宿舍阳台 · 晚上",
    kicker: "家",
    minSem: 0,
    maxSem: 7,
    text: "妈妈打来电话，先问你吃了吗，再问钱够不够花，最后问学习怎么样。你站在阳台上，看着楼下的路灯，忽然不知道该怎么回答。",
    choices: [
      {
        label: "聊很久，把最近的事都说一遍",
        hint: "心情 +7 · 社交 +1",
        effects: { mood: 7, social: 1 },
        result: "你聊了四十分钟，从食堂的菜到室友的呼噜。妈妈在电话那头笑，说“你以前没这么话多”。挂电话后，你觉得心里暖了一点。"
      },
      {
        label: "说一切都好，报喜不报忧",
        hint: "心情 +2 · 学习 +1",
        effects: { mood: 2, study: 1 },
        result: "你说“都挺好的”，然后匆匆挂了电话。其实你最近有点累，但不想让他们担心。"
      },
      {
        label: "说忙，晚点再回",
        hint: "学习 +2 · 心情 -3",
        effects: { study: 2, mood: -3 },
        result: "你挂了电话，继续写作业。晚上十一点，你想起还没回电话，但太晚了，决定明天再说。"
      }
    ]
  },
  {
    id: "scholarship_review",
    title: "奖学金答辩：把优秀讲给别人听",
    scene: "学院楼 · 会议室",
    kicker: "奖学金",
    minSem: 1,
    maxSem: 6,
    cond: (s) => s.stats.gpa >= 3.5,
    text: "你进了奖学金答辩名单。PPT 要求写“个人事迹”，你翻遍硬盘，发现自己除了绩点，好像没有太多可写的。",
    choices: [
      {
        label: "认真准备，把每件小事讲出价值",
        hint: "成功率 70% · 存款 +2000 · 心情 +8",
        roll: 0.7,
        rollStat: "social",
        success: {
          text: "你把社团、志愿、课程项目串成了一条线，讲得很真诚。答辩结束，老师问了一个问题，你答得不错。最后你拿到二等奖学金，请室友吃了顿火锅。",
          effects: { money: 2000, mood: 8, social: 2, flags: { scholarship: true } }
        },
        fail: {
          text: "你的答辩中规中矩，最后没拿到。你有点失落，但看到获奖同学的履历，觉得确实比不过。",
          effects: { mood: -4 }
        }
      },
      {
        label: "放弃答辩，把名额让给别人",
        hint: "社交 +4 · 心情 +4",
        effects: { social: 4, mood: 4 },
        result: "你退出了答辩群，把机会让给了室友。室友拿到奖学金后，请你吃了一顿饭。"
      },
      {
        label: "找老师改材料，把亮点挖出来",
        hint: "社交 +3 · 学习 +1 · 心情 +3",
        effects: { social: 3, study: 1, mood: 3 },
        result: "你找辅导员帮忙看材料，她帮你重新梳理了经历。你发现，自己其实做过不少事，只是没写出来。"
      }
    ]
  },
  {
    id: "national_award",
    title: "国奖答辩：和全学院最卷的人坐在一起",
    scene: "学院楼 · 国奖答辩现场",
    kicker: "国家奖学金",
    minSem: 3,
    maxSem: 6,
    cond: (s) => s.stats.gpa >= 3.8,
    text: "国奖答辩名单贴出来，你发现自己是里面唯一没有专利、没有国奖、也没有发表论文的人。你看了看自己的 PPT，忽然有点想笑。",
    choices: [
      {
        label: "冲一把，把故事讲好",
        hint: "成功率 55% · 存款 +8000 · 心情 +12",
        roll: 0.55,
        rollStat: "social",
        success: {
          text: "你没有堆砌成果，而是讲了自己为什么做这些事。评委里有老师点了点头。最后你拿到了国奖，八千块到账那天，你给爸妈各买了一件礼物。",
          effects: { money: 8000, mood: 12, social: 2, flags: { national: true } }
        },
        fail: {
          text: "你没拿到国奖，但拿到了校级一等奖。你有点遗憾，但更多的是“终于结束了”的轻松。",
          effects: { money: 2000, mood: 2, flags: { scholarship: true } }
        }
      },
      {
        label: "把机会让给更需要的同学",
        hint: "社交 +5 · 心情 +6",
        effects: { social: 5, mood: 6 },
        result: "你退出了答辩，把名额让给了室友。室友拿到国奖后，请你吃了一顿很贵的饭。你说：“下次记得还。”"
      },
      {
        label: "认真准备，但做好拿不到的准备",
        hint: "学习 +2 · 心情 +4",
        effects: { study: 2, mood: 4, knowledge: 2 },
        result: "你把答辩当成一次复盘，认真梳理了四年的经历。不管结果如何，你觉得自己已经赚到了。"
      }
    ]
  },
  {
    id: "academic_warning",
    title: "学业预警：辅导员约你喝茶",
    scene: "学院楼 · 辅导员办公室",
    kicker: "学业预警",
    minSem: 1,
    maxSem: 6,
    cond: (s) => s.stats.gpa > 0 && s.stats.gpa < 2.0,
    text: "辅导员在群里@了你，让你去办公室一趟。你大概猜到了原因：绩点太低，已经触发了学业预警。你站在办公室门口，深吸了一口气。",
    choices: [
      {
        label: "认真谈，制定一个补救计划",
        hint: "学习 +3 · 社交 +2 · 心情 +3",
        effects: { study: 3, social: 2, mood: 3, knowledge: 2 },
        result: "辅导员没有骂你，而是和你一起排了下学期的课表。她说：“还有时间，别放弃。”你走出办公室，觉得天没有塌。"
      },
      {
        label: "嘴上答应，心里继续摆烂",
        hint: "心情 +2 · 学习 -2 · 风险",
        effects: { mood: 2, study: -2, flags: { probation: 1 } },
        result: "你答应得很好，回宿舍继续打游戏。期末又挂了一门，预警名单上还是你的名字。"
      },
      {
        label: "申请休学一年，重新想想",
        hint: "心情 +5 · 精力 +10 · 学业暂停",
        effects: { mood: 5, energy: 10, flags: { gapYear: true } },
        result: "你办了休学，回家待了一年。你帮家里看店，去别的城市旅行，也想清楚了一些事。回校时，你比同届晚了一年，但心态稳了很多。"
      }
    ]
  },
  {
    id: "low_mood",
    title: "情绪低谷：不想起床的第七天",
    scene: "宿舍 · 下午三点 · 窗帘拉着",
    kicker: "低谷",
    minSem: 0,
    maxSem: 7,
    cond: (s) => s.stats.mood < 30,
    text: "你已经连续一周不想起床。课能翘就翘，饭能不吃就不吃。室友叫你出去走走，你说“等会儿”。窗帘拉着，房间很暗。",
    choices: [
      {
        label: "去心理咨询中心聊聊",
        hint: "心情 +12 · 社交 +2 · 精力 -3",
        effects: { mood: 12, social: 2, energy: -3 },
        result: "你预约了学校的心理咨询。咨询师听你说了很久，没有急着给建议。走出咨询室时，你觉得心里轻了一点。"
      },
      {
        label: "找朋友倾诉，出去吃顿好的",
        hint: "心情 +9 · 社交 +5 · 存款 -50",
        effects: { mood: 9, social: 5, money: -50, inc: { food: 1 } },
        result: "你给高中同学打了电话，聊了两个小时。晚上你们去吃了顿火锅，辣得眼泪都出来了。你说不清是辣的还是别的。"
      },
      {
        label: "一个人去蠡湖边坐坐",
        hint: "心情 +6 · 精力 -2",
        effects: { mood: 6, energy: -2 },
        result: "你一个人走到蠡湖边，坐了很久。湖面上有风，远处有人跑步。你没有想明白什么，但觉得可以再撑一阵。"
      }
    ]
  },
  {
    id: "food_blog",
    title: "校园美食博主：从一条测评开始",
    scene: "宿舍 · 手机支架前",
    kicker: "美食博主",
    minSem: 1,
    maxSem: 7,
    cond: (s) => (s.flags.food || 0) >= 3,
    text: "你发的食堂测评笔记，突然有了几千浏览。有人在评论区问：“三食堂的糖醋排骨真的那么好吃吗？”你盯着手机，有点心动。",
    choices: [
      {
        label: "认真做账号，把江大食堂吃一遍",
        hint: "社交 +5 · 存款 -100 · 美食博主",
        effects: { social: 5, money: -100, mood: 6, flags: { blog: true }, inc: { food: 1 } },
        result: "你开始每周更新一条食堂测评，粉丝慢慢涨到了几千。有店家找你合作，你第一次靠“吃饭”赚到了钱。"
      },
      {
        label: "发着玩，不给自己压力",
        hint: "心情 +5 · 社交 +2",
        effects: { mood: 5, social: 2, inc: { food: 1 } },
        result: "你偶尔发一条，不追热点也不接广告。评论区有人催更，你回：“等我先吃完这顿。”"
      },
      {
        label: "删掉笔记，专心学习",
        hint: "学习 +2 · 心情 -2",
        effects: { study: 2, mood: -2 },
        result: "你删掉了那条笔记，把手机扣在桌上。但吃饭的时候，你还是会下意识地先拍照。"
      }
    ]
  },
  {
    id: "esports_match",
    title: "电竞比赛：宿舍五排，赌上尊严",
    scene: "宿舍 · 晚上 · 校园电竞比赛",
    kicker: "电竞",
    minSem: 1,
    maxSem: 7,
    cond: (s) => (s.flags.esports || 0) >= 1,
    text: "校园电竞比赛开始报名，室友说：“我们宿舍五排，正好缺你。”你看了一眼自己的段位，又看了一眼明天的早八。",
    choices: [
      {
        label: "报名，认真打一次比赛",
        hint: "精力 -10 · 成功率 50% · 电竞 +1",
        roll: 0.5,
        rollStat: "social",
        success: {
          text: "你们打进了八强。最后一场虽然输了，但你在关键局拿了三杀，室友把录屏发到了群里。那天晚上，你们出去吃了烧烤。",
          effects: { energy: -10, mood: 9, social: 4, money: 200, inc: { esports: 1, night: 1 } }
        },
        fail: {
          text: "你们第一轮就被淘汰了。回宿舍的路上，室友说：“下次一定。”你说：“下次一定不复盘。”",
          effects: { energy: -8, mood: -3, social: 2 }
        }
      },
      {
        label: "不参赛，但去现场当观众",
        hint: "心情 +5 · 社交 +2",
        effects: { mood: 5, social: 2 },
        result: "你坐在观众席看完了决赛，现场氛围比直播好一百倍。你忽然有点后悔没报名。"
      },
      {
        label: "戒游戏，专心学习",
        hint: "学习 +3 · 心情 -2",
        effects: { study: 3, mood: -2, flags: { esports: 0 } },
        result: "你卸载了游戏，把时间用在学习上。室友开黑时，你戴着耳机看书。坚持了两周，你发现其实也没那么难。"
      }
    ]
  },
  {
    id: "scam_call",
    title: "诈骗电话：你涉嫌一起“校园贷”",
    scene: "宿舍 · 下午 · 陌生来电",
    kicker: "反诈",
    minSem: 0,
    maxSem: 5,
    text: "一个陌生号码打来，对方自称是平台客服，说你的账户涉嫌校园贷，需要配合注销。你最近确实注册过一个借贷平台，心里咯噔一下。",
    choices: [
      {
        label: "直接挂断，下载国家反诈中心",
        hint: "心情 +3 · 安全",
        effects: { mood: 3 },
        result: "你挂断电话，下载了反诈 APP。后来辅导员在群里发了同样的案例，你庆幸自己没有上当。"
      },
      {
        label: "半信半疑，和对方聊了几句",
        hint: "成功率 75% · 存款 -500 风险",
        roll: 0.75,
        success: {
          text: "对方越说越离谱，你终于意识到是诈骗，挂断并举报了号码。虽然浪费了半小时，但钱还在。",
          effects: { mood: 1, knowledge: 1 }
        },
        fail: {
          text: "你按对方指引操作，转过去了五百块“保证金”。等反应过来，对方已经拉黑了你。你在宿舍坐了很久，最后去派出所报了案。",
          effects: { money: -500, mood: -10, flags: { scammed: true } }
        }
      },
      {
        label: "报警，让警察来处理",
        hint: "社交 +2 · 心情 +2",
        effects: { social: 2, mood: 2 },
        result: "你打了 110，警察说最近这类案子很多，让你不要转账。你挂了电话，觉得自己做了一件正确的事。"
      }
    ]
  },
  {
    id: "roommate_conflict",
    title: "寝室矛盾：谁的闹钟在响",
    scene: "南区宿舍 · 早上六点",
    kicker: "寝室",
    minSem: 0,
    maxSem: 7,
    text: "室友的闹钟从六点响到六点半，人却没醒。你已经连续一周被吵醒。另外两个室友也不满，但没人愿意先开口。",
    choices: [
      {
        label: "当面沟通，把话说开",
        hint: "社交 +5 · 心情 +3",
        effects: { social: 5, mood: 3 },
        result: "你找了个大家都不忙的时间，把问题说了出来。室友愣了一下，然后道歉，把闹钟改成了震动。你们的关系反而更好了。"
      },
      {
        label: "忍着，戴上耳塞",
        hint: "心情 -3 · 精力 +3",
        effects: { mood: -3, energy: 3 },
        result: "你买了耳塞，继续忍。虽然能睡着了，但心里的疙瘩还在。"
      },
      {
        label: "找辅导员换宿舍",
        hint: "社交 -2 · 心情 +2 · 精力 -3",
        effects: { social: -2, mood: 2, energy: -3 },
        result: "你申请换宿舍，折腾了两周才办下来。新宿舍很安静，但你偶尔会想起原来的三个人。"
      }
    ]
  },
  {
    id: "teacher_office",
    title: "答疑时间：老师的办公室总有人",
    scene: "教学楼 · 教师办公室",
    kicker: "答疑",
    minSem: 0,
    maxSem: 7,
    text: "下周考试，你攒了五个问题。老师的答疑时间在周三下午，办公室门口排了七八个人。你站在队伍里，把问题在脑子里又过了一遍。",
    choices: [
      {
        label: "排队问完所有问题",
        hint: "学识 +4 · 学习 +2 · 社交 +2",
        effects: { knowledge: 4, study: 2, social: 2, energy: -4 },
        result: "你等了四十分钟，问了十分钟。老师讲得很清楚，还顺便说了考试重点。你走出办公室，觉得这门课稳了。"
      },
      {
        label: "发邮件问，不去排队",
        hint: "学识 +2 · 学习 +1",
        effects: { knowledge: 2, study: 1 },
        result: "你发了邮件，老师第二天回了，写得很详细。虽然没有当面讲得生动，但也够用了。"
      },
      {
        label: "自己啃书，不麻烦老师",
        hint: "学识 +3 · 学习 +1 · 精力 -4",
        effects: { knowledge: 3, study: 1, energy: -4 },
        result: "你在图书馆查了一下午资料，终于把问题弄懂了。那种“自己搞明白”的感觉，比问老师更爽。"
      }
    ]
  },
  {
    id: "startup_idea",
    title: "创业集市：一个想法值多少钱",
    scene: "大学生活动中心 · 创业集市",
    kicker: "创业",
    minSem: 2,
    maxSem: 7,
    text: "创业集市上，有人卖手作，有人做校园跑腿，有人摆了一个“代写情书”的摊。你忽然想到一个点子：做一个江大二手教材平台。",
    choices: [
      {
        label: "拉上朋友，真的做起来",
        hint: "需要存款 500 · 成功率 50% · 创业",
        require: { money: 500 },
        roll: 0.5,
        success: {
          text: "你们做了一个小程序，第一个月就有一百多个用户。虽然赚的钱不多，但你们在宿舍楼里搬书搬到凌晨。你第一次觉得，自己在创造什么。",
          effects: { money: 2000, mood: 10, energy: -12, flags: { startup: true } }
        },
        fail: {
          text: "项目做了两个月，用户增长停滞。你们把服务器关了，钱也花得差不多了。但你们说，至少试过。",
          effects: { money: -500, mood: -5, energy: -8 }
        }
      },
      {
        label: "只写商业计划书，参加比赛",
        hint: "学习 +2 · 学识 +2 · 心情 +4",
        effects: { study: 2, knowledge: 2, mood: 4 },
        result: "你写了一份商业计划书，参加了校赛。虽然没拿奖，但评委的提问让你重新思考了用户需求。"
      },
      {
        label: "想想就好，不折腾",
        hint: "心情 +3 · 学习 +1",
        effects: { mood: 3, study: 1 },
        result: "你把想法记在备忘录里，继续上课。偶尔翻到，你会想：如果当时做了，会怎么样？"
      }
    ]
  },
  {
    id: "stock_fund",
    title: "室友说，他靠基金赚了三千",
    scene: "宿舍 · 晚上 · 支付宝",
    kicker: "理财",
    minSem: 1,
    maxSem: 7,
    text: "室友兴奋地把手机递给你看：他买的基金涨了 12%。你打开自己的余额宝，七日年化 1.8%。你忽然觉得，自己错过了什么。",
    choices: [
      {
        label: "跟投一笔，试试水",
        hint: "成功率 50% · 存款 +800 / -400",
        roll: 0.5,
        success: {
          text: "你投了两千，一个月后赚了八百。你截图发给室友，室友说：“再来一把。”你及时收手，把本金取了出来。",
          effects: { money: 800, mood: 6 }
        },
        fail: {
          text: "你投了两千，一周后跌了四百。你盯着曲线，决定再也不碰基金。室友说：“长期持有。”你回：“长期不了。”",
          effects: { money: -400, mood: -4 }
        }
      },
      {
        label: "只存余额宝，稳一点",
        hint: "存款 +50 · 心情 +2",
        effects: { money: 50, mood: 2 },
        result: "你把生活费存进余额宝，每天赚几毛钱。虽然少，但看着数字一点点涨，也挺安心。"
      },
      {
        label: "不碰，钱够花就行",
        hint: "学习 +1 · 心情 +2",
        effects: { study: 1, mood: 2 },
        result: "你对理财没什么兴趣，继续过自己的日子。室友后来亏了钱，你请他吃了顿饭，没提基金的事。"
      }
    ]
  },
  {
    id: "lost_phone",
    title: "手机丢了：现代人的一次小型死亡",
    scene: "校园 · 下午 · 手机不见了",
    kicker: "丢手机",
    minSem: 0,
    maxSem: 7,
    text: "你摸遍口袋，手机不见了。里面有大半年的照片、聊天记录和没背完的单词。你借室友的手机打过去，关机了。",
    choices: [
      {
        label: "沿原路找一遍，问遍路过的人",
        hint: "精力 -6 · 成功率 60%",
        roll: 0.6,
        rollStat: "social",
        success: {
          text: "你在三食堂门口找到了手机，是一位阿姨捡到的。她一直在原地等失主。你连声道谢，她说：“下次小心点。”",
          effects: { energy: -6, mood: 6, social: 2 }
        },
        fail: {
          text: "你找了一下午，没找到。最后你买了一部新手机，补卡、登录、找回账号，折腾了三天。照片没了，聊天记录也没了。",
          effects: { money: -2500, mood: -8, energy: -6 }
        }
      },
      {
        label: "直接买新的，旧的不去新的不来",
        hint: "存款 -3000 · 心情 -3",
        effects: { money: -3000, mood: -3 },
        result: "你买了一部新手机，店员问你要不要旧机抵扣，你说丢了。新手机很流畅，但你总觉得少了点什么。"
      },
      {
        label: "先借室友的旧手机用，慢慢找",
        hint: "社交 +2 · 心情 -2 · 存款 0",
        effects: { social: 2, mood: -2 },
        result: "你借了室友的旧手机，屏幕碎了但能用。你用了一个月，最后在书包夹层里找到了自己的手机。"
      }
    ]
  },
  {
    id: "family_pressure",
    title: "爸妈说：要不回来考公吧",
    scene: "宿舍阳台 · 晚上 · 家庭群",
    kicker: "家庭",
    minSem: 4,
    maxSem: 7,
    text: "家庭群里，爸爸转发了一条“2027 年国考报名时间”的文章，后面跟了一句：“你要不要试试？稳定。”你盯着屏幕，不知道怎么回。",
    choices: [
      {
        label: "认真考虑，把考公作为备选",
        hint: "学习 +2 · 心情 +1 · 家庭和谐",
        effects: { study: 2, mood: 1, flags: { homePressure: true, home: true } },
        result: "你回了一句“我看看”，然后真的去查了岗位表。你发现有些岗位其实挺适合自己，心里多了一条路。"
      },
      {
        label: "坚持自己的选择，和父母好好解释",
        hint: "心情 +4 · 社交 +1",
        effects: { mood: 4, social: 1 },
        result: "你给爸妈打了电话，讲了自己的规划。他们不完全理解，但说“你自己想清楚就行”。你松了一口气。"
      },
      {
        label: "先答应，拖一天算一天",
        hint: "心情 -3 · 学习 +1",
        effects: { mood: -3, study: 1 },
        result: "你回了个“好”，然后把手机扣在桌上。你知道这件事不会就这么过去，但今天不想面对。"
      }
    ]
  },
  {
    id: "class_committee",
    title: "班委竞选：要不要当班长",
    scene: "教学楼 · 班会",
    kicker: "班委",
    minSem: 0,
    maxSem: 2,
    text: "班会最后一项是班委竞选。班长的位置空着，辅导员问了三遍“有没有人想试试”，教室里安静得能听见空调声。",
    choices: [
      {
        label: "举手，竞选班长",
        hint: "社交 +6 · 精力 -5 · 心情 +4",
        effects: { social: 6, energy: -5, mood: 4, flags: { leader: true } },
        result: "你举了手，讲了三分钟。投票时你拿了大半票，成了班长。后来你才知道，这个职位意味着无数个“收到请回复”。"
      },
      {
        label: "竞选学习委员，收作业就行",
        hint: "学识 +3 · 学习 +1 · 社交 +2",
        effects: { knowledge: 3, study: 1, social: 2 },
        result: "你当上了学习委员，每周收一次作业。虽然琐碎，但你因此认识了班里所有人。"
      },
      {
        label: "低头玩手机，假装没听见",
        hint: "心情 +3 · 社交 -2",
        effects: { mood: 3, social: -2 },
        result: "你没有举手，最后班长由另一个同学担任。你松了一口气，继续过自己的日子。"
      }
    ]
  },
  {
    id: "cheat_exam",
    title: "考场上的小纸条：一个不能撤回的选择",
    scene: "教学楼 · 期末考试 · 教室后排",
    kicker: "诚信",
    minSem: 1,
    maxSem: 5,
    text: "最后一道大题你不会。前面的人把卷子往旁边挪了挪，答案隐约可见。监考老师正在看窗外。你的手心开始出汗。",
    choices: [
      {
        label: "不作弊，空着交卷",
        hint: "学习 +1 · 心情 +3 · 诚信",
        effects: { study: 1, mood: 3, knowledge: 1 },
        result: "你空了那道题，交卷时心里很平静。成绩出来，你差两分到优秀，但你知道那两分不属于自己。"
      },
      {
        label: "看一眼，就一眼",
        hint: "成功率 60% · 风险：被抓",
        roll: 0.6,
        success: {
          text: "你瞄到了答案，写上去，刚好压线优秀。没人发现，但你在走出考场时，心跳得比考试时还快。",
          effects: { knowledge: 1, mood: -1, study: 1 }
        },
        fail: {
          text: "监考老师转了过来，正好看到你的视线。他敲了敲你的桌子，收走了卷子。你被记了考试违纪，成绩作废。",
          effects: { mood: -15, flags: { warning: true, cheating: true }, study: -1 }
        }
      },
      {
        label: "自己推导，能写多少写多少",
        hint: "学习 +2 · 学识 +2 · 心情 +3",
        effects: { study: 2, knowledge: 2, mood: 3 },
        result: "你从头推了一遍，虽然没做完，但写满了半页。老师给了步骤分，你最后及格了。那一刻，你觉得自己挺酷。"
      }
    ]
  },
  {
    id: "club_activity",
    title: "社团活动：搬桌子、贴海报和合影",
    scene: "大学生活动中心 · 周末",
    kicker: "社团",
    minSem: 0,
    maxSem: 6,
    cond: (s) => Boolean(s.flags.club),
    text: (s) => `${s.flags.club}周末办活动，需要人搬桌子、贴海报、守摊位。社长在群里连发三条消息，回复的人只有两个。`,
    choices: [
      {
        label: "全程参与，从搬桌子到收尾",
        hint: "社交 +6 · 心情 +4 · 精力 -8",
        effects: { social: 6, mood: 4, energy: -8 },
        result: "你搬了八张桌子，贴了二十张海报。活动结束时，社长拍了一张全员合影，把你放在 C 位。"
      },
      {
        label: "去帮忙两小时，然后溜走",
        hint: "社交 +3 · 心情 +3 · 学习 +1",
        effects: { social: 3, mood: 3, study: 1 },
        result: "你帮忙布置完就找借口走了。社长没说什么，但下次有活动时，第一个问的就是你。"
      },
      {
        label: "请假，周末想休息",
        hint: "精力 +6 · 社交 -2",
        effects: { energy: 6, social: -2 },
        result: "你在群里发了“抱歉，这周有事”。社长回了个“没事”。你睡了个午觉，醒来时活动已经结束了。"
      }
    ]
  },
  {
    id: "library_rain",
    title: "闭馆时的雨：没带伞的人",
    scene: "图书馆 · 晚上十点 · 大雨",
    kicker: "雨夜",
    minSem: 0,
    maxSem: 7,
    text: "图书馆闭馆铃响了，你才发现外面下起了大雨。门口站了一排没带伞的人，有人等雨停，有人给室友发消息，有人直接冲进雨里。",
    choices: [
      {
        label: "等雨小一点，再看会儿书",
        hint: "学习 +2 · 心情 +2",
        effects: { study: 2, mood: 2, inc: { library: 1 } },
        result: "你回到大厅，把没看完的那一章看完了。四十分钟后雨小了，你顶着书包跑回宿舍。"
      },
      {
        label: "给室友发消息，让他送伞",
        hint: "社交 +3 · 心情 +3",
        effects: { social: 3, mood: 3 },
        result: "室友穿着拖鞋、打着伞来了，嘴里骂骂咧咧。你请他吃了一根烤肠，他说：“下次自己看天气预报。”"
      },
      {
        label: "直接冲进雨里，青春一把",
        hint: "精力 -5 · 心情 +6",
        effects: { energy: -5, mood: 6, flags: { fitness: true } },
        result: "你冲进雨里，跑过曲水桥，全身湿透。回到宿舍，你洗了个热水澡，觉得自己像电影里的主角。"
      }
    ]
  },
  {
    id: "cet4_exam",
    title: "四级考试：耳机里的电流声",
    scene: "教学楼 · 十二月 · 四级考场",
    kicker: "四级",
    minSem: 1,
    maxSem: 3,
    cond: (s) => !s.flags.cet4,
    text: "四级考试在十二月。你提前半小时到考场，发现耳机需要调频。听力开始前，广播里放了一段试音，你忽然紧张起来。",
    choices: [
      {
        label: "认真备考，真题刷了三遍",
        hint: "学习 +2 · 精力 -6 · 成功率 82%",
        effects: { study: 2, energy: -6 },
        roll: 0.82,
        rollStat: "knowledge",
        success: {
          text: "成绩出来，520 分。你截了图发到家庭群，妈妈回了一个大拇指。你把成绩单存进了“简历素材”文件夹。",
          effects: { mood: 8, flags: { cet4: 520 } }
        },
        fail: {
          text: "成绩出来，412 分，差 13 分。你在宿舍躺了一下午，然后默默报名了下一次考试。",
          effects: { mood: -6, flags: { cet4: 412 } }
        }
      },
      {
        label: "裸考试试，反正还有下次",
        hint: "成功率 50% · 心情 +2",
        effects: { mood: 2 },
        roll: 0.5,
        rollStat: "knowledge",
        success: {
          text: "你裸考居然过了，431 分，压线。你看着成绩单，觉得自己可能是被运气选中的。",
          effects: { mood: 7, flags: { cet4: 431 } }
        },
        fail: {
          text: "你考了 380 分。听力一半没听懂，阅读最后两篇没做完。你决定下次一定好好准备。",
          effects: { mood: -4, flags: { cet4: 380 } }
        }
      },
      {
        label: "缺考，下次再说",
        hint: "心情 +2 · 精力 +4",
        effects: { mood: 2, energy: 4 },
        result: "考试那天你睡过了。醒来时考试已经结束，你点了份外卖，决定下学期再报名。"
      }
    ]
  },
  {
    id: "cet6_exam",
    title: "六级：从“能过”到“刷分”",
    scene: "教学楼 · 六月 · 六级考场",
    kicker: "六级",
    minSem: 2,
    maxSem: 6,
    cond: (s) => s.flags.cet4 >= 425 && !s.flags.cet6,
    text: "四级过了之后，六级成了新的坎。你做了两套真题，正确率忽高忽低。室友说：“六级就是玄学。”你决定信一次玄学。",
    choices: [
      {
        label: "认真准备，争取一次过",
        hint: "学习 +2 · 精力 -6 · 成功率 70%",
        effects: { study: 2, energy: -6 },
        roll: 0.7,
        rollStat: "knowledge",
        success: {
          text: "你考了 486 分，一次过。虽然不是高分，但足够写在简历上了。你请自己喝了一杯奶茶。",
          effects: { mood: 8, flags: { cet6: 486 } }
        },
        fail: {
          text: "你考了 421 分，差 4 分。你盯着成绩单，觉得这个数字在嘲笑你。",
          effects: { mood: -5, flags: { cet6: 421 } }
        }
      },
      {
        label: "裸考，过了算赚",
        hint: "成功率 40% · 心情 +2",
        effects: { mood: 2 },
        roll: 0.4,
        rollStat: "knowledge",
        success: {
          text: "你裸考过了，432 分，压线。你截图发了朋友圈，配文：玄学是真的。",
          effects: { mood: 6, flags: { cet6: 432 } }
        },
        fail: {
          text: "你考了 390 分。听力像天书，翻译像机翻。你决定不再相信玄学。",
          effects: { mood: -4, flags: { cet6: 390 } }
        }
      },
      {
        label: "不考了，把时间留给专业课",
        hint: "学习 +2 · 心情 +2",
        effects: { study: 2, mood: 2 },
        result: "你放弃了六级，把时间用在专业课上。后来你发现，有些岗位确实卡六级，但你已经做了选择。"
      }
    ]
  }
];
