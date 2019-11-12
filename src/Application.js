import React from "react";

import style from "./Application.scss";
import {
  RibbonContainer,
  RightCornerRibbon,
  RightCornerLargeRibbon,
  LeftCornerRibbon,
  LeftCornerLargeRibbon,
  RightRibbon,
  RightLargeRibbon,
  LeftRibbon,
  LeftLargeRibbon
} from "./ReactRibbons";

const SampleText = () => (
  <span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </span>
)

const Application = () => {
  return (
    <div className={style.main}>
      <RibbonContainer className={style.demo}>
        <RightCornerRibbon backgroundColor="#0088ff" color="#f0f0f0" fontFamily="Arial">
          Foo Bar
        </RightCornerRibbon>
        <SampleText />
      </RibbonContainer>
      <RibbonContainer className={style.demo}>
        <RightCornerLargeRibbon backgroundColor="#cc0000" color="#f0f0f0" fontFamily="Arial">
          Foo Bar
        </RightCornerLargeRibbon>
        <SampleText />
      </RibbonContainer>
      <RibbonContainer className={style.demo}>
        <LeftCornerRibbon backgroundColor="#444444" color="#f0f0f0" fontFamily="Arial">
          Foo Bar
        </LeftCornerRibbon>
        <SampleText />
      </RibbonContainer>
      <RibbonContainer className={style.demo}>
        <LeftCornerLargeRibbon backgroundColor="#004400" color="#f0f0f0" fontFamily="Arial">
          Foo Bar
        </LeftCornerLargeRibbon>
        <SampleText />
      </RibbonContainer>
      <RibbonContainer className={style.demo}>
        <RightRibbon backgroundColor="#cc4400" color="#f0f0f0" fontFamily="Arial">
          Foo Bar
        </RightRibbon>
        <SampleText />
      </RibbonContainer>
      <RibbonContainer className={style.demo}>
        <RightLargeRibbon backgroundColor="#014599" color="#f0f0f0" fontFamily="Arial">
          Foo Bar
        </RightLargeRibbon>
        <SampleText />
      </RibbonContainer>
      <RibbonContainer className={style.demo}>
        <LeftRibbon backgroundColor="#448812" color="#f0f0f0" fontFamily="Arial">
          Foo Bar
        </LeftRibbon>
        <SampleText />
      </RibbonContainer>
      <RibbonContainer className={style.demo}>
        <LeftLargeRibbon backgroundColor="#051015" color="#f0f0f0" fontFamily="Arial">
          Foo Bar
        </LeftLargeRibbon>
        <SampleText />
      </RibbonContainer>
    </div>
  );
};

export default Application;
