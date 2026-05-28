/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from "react";
import { PetData, PetStats } from "../types";
import StatBar from "./StatBar";

interface PetInfoPanelProps {
  pet: PetData;
  currentLevel: number;
  maxLevelXp: number;
  currentLevelXp: number;
  money: number;
  displayStats: PetStats;
  isGameOver: boolean;
}

const PetInfoPanel: React.FC<PetInfoPanelProps> = ({
  pet,
  currentLevel,
  maxLevelXp,
  currentLevelXp,
  money,
  displayStats,
  isGameOver,
}) => {
  return (
    <div
      className={`w-full lg:w-80 space-y-6 sticky top-6 transition-all duration-700 ${isGameOver
          ? "opacity-0 scale-95 pointer-events-none translate-x-12"
          : "opacity-100"
        }`}
    >
      <div className="bg-white/90 backdrop-blur-xl rounded-[32px] p-6 shadow-xl border border-white/40">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl shadow-sm flex items-center justify-center ${pet.stage === "ADULT"
                  ? "bg-gradient-to-tr from-sky-400 to-pink-500"
                  : "bg-slate-800"
                }`}
            >
              <span className="text-xs text-white">🦖</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900 leading-tight">
                {pet.personality.name}
              </span>
              <span
                className={`text-[9px] font-black uppercase tracking-[0.15em] ${pet.stage === "ADULT" ? "text-pink-600" : "text-slate-400"
                  }`}
              >
                {pet.stage === "ADULT" ? "彩虹猫咪" : "经典宝宝"}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-xs font-sans font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full animate-pulse mb-1">
              等级 {currentLevel}
            </div>
          </div>
        </div>
        {/* XP Bar */}
        <div className="w-full mb-6">
          <StatBar
            label="经验"
            value={Math.min((currentLevelXp / maxLevelXp) * 100, 100)}
            color="#facc15"
          />
        </div>

        {/* Money Display */}
        <div className="mb-6 p-4 bg-slate-900 rounded-2xl flex items-center justify-between shadow-inner">
          <div className="flex items-center gap-2">
            <span className="text-lg">🪙</span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              金币
            </span>
          </div>
          <span className="font-sans font-bold text-yellow-400 text-lg">
            ${money}
          </span>
        </div>

        <div className="space-y-5">
          <StatBar
            label="饱腹"
            value={100 - displayStats.hunger}
            color="#475569"
            icon="🍖"
          />
          <StatBar
            label="能量"
            value={displayStats.energy}
            color="#0ea5e9"
            icon="🔋"
          />
          <StatBar
            label="清洁"
            value={displayStats.cleanliness}
            color="#34A853"
            icon="✨"
          />
          <StatBar
            label="爱心"
            value={displayStats.love}
            color="#ec4899"
            icon="❤️"
          />

        </div>
      </div>
    </div>
  );
};

export default PetInfoPanel;
