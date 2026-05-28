/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from "react";
import { PetState, AccessoryType } from "../types";
import { ICON_PATHS, IconWrapper } from "./Icons";

interface PetDisplayProps {
  color: string;
  secondaryColor: string;
  state: PetState;
  hasPoop: boolean;
  stage: "BABY" | "ADOLESCENT" | "TEENAGER" | "ADULT";
  equippedAccessories: AccessoryType[];
  scale?: number;
  currentLevel: number;
}

const PetDisplay: React.FC<PetDisplayProps> = ({
  color,
  state,
  hasPoop,
  stage,
  equippedAccessories,
  scale = 1,
  currentLevel,
}) => {
  const isSleeping = state === PetState.SLEEPING;
  const isHappy = state === PetState.HAPPY;
  const isEating = state === PetState.EATING;
  const isScared = state === PetState.SCARED;
  const isAngry = state === PetState.ANGRY;
  const isInjured = state === PetState.INJURED;
  const isSick = state === PetState.SICK;
  const isAdult = stage === "ADULT";

  // Determine main animation class
  let animationClass = "animate-breathe";
  if (isEating) animationClass = "animate-chomp";
  else if (isHappy) animationClass = "animate-happy-bounce";
  else if (isSleeping) animationClass = "animate-snooze";
  else if (isScared || isSick) animationClass = "animate-tremble";
  else if (isAngry) animationClass = "animate-jitter";

  let finalColor = color;
  if(isAdult) {
    // should import and use GOOGLE_COLORS
    if(color == '#FFF') {
      finalColor = 'url(#whiteGradient)';
    } else if(color == '#1A73E8') {
      finalColor = 'url(#blueGradient)';
    } else if(color == '#34A853') {
      finalColor = 'url(#greenGradient)';
    } else if(color == '#FBBC04') {
      finalColor = 'url(#yellowGradient)';
    } else if (color == '#EA4335') {
      finalColor = 'url(#redGradient)';
    }
  }

  return (
    <div
      className={`relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center pixel-render transition-all duration-1000 ${animationClass}`}
      style={{ transform: `scale(${scale})` }}
    >
      {/* Poop Icon */}
      {hasPoop && (
        <div className="absolute text-4xl z-20 animate-bounce bottom-[0%] left-[5%]">💩</div>
      )}

      <svg
        viewBox="0 0 137 144"
        className="w-full h-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] overflow-visible"
      >
        <defs>
          <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#38bdf8" }} />
            <stop offset="25%" style={{ stopColor: "#a855f7" }} />
            <stop offset="50%" style={{ stopColor: "#ec4899" }} />
            <stop offset="75%" style={{ stopColor: "#f97316" }} />
            <stop offset="100%" style={{ stopColor: "#eab308" }} />
          </linearGradient>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#4275F4" }} />
            <stop offset="95.67%" style={{ stopColor: "#34A853" }} />
          </linearGradient>
          <linearGradient id="whiteGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#FFF" }} />
            <stop offset="77.74%" style={{ stopColor: "#BB55A1" }} />
          </linearGradient>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#34A853" }} />
            <stop offset="100%" style={{ stopColor: "#FB0" }} />
          </linearGradient>
          <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#FB0" }} />
            <stop offset="100%" style={{ stopColor: "#EA4335" }} />
          </linearGradient>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#EA4335" }} />
            <stop offset="100%" style={{ stopColor: "#4279E9" }} />
          </linearGradient>
        </defs>

        {/* High-Res Pixel Cat Body */}
        <path
          d={`M35 0H42V7H49V14H84V7H91V0H98V7H105V14H112V42H119V35H126V28H133V42H126V49H119V56H112V112H98V144H70V112H63V144H35V112H21V14H28V7H35V0ZM42 ${isSleeping ? "35H56V42H42V35Z" : "28H56V42H42V28Z"}M77 ${isSleeping ? "35H91V42H77V35Z" : "28H91V42H77V28Z"}`}
          fill={finalColor}
          style={{
            transform: !isAdult ? "scale(1, 0.85)" : "none",
            transformOrigin: "50% 100%",
          }}
        />

        {/* Scaled Group for Accessories & Features (mapping 24x24 grid to ~144x144) */}
        <g
          transform={
            !isAdult ? "translate(3.5, 2) scale(6)" : "translate(3.5, -20) scale(6)"
          }
        >
          {/* Accessory Rendering - positioned on top of cat head */}
          {equippedAccessories.length > 0 && (
            <g transform="translate(0, 0)">
              {/* 帽子类 - 先渲染帽子（在下层）*/}
              {equippedAccessories.includes("party_hat") && (
                <g>
                  <path d="M 8 2 L 10.5 -2 L 13 2 Z" fill="#FBBC04" />
                  <rect x="10" y="-2.5" width="1" height="0.5" fill="#EA4335" />
                </g>
              )}
              {equippedAccessories.includes("cowboy_hat") && (
                <g fill="#78350f">
                  <rect x="6" y="1.5" width="9" height="0.7" />
                  <rect x="8.5" y="-1" width="4" height="2.5" />
                  <rect x="8.5" y="0.5" width="4" height="0.4" fill="#facc15" />
                </g>
              )}
              {equippedAccessories.includes("top_hat") && (
                <g fill="#1e293b">
                  <rect x="6.5" y="1.5" width="8" height="0.6" />
                  <rect x="8.5" y="-2" width="4" height="3.5" />
                  <rect x="8.5" y="0.7" width="4" height="0.3" fill="#ef4444" />
                </g>
              )}
              {equippedAccessories.includes("crown") && (
                <g fill="#facc15">
                  <rect x="8" y="0" width="5" height="2" />
                  <rect x="8" y="-1" width="1" height="1" />
                  <rect x="10" y="-1" width="1" height="1" />
                  <rect x="12" y="-1" width="1" height="1" />
                  <rect x="10" y="0.5" width="1" height="1" fill="#ef4444" />
                </g>
              )}
              {/* 墨镜 - 后渲染（在上层，不被帽子遮挡）*/}
              {equippedAccessories.includes("cool_shades") && (
                <g fill="#000">
                  {/* Left lens */}
                  <rect x="6.4" y="4.5" width="2.5" height="2.4" fill="#000" />
                  {/* Right lens */}
                  <rect x="12.2" y="4.5" width="2.5" height="2.4" fill="#000" />
                  {/* Bridge */}
                  <rect x="8.9" y="5.4" width="3.3" height="0.5" fill="#000" />
                  {/* Shine */}
                  <rect x="6.7" y="4.8" width="0.5" height="0.5" fill="#fff" opacity="0.7" />
                  <rect x="12.5" y="4.8" width="0.5" height="0.5" fill="#fff" opacity="0.7" />
                </g>
              )}
            </g>
          )}

          {/* Eye expressions - cat eyes are at (7.6, 5.5) and (13.4, 5.5) */}
          <g transform={!isAdult ? "translate(10.5, 5.5) scale(1.3) translate(-10.5, -5.5)" : undefined}>
            {isSleeping ? (
              <g></g>
            ) : isScared ? (
              <g>
                {/* Left eye - wide scared */}
                <rect x="6.5" y="4.5" width="2.3" height="2.3" fill="#fff" />
                <rect x="7.2" y="5.2" width="1" height="1" fill="#000" className="animate-pulse" />
                {/* Right eye - wide scared */}
                <rect x="12.2" y="4.5" width="2.3" height="2.3" fill="#fff" />
                <rect x="12.9" y="5.2" width="1" height="1" fill="#000" className="animate-pulse" />
              </g>
            ) : isInjured ? (
              <g stroke="#000" strokeWidth="0.4">
                {/* Left X */}
                <path d="M 6.7 4.7 L 8.6 6.5 M 8.6 4.7 L 6.7 6.5" />
                {/* Right X */}
                <path d="M 12.4 4.7 L 14.4 6.5 M 14.4 4.7 L 12.4 6.5" />
              </g>
            ) : isAngry ? (
              <g>
                {/* Left eye + brow */}
                <rect x="6.7" y="5" width="1.7" height="1.7" fill="#fff" />
                <rect x="6.7" y="5" width="1.2" height="1.2" fill="#000" />
                <path d="M 6.2 4 L 8.5 4.75" stroke="#EA4335" strokeWidth="0.5" />
                {/* Right eye + brow */}
                <rect x="12.4" y="5" width="1.7" height="1.7" fill="#fff" />
                <rect x="12.9" y="5" width="1.2" height="1.2" fill="#000" />
                <path d="M 12.2 4.75 L 14.5 4" stroke="#EA4335" strokeWidth="0.5" />
              </g>
            ) : equippedAccessories.includes("cool_shades") ? (
              <g></g>
            ) : (
              <g>
                {/* Default cat eyes are holes in main path */}
              </g>
            )}
          </g>

          {/* Emotions Overlays */}
          {isInjured && (
            <g>
              <rect x="9" y="14.5" width="3" height="1" fill="#FF4500" />
              <rect x="10" y="13.5" width="1" height="3" fill="#FF4500" />
            </g>
          )}

          {isSick && (
            <>
              <g transform="translate(-6, 7) scale(0.3,0.3) rotate(-30,0,0)" className="animate-pulse hover:rotate">
                <path d={ICON_PATHS.bug} fill="#34A853"/>
              </g>
              <g transform="translate(16, -6) scale(0.3,0.3) rotate(30,0,0)" className="animate-pulse">
                <path d={ICON_PATHS.bug} fill="#34A853"/>
              </g>
              <g transform="translate(8, -2) scale(0.25,0.25)" className="animate-pulse">
                <path d={ICON_PATHS.swiggle} stroke="#34A853" stroke-width="1.5"/>
                <g transform="translate(-10, 10)">
                  <path d={ICON_PATHS.swiggle} stroke="#34A853" stroke-width="1.5"/>
                </g>
                <g transform="translate(-20, 20)">
                  <path d={ICON_PATHS.swiggle} stroke="#34A853" stroke-width="1.5"/>
                </g>
              </g>
            </>
          )}

          {isHappy && (
            <g transform="translate(14, 2) scale(0.1,0.1)">
              <text fontSize="40" className="animate-bounce">
                ❤️
              </text>
            </g>
          )}

          {isScared && (
            <g transform="translate(9.5, 6.5)">
              <text fontSize="4" className="animate-pulse">
                💧
              </text>
            </g>
          )}

          {isEating && (
            <g>
              <rect x="13" y="10" width="1" height="1" fill="#FBBC04" className="animate-reverse-ping" />
              <rect
                x="14.5"
                y="10"
                width="1"
                height="1"
                fill="#FBBC04"
                className="animate-reverse-ping"
                style={{ animationDelay: "0.1s" }}
              />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
};

export default PetDisplay;
