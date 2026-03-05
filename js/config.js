// 家族配置数据
const FAMILY_CONFIG = {
  surname: "熊",           // 姓氏
  title: "熊氏宗族",        // 宗族标题
  subtitle: "江陵衍派 · 忠孝家风", // 副标题
  location: "发源地：江陵 · 现分布：全国各地", // 地理信息
  generations: 12,         // 传承代数
  population: "500+",      // 家族成员数量
  history: "400年",        // 传承历史
  // 字辈（按顺序）
  ziBei: ["世", "任", "一", "正", "士", "习", "从", "同", "以", "斯", "传", "绍"],
  // 家族起源故事
  originStory: `<p>仙里熊氏可考始祖熊世隆，生于明万历末年，祖籍湖北麻城熊家大湾。自幼聪颖，二十岁中举，三十岁出任湖广某县知县。为官清廉，审案如神，被百姓称为"熊青天"。</p>
<p>崇祯十七年（1644），李自成攻破北京，世隆携家眷连夜出逃。行前，他将官印沉入井中，只带走一方祖传玉印、一部族谱手稿、三两碎银。</p>
<p>一路辗转，先在鄱阳湖边暂居三年，后沿赣江支流上溯，来到新建县溪霞镇一带。熊世隆之子熊任尧善堪舆之术，见三台山如笔架横陈，溪霞水如玉带环腰，便对父亲说："此处前有照，后有靠，子孙必出读书人。"</p>
<p>从此，熊氏家族在八丘村落地生根，繁衍生息，至今已有四百年历史。</p>`,
  // 传世家训
  motto: "世任一正，士习从同。以斯传绍，学必经通。",
  mottoDesc: "祖宗虽远，祭祀不可不诚；子孙虽愚，诗书不可不读。赌博为万恶之源，后世子孙永以为戒。"
};

