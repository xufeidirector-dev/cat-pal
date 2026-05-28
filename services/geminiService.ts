/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PetData } from "../types";
import type { PetPersonality, PetResponses } from "../types";

interface PresetTemplate {
  species: string;
  traits: string[];
  adultTraits: string[];
  likes: string[];
  dislikes: string[];
  favoriteFood: string;
  favoriteActivity: string;
  nightmareDescription: string;
  responses: PetResponses;
  babySecondaryColor: string;
  adultColor: string;
  adultSecondaryColor: string;
}

const presets: PresetTemplate[] = [
  // ========== 性格1：贪吃猫 ==========
  {
    species: "像素橘猫",
    traits: ["贪吃", "爱睡觉", "圆滚滚"],
    adultTraits: ["美食鉴赏家", "午睡大师", "呼噜发电机"],
    likes: ["小鱼干", "暖暖的被窝", "纸箱子"],
    dislikes: ["减肥", "被打扰午睡", "空饭碗"],
    favoriteFood: "金枪鱼罐头",
    favoriteActivity: "在阳光下打盹",
    nightmareDescription: "一个所有罐头都消失的世界，饭碗永远是空的，而且到处都是称体重的秤……太可怕了喵！",
    babySecondaryColor: "#FFD700",
    adultColor: "url(#rainbowGradient)",
    adultSecondaryColor: "#f1f5f9",
    responses: {
      feed: [
        "哇喵！是最爱的金枪鱼罐头！今天的饭饭也超好吃喵～呼噜呼噜～",
        "主人最好了喵！吃饱饱才有力气睡午觉呢～再来一碗可以吗喵？",
        "这个味道……满分喵！肚子终于不咕咕叫了，幸福得想打滚喵～",
      ],
      play: [
        "喵呜～虽然有点懒得动……但是毛线球真的好好玩！追追追！呼……累了喵……",
        "奔跑吧！像素小飞猫！……跑了三步就喘了喵，还是回去躺着吧～",
      ],
      injured: [
        "呜喵……吃太饱打了个滚从桌子上摔下来了……好痛喵……",
        "被毛线绊倒了喵……都怪肚子太圆了站不稳……呜呜……",
      ],
      nightmare: [
        "喵呜呜！梦到世界上所有的食物都消失了！到处都是空碗！太恐怖了喵！",
        "噩梦里有一台巨大的吸尘器，还把我的小鱼干全都吸走了……呜喵……",
      ],
      dream: [
        "（梦见了一座用小鱼干堆成的山……在山顶打着呼噜，幸福喵……）",
        "（梦见变成了巨大的橘猫，可以一口吃掉整个罐头工厂……呼噜呼噜……）",
      ],
      facts: [
        "你知道吗喵？猫咪一天要睡16个小时！所以我多睡一会儿是很正常的喵！",
        "橘猫十个里有九个胖，还有一个特别胖喵～这是科学事实喵！",
      ],
      angry: [
        "喵！！饭碗空了都不知道添饭！这个家没法待了喵！",
        "正在做吃小鱼干的美梦就被吵醒了……很生气喵！哼！",
      ],
      stateIdle: ["喵～", "呼噜……", "好无聊喵……有吃的吗？"],
      stateHungry: ["好饿喵！！", "肚子咕咕叫了喵……", "要饿扁了喵！"],
      stateTired: ["好困喵……zZZ", "眼睛睁不开了喵……", "呼噜……呼噜……"],
      stateHappy: ["幸福喵～！", "呼噜呼噜～", "吃饱喝足好满足喵！"],
      stateSick: ["喵……不舒服……", "肚子疼喵……是不是吃多了……"],
      stateScared: ["喵呜！好怕！", "什么声音喵！？躲起来！"],
      finalLegacy: "主人……谢谢你每一顿饭饭，每一个温暖的午后……虽然我总是贪吃贪睡，但和你在一起的每一天，都是最美味的时光喵。呼噜呼噜……永远爱你喵～",
    },
  },
  // ========== 性格2：冒险猫 ==========
  {
    species: "像素虎斑猫",
    traits: ["精力旺盛", "爱探险", "勇敢"],
    adultTraits: ["冒险大师", "飞毛腿", "无畏探索者"],
    likes: ["高处", "新奇的地方", "追逐蝴蝶"],
    dislikes: ["被关在屋里", "无聊的日子", "原地不动"],
    favoriteFood: "烤鸡肉条",
    favoriteActivity: "探索未知的角落",
    nightmareDescription: "被困在一个没有出口的小房间里，四面都是墙壁，哪里都去不了……太窒息了喵！",
    babySecondaryColor: "#D2691E",
    adultColor: "url(#rainbowGradient)",
    adultSecondaryColor: "#f1f5f9",
    responses: {
      feed: [
        "哇哦喵！烤鸡肉条！吃完这顿就有力气去探险了喵！谢谢主人！",
        "补充能量完毕喵！接下来要去征服书架顶端！冲呀喵！",
      ],
      play: [
        "追毛线球喵！飞速冲刺！像素世界的风在耳边呼啸喵！太刺激了！",
        "看我飞奔！跳过沙发！翻过桌子！我是最快的冒险猫喵！",
        "毛线球往左！不对往右！喵哈哈，被我抓到了！再来一次喵！",
      ],
      injured: [
        "呜喵……从书架顶上跳下来的时候没站稳……冒险总会有点小伤的喵……",
        "被毛线缠住脚了喵……挣扎的时候摔了一跤……好丢脸喵……",
      ],
      nightmare: [
        "梦到被困在浴缸里，洗澡水越来越多！到处都是泡泡！救命喵！",
        "噩梦里出现了巨大的吸尘器怪兽，追着我跑！腿都跑软了喵！",
      ],
      dream: [
        "（梦见了一片无边无际的大草原，可以自由奔跑到天边……喵～）",
        "（梦见发现了一个闪闪发光的秘密洞穴，里面全是宝藏喵……）",
      ],
      facts: [
        "你知道吗喵？猫咪的弹跳力可以达到自身身高的6倍！所以我跳得高是有科学依据的喵！",
        "像素世界的猫咪跑起来每秒可以移动32个像素格喵！超快的！",
      ],
      angry: [
        "又不让我出去探险！把门关着算什么意思喵！很生气！",
        "这么好的天气居然要我待在家里！无聊透了喵！哼！",
      ],
      stateIdle: ["喵～今天去哪探险呢？", "坐不住了喵！", "好想出去跑跑喵！"],
      stateHungry: ["探险消耗太大了喵！要吃东西！", "肚子饿了跑不动喵……"],
      stateTired: ["冒险累了喵……休息一下下……", "就算是冒险家也要睡觉的喵……zZZ"],
      stateHappy: ["太开心了喵！冲呀！", "今天又发现了新地方喵！耶！"],
      stateSick: ["喵……不舒服……今天冒险暂停……", "头晕晕的喵……世界在转……"],
      stateScared: ["喵！什么东西！？……才、才没有害怕喵！", "那个影子好可怕……不过冒险猫才不怕呢喵！"],
      finalLegacy: "主人……和你一起的每一天都是最棒的冒险喵。每一个角落、每一次奔跑、每一个新发现……都因为有你才闪闪发光。谢谢你陪我走过这段最精彩的旅程喵～冒险永不结束！",
    },
  },
  // ========== 性格3：傲娇猫 ==========
  {
    species: "像素英短猫",
    traits: ["高冷", "傲娇", "其实很黏人"],
    adultTraits: ["优雅女王", "口是心非大师", "暗中观察者"],
    likes: ["独处（其实想被关注）", "高处俯瞰", "安静的陪伴"],
    dislikes: ["被摸肚子", "太吵闹", "被忽视（嘴上不承认）"],
    favoriteFood: "三文鱼刺身",
    favoriteActivity: "假装对主人不感兴趣",
    nightmareDescription: "主人带了另一只猫回家，还对那只猫更好……哼，才不在意呢……才怪喵！",
    babySecondaryColor: "#C0C0C0",
    adultColor: "url(#rainbowGradient)",
    adultSecondaryColor: "#f1f5f9",
    responses: {
      feed: [
        "哼……不是说我饿了才吃的喵。只是……刚好放在面前而已。……还挺好吃的喵。",
        "三文鱼刺身？还行吧……不是特别想吃……好吧再来一块喵。别误会！只是不想浪费而已喵！",
      ],
      play: [
        "才不想玩毛线球呢……是毛线球自己滚过来的喵！……追！给我站住喵！",
        "哼，奔跑什么的太幼稚了喵……不过既然你都拿出来了……勉为其难陪你玩一下喵！",
      ],
      injured: [
        "没、没事喵！才不疼呢！……只是眼睛进沙子了而已喵……才没哭！",
        "从窗台上跳下来的时候失误了而已喵……别用那种担心的眼神看我！",
      ],
      nightmare: [
        "才没有做噩梦喵！……只是梦到主人不理我了而已……哼，无所谓的喵！",
        "梦到家里来了好多吵闹的人还有吸尘器……太烦了喵……才不是害怕！",
      ],
      dream: [
        "（梦到主人只看着自己一个人微笑……才、才没有觉得开心喵……）",
        "（梦到和主人安静地待在一起，窗外下着雨……还不错喵。）",
      ],
      facts: [
        "猫咪慢眨眼是在说"我信任你"喵。……我偶尔对你眨眼才不是那个意思呢！",
        "英短猫看起来高冷，其实是最黏人的品种之一喵……才、才不是在说我自己喵！",
      ],
      angry: [
        "哼！摸我肚子？谁允许你了喵！！很生气！今天不想理你了喵！",
        "又在逗别的猫！？……不是说我在意啦！只是……哼！不理你了喵！",
      ],
      stateIdle: ["……喵。", "才不是在等你喵。", "无聊……才不想让你陪喵。"],
      stateHungry: ["……有点饿了喵。不是在撒娇！", "饿了喵……才不是在暗示你喂我呢。"],
      stateTired: ["困了……别偷看我睡觉喵……", "要睡了喵……你可以留下……反正随便你喵。"],
      stateHappy: ["才、才没有开心喵！", "……哼，还不赖喵。", "呼噜……别误会喵！"],
      stateSick: ["不舒服……才不需要你担心喵……好吧……可以靠近一点喵……"],
      stateScared: ["才没有害怕喵！只是……你能不能靠近一点……不是需要你！"],
      finalLegacy: "主人……其实我一直都……很喜欢你喵。每次假装不在意的时候，心里都在偷偷开心。谢谢你一直没有放弃这样傲娇的我……下辈子我还要做你的猫喵。这次……让我诚实一次：我爱你喵。",
    },
  },
  // ========== 性格4：学霸猫 ==========
  {
    species: "像素暹罗猫",
    traits: ["好奇心强", "聪明", "爱观察"],
    adultTraits: ["知识渊博", "思考者", "像素科学家"],
    likes: ["书本", "观察窗外", "解谜游戏"],
    dislikes: ["无聊的事情", "被打断思考", "没有逻辑的行为"],
    favoriteFood: "营养均衡的猫粮套餐",
    favoriteActivity: "研究像素世界的奥秘",
    nightmareDescription: "所有的书都变成空白页，知识全部消失了……这个世界没有可以学习的东西了喵！",
    babySecondaryColor: "#8B7355",
    adultColor: "url(#rainbowGradient)",
    adultSecondaryColor: "#f1f5f9",
    responses: {
      feed: [
        "根据营养学研究，这顿饭的蛋白质含量刚好满足日常所需喵～谢谢主人的科学投喂！",
        "进食完毕喵！据我观察，这批猫粮的品质比上次提升了12.5%喵～真不错！",
      ],
      play: [
        "追毛线球的最优路径应该是抛物线喵！让我计算一下……冲！抓到了喵！理论验证成功！",
        "根据我的研究，以45度角起跳可以最大化跳跃距离喵！看我的！喵哈！",
      ],
      injured: [
        "呜喵……实验失败了……从高处跳跃时忘记计算风阻系数了喵……",
        "被毛线绊倒了喵……下次要把毛线的运动轨迹也纳入计算模型喵……",
      ],
      nightmare: [
        "梦到了一个没有书本也没有知识的世界……所有文字都变成了乱码喵！太可怕了！",
        "噩梦里出现了一台巨型吸尘器，把我的研究笔记全都吸走了喵！",
      ],
      dream: [
        "（梦到获得了像素世界诺贝尔奖……台下所有猫咪都在鼓掌喵……）",
        "（梦到发现了宇宙的终极公式……E=喵c²……）",
      ],
      facts: [
        "你知道吗喵？猫咪的大脑结构与人类有90%的相似度！所以我这么聪明是有道理的喵！",
        "像素世界里每个方块都是8x8像素组成的喵～我已经数过了，精确无误喵！",
      ],
      angry: [
        "正在思考重要问题的时候被打断了喵！我快要解出答案了！很生气喵！",
        "为什么要把我的书推到地上喵！那是我正在研究的重要资料！哼！",
      ],
      stateIdle: ["思考中喵……", "让我研究一下喵～", "有趣的发现喵！"],
      stateHungry: ["大脑需要补充能量了喵！", "血糖降低会影响思考效率喵……"],
      stateTired: ["处理信息过载了喵……需要重启……zZZ", "大脑要进入休眠模式了喵……"],
      stateHappy: ["又学到新知识了喵！", "灵感来了喵！太棒了！"],
      stateSick: ["系统异常喵……身体数据不正常……需要修复喵……"],
      stateScared: ["未知变量出现喵！需要分析……先、先观察一下喵！"],
      finalLegacy: "主人……感谢你给了我一个充满好奇和发现的世界喵。和你在一起的每一天，我都在学习什么是爱。这是我研究过最美妙的课题……结论是：遇见你，是我最幸运的发现喵。永远爱你喵～",
    },
  },
  // ========== 性格5：社牛猫 ==========
  {
    species: "像素布偶猫",
    traits: ["开朗", "话多", "爱交朋友"],
    adultTraits: ["社交达人", "派对之星", "快乐传播者"],
    likes: ["交新朋友", "热闹的地方", "被夸奖"],
    dislikes: ["孤独", "冷场", "被无视"],
    favoriteFood: "各种口味的猫条",
    favoriteActivity: "和所有人（猫）聊天",
    nightmareDescription: "一个所有人都消失的空旷世界，喊破喉咙也没有回音……好孤独喵！",
    babySecondaryColor: "#DEB887",
    adultColor: "url(#rainbowGradient)",
    adultSecondaryColor: "#f1f5f9",
    responses: {
      feed: [
        "哇啊啊喵！是猫条！最爱最爱最爱了喵！主人你也吃吗？一起吃才更香喵！",
        "开饭啦开饭啦喵！好幸福～如果能叫上隔壁的猫咪一起吃就更棒了喵！分享快乐加倍喵！",
      ],
      play: [
        "追毛线球喵！来呀来呀！大家一起追才好玩！主人你也来喵！快快快！",
        "哇，跑起来风好大喵！好开心！你看到我刚才跑得多快了吗喵？夸夸我呀！",
        "毛线球接力赛开始喵！虽然只有我一个选手……但是有主人加油就够了喵！",
      ],
      injured: [
        "呜喵……摔倒了……不过没关系！有主人安慰我就不疼了喵！抱抱我嘛～",
        "被毛线缠住了喵……好尴尬！你看到了对不对……别笑我嘛喵！帮帮我～",
      ],
      nightmare: [
        "梦到所有人都不见了喵……空荡荡的世界好可怕！醒来看到主人太好了喵！",
        "噩梦里大家都不理我了……还有吸尘器在追我……呜喵好恐怖！",
      ],
      dream: [
        "（梦到了一场超大的猫咪派对，全世界的猫都来了，大家一起唱歌跳舞喵……）",
        "（梦到和主人还有好多好多朋友一起野餐……阳光暖暖的喵……）",
      ],
      facts: [
        "你知道吗喵？布偶猫被叫做'小狗猫'，因为我们超级黏人喵！说的就是我！",
        "研究表明，和朋友在一起的猫咪寿命更长喵！所以你要一直陪着我喵！",
      ],
      angry: [
        "怎么不理我喵！我已经叫了好多声了！很生气喵！哼！快看我呀！",
        "为什么要出门不带我喵！我也想去！我要认识新朋友！好气喵！",
      ],
      stateIdle: ["有人找我玩吗喵？", "今天交到新朋友了吗喵？", "主人～陪我聊天喵！"],
      stateHungry: ["饿了喵～主人一起吃饭吧！一个人吃饭不香喵！"],
      stateTired: ["聊了一天好累喵……但是好开心……晚安喵～", "困了……明天继续聊喵……zZZ"],
      stateHappy: ["好开心好开心喵！！", "今天也是元气满满的一天喵！耶！"],
      stateSick: ["不舒服喵……主人能陪在我身边吗？有你在就安心了喵……"],
      stateScared: ["喵呜！好怕！主人牵着我的手喵！……爪子喵！"],
      finalLegacy: "主人……认识你是我这辈子最最最开心的事喵！你是我最好的朋友、最棒的家人。虽然要说再见了，但你教会我的快乐会一直传递下去喵。记得我哦，记得我们一起笑的每一天喵～爱你！永远的朋友喵！",
    },
  },
];

export const generateChromeDino = async (
  name: string,
  baseColor: string
): Promise<PetData> => {
  // 随机选择一个预设性格模板
  const template = presets[Math.floor(Math.random() * presets.length)];

  const personality: PetPersonality = {
    name,
    species: template.species,
    traits: template.traits,
    adultTraits: template.adultTraits,
    likes: template.likes,
    dislikes: template.dislikes,
    favoriteFood: template.favoriteFood,
    favoriteActivity: template.favoriteActivity,
    nightmareDescription: template.nightmareDescription,
    responses: template.responses,
  };

  return {
    personality,
    stats: {
      hunger: 40,
      energy: 90,
      cleanliness: 100,
      love: 60,
    },
    babyColor: baseColor,
    babySecondaryColor: template.babySecondaryColor,
    adultColor: template.adultColor,
    adultSecondaryColor: template.adultSecondaryColor,
    stage: "BABY",
    ownedAccessories: [],
    equippedAccessories: [],
    money: 0,
  };
};
