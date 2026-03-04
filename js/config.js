// 家族配置数据
const FAMILY_CONFIG = {
  surname: "熊",           // 姓氏
  title: "熊氏宗族",        // 宗族标题
  subtitle: "江陵衍派 · 忠孝家风", // 副标题
  location: "发源地：江陵 · 现分布：全国各地", // 地理信息
  generations: 12,         // 传承代数
  population: "500+",      // 家族成员数量
  history: "300年",        // 传承历史
  // 字辈（按顺序）
  ziBei: ["天", "地", "玄", "黄", "宇", "宙", "洪", "荒", "日", "月", "盈", "昃"],
  // 家族起源故事
  originStory: `<p>熊氏家族起源可追溯至远古时期，始祖鬻熊为周文王之师，后裔以熊为氏。后世子孙繁衍，枝繁叶茂。</p>
<p>核心居住地：<span class="text-gold-400 font-semibold">江陵</span>。家族在此地繁衍生息，后随历史变迁分布全国各地。</p>
<p>家族历经沧桑，有崛起和富裕的时候，也有衰落的时候。但无论顺境逆境，子孙始终保持着坚韧与拼搏的精神，在艰难中求生存，在困苦中谋发展。</p>`,
  // 传世家训
  motto: "孝友传家，诗书继世",
  mottoDesc: "孝敬父母，友爱兄弟，勤读诗书，修身齐家。此乃家族立身之本，世代相传之宝。"
};

// 家族成员数据库（示例数据）
const familyDatabase = [
  { id: 1, name: "熊天明", ziBei: "天", generation: 1, birth: "约1700", death: "约1780", title: "一世祖", description: "家族开基祖，创业维艰。", fatherId: null, motherId: null, spouse: null, children: [2] },
  { id: 2, name: "熊地厚", ziBei: "地", generation: 2, birth: "约1730", death: "约1810", title: "二世祖", description: "承父业，扩家业。", fatherId: 1, motherId: null, spouse: null, children: [3] },
  { id: 3, name: "熊玄德", ziBei: "玄", generation: 3, birth: "约1760", death: "约1840", title: "三世祖", description: "饱读诗书，科举成名。", fatherId: 2, motherId: null, spouse: null, children: [4] },
  { id: 4, name: "熊黄裳", ziBei: "黄", generation: 4, birth: "约1790", death: "约1870", title: "四世祖", description: "经商有道，家业兴旺。", fatherId: 3, motherId: null, spouse: null, children: [5] },
  { id: 5, name: "熊宇清", ziBei: "宇", generation: 5, birth: "约1820", death: "约1900", title: "五世祖", description: "太平天国时期，守护家业。", fatherId: 4, motherId: null, spouse: null, children: [6] },
  { id: 6, name: "熊宙宽", ziBei: "宙", generation: 6, birth: "约1850", death: "约1930", title: "六世祖", description: "晚清秀才，办学堂。", fatherId: 5, motherId: null, spouse: null, children: [7] },
  { id: 7, name: "熊洪波", ziBei: "洪", generation: 7, birth: "约1880", death: "约1960", title: "七世祖", description: "参与革命，见证民国。", fatherId: 6, motherId: null, spouse: null, children: [8] },
  { id: 8, name: "熊荒山", ziBei: "荒", generation: 8, birth: "约1910", death: "约1990", title: "八世", description: "经历抗战，艰难求生。", fatherId: 7, motherId: null, spouse: null, children: [9] },
  { id: 9, name: "熊日升", ziBei: "日", generation: 9, birth: "约1940", death: null, title: "九世", description: "新中国建设者，勤恳一生。", fatherId: 8, motherId: null, spouse: null, children: [10] },
  { id: 10, name: "熊月华", ziBei: "月", generation: 10, birth: "约1970", death: null, title: "十世", description: "改革开放一代，事业有成。", fatherId: 9, motherId: null, spouse: null, children: [11] },
  { id: 11, name: "熊盈科", ziBei: "盈", generation: 11, birth: "约2000", death: null, title: "十一世", description: "新时代青年，前程似锦。", fatherId: 10, motherId: null, spouse: null, children: [12] },
  { id: 12, name: "熊昃恒", ziBei: "昃", generation: 12, birth: "约2020", death: null, title: "十二世", description: "家族新生代，未来可期。", fatherId: 11, motherId: null, spouse: null, children: [] }
];

