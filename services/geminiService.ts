/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Type } from "@google/genai";
import { PetData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const generateChromeDino = async (name: string, baseColor: string): Promise<PetData> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `请用中文为一只名叫"${name}"的像素小猫咪生成一份虚拟宠物档案。
    这只猫咪是一只生活在像素世界里的可爱猫咪角色。
    请赋予它独特的性格（例如：精力过剩的奔跑家、爱抓老鼠的捕猎高手、爱睡觉的慢吞吞小家伙）。

    所有回复内容必须使用中文，要求如下：
    1. feed（喂食）：感谢主人投喂它最爱的食物（favoriteFood）。
    2. play（玩耍）：提到追逐毛线球或飞快奔跑的内容。
    3. injured（受伤）：描述它如何被毛线绊倒或从高处跳下摔到。
    4. nightmare（噩梦）：描述一个布满吸尘器或洗澡水的可怕世界。
    5. dream（梦境）：必须使用括号包裹，例如"（梦见了一望无际的小鱼干……）"。
    6. facts（趣闻）：关于猫咪或像素小游戏的冷知识。
    7. angry（生气）：因为没有罐头、被打扰睡觉或被困住而闹脾气。
    8. states（状态反应）：简短的 8-bit 像素风格反应词，可以包含"喵"等猫咪叫声。
    9. finalLegacy（最终告别）：一段温馨感人的告别语，回顾你们一起度过的漫长陪伴时光。

    请以猫咪的身份回复，让所有文本充满猫咪的可爱气息（多使用"喵""呼噜"等元素）。请确保所有文本字段都使用自然流畅的中文表达，保留游戏童趣可爱的语气。JSON 的键名保持英文不变，只翻译值的内容。`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          species: { type: Type.STRING },
          traits: { type: Type.ARRAY, items: { type: Type.STRING } },
          adultTraits: { type: Type.ARRAY, items: { type: Type.STRING } },
          likes: { type: Type.ARRAY, items: { type: Type.STRING } },
          dislikes: { type: Type.ARRAY, items: { type: Type.STRING } },
          favoriteFood: { type: Type.STRING },
          favoriteActivity: { type: Type.STRING },
          nightmareDescription: { type: Type.STRING },
          babyColor: { type: Type.STRING },
          babySecondaryColor: { type: Type.STRING },
          adultColor: { type: Type.STRING },
          adultSecondaryColor: { type: Type.STRING },
          responses: {
            type: Type.OBJECT,
            properties: {
              feed: { type: Type.ARRAY, items: { type: Type.STRING } },
              play: { type: Type.ARRAY, items: { type: Type.STRING } },
              injured: { type: Type.ARRAY, items: { type: Type.STRING } },
              nightmare: { type: Type.ARRAY, items: { type: Type.STRING } },
              dream: { type: Type.ARRAY, items: { type: Type.STRING } },
              facts: { type: Type.ARRAY, items: { type: Type.STRING } },
              angry: { type: Type.ARRAY, items: { type: Type.STRING } },
              stateIdle: { type: Type.ARRAY, items: { type: Type.STRING } },
              stateHungry: { type: Type.ARRAY, items: { type: Type.STRING } },
              stateTired: { type: Type.ARRAY, items: { type: Type.STRING } },
              stateHappy: { type: Type.ARRAY, items: { type: Type.STRING } },
              stateSick: { type: Type.ARRAY, items: { type: Type.STRING } },
              stateScared: { type: Type.ARRAY, items: { type: Type.STRING } },
              finalLegacy: { type: Type.STRING },
            },
            required: [
              "feed",
              "play",
              "injured",
              "nightmare",
              "dream",
              "facts",
              "angry",
              "stateIdle",
              "stateHungry",
              "stateTired",
              "stateHappy",
              "stateSick",
              "stateScared",
              "finalLegacy",
            ],
          },
        },
        required: [
          "name",
          "species",
          "traits",
          "adultTraits",
          "likes",
          "dislikes",
          "favoriteFood",
          "favoriteActivity",
          "nightmareDescription",
          "babyColor",
          "babySecondaryColor",
          "adultColor",
          "adultSecondaryColor",
          "responses",
        ],
      },
    },
  });

  const data = response.text ? JSON.parse(response.text) : null;

  return {
    personality: data,
    stats: {
      hunger: 40,
      energy: 90,
      cleanliness: 100,
      love: 60,
    },
    // Use the user-selected baseColor
    babyColor: baseColor,
    babySecondaryColor: "#757575",
    adultColor: "url(#rainbowGradient)", // The requested Rainbow style
    adultSecondaryColor: "#f1f5f9",
    stage: "BABY",
    // Fix: Add missing properties required by PetData interface
    ownedAccessories: [],
    money: 0,
  };
};