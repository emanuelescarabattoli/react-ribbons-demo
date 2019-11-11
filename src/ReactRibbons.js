import React from "react";

import style from "./ReactRibbons.scss";

export const RibbonContainer = ({ children, className }) => {
  return (
    <div className={`${style.ribbonContainer} ${className || ""}`}>
      {children}
    </div>
  );
};

export const RightCornerRibbon = ({ children, backgroundColor, color, fontFamily }) => {
  return (
    <div className={style.rightCornerRibbon}>
      <svg height="70" width="70">
        <polygon points="0 0, 0 10, 10 10" fill={`${backgroundColor}77`} strokeWidth="0" />
        <polygon points="0 0, 70 70, 70 40, 30 0" fill={backgroundColor} strokeWidth="0" />
        <polygon points="60 60, 60 70, 70 70" fill={`${backgroundColor}77`} strokeWidth="0" />
      </svg>
      <span style={{ color, fontFamily }} className={style.rightCornerRibbonText}>{children}</span>
    </div>
  );
};

export const RightCornerLargeRibbon = ({ children, backgroundColor, color, fontFamily }) => {
  return (
    <div className={style.rightCornerLargeRibbon}>
      <svg height="84" width="84">
        <polygon points="0 0, 0 12, 12 12" fill={`${backgroundColor}77`} strokeWidth="0" />
        <polygon points="0 0, 84 84, 84 48, 36 0" fill={backgroundColor} strokeWidth="0" />
        <polygon points="72 72, 72 84, 84 84" fill={`${backgroundColor}77`} strokeWidth="0" />
      </svg>
      <span style={{ color, fontFamily }} className={style.rightCornerLargeRibbonText}>{children}</span>
    </div>
  );
};

export const LeftCornerRibbon = ({ children, backgroundColor, color, fontFamily }) => {
  return (
    <div className={style.leftCornerRibbon}>
      <svg height="70" width="70">
        <g transform="rotate(-90, 35, 35)">
          <polygon points="0 0, 0 10, 10 10" fill={`${backgroundColor}77`} strokeWidth="0" />
          <polygon points="0 0, 70 70, 70 40, 30 0" fill={backgroundColor} strokeWidth="0" />
          <polygon points="60 60, 60 70, 70 70" fill={`${backgroundColor}77`} strokeWidth="0" />
        </g>
      </svg>
      <span style={{ color, fontFamily }} className={style.leftCornerRibbonText}>{children}</span>
    </div>
  );
};

export const LeftCornerLargeRibbon = ({ children, backgroundColor, color, fontFamily }) => {
  return (
    <div className={style.leftCornerLargeRibbon}>
      <svg height="84" width="84">
        <g transform="rotate(-90, 42, 42)">
          <polygon points="0 0, 0 12, 12 12" fill={`${backgroundColor}77`} strokeWidth="0" />
          <polygon points="0 0, 84 84, 84 48, 36 0" fill={backgroundColor} strokeWidth="0" />
          <polygon points="72 72, 72 84, 84 84" fill={`${backgroundColor}77`} strokeWidth="0" />
        </g>
      </svg>
      <span style={{ color, fontFamily }} className={style.leftCornerLargeRibbonText}>{children}</span>
    </div>
  );
};

export const RightRibbon = ({ children, backgroundColor, color, fontFamily }) => {
  return (
    <div className={style.rightRibbon}>
      <svg height="40" width="70">
        <polygon points="10 10, 0 20, 10 30, 70 30, 70 10" fill={backgroundColor} strokeWidth="0" />
        <polygon points="60 40, 60 30, 70 30" fill={`${backgroundColor}77`} strokeWidth="0" />
      </svg>
      <span style={{ color, fontFamily }} className={style.rightRibbonText}>{children}</span>
    </div>
  );
};


export const RightLargeRibbon = ({ children, backgroundColor, color, fontFamily }) => {
  return (
    <div className={style.rightLargeRibbon}>
      <svg height="60" width="90">
        <polygon points="15 15, 0 30, 15 45, 90 45, 90 15" fill={backgroundColor} strokeWidth="0" />
        <polygon points="75 60, 75 40, 90 45" fill={`${backgroundColor}77`} strokeWidth="0" />
      </svg>
      <span style={{ color, fontFamily }} className={style.rightLargeRibbonText}>{children}</span>
    </div>
  );
};