// 家族成员数据库
const familyDatabase = [
  // 第一世
  { id: 1, name: "熊世隆", ziBei: "世", generation: 1, birth: "明万历末年", death: "清顺治年间", title: "一世祖 · 湖广知县", description: "仙里熊氏可考始祖，明末湖广某县知县，为官清廉，审案如神，被百姓称为'熊青天'。", fatherId: null, motherId: null, spouse: null, children: [2] },
  // 第二世
  { id: 2, name: "熊任尧", ziBei: "任", generation: 2, birth: "明末", death: "清康熙年间", title: "二世祖", description: "随父南迁，善堪舆之术，选定八丘村为定居地，拓荒为田，引水为渠，奠定家族基业。", fatherId: 1, motherId: null, spouse: null, children: [3] },
  // 第三世
  { id: 3, name: "熊一僕", ziBei: "一", generation: 3, birth: "清康熙年间", death: "清乾隆年间", title: "三世祖 · 立村之祖", description: "力大无穷，善治水，组织乡民疏浚河道，筑堤围堰，使八丘村一带旱涝保收。拥田三百亩，成为新建县北有名的大户。", fatherId: 2, motherId: null, spouse: "刘氏", children: [4, 5, 6, 7] },
  // 第四世（大房）
  { id: 4, name: "熊正审", ziBei: "正", generation: 4, birth: "清雍正年间", death: "清嘉庆年间", title: "四世祖 · 大房始祖", description: "沉稳内敛，好读书，不善言辞，但行事极有主见。设立家塾，延请名师教导子弟，大房一脉读书风气最盛。", fatherId: 3, motherId: null, spouse: null, children: [8] },
  // 第四世（二房）
  { id: 5, name: "熊正言", ziBei: "正", generation: 4, birth: "清雍正年间", death: "清嘉庆年间", title: "四世祖 · 二房始祖", description: "二房始祖，后裔人口繁衍迅速，后因不肖子孙欺凌同族被逐出村。", fatherId: 3, motherId: null, spouse: null, children: [] },
  // 第四世（三房）
  { id: 6, name: "熊正行", ziBei: "正", generation: 4, birth: "清雍正年间", death: "清嘉庆年间", title: "四世祖 · 三房始祖", description: "三房始祖，后裔在村西头定居。", fatherId: 3, motherId: null, spouse: null, children: [] },
  // 第四世（细房）
  { id: 7, name: "熊正思", ziBei: "正", generation: 4, birth: "清雍正年间", death: "清嘉庆年间", title: "四世祖 · 细房始祖", description: "细房始祖，后裔在村北头定居。", fatherId: 3, motherId: null, spouse: null, children: [] },
  // 第五世
  { id: 8, name: "熊士柒", ziBei: "士", generation: 5, birth: "清乾隆年间", death: "清道光年间", title: "五世祖 · 武庠生", description: "武庠生（武秀才），曾在一次山洪中，以巨木堵住溃口，保住全村稻田，人称'堵口公'。", fatherId: 4, motherId: null, spouse: null, children: [9] },
  // 第六世
  { id: 9, name: "熊习坎", ziBei: "习", generation: 6, birth: "清嘉庆年间", death: "清咸丰年间", title: "六世祖 · 廪生", description: "廪生（享受官府津贴的秀才），设立'义学田'，资助族中子弟读书。", fatherId: 8, motherId: null, spouse: null, children: [10] },
  // 第七世
  { id: 10, name: "熊从洋", ziBei: "从", generation: 7, birth: "清道光年间", death: "清光绪年间", title: "七世祖 · 富商", description: "走南闯北经商，开设米行、布庄，成为八丘村首富。", fatherId: 9, motherId: null, spouse: null, children: [11] },
  // 第八世
  { id: 11, name: "熊同梅", ziBei: "同", generation: 8, birth: "清咸丰年间", death: "清宣统年间", title: "八世祖 · 大房掌家", description: "掌家时，家中藏有祖传三箱金银契据，另有族产米三千斤。率家丁抵抗二房侵扰，最终将二房逐出村。", fatherId: 10, motherId: null, spouse: null, children: [12] },
  // 第九世
  { id: 12, name: "熊以莘", ziBei: "以", generation: 9, birth: "约1890", death: "1960", title: "九世祖 · 瞎眼先知", description: "天资聪颖，性格张扬，早年染上赌博，输掉大半田产。后双目失明，获得'预知'能力，成为八丘村的'活神仙'。", fatherId: 11, motherId: null, spouse: null, children: [13] },
  // 第十世
  { id: 13, name: "熊斯创", ziBei: "斯", generation: 10, birth: "1942", death: null, title: "十世祖 · 家族复兴者", description: "白手起家，改革开放后养鸡养鸭，做小生意，成为八丘村首富。定下铁律：绝对不准赌博，男孩子必须外出闯荡。", fatherId: 12, motherId: null, spouse: "温氏", children: [14, 15, 16, 17, 18, 19, 20, 21] },
  // 第十一世（长女）
  { id: 14, name: "熊传英", ziBei: "传", generation: 11, birth: "1958", death: null, title: "十一世 · 长女", description: "嫁溪霞镇李家，李家是镇上大户，经营建材生意。持家有道，育有一子一女。", fatherId: 13, motherId: 13, spouse: "李氏", children: [] },
  // 第十一世（二女）
  { id: 15, name: "熊传秀", ziBei: "传", generation: 11, birth: "1962", death: null, title: "十一世 · 二女", description: "嫁溪霞镇王家，王家世代务农，二女婿头脑灵活，后跑运输发家。", fatherId: 13, motherId: 13, spouse: "王氏", children: [] },
  // 第十一世（三女）
  { id: 16, name: "熊传美", ziBei: "传", generation: 11, birth: "1966", death: null, title: "十一世 · 三女", description: "嫁福家，福家在隔壁村，距离八丘村仅三里地。", fatherId: 13, motherId: 13, spouse: "福氏", children: [] },
  // 第十一世（长子）
  { id: 17, name: "熊传俊", ziBei: "传", generation: 11, birth: "1974", death: null, title: "十一世 · 长子", description: "沉稳，高中毕业后南下广东，从工厂学徒做起，2000年初创办自己的企业，主营电子配件。", fatherId: 13, motherId: 13, spouse: "陈氏", children: [22, 23] },
  // 第十一世（次子）
  { id: 18, name: "熊传杰", ziBei: "传", generation: 11, birth: "1976", death: null, title: "十一世 · 次子", description: "活跃，善交际。当过兵，退伍后在政府部门工作，后下海经商，做建材生意。", fatherId: 13, motherId: 13, spouse: null, children: [24] },
  // 第十一世（三子）
  { id: 19, name: "熊传辉", ziBei: "传", generation: 11, birth: "1977", death: null, title: "十一世 · 三子", description: "内向，好读书。考上大学，毕业后在南昌一所中学任教，后任校长。", fatherId: 13, motherId: 13, spouse: null, children: [25] },
  // 第十一世（四子）
  { id: 20, name: "熊传锋", ziBei: "传", generation: 11, birth: "1978", death: null, title: "十一世 · 四子", description: "敏锐，洞察力强。早年南下广东，进入IT行业，自学编程，成为技术骨干，后创业涉足互联网领域。", fatherId: 13, motherId: 13, spouse: "刘氏", children: [26, 27] },
  // 第十一世（五子）
  { id: 21, name: "熊传明", ziBei: "传", generation: 11, birth: "1980", death: null, title: "十一世 · 五子", description: "稳重，顾家。留在家中陪伴父母，经营家里的养殖场和果园，是八丘村的'留守主力'。", fatherId: 13, motherId: 13, spouse: null, children: [28] },
  // 第十二世（传俊之子）
  { id: 22, name: "熊绍文", ziBei: "绍", generation: 12, birth: "1998", death: null, title: "十二世 · 长孙", description: "清华大学计算机系毕业，后赴美国斯坦福大学攻读硕士，现于硅谷一家AI公司任职，已获两项国际专利。", fatherId: 17, motherId: 17, spouse: null, children: [] },
  // 第十二世（传俊之女）
  { id: 23, name: "熊绍婷", ziBei: "绍", generation: 12, birth: "2002", death: null, title: "十二世 · 长孙女", description: "毕业于中央美术学院，现为独立设计师，在巴黎设有工作室。", fatherId: 17, motherId: 17, spouse: null, children: [] },
  // 第十二世（传杰之子）
  { id: 24, name: "熊绍武", ziBei: "绍", generation: 12, birth: "2005", death: null, title: "十二世 · 孙", description: "继承父亲商业基因，大学期间便创业做电商，毕业后在杭州发展，主营跨境电商，公司年营业额已破千万。", fatherId: 18, motherId: 18, spouse: null, children: [] },
  // 第十二世（传辉之女）
  { id: 25, name: "熊绍琪", ziBei: "绍", generation: 12, birth: "2008", death: null, title: "十二世 · 孙女", description: "学霸型，考入北京大学法学院，立志成为国际律师，正在准备赴英国深造。", fatherId: 19, motherId: 19, spouse: null, children: [] },
  // 第十二世（传锋之子）
  { id: 26, name: "熊绍阳", ziBei: "绍", generation: 12, birth: "2006", death: null, title: "十二世 · 孙", description: "自幼随父母在深圳生活，耳濡目染互联网文化。高中时便自学编程，开发过两款独立游戏，正在新加坡国立大学就读，主修人工智能方向。", fatherId: 20, motherId: 20, spouse: null, children: [] },
  // 第十二世（传锋之女）
  { id: 27, name: "熊绍怡", ziBei: "绍", generation: 12, birth: "2009", death: null, title: "十二世 · 孙女", description: "活泼可爱，正在上学，是家族的掌上明珠。", fatherId: 20, motherId: 20, spouse: null, children: [] },
  // 第十二世（传明之子）
  { id: 28, name: "熊绍坤", ziBei: "绍", generation: 12, birth: "2010", death: null, title: "十二世 · 孙", description: "留守八丘村，利用家族资源，发展'智慧农业'，搞起了直播带货，把村里的土特产卖到全国。", fatherId: 21, motherId: 21, spouse: null, children: [] }
];

