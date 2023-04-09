import React, { useEffect, useState } from "react";
import Image from "next/image";
import sDownIco from "../../../public/img/sortDown.png";

export default function index() {
  //   custom Css Framework Hooks
  const [isShown, setIsShown] = useState(false);
  const [customeStyleShow, setCustomeStyleShow] = useState(false);
  const [bootstrapStyleShow, setBootstrapStyleShow] = useState(false);
  const [tailwindStyleShow, setTailwindStyleShow] = useState(true);
  const [paddTop, setPaddTop] = useState(0);
  const [paddRight, setPaddRight] = useState(0);
  const [paddBottom, setPaddBottom] = useState(0);
  const [paddLeft, setPaddLeft] = useState(0);
  //   Bootstrap 5 Css Framework Hooks
  const [paddSelecterTop, setPaddSelecterTop] = useState(0);
  const [paddSelecterRight, setPaddSelecterRight] = useState(0);
  const [paddSelecterBottom, setPaddSelecterBottom] = useState(0);
  const [paddSelecterLeft, setPaddSelecterLeft] = useState(0);
  const [paddingTopClassBtStrap, setPaddingTopClassBtStrap] =
    useState("pt-auto");
  const [paddingTopBottomClassBtStrap, setPaddingBottomClassBtStrap] =
    useState("pb-auto");
  const [paddingRightClassBtStrap, setPaddingRightClassBtStrap] =
    useState("pe-auto");
  const [paddingLeftClassBtStrap, setPaddingLeftClassBtStrap] =
    useState("ps-auto");
  const [allSidePadding, setAllSidePadding] = useState("p-auto");
  const [topBottomPadding, setTopBottomPadding] = useState("py-auto");
  const [leftRightPadding, setLeftRightPadding] = useState("px-auto");
  //   Tailwind Css Framework Hook
  const [tWindPaddTop, setTWindPaddTop] = useState(0);
  const [tWindPaddRight, setTWindPaddRight] = useState(0);
  const [tWindPaddBottom, setTWindPaddBottom] = useState(0);
  const [tWindPaddLeft, setTWindPaddLeft] = useState(0);

  const tailwindTopPadd = (e: any) => {
    setTWindPaddTop(e.target.value);
  };
  const tailwindRightPadd = (e: any) => {
    setTWindPaddRight(e.target.value);
  };
  const tailwindBottomPadd = (e: any) => {
    setTWindPaddBottom(e.target.value);
  };
  const tailwindLeftPadd = (e: any) => {
    setTWindPaddLeft(e.target.value);
  };
  // handle Onchange Function
  const paddTopValueChange = (e: any) => {
    setPaddSelecterTop(e.target.value);
    console.log(e.target.max);
  };
  const paddRightValueChange = (e: any) => {
    setPaddSelecterRight(e.target.value);
  };
  const paddBottomValueChange = (e: any) => {
    setPaddSelecterBottom(e.target.value);
  };
  const paddLeftValueChange = (e: any) => {
    setPaddSelecterLeft(e.target.value);
  };

  //   custom Css Framework Functon
  const FrameWorkList = () => {
    setIsShown((current) => !current);
  };
  const customeCssConatiner = () => {
    setCustomeStyleShow((current) => !current);
    setBootstrapStyleShow(false);
    setTailwindStyleShow(false);
  };
  const bootstrapCssConatiner = () => {
    setBootstrapStyleShow((current) => !current);
    setTailwindStyleShow(false);
    setCustomeStyleShow(false);
  };
  const tailwindCssConatiner = () => {
    setTailwindStyleShow((current) => !current);
    setBootstrapStyleShow(false);
    setCustomeStyleShow(false);
  };
  const paddingTop = (e: any) => {
    setPaddTop(e.target.value);
  };
  const paddingRight = (e: any) => {
    setPaddRight(e.target.value);
  };
  const paddingBootom = (e: any) => {
    setPaddBottom(e.target.value);
  };
  const paddingLeft = (e: any) => {
    setPaddLeft(e.target.value);
  };
  //   Bootrap 5 useEffect Hooks
  //   bootstrap padding top
  useEffect(() => {
    if (paddSelecterTop == 5) {
      setPaddingTopClassBtStrap("pt-5");
    } else if (paddSelecterTop == 4) {
      setPaddingTopClassBtStrap("pt-4");
    } else if (paddSelecterTop == 3) {
      setPaddingTopClassBtStrap("pt-3");
    } else if (paddSelecterTop == 2) {
      setPaddingTopClassBtStrap("pt-2");
    } else if (paddSelecterTop == 1) {
      setPaddingTopClassBtStrap("pt-1");
    } else {
      setPaddingTopClassBtStrap("pt-auto");
    }

    if (
      paddSelecterTop === paddSelecterRight &&
      paddSelecterTop === paddSelecterBottom &&
      paddSelecterTop === paddSelecterLeft
    ) {
      setAllSidePadding(`p-${paddSelecterTop}`);
    } else if (paddSelecterTop === paddSelecterBottom) {
      setTopBottomPadding(`py-${paddSelecterTop}`);
    } else if (
      paddSelecterTop !== paddSelecterRight &&
      paddSelecterTop !== paddSelecterBottom &&
      paddSelecterTop !== paddSelecterLeft
    ) {
      setAllSidePadding("p-auto");
    } else if (paddSelecterTop !== paddSelecterBottom) {
      setTopBottomPadding("py-auto");
    }
  });
  //   bootstrap padding bottom
  useEffect(() => {
    if (paddSelecterBottom == 5) {
      setPaddingBottomClassBtStrap("pb-5");
    } else if (paddSelecterBottom == 4) {
      setPaddingBottomClassBtStrap("pb-4");
    } else if (paddSelecterBottom == 3) {
      setPaddingBottomClassBtStrap("pb-3");
    } else if (paddSelecterBottom == 2) {
      setPaddingBottomClassBtStrap("pb-2");
    } else if (paddSelecterBottom == 1) {
      setPaddingBottomClassBtStrap("pb-1");
    } else {
      setPaddingBottomClassBtStrap("pb-auto");
    }
  });
  //   bootstrap padding right
  useEffect(() => {
    if (paddSelecterRight == 5) {
      setPaddingRightClassBtStrap("pe-5");
    } else if (paddSelecterRight == 4) {
      setPaddingRightClassBtStrap("pe-4");
    } else if (paddSelecterRight == 3) {
      setPaddingRightClassBtStrap("pe-3");
    } else if (paddSelecterRight == 2) {
      setPaddingRightClassBtStrap("pe-2");
    } else if (paddSelecterRight == 1) {
      setPaddingRightClassBtStrap("pe-1");
    } else {
      setPaddingRightClassBtStrap("pe-auto");
    }

    if (paddSelecterRight === paddSelecterLeft) {
      setLeftRightPadding(`px-${paddSelecterRight}`);
    } else if (paddSelecterRight !== paddSelecterLeft) {
      setLeftRightPadding("px-auto");
    }
  });
  //   bootstrap padding left
  useEffect(() => {
    if (paddSelecterLeft == 5) {
      setPaddingLeftClassBtStrap("ps-5");
    } else if (paddSelecterLeft == 4) {
      setPaddingLeftClassBtStrap("ps-4");
    } else if (paddSelecterLeft == 3) {
      setPaddingLeftClassBtStrap("ps-3");
    } else if (paddSelecterLeft == 2) {
      setPaddingLeftClassBtStrap("ps-2");
    } else if (paddSelecterLeft == 1) {
      setPaddingLeftClassBtStrap("ps-1");
    } else {
      setPaddingLeftClassBtStrap("ps-auto");
    }
  });
  return (
    <>
      <div className="selecterBuilderTypeBox">
        <div className="builderTypeConatiner">
          <h1>Choose a Style type:</h1>
          <div className="slecterList">
            <h2 className="slecterTitle" onClick={FrameWorkList}>
              <b>Style Framework</b>
              <Image src={sDownIco} alt="drpShowIcon" />
            </h2>
            {isShown && (
              <div className="frameworkList">
                <b onClick={customeCssConatiner}>Custome CSS</b>
                <b onClick={bootstrapCssConatiner}>Bootstrap 5</b>
                <b onClick={tailwindCssConatiner}>Tailwind CSS</b>
              </div>
            )}
          </div>
        </div>

        <div className="DesignerBox">
          {customeStyleShow && (
            <div className="customeCssBox">
              <h2>Custom CSS:</h2>
              <div className="customDesignBox">
                <div className="BTNBuilderBoxModule">
                  <div className="moduleBox">
                    <div className="marginModuleBox">
                      <p className="boxName">Margin</p>
                      <input
                        value="0"
                        type="number"
                        name="mtopValue"
                        className="mtopValue marginValues"
                      />
                      <input
                        value="0"
                        type="number"
                        name="mrightValue"
                        className="mrightValue marginValues"
                      />
                      <input
                        value="0"
                        type="number"
                        name="mbottomValue"
                        className="mbottomValue marginValues"
                      />
                      <input
                        value="0"
                        type="number"
                        name="mleftValue"
                        className="mleftValue marginValues"
                      />
                      <div className="borderModuleBox">
                        <p className="boxName">Border</p>
                        <input
                          value="0"
                          type="number"
                          name="btopValue"
                          className="btopValue bdrValues"
                        />
                        <input
                          value="0"
                          type="number"
                          name="brightValue"
                          className="brightValue bdrValues"
                        />
                        <input
                          value="0"
                          type="number"
                          name="bbottomValue"
                          className="bbottomValue bdrValues"
                        />
                        <input
                          value="0"
                          type="number"
                          name="bleftValue"
                          className="bleftValue bdrValues"
                        />
                        <div className="paddingModuleBox">
                          <p className="boxName">Padding</p>
                          <input
                            onChange={paddingTop}
                            value={paddTop}
                            type="number"
                            name="ptopValue"
                            className="ptopValue paddValues"
                            max={10}
                            min={0}
                          />
                          <input
                            onChange={paddingRight}
                            value={paddRight}
                            type="number"
                            name="prightValue"
                            className="prightValue paddValues"
                            max={10}
                            min={0}
                          />
                          <input
                            onChange={paddingBootom}
                            value={paddBottom}
                            type="number"
                            name="pbottomValue"
                            className="pbottomValue paddValues"
                            max={10}
                            min={0}
                          />
                          <input
                            onChange={paddingLeft}
                            value={paddLeft}
                            type="number"
                            name="pleftValue"
                            className="pleftValue paddValues"
                            max={10}
                            min={0}
                          />
                          <div className="widthHeightModuleBox">
                            <p className="widthvalue">320 x 320</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="PreviewModeBox">
                  <div className="CSSCodeBox">
                    <h1 className="yourCSSCode">CSS Code:</h1>
                    <div className="cssCodeBox" contentEditable="true">
                      <b className="styledTagName">button</b>
                      <b className="curlyBracket">&#123;</b>
                      <br />
                      <b className="styleBoxPropety">padding-top:</b> {paddTop}
                      rem;
                      <br />
                      <b className="styleBoxPropety">padding-right:</b>{" "}
                      {paddRight}rem;
                      <br />
                      <b className="styleBoxPropety">padding-bottom:</b>{" "}
                      {paddBottom}rem;
                      <br />
                      <b className="styleBoxPropety">padding-left:</b>{" "}
                      {paddLeft}rem;
                      <br />
                      <b className="curlyBracket">&#125;</b>
                    </div>
                  </div>
                  <h1 className="yourCSSCode">Preview:</h1>
                  <button
                    style={{
                      paddingTop: `${paddTop}rem`,
                      paddingBottom: `${paddBottom}rem`,
                      paddingRight: `${paddRight}rem`,
                      paddingLeft: `${paddLeft}rem`,
                    }}
                    className="previewShowBtn"
                  >
                    Click Here
                  </button>
                  <div className="HTMLCodeBox">
                    <h1 className="yourHtmlCode">HTML Code:</h1>
                    <div className="htmlCodeBox" contentEditable="true">
                      <b className="TagIcon">&lt;</b>
                      <b className="tagName">button</b>
                      <b className="TagIcon">&gt;</b>

                      <b className="TagPlaceHolder">Click Here</b>

                      <b className="TagIcon">&lt;</b>
                      <b className="tagName">/button</b>
                      <b className="TagIcon">&gt;</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {bootstrapStyleShow && (
            <div className="BootstrapCssBox">
              <h2>Bootstrap 5 CSS:</h2>
              <div className="BootsrapDesignBox">
                <div className="BTNBuilderBoxModule">
                  <div className="moduleBox">
                    <div className="marginModuleBox">
                      <p className="boxName">Margin</p>
                      <input
                        value="0"
                        type="number"
                        name="mtopValue"
                        className="mtopValue marginValues"
                      />
                      <input
                        value="0"
                        type="number"
                        name="mrightValue"
                        className="mrightValue marginValues"
                      />
                      <input
                        value="0"
                        type="number"
                        name="mbottomValue"
                        className="mbottomValue marginValues"
                      />
                      <input
                        value="0"
                        type="number"
                        name="mleftValue"
                        className="mleftValue marginValues"
                      />
                      <div className="borderModuleBox">
                        <p className="boxName">Border</p>
                        <input
                          value="0"
                          type="number"
                          name="btopValue"
                          className="btopValue bdrValues"
                        />
                        <input
                          value="0"
                          type="number"
                          name="brightValue"
                          className="brightValue bdrValues"
                        />
                        <input
                          value="0"
                          type="number"
                          name="bbottomValue"
                          className="bbottomValue bdrValues"
                        />
                        <input
                          value="0"
                          type="number"
                          name="bleftValue"
                          className="bleftValue bdrValues"
                        />
                        <div className="paddingModuleBox">
                          <p className="boxName">Padding</p>
                          <input
                            onChange={paddTopValueChange}
                            value={paddSelecterTop}
                            type="number"
                            name="ptopValue"
                            className="ptopValue paddValues"
                            max={5}
                            min={0}
                          />
                          <input
                            onChange={paddRightValueChange}
                            value={paddSelecterRight}
                            type="number"
                            name="prightValue"
                            className="prightValue paddValues"
                            max={5}
                            min={0}
                          />
                          <input
                            onChange={paddBottomValueChange}
                            value={paddSelecterBottom}
                            type="number"
                            name="pbottomValue"
                            className="pbottomValue paddValues"
                            max={5}
                            min={0}
                          />
                          <input
                            onChange={paddLeftValueChange}
                            value={paddSelecterLeft}
                            type="number"
                            name="pleftValue"
                            className="pleftValue paddValues"
                            max={5}
                            min={0}
                          />
                          <div className="widthHeightModuleBox">
                            <p className="widthvalue">320 x 320</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="PreviewModeBox">
                  <h1>Preview</h1>
                  <button
                    className={`btn ${allSidePadding} ${leftRightPadding} ${topBottomPadding} ${paddingTopClassBtStrap} ${paddingTopBottomClassBtStrap} ${paddingRightClassBtStrap} ${paddingLeftClassBtStrap}`}
                  >
                    Click Here
                  </button>
                  <div className="HTMLCodeBox">
                    <h1 className="yourHtmlCode">HTML Code:</h1>
                    <div className="htmlCodeBox" contentEditable="true">
                      <b className="TagIcon">&lt;</b>
                      <b className="tagName">
                        button class="
                        {`${allSidePadding} ${topBottomPadding} ${leftRightPadding} ${paddingTopClassBtStrap} ${paddingTopBottomClassBtStrap} ${paddingRightClassBtStrap} ${paddingLeftClassBtStrap}`}
                        "
                      </b>
                      <b className="TagIcon">&gt;</b>

                      <b className="TagPlaceHolder">Click Here</b>

                      <b className="TagIcon">&lt;</b>
                      <b className="tagName">/button</b>
                      <b className="TagIcon">&gt;</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tailwindStyleShow && (
            <div className="tailwindCssBox">
              <h2>Tailwind CSS:</h2>
              <div className="tailwindDesignBox">
                <div className="BTNBuilderBoxModule">
                  <div className="moduleBox">
                    <div className="marginModuleBox">
                      <p className="boxName">Margin</p>
                      <input
                        value="0"
                        type="number"
                        name="mtopValue"
                        className="mtopValue marginValues"
                      />
                      <input
                        value="0"
                        type="number"
                        name="mrightValue"
                        className="mrightValue marginValues"
                      />
                      <input
                        value="0"
                        type="number"
                        name="mbottomValue"
                        className="mbottomValue marginValues"
                      />
                      <input
                        value="0"
                        type="number"
                        name="mleftValue"
                        className="mleftValue marginValues"
                      />
                      <div className="borderModuleBox">
                        <p className="boxName">Border</p>
                        <input
                          value="0"
                          type="number"
                          name="btopValue"
                          className="btopValue bdrValues"
                        />
                        <input
                          value="0"
                          type="number"
                          name="brightValue"
                          className="brightValue bdrValues"
                        />
                        <input
                          value="0"
                          type="number"
                          name="bbottomValue"
                          className="bbottomValue bdrValues"
                        />
                        <input
                          value="0"
                          type="number"
                          name="bleftValue"
                          className="bleftValue bdrValues"
                        />
                        <div className="paddingModuleBox">
                          <p className="boxName">Padding</p>
                          <input
                            onChange={tailwindTopPadd}
                            value={tWindPaddTop}
                            type="number"
                            name="ptopValue"
                            className="ptopValue paddValues"
                            max={5}
                            min={0}
                          />
                          <input
                            onChange={tailwindRightPadd}
                            value={tWindPaddRight}
                            type="number"
                            name="prightValue"
                            className="prightValue paddValues"
                            max={5}
                            min={0}
                          />
                          <input
                            onChange={tailwindBottomPadd}
                            value={tWindPaddBottom}
                            type="number"
                            name="pbottomValue"
                            className="pbottomValue paddValues"
                            max={5}
                            min={0}
                          />
                          <input
                            onChange={tailwindLeftPadd}
                            value={tWindPaddLeft}
                            type="number"
                            name="pleftValue"
                            className="pleftValue paddValues"
                            max={5}
                            min={0}
                          />
                          <div className="widthHeightModuleBox">
                            <p className="widthvalue">320 x 320</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="PreviewModeBox">
                  <h1>Preview</h1>
                  <button
                    className={`btn pt-${tWindPaddTop} ps-${tWindPaddLeft} pe-${tWindPaddRight} pb-${tWindPaddBottom}`}
                  >
                    Click Here
                  </button>
                  <div className="HTMLCodeBox">
                    <h1 className="yourHtmlCode">HTML Code:</h1>
                    <div className="htmlCodeBox" contentEditable="true">
                      <b className="TagIcon">&lt;</b>
                      <b className="tagName">
                        button class="pt-{tWindPaddTop} ps-{tWindPaddLeft} pe-
                        {tWindPaddRight} pb-{tWindPaddBottom}"
                      </b>
                      <b className="TagIcon">&gt;</b>

                      <b className="TagPlaceHolder">Click Here</b>

                      <b className="TagIcon">&lt;</b>
                      <b className="tagName">/button</b>
                      <b className="TagIcon">&gt;</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
