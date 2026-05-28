/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { ShopItem } from "./types";

export const SHOP_ITEMS: ShopItem[] = [
  { id: "party_hat", name: "派对帽", price: 100, icon: "🎉" },
  { id: "cool_shades", name: "酷炫墨镜", price: 250, icon: "😎" },
  { id: "cowboy_hat", name: "牛仔帽", price: 500, icon: "🤠" },
  { id: "top_hat", name: "礼帽", price: 1000, icon: "🎩" },
  { id: "crown", name: "皇冠", price: 2500, icon: "👑" },
];

export const GOOGLE_COLORS = [
  { hex: "#FFFFFF", name: "白色" },
  { hex: "#1A73E8", name: "蓝色" },
  { hex: "#EA4335", name: "红色" },
  { hex: "#FBBC04", name: "黄色" },
  { hex: "#34A853", name: "绿色" },
];

export const EVOLUTION_GOAL = 10;
export const TOTAL_SECONDS_TO_EVOLVE = 120;
export const XP_BASE_REQUIREMENT = 100;
export const XP_GROWTH_FACTOR = 1.25;

export const calculateXpRequiredForLevel = (level: number): number => {
  // XP required to pass the current level (e.g. at lvl 1, you need 100XP to reach lvl 2)
  // It gets bigger with each level
  return Math.floor(XP_BASE_REQUIREMENT * level * XP_GROWTH_FACTOR);
};
