/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from "react";

interface LevelUpOverlayProps {
  level: number;
}

const LevelUpOverlay: React.FC<LevelUpOverlayProps> = ({ level }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="bg-slate-900 text-white px-10 py-6 rounded-[32px] shadow-2xl animate-in zoom-in fade-in duration-500 flex flex-col items-center gap-2 border-4 border-yellow-400">
        <span className="text-4xl">⭐</span>
        <h2 className="text-2xl font-black tracking-[0.2em] font-pixel text-yellow-400">
          升级！
        </h2>
        <p className="text-sm font-bold opacity-80 tracking-widest">
          你达到了等级 {level}
        </p>
        <p className="text-xl font-bold text-green-400">+$200 金币</p>
      </div>
    </div>
  );
};

export default LevelUpOverlay;
