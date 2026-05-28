/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from "react";
import { AccessoryType, ShopItem } from "../types";
import { SHOP_ITEMS } from "../constants";

interface ShopModalProps {
  money: number;
  ownedAccessories: AccessoryType[];
  equippedAccessories: AccessoryType[];
  onClose: () => void;
  onBuy: (item: ShopItem) => void;
  onEquip: (id: AccessoryType) => void;
}

const ShopModal: React.FC<ShopModalProps> = ({
  money,
  ownedAccessories,
  equippedAccessories,
  onClose,
  onBuy,
  onEquip,
}) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-6">
      <div className="bg-white rounded-[40px] w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="px-8 py-6 bg-slate-900 text-white flex justify-between items-center">
          <div>
            <h2 className="text-xl font-pixel text-yellow-400 mb-1">
              像素精品店
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-slate-800 px-4 py-2 rounded-full flex items-center gap-2 border border-slate-700">
              <span className="text-yellow-400">🪙</span>
              <span className="font-sans font-bold">${money}</span>
            </div>
            <button
              onClick={onClose}
              className="hover:scale-110 transition-transform"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto">
          {SHOP_ITEMS.map((item) => {
            const isOwned = ownedAccessories.includes(item.id);
            const isEquipped = equippedAccessories.includes(item.id);
            const canAfford = money >= item.price;

            return (
              <div
                key={item.id}
                className={`p-4 rounded-3xl border-2 transition-all flex items-center justify-between ${isEquipped
                  ? "border-sky-500 bg-sky-50"
                  : "border-slate-100 hover:border-slate-200"
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">
                      {item.name}
                    </h3>
                    {!isOwned && (
                      <p className="text-xs font-sans text-slate-400">
                        ${item.price}
                      </p>
                    )}
                    {isOwned && (
                      <p className="text-[9px] font-bold text-sky-500 uppercase tracking-widest">
                        已拥有
                      </p>
                    )}
                  </div>
                </div>
                {isOwned ? (
                  <button
                    onClick={() => onEquip(item.id)}
                    className={`px-4 py-2 rounded-full text-[10px] font-bold tracking-widest transition-all ${isEquipped
                      ? "bg-sky-500 text-white shadow-lg"
                      : "bg-slate-200 text-slate-600 hover:bg-slate-800 hover:text-white"
                      }`}
                  >
                    {isEquipped ? "已装备" : "装备"}
                  </button>
                ) : (
                  <button
                    onClick={() => onBuy(item)}
                    disabled={!canAfford}
                    className={`px-4 py-2 rounded-full text-[10px] font-bold tracking-widest transition-all ${canAfford
                      ? "bg-slate-900 text-white hover:bg-yellow-500"
                      : "bg-slate-100 text-slate-300 cursor-not-allowed"
                      }`}
                  >
                    购买
                  </button>
                )}
              </div>
            );
          })}
        </div>
        <div className="px-8 py-6 bg-slate-50 border-t border-slate-100 flex justify-center italic text-slate-400 text-xs">
          &quot;配饰在做梦时也不会掉哦。&quot;
        </div>
      </div>
    </div>
  );
};

export default ShopModal;
