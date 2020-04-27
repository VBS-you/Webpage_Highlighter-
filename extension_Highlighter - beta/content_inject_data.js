

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


        { word: "-", level: 48 }, //pink
        { word: "—", level: 48 }, //pink
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
        { word: "于切", level: 48 },
        { word: "带口罩", level: 48 },
        { word: "权力关", level: 48 },  // ?? 权力机关？    false 将权力关进制度的笼子里
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
        // { word: "是是", level: 48 },     //
        // { word: "是是", level: 48 },     //
        // { word: "当家做主", level: 48 },//
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


        { word: "法规法", level: 18 },// 法律法规法角度 法律法规的角度
        { word: "桃战", level: 18 },// 敢于向权威桃战。
        { word: "披巧", level: 18 },//  批判的披巧:抛判只针对事情本身
        { word: "抛判", level: 18 },// 
        { word: "进人", level: 18 },// 雷 世界再度进人“博鳌时间”，体现我国国际地位的提高，故③项正确；
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
        // { word: "由", level: 18 },// 
        { word: "善良有爱", level: 18 },// 善良有爱，————有爱→友爱
        { word: "广能", level: 18 },// 促进国际广能合作,改为促进国际产能合作，
        { word: "是今时代", level: 18 },// 和平与发展是今时代的主题。
        { word: "互签", level: 18 },// 互签”改成“互鉴”。
        { word: "不同人们", level: 18 },// 不同人们建议把“不同人们”改成“不同人”。
        { word: "战役英", level: 18 },//战役英雄  疫情
        { word: "个民族", level: 18 },   //
        { word: "国家社会", level: 18 },     //pink 粉红 
        { word: "家业指", level: 18 },// 为党和国家业指引正确的前进方向。
        { word: "校级", level: 18 },// MistyRose 浅浅红 遵守校规校级————级→→纪
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
        { word: "一切权利属于人民", level: 18 },// 一切权利属于人民 权力
        { word: "说法中太", level: 18 },//  该选项说法中太绝对，
        { word: "依法行使权利", level: 18 },// 依法行使权利……权利→权力
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

        { word: "全是", level: 21 },  //Lavender  
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
        { word: "学习自我调节", level: 18 }, //学会、 进一步激发
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