// 先贤数据
const figuresData = [
  {
    id: 1,
    name: "熊世隆",
    ziBei: "世",
    birth: "明万历末年",
    death: "清顺治年间",
    title: "一世祖 · 湖广知县",
    description: "仙里熊氏可考始祖，明末湖广某县知县，为官清廉，审案如神，被百姓称为'熊青天'。明末天下大乱时，携家眷南迁，奠定家族根基。",
    achievements: ["湖广知县", "为官清廉", "审案如神", "家族南迁"]
  },
  {
    id: 2,
    name: "熊任尧",
    ziBei: "任",
    birth: "明末",
    death: "清康熙年间",
    title: "二世祖 · 堪舆大师",
    description: "随父南迁，善堪舆之术，选定八丘村为定居地。拓荒为田，引水为渠，奠定家族基业，定下'子弟必须读书'的家规。",
    achievements: ["堪舆选址", "拓荒建村", "引水灌溉", "设立家规"]
  },
  {
    id: 3,
    name: "熊一僕",
    ziBei: "一",
    birth: "清康熙年间",
    death: "清乾隆年间",
    title: "三世祖 · 立村之祖",
    description: "力大无穷，善治水，组织乡民疏浚河道，筑堤围堰，使八丘村一带旱涝保收。拥田三百亩，成为新建县北有名的大户，临终前四房分立。",
    achievements: ["治水专家", "家业兴旺", "四房分立", "造福乡里"]
  },
  {
    id: 4,
    name: "熊以莘",
    ziBei: "以",
    birth: "约1890",
    death: "1960",
    title: "九世祖 · 瞎眼先知",
    description: "天资聪颖，性格张扬，早年染上赌博，输掉大半田产。后双目失明，获得'预知'能力，成为八丘村的'活神仙'，晚年改过自新，受到村民尊敬。",
    achievements: ["预知能力", "改过自新", "村民敬仰", "临终警言"]
  },
  {
    id: 5,
    name: "熊斯创",
    ziBei: "斯",
    birth: "1942",
    death: null,
    title: "十世祖 · 家族复兴者",
    description: "白手起家，改革开放后养鸡养鸭，做小生意，成为八丘村首富。定下铁律：绝对不准赌博，男孩子必须外出闯荡，重视家族传统，保管族谱。",
    achievements: ["白手起家", "家族复兴", "严格治家", "守护族谱"]
  }
];

