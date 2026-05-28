/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from "react";

interface RadialStatBarProps {
  label?: string;
  value: number;
  color: string;
  icon?: string;
  size?: number;
}

const RadialStatBar: React.FC<RadialStatBarProps> = ({
  label,
  value,
  color,
  icon,
  size = 64,
}) => {
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (Math.min(value, 100) / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background Circle */}
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#e2e8f0" // slate-200
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          {/* Progress Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
            className="transition-all duration-700 ease-out"
          />
        </svg>

        {/* Center Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          {icon ? (
            <span className="text-xl select-none" role="img" aria-label={label}>
              {icon}
            </span>
          ) : (
            <span className="text-xs font-bold text-slate-700">
              {Math.round(value)}%
            </span>
          )}
        </div>
      </div>

      {label && (
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          {label}
        </span>
      )}
    </div>
  );
};

export default RadialStatBar;
