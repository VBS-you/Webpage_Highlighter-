

/////////////////////////parameter////////////////////////////////////////////////////////////
{
    const rightgreen = "#7FFFAA", slivergray = "#C0C0C0", brown = "#F4A460", pink = "#FFC0CB";
    const orange = "#FFA500", skyblue = "#87CEEB", lightgray = "#DCDCDC"; 
    const purplegray = "#E6E6FA",	lightorange="#FFDEAD", Lime="#00FF00";//亮绿色
    const lightgreen = "#98FB98", azure = "#F0FFFF", Aqua = "#D4F2E7";//淡水绿色
    const lightcyan = "#E1FFFF", tomatored="#FF6347", Ivory="#FFFFD0";
    const GreenYellow="#ADFF2F", Khaki="#F0E68C";//卡其色
    const Lavender="#E6E6FA" , MistyRose="#FFE4E1";// 薰衣草淡紫 //薄雾玫瑰 MistyRose淡粉红



    var rules = [
         //      长词在前，否则短词span切割会导致长词检索不到



        { word: "不符合题意", level: 29 }, //lightorange
        { word: "不正确", level: 29 },
        { word: "进中国故事", level: 29 },
        { word: "战役情", level: 29 },//
        { word: "能动新", level: 29 },
        { word: "既使", level: 29 },
        { word: "认命", level: 29 },
        { word: "共商国事", level: 29 },    
        


        { word: "完法", level: 57 }, //tomatored
        { word: "自已", level: 57 },
        { word: "己经", level: 57 },
        { word: "检查机关", level: 57 },
        { word: "检查院", level: 57 },
        
        { word: "领导入", level: 57 },// 绝对错误  雷
        { word: "矛厝", level: 57 },//
        { word: "蚂蚊", level: 57 },
        { word: "良妍", level: 57 },
        { word: "决第", level: 57 },
        { word: "轻犯", level: 57 },
        { word: "部们", level: 57 },//   绝对错误
        { word: "开关之年", level: 57 },//tomatored
        // { word: "决第", level: 57 },
        // { word: "轻犯", level: 57 },
        // { word: "部们", level: 57 },//   绝对错误 雷
        // { word: "决第", level: 57 },
        // { word: "轻犯", level: 57 },
        // { word: "部们", level: 57 },
        // { word: "决第", level: 57 },
        // { word: "轻犯", level: 57 },
        // { word: "部们", level: 57 },


        { word: "-", level: 48 }, //pink 粉红色
        { word: "—", level: 18 }, //淡色
        { word: "给与", level: 48 },
        { word: "给于", level: 48 },
        { word: "是是", level: 48 },
        { word: "当家做主", level: 48 },
        { word: "属于属于", level: 48 }, //pink 相对错误
        { word: "概据", level: 48 },
        { word: "只是点", level: 48 },
        { word: "邓小乎", level: 48 },
        { word: "刑法处罚", level: 48 }, //pink 相对错误
        { word: "审关", level: 48 },
        { word: "依完", level: 48 },
        { word: "此次时间", level: 48 }, //pink 相对错误
        { word: "坚这", level: 48 },
        { word: "民族政治", level: 48 },       
        { word: "没有得到犯罪程度", level: 48 },
        { word: "対", level: 48 },
        { word: "而案闻", level: 48 },
        { word: "音惠", level: 48 },   //普惠
        { word: "赋子", level: 48 },  //赋予
        { word: "营改增", level: 48 },   //  增值税 雷   具体不明 据说未跳弹框
        { word: "作用作用", level: 48 },   
        { word: "区城", level: 48 },
        { word: "杜会", level: 48 },//pink 相对错误
        { word: "位与", level: 48 },
        { word: "抚乱", level: 48 },     
        { word: "为人民为实事", level: 48 },
        { word: "的的", level: 48 },
        { word: "静中游动", level: 48 },
        { word: "具体智慧的结晶", level: 48 },           
        { word: "带口罩", level: 48 },
        // { word: "权力关", level: 48 },  // ?? 权力机关？    false 将权力关进制度的笼子里
        { word: "建没", level: 48 },   
        { word: "我各民族", level: 48 },//pink 相对错误
        { word: "奥论", level: 48 },
        { word: "收人", level: 48 },     
        { word: "产主", level: 48 },
        { word: "进发", level: 48 },
        // { word: "并发", level: 48 },  
        { word: "写扬", level: 48 },           
        { word: "需本", level: 48 },  //需要
        { word: "考直", level: 48 }, //考查
        { word: "了动权", level: 48 },//0.2 雷
        { word: "勒劳", level: 48 },   // 勤劳
        { word: "映像", level: 48 }, // 映像 改为 映象
        { word: "准人", level: 48 },//pink 相对错误
        { word: "竟争", level: 48 },
        { word: "材科", level: 48 },    //  材料
        { word: "住情深", level: 48 },     // 一往情深pink 粉红 
        { word: "职贵", level: 48 },// 职责
        { word: "止有", level: 48 },   // “行止有耻”
        { word: "行已有耻", level: 48 },
        { word: "违反犯罪", level: 48 },     //违法
        { word: "依法法", level: 48 },//依法法治国
        { word: "贵任", level: 48 },   // 责任
        { word: "全年准确", level: 48 },     //全面 
        { word: "的助人", level: 48 },// 情绪的 主人
        { word: "竟技", level: 48 },   //竞技
        { word: "人和方法", level: 48 },     //任何
        { word: "机关机关", level: 48 },//
        { word: "溢用", level: 48 },   //滥用
        { word: "美异", level: 48 },     //差异
        { word: "我国我国", level: 48 },//
        { word: "贏", level: 48 },   //赢
        { word: "冻内", level: 48 },//冻肉
        { word: "强调强调", level: 48 },   //
        { word: "|", level: 48 },     //
        { word: "有利与", level: 48 },//有利于
        { word: "专破", level: 48 },   //专政
        { word: "辨证", level: 48 },     //辩证    粉红 
        { word: "一切从实际出、", level: 48 },// 从坚持一切从实际出发 雷
        { word: "形式严峻", level: 48 },   //形势严峻
        { word: "贫人口", level: 48 },     //贫困
        { word: "可能应做", level: 48 },//可能应做得不好而受到责备……应→因
        { word: "万种创新", level: 48 },   //
        { word: "署期", level: 48 },//《战狼Ⅱ》抓住署期档  雷
        { word: "习近乎", level: 48 },   //
        { word: "名营权", level: 48 },     // 名誉
        { word: "不和题意", level: 48 },// 不合题意
        { word: "扰乱了秩 ", level: 48 },   //，扰乱了秩 ；没有做到文明出行 雷
        { word: "骄做", level: 48 },     // 骄傲 雷 
        { word: "抗议前线", level: 48 },  // 抗疫前线  
        { word: "执政理念是以人为本", level: 48 },   //执政理念是立党为公，执政为民
        { word: "劳及劳动人民", level: 48 },     //pink 粉红 尊重和热爱劳动及劳动人民
        { word: "共字单车", level: 48 },//共享单车
        { word: "怡当", level: 48 },   // 恰当
        { word: "安情防控", level: 48 },     //疫情
        { word: "文化包新", level: 48 },// 创新
        { word: "安全行使", level: 48 },   // 为了孩子们安全行使， 雷 行驶
        { word: "一带路", level: 48 },     // 一带一路
        { word: "全勃以赴", level: 48 },   // 全力以赴
        { word: "在定条件", level: 48 },     // 在一定条件下  pink 粉红 
        { word: "引领个", level: 48 }, //文化是引领一个民族前行的旗帜
        { word: "保人民", level: 48 },   //切实保障人民知情权
        { word: "及映", level: 48 },//  反映
        { word: "拧虎", level: 48 },   //打虎拍蝇
        { word: "打黄扫非", level: 48 },     //中国扫黄打非网
        { word: "创新识", level: 48 },   //要求我们树立创新识 意识
        { word: "自身系质", level: 48 },     //  提升自身系质。    素质 雷           pink 粉红 
        { word: "不代价", level: 48 },//是不代价与回报  不计代价
        { word: "堂不动摇", level: 48 },   //堂不动摇地以经济建设为中心 毫不
        { word: "战性", level: 48 },     //推动经济结构战性调整，
        { word: "发菜", level: 48 },//多种所有制经济共同发菜，
        { word: "清费", level: 48 },   //发挥清费对经济发展的基础性作用 消费
        { word: "故项正确", level: 48 },   // 不完整  改为 故②项正确
        { word: "李子染", level: 48 },   // 李子柒
        { word: "全民依法治国", level: 48 },   //全面
        { word: "數衍", level: 48 },   //數衍塞责
        { word: "遵法守法", level: 48 },   //
        { word: "习近平新时期", level: 48 },// 新时代
        { word: "始害无穷", level: 48 },   //123
        { word: "教育教育", level: 48 },     //
        { word: "多个和国家", level: 48 },//
        { word: "坚持切从实际出发", level: 48 },   //
        { word: "带案来", level: 48 },   //
        { word: "多种分配制并存", level: 48 },   //
        { word: "在定条件下", level: 48 },   //
        { word: "热爱劳及劳动", level: 48 },     //
        { word: "枪打出头乌", level: 48 },     //pink 粉红 “枪打出头鸟” 
        { word: "社会实我", level: 48 },// 社会实我是不断发展的 社会实践
        { word: "医疗教治", level: 48 },//用于患者医疗教治费用的补助 医疗救治
        { word: "医疗数治", level: 48 },   //
        { word: "付相应责任", level: 48 },     //应付相应责任
        { word: "辦别", level: 48 },     // 辨别是非
        { word: "实现国家治理体现和治理能力现代化", level: 48 },     //雷
        { word: "民主平等", level: 48 },     //
        { word: "读职", level: 48 },     // 渎职 对失职读职的进行依法惩处
        { word: "其抗疫情", level: 48 },//
        { word: "积极态度面", level: 48 },     //pink 粉红 
        { word: "这并意味", level: 48 },//但这并意味着 雷
        { word: "族自治权", level: 48 },   //广西壮族自治权
        { word: "不负责任会付出代价”，故C", level: 48 },     //D. 对自己不负责任会付出代价”，故C项错误  雷 
        { word: "将变成关好的", level: 48 },     //世界将变成关好的人间， 雷
        { word: "互签", level: 48 },     //
         { word: "事来", level: 48 },     //
        { word: "转为政府职能", level: 48 },     //
        { word: "是我们的生命变得更加饱满丰盈", level: 48 },//
        // { word: "达成彼此的理解和包容", level: 48 },//        
        { word: "入民", level: 48 },// 我国各族入民 雷
        { word: "这是企业能力承担社会责任的体现", level: 48 },   //
        { word: "中国对促进世界共同发展为外交宗旨", level: 48 },     //
        { word: "中国负责人大国", level: 48 },     //
        { word: "公民的个人利于与国家利益是", level: 48 },     //
        // { word: "是是", level: 48 },     //
        // { word: "是是", level: 48 },     //
        // { word: "当家做主", level: 48 },//
        // { word: "是是", level: 48 },     //pink 粉红 
        // { word: "当家做主", level: 48 },//
        // { word: "是是", level: 48 },   //
        // { word: "是是", level: 48 },     //
        // { word: "是是", level: 48 },     //
        // { word: "是是", level: 48 },     //
        // { word: "是是", level: 48 },     //
        // { word: "是是", level: 48 },     //
        // { word: "当家做主", level: 48 },//
        // { word: "是是", level: 48 },   //
        // { word: "是是", level: 48 },     //
        // { word: "是是", level: 48 },     //
        // { word: "是是", level: 48 },     //
        // { word: "是是", level: 48 },     //
        // { word: "是是", level: 48 },     //
        // { word: "当家做主", level: 48 },//
        // { word: "是是", level: 48 },     //pink 粉红 
        // { word: "当家做主", level: 48 },//
        // { word: "是是", level: 48 },   //
        // { word: "是是", level: 48 },     //
        // { word: "是是", level: 48 },     //
        // { word: "是是", level: 48 },     //
        // { word: "是是", level: 48 },     //
        // { word: "是是", level: 48 },     //
        // { word: "当家做主", level: 48 },//

        // { word: "由", level: 18 },//
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },//
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },//
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },//
        { word: "班级体建设", level: 18 },// 为班级体建设建言献策；
        { word: "项中正确", level: 18 },// 故②项中正确；
        { word: "体现了这体现", level: 18 },// 这体现了这体现了生命是坚强的、
        { word: "体现了体现", level: 18 },// 
        { word: "造不幸", level: 18 },// 女乘车突造不幸————造→→遭
        { word: "应必须", level: 18 },//但我们应必须遵守学校规则————应、必须，2选1删
        { word: "华族", level: 18 },// 迎来了中国华族 改为 迎来了中华民族 圈4 调整生产关系与知生产力 删掉“知”
        { word: "才有才有", level: 18 },// 因此有人认为良法之下才有才有法治国家的说法有一定合理性
        { word: "是非曲折", level: 18 },// 明辨是非曲折的能力————折→→直
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },//
        { word: "法制建设", level: 18 },// 社会主义法制建设
        { word: "告表", level: 18 },// 网友通过人民网对政府工作报告表了自己的看法意见，MistyRose 浅浅红
        { word: "的看看谁", level: 18 },// 我们现在的目标是如何提高成绩，而不是一味的看看谁漂亮。
        { word: "量进步", level: 18 },// 中国经济在世界经济中的分量进步增大
        { word: "认真学校", level: 18 },// 小慧在学校认真学校————第2个“学校”→学习
        { word: "高不开", level: 18 },// 世界的繁荣也高不开中国————高，离。
        { word: "组都", level: 18 },// 考生可以从“行己有耻”这一角度入手呢组都即可。改成“作答”。
        { word: "说梦", level: 18 },// 本题属于分析说梦类题目，
        { word: "融人", level: 18 },// 将中医药文化融人全球语
        { word: "病毒毒", level: 18 },// 人们对新型冠状病毒毒战胜过程也是逐步实现
        { word: "小手机", level: 18 },// 小手机进军印度市场改为小米手机进军印度市场
        { word: "以人民为安全为宗旨", level: 18 },// 我国国有有企业在关键行业，改为我国国有企业在关键行业
        { word: "本题主要考查 ", level: 18 },// 
        { word: "本题主要考查。", level: 18 },// 
        { word: "但材料强调的主体是企业，故③正确。", level: 18 },// 雷 但材料强调的主体是企业，故③正确。
        { word: "基因系列", level: 18 },// 冠状病毒基因系列信息
        { word: "对自己负贵。", level: 18 },//
        { word: "可从从", level: 18 },// 考生可从从”，改为：考生可从。
        { word: "国清", level: 18 },//  基本国情 
        { word: "额考", level: 18 },// 本题是对中国特色社会主义文化的额考查
        { word: "彼止", level: 18 },//.宽容让彼止宽待→宽容让人们彼此宽待。 止→此。
        { word: "建设国中心", level: 18 },// 决定我国要以经济建设国中心，
        { word: "学习其它文明听优秀成果", level: 18 },// 
        { word: "分字", level: 18 },// 
        { word: "以宪执政", level: 18 },//
        { word: "市民正常生受到影响", level: 18 },// 
        { word: "对外开发", level: 18 },// 
        { word: "实行三权权立原则", level: 18 },//  
        { word: "仪表灯外在", level: 18 },// 过分追求形体、仪表灯外在美，
        { word: "主觉", level: 18 },// 调动其履行义务的积极性和主觉承担对国家和社会的责任。
        { word: "达成彼此的理解和包容", level: 18 },//  雷？  对彼此包容理解
        { word: "主要的主要", level: 18 },//
        { word: "中国答先进", level: 18 },// 代表中国答先进文化的前进方向，。。。党的最高理想和最终目标是实现共产主版义
        { word: "共产主版", level: 18 },// 
        { word: "国家意体现", level: 18 },// “国家意体现” 改为 ②，“国家意志的体现”
        { word: "多党合作与政治协商", level: 18 },//中国共产党领导的多党合作与政治协商制度
        { word: "前握提", level: 18 },// 科学执政是基本前握提 前握提 改为 前提
        { word: "通由行使", level: 18 },// 总统可以通由行使议案否决权来控制国会 通由改为通过
        { word: "资本阶级", level: 18 },// 民主党与共和党都是资本阶级政党 资本改为资产
        { word: "行使权利公民权利", level: 18 },//要在法律允许的范围内行使权利公民权利
        { word: "扩宽", level: 18 },// 扩宽民主渠道 改为 拓宽民主渠道
        { word: "促进保持", level: 18 },// 促进保持良好的心态——促进，删
        { word: "唯有此气", level: 18 },//）理生万物，唯有此气，已有此理。未有这事，先有这理。
        { word: "做好做好", level: 18 },// 认真做好做好防护措施
        { word: "唯主义", level: 18 },// 要坚持历史唯主义，  雷
        { word: "司法公正正义", level: 18 },// “公正正义”改为“公平正义”。
        { word: "要要", level: 18 },//还要要考虑他人的感受，
        { word: "后面的一次是", level: 18 },// 排在它后面的一次是房产 改为“排在它后面的依次是房产”
        { word: "发布命令全", level: 18 },// 发布命令全 “权”
        { word: "反映的了", level: 18 },// 题干反映的了青少年的各种心理矛盾，
        { word: "会会", level: 18 },//个人正当利益的实现会会促进集体的发展，
        { word: "中国共产党是中国共产党", level: 18 },// 中国共产党是中国共产党是中国工人阶级的先锋队，
        { word: "法律的制订", level: 18 },//其它法律的制订都是以其作为标准的”应为“其它法律的制定都是以其作为标准的”
        { word: "规律规律", level: 18 },// 材料强调绘画创作是有规律规律可循的
        { word: "健康委会", level: 18 },// 黄冈市卫生健康委会主任
        { word: "全意为人们服务", level: 18 },// 全心全意为人们服务
        { word: "盗草", level: 18 },//盗草使文物离开了其依存的环境，会对文物造成损害
        { word: "纵览全局", level: 18 },//确保党始终纵览全局、协调各方
        { word: "突出突出", level: 18 },// M市旧城改造突出突出”修旧如旧“
        { word: "社会情民意", level: 18 },// 公民通过社会情民意反映制度参与民主决策。
        { word: "经济持续可发展", level: 18 },// 经济持续可发展受到日益关注。
        { word: "與", level: 18 },//需要坚持正确的與论导向，加
        { word: "概据", level: 18 },// 要根据题中所有材料概括公民与法律的关系
        { word: "区域治治", level: 18 },//我国的民族区域治治制度
        { word: "国家的一切权利", level: 18 },// 国家的一切权利是人民赋予的 有错别字，请修改。 权力
        { word: "灾亡", level: 18 },// 总是在一定条件下产生，又在一定条件下灾亡。
        { word: "当时不能", level: 18 },// 当时不能损害他人、社会的合法利益
        { word: "事实求是", level: 18 },//事实求是作答————事实→实事
        { word: "党的目标", level: 18 },// 立党为公、执政为民是党的目标 执政理念
        { word: "开展移风易俗、弘扬时代新风行动，改造落后文化，坚决抵制腐朽文化，故", level: 18 },// 雷 解析不全 开展移风易俗、弘扬时代新风行动，改造落后文化，坚决抵制腐朽文化，故
        { word: "自由与限制的关系", level: 18 },// 知识点为：自由与限制的关系。  自由与法治的关系。
        { word: "以以", level: 18 },// 题目以以某村村委会进行换届选举为素材
        { word: "优秀传的文化", level: 18 },// “中华优秀传的文化”改为“中华优秀传统文化”
        { word: "收受理", level: 18 },//        全国主要网站收受理的案件数量减少
        { word: "表决权时人大代表的职权", level: 18 },//表决权时人大代表的职权 时 改为 是
        { word: "宪法礼我们", level: 18 },// 宪法礼我们 离我们
        { word: "负责任法国", level: 18 },// 考生可从负责任法国等角度入手作答即可。————法国→大国。
        { word: "做法事", level: 18 },// 正确做法事积极参加社区环保公益活动，————事→是
        { word: "原则时民主", level: 18 },//我国人民代表大会的组织和活动原则时民主集中制，
        { word: "不是一昧放大", level: 18 },// 
        { word: "发自内省", level: 18 },// 遵守社会规则需要我们发自内省地敬畏规则 内心
        { word: "是致的", level: 18 },// 国家利益与个人利益根本上是致的，————是后加：一。
        { word: "独立为行为", level: 18 },// 公民在法律范围内有独立为行为而不受他人干涉
        { word: "信仰自由的权力", level: 18 },// 宗教信仰自由的权力————权力→权利
        { word: "白己", level: 18 },//“白己”改成“自己”。
        { word: "遵守正规", level: 18 },// 遵守正规——————正规→规则，或交规
        { word: "法律处于保护", level: 18 },// 法律处于保护弱者利益的考虑，“出于”
        { word: "给与", level: 18 },// 
        { word: "处于保护弱者", level: 18 },//法律处于保护弱者利益的考虑，
        { word: "保障各少数的合法", level: 18 },//雷  保障各少数的合法权利和利益。
        { word: "社会存在于社会意识", level: 18 },// 社会存在于社会意识的 社会存在与社会意识的辩证关系。
        { word: "实现共同理想是应该", level: 18 },//中学生在实现共同理想是应该怎么做。
        { word: "国际事物", level: 18 },//夸大中国在国际事物中的作用
        { word: "社会步", level: 18 },// 促进了的社会步”改成“促进了以民主法制为核心的社会进步”
        { word: "社会存在决定意识", level: 18 },// 社会存在决定意识， 社会意识
        { word: "禁止禁止", level: 18 },// 禁止禁止做的的”改成“禁止做的”。
        { word: "要早好", level: 18 },// 全体社会成员要早好自身防护，
        { word: "考查的是主要知识点为", level: 18 },//本题考查的是主要知识点为：————是，删除
        { word: "社和会", level: 18 },// 人类社和会的物质性 
        { word: "电枧", level: 18 },// 从传统电枧进入智慧屏时代。
        { word: "拓财", level: 18 },// 拓宽财政
        { word: "扩大业", level: 18 },// 增加税收、扩大业、促进大众创业 就业
        { word: "对你改革开放", level: 18 },//本题是对你改革开放的考查
        { word: "审批机关", level: 18 },//审批机关与检察机关————审批→审判
        { word: "履职不利", level: 18 },// 对履职不利的领导进行问责——————不利→不力
        { word: "材料要习近", level: 18 },// 材料要习近平总书记的话为素材，以习近平总书记的话为素材
        { word: "传播正量", level: 18 },// 传播正量 正能量
        { word: "共和共", level: 18 },// 中华人民共和共主席不具有立法权，故D......共和共改成：共和国
        { word: "国家检察职能", level: 18 },//国家检察职能......监察。 检察是检察院
        { word: "在抗疫的作用", level: 18 },// 
        { word: "心里老师", level: 18 },// 小李在心里老师的指导下
        { word: "国家全国人大常委会", level: 18 },// 可以国家全国人大常委会的决定 国家改成“根据
        { word: "是主观符合客观", level: 18 },// 要坚持与时俱进，是主观符合客观” 改成使
        { word: "肯定有否定", level: 18 },// 既肯定有否定”改为“既肯定又否定”。
        { word: "双面发展", level: 18 },// “双面发展”改为“全面发展”。
        { word: "材料中材料", level: 18 },// 
        { word: "气着，", level: 18 },// 气着，理之依也 气着”改为“气者”
        { word: "本质工作", level: 18 },// 好好学习，做好本质工作，为服务社会打下坚实的基础。本质”改成“本职
        { word: "提索", level: 18 },// 各家平台尚未提索出一套行之有效的发展模式。 探索
        { word: "人大网上公文公布", level: 18 },// 中国人大网上公文公布相关法律并面向公 雷
        { word: "福社", level: 18 },// 福祉
        { word: "贫因", level: 18 },// 贫困
        { word: "台理", level: 18 },// 合理
        { word: "党领人民", level: 18 },//  领导
        { word: "多村", level: 18 },// 乡村
        { word: "医难群众", level: 18 },//对医难群众予以价格补贴，
        { word: "理台法", level: 18 },// 合法  false 出台法律
        { word: "人谋幸福", level: 18 },// 为人谋幸福
        { word: "充分符合", level: 18 },// 充分符合法律、道德对村民自治的规范和促进作用 符合改为发挥
        { word: "社会存在于社会意识", level: 18 },// 社会存在于社会意识的辩证关系“ 于改为与
        { word: "阶段阶段", level: 18 },//“阶段阶段”改成“初级阶段”。
        { word: "人民当家作主的权力", level: 18 },// 保证人民当家作主的权力……权力→权利  八年级
        { word: "此题考查的主要知识为：财政。", level: 18 },//     雷        
        { word: "坚持分为二", level: 18 },// 坚持分为二 一分为二
        { word: "潜移墨默化", level: 18 },// 这体现了文化会潜移墨默化地影响人的思维方式 潜移墨默化 改为 潜移默化
        { word: "购房同", level: 18 },// 如果他不履行购房同 购房同 改为 购房合同
        { word: "反对反腐", level: 18 },//      有利于加强党反对反腐败工作的集中统一领导。      
        { word: "共同富裕道理", level: 18 },// 我国走共同富裕道理 共同富裕道路
        { word: "致富致富", level: 18 },//当地政府对致富致富能手的表彰
        { word: "对权利的行使进行制约", level: 18 },// 必须对权利的行使进行制约”中的“权利”改为“权力”。
        { word: "和和", level: 18 },//                       
        { word: "读体干", level: 18 },//解读体干
        { word: "相互相成", level: 18 },// 相辅相成
        { word: "故D②④正确，ABD错误", level: 18 },//   雷          
        { word: "本题主要考查的知识点。", level: 18 },// 雷
        { word: "检查权", level: 18 },//            
        { word: "所有法律的综合", level: 18 },//宪法不是所有法律的综合 总和
        { word: "张文红", level: 18 },// 
        { word: "违法相关法", level: 18 },//            
        { word: "社会各部的", level: 18 },//有利于实现资源在社会各部的合理分配 各部 改为 各部门
        { word: "市场放税", level: 18 },//向市场放税 改为 向市场放权 
        { word: "影响影响", level: 18 },// 
        { word: "集体的事物", level: 18 },//      集体的事物……事物→事务。      
        { word: "新域", level: 18 },// 新城
        { word: "依法治百国", level: 18 },//
        { word: "考考查", level: 18 },//  本题考考查的知识点是
        // { word: "于切", level: 18 }, //  ？？有冲突 ：有利于切实
        { word: "广品", level: 18 },//       因此创新文化广品     
        { word: "忧于", level: 18 },//我国农村经济发展忧于城镇经济发展
        { word: "法规定了国家最根本、最基础", level: 18 },// “宪法规定了国家最根本、最基础的问题”改成“宪法规定了国家生活中最根本、最重要的问题”
        { word: "集改", level: 18 },//  浅浅粉红          集改”改成“篡改”
        { word: "总览全局", level: 18 },// 总览全局、协调各方的作用，改为总揽全局、协调各方的作用，
        { word: "仟细", level: 18 },//  仔细
        { word: "学生学生", level: 18 },//  要依靠学生学生日常生活中对时政素材的关注和积累          
        { word: "党统揽全局", level: 18 },//党统揽全局、协调各方改为了党总揽全局、协调各方
        { word: "社会和谐社会", level: 18 },// 
        { word: "结合相关只是", level: 18 },//          雷  可以从努力学习与参加实践的角度并结合相关只是进行说明即可。  
        { word: "荣誉被泄露", level: 18 },// 个人隐私及信息荣誉被泄露，  容易
        { word: "抗议防疫", level: 18 },// 抗疫防疫
        { word: "规定时限", level: 18 },// 并规定时限公民基本权利的保障措施——————时限→实现
        { word: "国时政部", level: 18 },// 中国时政部  中国财政部
        { word: "水远", level: 18 },// 祖国水远是你们的坚强后盾，
        { word: "家切权力", level: 18 },// 国家切权力属于人民。————切→一切
        { word: "本体要求从", level: 18 },// 本体要求从坚持党的领导的角度回答
        { word: "习近苹", level: 18 },//
        { word: "公民当家作", level: 18 },//  切实保障维护公民当家作主地位
        { word: "行驶自由和权利", level: 18 },// 行驶自由和权利
        { word: "能能", level: 18 },// 合作能能发挥每个人的最大价值
        { word: "未成年保护法", level: 18 },// 未成年保护法……“年”后加：人
        { word: "待如", level: 18 },// 对待如违法行为及时处罚
        { word: "人民是国家的主任", level: 18 },// 人民是国家的主任    
        { word: "管理国家事务的权利", level: 18 },// 表明人民享有管理国家事务的权利 雷
        { word: "中国国梦", level: 18 },// 
        { word: "疫重要物质", level: 18 },// 口罩属于防疫重要物质 物质改为物资
        { word: "人民宗教信仰", level: 18 },// 保障人民宗教信仰自由权利 人民改为公民
        { word: "特别征", level: 18 },//  强调法律具有强制性特别征
        { word: "单车行来", level: 18 },// 说明“退烧”对共享单车行来而言是件好事 行来 改为 行业
        { word: "国际交往中不平等现在", level: 18 },// 当今世界，在国际交往中不平等现在仍然存在，
        { word: "在在", level: 18 },// 
        { word: "不可沉迷于网络无直接关系 ，", level: 18 },// 不可沉迷于网络无直接关系 ， 雷 C正确 答案D 自相矛盾
        { word: "物质供", level: 18 },//物质供给保障工作
        { word: "法规法", level: 18 },// 法律法规法角度 法律法规的角度
        { word: "桃战", level: 18 },// 敢于向权威桃战。
        { word: "披巧", level: 18 },//  批判的披巧:抛判只针对事情本身
        { word: "抛判", level: 18 },// 
        { word: "再度进人", level: 18 },// 雷 世界再度进人“博鳌时间”，体现我国国际地位的提高，故③项正确；        
        { word: "善良有爱", level: 18 },// 善良有爱，————有爱→友爱
        { word: "广能", level: 18 },// 促进国际广能合作,改为促进国际产能合作，
        { word: "是今时代", level: 18 },// 和平与发展是今时代的主题。
        { word: "互签", level: 18 },// 互签”改成“互鉴”。
        { word: "不同人们", level: 18 },// 不同人们建议把“不同人们”改成“不同人”。
        { word: "战役英", level: 18 },//战役英雄  疫情
        // { word: "个民族", level: 18 },   // 干扰  一个民族
        { word: "国家社会", level: 18 },     //pink 粉红 
        { word: "家业指", level: 18 },// 为党和国家业指引正确的前进方向。
        { word: "校规校级", level: 18 },// MistyRose 浅浅红 遵守校规校级————级→→纪
        { word: "带案来", level: 18 },// 一盎司创意能够带案来无以数计的商业利益
        { word: "项违背", level: 18 },// 不得与宪法的原则和精神项违背，
        { word: "以宪治", level: 18 },// 就是坚持以宪治国的要求，而不是坚持以宪执政的原因
        { word: "以宪执", level: 18 },//  MistyRose 浅浅红
        { word: "和反应", level: 18 },// 法律是统治阶级意志的体现和反应……反应→反映
        { word: "很不能", level: 18 },// 当前我国生产力发展水平很不能————很→还
        { word: "行使权力有界限", level: 18 },// 做到行使权力有界限……权力→权利
        { word: "地地", level: 18 },// 脚踏实地地付出努力“地”改成“的
        { word: "集中人民办大事", level: 18 },// 人民”改成“力量
        { word: "知识要素", level: 18 },// 知识要素改成知识要点
        { word: "设要求", level: 18 },// 设要求改为设问要求
        { word: "是可以是", level: 18 },// A.敬畏感是可以是对伟大人物的崇敬感
        { word: "漫画反映了漫画", level: 18 },// 漫画反映了漫画反映了我国
        { word: "本题的对", level: 18 },// 本题的对 本题是对教材基础知识的考查
        { word: "一切权利属于人民", level: 18 },// 中华人民共和国的一切权利属于人民 权利 改为 权力
        { word: "价值观体系建设", level: 18 },// 社会主义核心价值体系建设
        { word: "问前", level: 18 },// 问前改为奔腾向前 MistyRose 浅浅红  
        { word: "主取决于", level: 18 },// 主取决于 改为 主要取决于
        { word: "付责", level: 18 },// 应付相应责任
        { word: "角度析", level: 18 },// 从公民的角度析 改成分析
        { word: "建议项", level: 18 },// 公民支持重点建议项目 建设
        { word: "创作性", level: 18 },// 激发创作性……作→造。
        { word: "支律", level: 18 },// 民族精神的支律和鼓舞作用是密不可分的 支律 改为 支撑
        { word: "兼顺", level: 18 },// 兼顺效率与公平 兼顺 改为 兼顾
        { word: "加以规律", level: 18 },// 公民的基本权利是由法律加以规律的，——————规律→规定
        { word: "指定定", level: 18 },// 尽快到指定定医院就医
        { word: "全年从严", level: 18 },// 十八届六中全会强调全年从严治党
        { word: "列题", level: 18 },// 类题目
        { word: "活动动", level: 18 },// 加强公共文化设施建设，开展公共文化服务活动动， 
        { word: "该发第", level: 18 },// 人权原则的直接体现是该发第五条 发→法
        { word: "法执法检", level: 18 },// 开展法执法检查 改为 开展执法检查
        { word: "地方各级全国人", level: 18 },// 还可以通过地方各级全国人民代表大会行使国家权力，
        { word: "望造", level: 18 },// 文化望造人生 塑造
        { word: "安情", level: 18 },//  疫情
        { word: "全国盘棋", level: 18 },// 一盘棋
        { word: "知识的入手", level: 18 },     //知识的入手进行作答        
        { word: "自恨", level: 18 },// “自恨”改成“自身”  MistyRose 浅浅红
        { word: "材料为表明", level: 18 },// 材料未表明
        { word: "从坚强", level: 18 },// 从坚强宪法监督 加强
        { word: "国家对的", level: 18 },// 但处处维护国家对的利益……对→队。
        { word: "建立的完善", level: 18 },// 中国逐渐建立的完善了 和
        { word: "在进行分析", level: 18 },// 再
        { word: "于他人", level: 18 },//  与
        { word: "文化文化", level: 18 },// 
        { word: "可以我们", level: 18 },//  让我们
        { word: "遵守法定义务", level: 18 },// 没有遵守法定义务
        { word: "治国的伟大事迹", level: 18 },// 依法治国的伟大事迹  伟大实践MistyRose 浅浅红
        { word: "的些", level: 18 },// 我国在保障民生方面的些重要举措
        { word: "材料使如何", level: 18 },// 材料使如何发挥意识能动作用的
        { word: "说法中太", level: 18 },//  该选项说法中太绝对，
        // { word: "依法行使权利", level: 18 },// 依法行使权利……权利→权力
        { word: "有利于有利", level: 18 },// 这一举措有利于有利于政府科学决策
        { word: "解答是", level: 18 },//  解答时   MistyRose 浅浅红
        { word: "创断", level: 18 },//  创新
        { word: "法律效率", level: 18 },// 效力
        { word: "对对", level: 18 },// 
        { word: "表明表明", level: 18 },// 
        { word: "专专", level: 18 },// 
        { word: "纪纪", level: 18 },//  世纪  MistyRose 浅浅红
        { word: "还还", level: 18 },//  还很
        { word: "以靠", level: 18 },// 依靠
        { word: "分析概况", level: 18 },// 概括
        { word: "降低最低", level: 18 },// 降到
        { word: "教有", level: 18 },     // 教育     
        { word: "范性文化", level: 18 },// 行政规范性文件
        { word: "使如何", level: 18 },// 是
        { word: "说法中太", level: 18 },// 说法中太绝对
        { word: "决绝", level: 18 },// 拒绝
        { word: "分析分析", level: 18 },// 
        { word: "坚持像群众", level: 18 },// 向
        { word: "实现按劳", level: 18 },// 我国实现按劳分配为主体 实现改为实行
        { word: "由国家制度", level: 18 },// 制定 MistyRose 浅浅红
        { word: "终南山", level: 18 },     // 钟南山” 
        { word: "社会社会", level: 18 },// 
        { word: "知只", level: 18 },// 知识
        { word: "由法律依据", level: 18 },// 有
        { word: "同时有", level: 18 },// 同时有害怕自己的能力不够 又
        { word: "体系体系", level: 18 },// 不体现竞争有序的现代市场体系体系
        { word: "小微企业按照规定实行缓征、减征", level: 18 },// 雷 对符合条件的小微企业按照规定实行缓征、减征、免征企业所得税、增值税等 可能是：表述不全，加上措施。
        { word: "目觉", level: 18 },// 目觉履行公民义务”
        { word: "法制社会", level: 18 },// 法治社会一体建设
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// MistyRose 浅浅红
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// MistyRose 浅浅红
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "由", level: 18 },// 




        { word: "尊重考核", level: 27 }, //27] = brown; 可
        { word: "放放", level: 27 }, 
        { word: "参于", level: 27 }, // 可能错误
        { word: "守践", level: 27 }, 
        { word: "上开性", level: 27 }, 
        { word: "集合自身", level: 27 }, 
        { word: "面相", level: 27 }, 
        { word: "本体", level: 27 }, 
        { word: "老奶奶", level: 27 }, 
        { word: "实施民主", level: 27 }, 
        { word: "民主关系", level: 27 }, 
        { word: "报本", level: 27 }, 
        { word: "看郭某鹏待", level: 27 }, 
        { word: "克已奉公", level: 27 }, 
        { word: "于什么", level: 27 }, //27] = brown
        // { word: "放放", level: 27 }, 
        // { word: "放放", level: 27 }, 
        // { word: "放放", level: 27 }, 
        // { word: "放放", level: 27 }, 
        // { word: "放放", level: 27 }, 
        // { word: "放放", level: 27 }, 
        // { word: "放放", level: 27 }, 
        // { word: "放放", level: 27 }, 
        // { word: "放放", level: 27 }, //27] = brown
        // { word: "放放", level: 27 }, 
        // { word: "放放", level: 27 }, 
        // { word: "放放", level: 27 }, 
        // { word: "放放", level: 27 }, 

        { word: "考察", level: 27 }, // brown;
        { word: "考查", level: 13 },  // Ivory;

        // { word: "全是", level: 21 },  //Lavender  
        { word: "选择者", level: 21 },   
        { word: "的解，", level: 21 },  //Lavender 
        // { word: "政机", level: 21 },  //    ？？
        { word: "下工夫", level: 21 },  //Lavender  淡暗灰色 一丝丝蓝
        // { word: "要强", level: 21 },  //  ？？
        { word: "现代建设", level: 21 },   //现代化      
        // { word: "全是", level: 21 },  //Lavender 
        // { word: "全是", level: 21 },  
        // { word: "全是", level: 21 },   
        // { word: "全是", level: 21 },         
        // { word: "全是", level: 21 },  //Lavender 
        // { word: "全是", level: 21 },  
        // { word: "全是", level: 21 },   







        { word: "这样做法", level: 18 },  //MistyRose
        { word: "躲过", level: 18 },
        { word: "简介参", level: 18 },
        // { word: "由", level: 18 }, // 干扰
        { word: "统帅", level: 18 }, 
        { word: "改怎", level: 18 },//MistyRose 浅浅红
        { word: "这是这是", level: 18 },
        { word: "体现改革", level: 18 },
        { word: "负责入", level: 18 },
        { word: "经济话", level: 18 }, //经济活
        { word: "话经济", level: 18 },//MistyRose 浅浅红
        { word: "相应国家号召", level: 18 },  // 响应国家号召
        // { word: "学习自我调节", level: 18 }, //学会、 进一步激发   ？ 没有截图佐证  跟正确文字混淆影响正常审题
        { word: "进步激发", level: 18 }, 
        { word: "题干意识", level: 18 },//  意思
        { word: "围内是", level: 18 },//  设问范围内是
        { word: "的而", level: 18 },//  凝结的而铸就的
        { word: "此时中", level: 18 }, // 从此时中
        { word: "个人安慰", level: 18 }, //安危
        { word: "一撮而就", level: 18 }, // 一蹴而就
        { word: "大才会好", level: 18 }, 
        { word: "关系和爱护", level: 18 },//关心和爱护 浅浅红
        { word: "中国民族", level: 18 },
        { word: "以宪治", level: 18 },// 依宪治国
        { word: "完治", level: 18 },// 依宪治国
        { word: "取情", level: 18 }, //才能夺取疫情防控
        { word: "用用", level: 18 },//  做事总用用不完的劲  MistyRose 浅浅红
        { word: "食物之间联系", level: 18 },// 事物
        { word: "素尚", level: 18 }, //  崇尚
        { word: "程程", level: 18 },   // “程程度”改成“程度”
        { word: "兴题", level: 18 },//  兴趣。
        { word: "分主要", level: 18 },//主要分     
        { word: "引导宗教与社会主义相适应", level: 18 },//引导宗教与社会主义社会相适应
        { word: "团结的党", level: 18 },// 把广大信教群众团结的党和政府周围
        { word: "由法律依据", level: 18 }, //由法律依据……由→有
        { word: "全国入大", level: 18 },//MistyRose 浅浅红
        { word: "宗教和顺", level: 18 },//  雷
        { word: "不属于社会主义本质要求的内容，故C", level: 18 },// 雷 不属于社会主义本质要求的内容，故C 雷
        { word: "中国特色社会主义度是根", level: 18 },   //  雷，
        { word: "协商构成", level: 18 },// 政协委员是我国专门政治协商构成员，
        { word: "下去派出所", level: 18 }, //辖区
        { word: "经济基层", level: 18 },//MistyRose 浅浅红
        // { word: "简介参", level: 18 },
        // { word: "由", level: 18 },// 
        // { word: "统帅", level: 18 }, 
        // { word: "躲过", level: 18 },//MistyRose 浅浅红
        // { word: "简介参", level: 18 },// 
        // { word: "由", level: 18 },// 
        // { word: "统帅", level: 18 },   //        
        

        //    {        word:"与",        level:12    },  //lightgray
        //    {        word:"于",        level:10    },  //skyblue 
        { word: "国家社会", level: 15 },  // 国际社会  lightcyan
        // { word: "应有", level: 15 },// 应有浩宇负责
        { word: "对对", level: 15 },  //   lightcyan
        // { word: "既", level:  },  //lightgreen 略微有点亮 
        { word: "耍", level:19 },  //Khaki
        { word: "既", level: 17 },  //purplegray
        { word: "即", level: 15 },  //lightcyan
        { word: "已", level: 17 },  //purplegray
        // { word: "己", level: 15 },  //lightcyan
        { word: "权利", level: 13 },  // Ivory;
        { word: "权力", level: 16 },  //Aqua
        {        word:"检查",     level: 19 },  //Khaki 可
        
        // {        word:"检查",     level: 19 },  //Khaki 
        {        word:"髙",     level: 19 },  //Khaki 
        {        word:"!",     level: 19 },  //Khaki 
        // {        word:"检查",     level: 19 },  //Khaki 
        // {        word:"检察",     level: 18 },  //MistyRose


        

        { word: "入",level: 19 },  //Khaki
        { word: "人", level: 14 },  //azure





        { word: "那", level: 17 },  //purplegray
        { word: "指定", level: 17 },  //

        

        { word: "正确", level: 26 }, //rightgreen
        { word: "项符合题意", level: 26 }, //rightgreen
        { word: "错误", level: 29 }, //lightorange




    ]

    var color_selection = [];
    color_selection[17] = purplegray;    color_selection[22] = lightgray;
    color_selection[23] = lightgreen;    color_selection[26] = rightgreen;
    color_selection[57] = tomatored;     color_selection[27] = brown;
    color_selection[41] = orange;        color_selection[29] = lightorange;
    color_selection[48] = pink;          color_selection[30] = skyblue;
    color_selection[14] = azure;         color_selection[15] = lightcyan;
    color_selection[18] = MistyRose;     color_selection[19] = Khaki;
    color_selection[36] = GreenYellow;   color_selection[21] = Lavender;
    color_selection[16] = Aqua;          color_selection[13] = Ivory;
    
}

////////////////////////////////////////////////////////////////////////////////////
