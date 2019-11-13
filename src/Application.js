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
    <>
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
      <section className={style.content}>
        <div className={style.sectionTitle}>
          <h2>Setup Instructions</h2>
          <p>
            Installation and setup of React Ribbons
          </p>
        </div>
        <p>
          To install the package tou can use <b>NPM</b> or <b>Yarn</b> and run the following command
        </p>
        <div className={style.code}>
          // NPM setup<br />
          npm install react-ribbons<br />
          // Yarn setup<br />
          yarn add react-ribbons
        </div>
        <div className={style.sectionTitle}>
          <h2>Examples</h2>
          <p>
            Here you can find examples on haw to use the package
          </p>
        </div>
        <div className={style.columns}>
          <div>
            <div className={style.code}>
              TODO
            </div>
          </div>
          <div>
            <RibbonContainer className={style.demo}>
              <RightCornerRibbon backgroundColor="#0088ff" color="#f0f0f0" fontFamily="Arial">
                Foo Bar
              </RightCornerRibbon>
              <SampleText />
            </RibbonContainer>
          </div>
        </div>
        <div className={style.columns}>
          <div>
            <div className={style.code}>
              TODO
            </div>
          </div>
          <div>
          <RibbonContainer className={style.demo}>
        <RightCornerLargeRibbon backgroundColor="#cc0000" color="#f0f0f0" fontFamily="Arial">
          Foo Bar
        </RightCornerLargeRibbon>
        <SampleText />
      </RibbonContainer>
          </div>
        </div>
        <div className={style.columns}>
          <div>
            <div className={style.code}>
              TODO
            </div>
          </div>
          <div>
          <RibbonContainer className={style.demo}>
        <LeftCornerRibbon backgroundColor="#444444" color="#f0f0f0" fontFamily="Arial">
          Foo Bar
        </LeftCornerRibbon>
        <SampleText />
      </RibbonContainer>
          </div>
        </div>
        <div className={style.columns}>
          <div>
            <div className={style.code}>
              TODO
            </div>
          </div>
          <div>
          <RibbonContainer className={style.demo}>
        <LeftCornerLargeRibbon backgroundColor="#004400" color="#f0f0f0" fontFamily="Arial">
          Foo Bar
        </LeftCornerLargeRibbon>
        <SampleText />
      </RibbonContainer>
          </div>
        </div>
        <div className={style.columns}>
          <div>
            <div className={style.code}>
              TODO
            </div>
          </div>
          <div>
          <RibbonContainer className={style.demo}>
        <RightRibbon backgroundColor="#cc4400" color="#f0f0f0" fontFamily="Arial">
          Foo Bar
        </RightRibbon>
        <SampleText />
      </RibbonContainer>
          </div>
        </div>
        <div className={style.columns}>
          <div>
            <div className={style.code}>
              TODO
            </div>
          </div>
          <div>
          <RibbonContainer className={style.demo}>
        <RightLargeRibbon backgroundColor="#014599" color="#f0f0f0" fontFamily="Arial">
          Foo Bar
        </RightLargeRibbon>
        <SampleText />
      </RibbonContainer>
          </div>
        </div>
        <div className={style.columns}>
          <div>
            <div className={style.code}>
              TODO
            </div>
          </div>
          <div>
          <RibbonContainer className={style.demo}>
        <LeftRibbon backgroundColor="#448812" color="#f0f0f0" fontFamily="Arial">
          Foo Bar
        </LeftRibbon>
        <SampleText />
      </RibbonContainer>
          </div>
        </div>
        <div className={style.columns}>
          <div>
            <div className={style.code}>
              TODO
            </div>
          </div>
          <div>
          <RibbonContainer className={style.demo}>
        <LeftLargeRibbon backgroundColor="#051015" color="#f0f0f0" fontFamily="Arial">
          Foo Bar
        </LeftLargeRibbon>
        <SampleText />
      </RibbonContainer>
          </div>
        </div>
      </section>
    </>
  );
};

export default Application;