// 先贤数据（示例数据）
const figuresData = [
  {
    id: 1,
    name: "熊玄德",
    ziBei: "玄",
    birth: "约1760",
    death: "约1840",
    title: "三世祖 · 进士",
    description: "饱读诗书，于乾隆年间中进士，为官清廉，造福一方。告老还乡后创办私塾，教导族中子弟。",
    achievements: ["进士及第", "为官清廉", "创办私塾", "诗书传家"]
  },
  {
    id: 2,
    name: "熊宙宽",
    ziBei: "宙",
    birth: "约1820",
    death: "约1900",
    title: "六世祖 · 秀才",
    description: "晚清秀才，虽科举不第，但学问渊博。在乡间开办蒙馆，教授族中子弟及邻里学童。",
    achievements: ["秀才", "开办蒙馆", "教书育人", "德高望重"]
  },
  {
    id: 3,
    name: "熊洪波",
    ziBei: "洪",
    birth: "约1880",
    death: "约1960",
    title: "七世祖 · 革命者",
    description: "青年时期投身革命，参与辛亥革命。民国时期曾任地方参议，为乡梓建设出力甚多。",
    achievements: ["辛亥革命", "地方参议", "建设乡梓", "仗义执言"]
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
  { id: 1, title: "家族开基", year: "约1700年", description: "熊天明公在江陵开基立业，为家族始祖。" },
  { id: 2, title: "科举成名", year: "约1790年", description: "三世祖熊玄德中进士，家族开始兴盛。" },
  { id: 3, title: "创办私塾", year: "约1820年", description: "熊玄德告老还乡后创办私塾，教导族中子弟。" },
  { id: 4, title: "参与革命", year: "1911年", description: "七世祖熊洪波参与辛亥革命。" },
  { id: 5, title: "家族迁徙", year: "1949年", description: "部分族人随新中国建设迁徙至全国各地。" },
  { id: 6, title: "族谱修订", year: "2024年", description: "完成数字族谱系统建设，实现家族文化数字化传承。" }
];

// 家族相册数据
const albumData = [
  { id: 1, title: "家族合影", year: "1950年", description: "新中国成立初期家族合影", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=traditional%20chinese%20family%20portrait%201950s%20style&image_size=square" },
  { id: 2, title: "宗祠建筑", year: "1980年", description: "家族宗祠修缮后照片", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=traditional%20chinese%20ancestral%20hall%20architecture&image_size=square" },
  { id: 3, title: "族谱修缮", year: "2000年", description: "新世纪族谱修订工作", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20genealogy%20book%20traditional%20style&image_size=square" },
  { id: 4, title: "家族聚会", year: "2020年", description: "家族百年庆典聚会", image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20family%20reunion%20celebration&image_size=square" }
];

// 家族论坛帖子数据
const forumData = [
  { id: 1, title: "寻根问祖：寻找失联的族亲", author: "熊氏族孙", time: "2024-03-01", content: "各位族亲，我是熊日升的后人，正在寻找民国时期迁徙至台湾的族亲，如有线索请联系我。" },
  { id: 2, title: "家族字辈讨论", author: "熊氏宗亲", time: "2024-02-28", content: "我们家族的字辈已经使用了12代，是否需要续谱？大家有什么建议？" },
  { id: 3, title: "宗祠修缮计划", author: "熊氏理事会", time: "2024-02-25", content: "今年计划对宗祠进行全面修缮，希望各位族亲积极参与，贡献力量。" }
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