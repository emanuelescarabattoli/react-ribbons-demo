import "prismjs";
import "prismjs/themes/prism-tomorrow.css";

import React from "react";
import PrismCode from "react-prism";

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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </span>
);

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
            <a href="https://github.com/emanuelescarabattoli/react-ribbons">GitHub Repo</a>
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
          <PrismCode component="pre" className="language-shell">
            {
              `// NPM setup
npm install react-ribbons
// Yarn setup
yarn add react-ribbons`
            }
          </PrismCode>

        </div>
        <p>
          To import the package use the following snippet of code
        </p>
        <div className={style.code}>
          <PrismCode component="pre" className="language-javascript">
            {
              "import { RibbonContainer,  RightCornerRibbon } from \"react-ribbons\";"
            }
          </PrismCode>

        </div>
        <div className={style.sectionTitle}>
          <h2>Examples</h2>
          <p>
            Here you can find examples on how to use the package
          </p>
        </div>
        <div className={style.columns}>
          <div>
            <div className={style.code}>
              <PrismCode component="pre" className="language-html">
                {
                  `<RibbonContainer className="custom-class">
  <RightCornerRibbon backgroundColor="#0088ff" color="#f0f0f0" fontFamily="Arial">
    Foo Bar
  </RightCornerRibbon>
  Lorem ipsum...
</RibbonContainer>`
                }
              </PrismCode>
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
              <PrismCode component="pre" className="language-html">
                {
                  `<RibbonContainer className="custom-class">
  <RightCornerLargeRibbon backgroundColor="#cc0000" color="#f0f0f0" fontFamily="Arial">
    Foo Bar
  </RightCornerLargeRibbon>
  Lorem ipsum...
</RibbonContainer>`
                }
              </PrismCode>
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
              <PrismCode component="pre" className="language-html">
                {
                  `<RibbonContainer className="custom-class">
  <LeftCornerRibbon backgroundColor="#444444" color="#f0f0f0" fontFamily="Arial">
    Foo Bar
  </LeftCornerRibbon>
  Lorem ipsum...
</RibbonContainer>`
                }
              </PrismCode>
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
              <PrismCode component="pre" className="language-html">
                {
                  `<RibbonContainer className="custom-class">
  <LeftCornerLargeRibbon backgroundColor="#004400" color="#f0f0f0" fontFamily="Arial">
    Foo Bar
  </LeftCornerLargeRibbon>
  Lorem ipsum...
</RibbonContainer>`
                }
              </PrismCode>
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
              <PrismCode component="pre" className="language-html">
                {
                  `<RibbonContainer className="custom-class">
  <RightRibbon backgroundColor="#cc4400" color="#f0f0f0" fontFamily="Arial">
    Foo Bar
  </RightRibbon>
  Lorem ipsum...
</RibbonContainer>`
                }
              </PrismCode>
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
              <PrismCode component="pre" className="language-html">
                {
                  `<RibbonContainer className="custom-class">
  <RightLargeRibbon backgroundColor="#014599" color="#f0f0f0" fontFamily="Arial">
    Foo Bar
  </RightLargeRibbon>
  Lorem ipsum...
</RibbonContainer>`
                }
              </PrismCode>
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
              <PrismCode component="pre" className="language-html">
                {
                  `<RibbonContainer className="custom-class">
  <LeftRibbon backgroundColor="#448812" color="#f0f0f0" fontFamily="Arial">
    Foo Bar
  </LeftRibbon>
  Lorem ipsum...
</RibbonContainer>`
                }
              </PrismCode>
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
              <PrismCode component="pre" className="language-html">
                {
                  `<RibbonContainer className="custom-class">
  <LeftLargeRibbon backgroundColor="#051015" color="#f0f0f0" fontFamily="Arial">
    Foo Bar
  </LeftLargeRibbon>
  Lorem ipsum...
</RibbonContainer>`
                }
              </PrismCode>
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