// 家训库
const mottoLibrary = [
  "尊祖敬宗，孝悌传家。",
  "读书为重，耕田为本。",
  "勤俭持家，诚信待人。",
  "积善之家，必有余庆。",
  "宁可直中取，不可曲中求。",
  "人无远虑，必有近忧。",
  "吃得苦中苦，方为人上人。",
  "家有千金，不如日进分文。",
  "养不教，父之过；教不严，师之惰。",
  "君子爱财，取之有道。"
];

// 许愿墙初始数据
let wishesData = [
  { id: 1, name: "族人甲", wish: "愿家族兴旺，子孙满堂", time: "今天 08:30" },
  { id: 2, name: "族人乙", wish: "望子女学业有成，金榜题名", time: "今天 09:15" },
  { id: 3, name: "族人丙", wish: "祈全家健康平安，万事如意", time: "今天 10:22" }
];

// 家族事件数据
const eventsData = [
  { id: 1, title: "家族南迁", year: "1644年", description: "熊世隆公携家眷从湖北麻城南迁，避明末战乱。" },
  { id: 2, title: "开基立村", year: "清顺治年间", description: "熊任尧公选定八丘村为定居地，拓荒建村。" },
  { id: 3, title: "四房分立", year: "清乾隆年间", description: "熊一僕公分家，确立大房、二房、三房、细房四房分支。" },
  { id: 4, title: "二房被逐", year: "1900年", description: "二房'八虎'欺凌同族，被逐出八丘村，永不许回村争产。" },
  { id: 5, title: "赌博败家", year: "民国年间", description: "熊以莘公染上赌博，输掉大半田产，家道中落。" },
  { id: 6, title: "瞎眼奇遇", year: "1934年", description: "熊以莘公双目失明，获得'预知'能力，成为八丘村'活神仙'。" },
  { id: 7, title: "家族复兴", year: "1978年", description: "熊斯创公白手起家，改革开放后创业致富，重振家族。" },
  { id: 8, title: "传字辈出征", year: "1990年代", description: "传字辈子弟外出闯荡，布局全国，事业有成。" },
  { id: 9, title: "绍字辈全球征途", year: "2000年代", description: "绍字辈走向全球，成为名校精英，多元崛起。" },
  { id: 10, title: "数字族谱", year: "2024年", description: "完成数字族谱系统建设，实现家族文化数字化传承。" }
];

