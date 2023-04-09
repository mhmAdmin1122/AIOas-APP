import { useEffect, useState } from "react";

export default function index() {
  // Hooks
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
      <div className="button_BootS_Builder_MainBox">
        <div className="conatiner BuilderButtonBox">

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
            <button
              className={`${allSidePadding} ${leftRightPadding} ${topBottomPadding} ${paddingTopClassBtStrap} ${paddingTopBottomClassBtStrap} ${paddingRightClassBtStrap} ${paddingLeftClassBtStrap}`}
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
    </>
  );
}
