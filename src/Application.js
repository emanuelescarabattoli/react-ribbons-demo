import React from "react";

import logo from "./assets/img/rr_512.png";
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
} from "react-ribbons";

const SampleText = () => (
  <span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </span>
)

const Application = () => {
  return (
    <header className={style.header}>
      <div className={style.headerContent}>
        <div className={style.logo}>
          <img src={logo} alt="React Ribbons" />
        </div>
        <div className={style.title}>
          <h1>React Ribbons</h1>
          <p>
            A React NPM package with a lot of fancy and easy to use ribbons components
          </p>
          <a href="#">GitHub Repo</a>
        </div>
      </div>
    </header>
  );
};

export default Application;
