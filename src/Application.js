import React from "react";

import style from "./Application.scss";
import {
  RibbonContainer,
  RightCornerRibbon,
  RightCornerLargeRibbon,
  LeftCornerRibbon,
  LeftCornerLargeRibbon
} from "./ReactRibbons";

const Application = () => {
  return (
    <div className={style.main}>
      <RibbonContainer className={style.demo}>
        <RightCornerRibbon backgroundColor="#0088ff" color="#f0f0f0" fontFamily="Arial">
          Foo Bar
        </RightCornerRibbon>
      </RibbonContainer>
      <RibbonContainer className={style.demo}>
        <RightCornerLargeRibbon backgroundColor="#cc0000" color="#f0f0f0" fontFamily="Arial">
          Foo Bar
        </RightCornerLargeRibbon>
      </RibbonContainer>
      <RibbonContainer className={style.demo}>
        <LeftCornerRibbon backgroundColor="#444444" color="#f0f0f0" fontFamily="Arial">
          Foo Bar
        </LeftCornerRibbon>
      </RibbonContainer>
      <RibbonContainer className={style.demo}>
        <LeftCornerLargeRibbon backgroundColor="#004400" color="#f0f0f0" fontFamily="Arial">
          Foo Bar
        </LeftCornerLargeRibbon>
      </RibbonContainer>
    </div>
  );
};

export default Application;