// 家族相册数据
const albumData = [
  { id: 1, title: "家族南迁", year: "1644年", description: "熊世隆公携家眷从湖北麻城南迁场景", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20family%20migration%20ancient%20style%201644&image_size=square" },
  { id: 2, title: "八丘村风光", year: "清顺治年间", description: "熊任尧公选定的八丘村定居地", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20traditional%20village%20with%20mountains%20and%20river&image_size=square" },
  { id: 3, title: "宗祠建筑", year: "清乾隆年间", description: "熊氏宗祠始建于乾隆年间", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=traditional%20chinese%20ancestral%20hall%20architecture%20qing%20dynasty&image_size=square" },
  { id: 4, title: "族谱珍藏", year: "民国年间", description: "熊氏家族祖传族谱", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20chinese%20genealogy%20book%20with%20wooden%20box&image_size=square" },
  { id: 5, title: "熊斯创老宅", year: "1980年", description: "熊斯创公白手起家的老宅", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20traditional%20house%201980s%20style&image_size=square" },
  { id: 6, title: "家族聚会", year: "2000年", description: "熊氏家族千禧年聚会", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20family%20reunion%20celebration%20traditional%20style&image_size=square" },
  { id: 7, title: "传字辈合影", year: "2010年", description: "传字辈子弟返乡聚会", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20family%20portrait%20modern%20style&image_size=square" },
  { id: 8, title: "绍字辈英才", year: "2020年", description: "绍字辈优秀子孙代表", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20young%20professionals%20group%20photo&image_size=square" }
];

// 家族论坛帖子数据
const forumData = [
  { id: 1, title: "寻根问祖：寻找二房后裔", author: "熊传俊", time: "2024-03-10", content: "各位族亲，我是大房熊传俊，正在寻找清末被逐出村的二房后裔。虽然当年二房犯错被逐，但毕竟血脉相连，希望能重新联系上他们。" },
  { id: 2, title: "家族历史讨论：熊世隆公南迁路线", author: "熊传辉", time: "2024-03-05", content: "最近研究家族历史，发现熊世隆公从湖北麻城南迁的路线可能经过鄱阳湖、赣江等地区。有族亲了解更详细的迁徙路线吗？" },
  { id: 3, title: "宗祠修缮计划启动", author: "熊斯创", time: "2024-02-28", content: "今年计划对熊氏宗祠进行全面修缮，恢复乾隆年间的建筑风貌。希望各位族亲积极参与，贡献力量，让我们的宗祠重新焕发光彩。" },
  { id: 4, title: "绍字辈优秀子孙表彰", author: "熊传锋", time: "2024-02-20", content: "最近整理家族资料，发现绍字辈子孙中有多位杰出人才，包括斯坦福硕士、巴黎设计师、硅谷工程师等。我们应该设立奖学金，鼓励更多族中子弟努力读书。" },
  { id: 5, title: "族谱数字化工程", author: "熊传明", time: "2024-02-15", content: "为了更好地保存家族历史，我们计划将族谱数字化，并建立家族网站。欢迎有相关技术经验的族亲参与此项目。" }
];

// 导出数据
export { 
  FAMILY_CONFIG, 
  familyDatabase, 
  figuresData, 
  mottoLibrary, 
  wishesData, 
  eventsData, 
  albumData, 
  forumData 
};