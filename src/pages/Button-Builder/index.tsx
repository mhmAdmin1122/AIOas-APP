import React, { useState } from "react";
import Head from "next/head";

export default function index() {
  // Button Name Selecter Hooks
  const [btnName, setBtnName] = useState("Write Your Button Name");
  // Height & Width Selecter Hooks
  const [btnWidth, setBtnWidth] = useState(100);
  const [btnHeight, setBtnHeight] = useState(100);
  // padding Selecters Hooks
  const [paddTopCountPlus, setPaddTopCountPlus] = useState(0);
  const [paddTopCountMinus, setPaddTopCountMinus] = useState(0);
  const [paddBottomCountPlus, setPaddBottomCountPlus] = useState(0);
  const [paddBottomCountMinus, setPaddBottomCountMinus] = useState(0);
  const [paddRightCountPlus, setPaddRightCountPlus] = useState(0);
  const [paddRightCountMinus, setPaddRightCountMinus] = useState(0);
  const [paddLeftCountPlus, setPaddLeftCountPlus] = useState(0);
  const [paddLeftCountMinus, setPaddLeftCountMinus] = useState(0);
  // Border Selecter Hooks
  const [borderTopCountPlus, setBorderTopCountPlus] = useState(0);
  const [borderTopCountMinus, setBorderTopCountMinus] = useState(0);
  const [borderBottomCountPlus, setBorderBottomCountPlus] = useState(0);
  const [borderBottomCountMinus, setBorderBottomCountMinus] = useState(0);
  const [borderRightCountPlus, setBorderRightCountPlus] = useState(0);
  const [borderRightCountMinus, setBorderRightCountMinus] = useState(0);
  const [borderLeftCountPlus, setBorderLeftCountPlus] = useState(0);
  const [borderLeftCountMinus, setBorderLeftCountMinus] = useState(0);
  // Margin Selecter Hooks
  const [marginTopCountPlus, setMarginTopCountPlus] = useState(0);
  const [marginTopCountMinus, setMarginTopCountMinus] = useState(0);
  const [marginBottomCountPlus, setMarginBottomCountPlus] = useState(0);
  const [marginBottomCountMinus, setMarginBottomCountMinus] = useState(0);
  const [marginRightCountPlus, setMarginRightCountPlus] = useState(0);
  const [marginRightCountMinus, setMarginRightCountMinus] = useState(0);
  const [marginLeftCountPlus, setMarginLeftCountPlus] = useState(0);
  const [marginLeftCountMinus, setMarginLeftCountMinus] = useState(0);

  // Button Name Selecter function
  const btnNameChangeHandel = (e: any) => {
    setBtnName(e.target.value);
  };
  // Height & Width Selecter Function
  const btnWidthChanger = (e: any) => {
    setBtnWidth(e.target.value);
  };
  const btnHeightChanger = (e: any) => {
    setBtnHeight(e.target.value);
  };
  // padding Selecters Function
  const paddTopPlusCounter = () => {
    setPaddTopCountPlus(paddTopCountPlus + 1);
    if (paddTopCountPlus >= 5) {
      setPaddTopCountPlus(0);
      setPaddTopCountMinus(0);
    }
  };
  const paddTopMinusCounter = () => {
    setPaddTopCountPlus(paddTopCountPlus - 1);
    if (paddTopCountMinus <= 0) {
      setPaddTopCountPlus(0);
      setPaddTopCountMinus(0);
    }
  };
  const paddBottomPlusCounter = () => {
    setPaddBottomCountPlus(paddBottomCountPlus + 1);
    if (paddBottomCountPlus >= 5) {
      setPaddBottomCountPlus(0);
      setPaddBottomCountMinus(0);
    }
  };
  const paddBottomMinusCounter = () => {
    setPaddBottomCountPlus(paddBottomCountMinus - 1);
    if (paddBottomCountMinus <= 0) {
      setPaddBottomCountPlus(0);
      setPaddBottomCountMinus(0);
    }
  };
  const paddRightPlusCounter = () => {
    setPaddRightCountPlus(paddRightCountPlus + 1);
    if (paddRightCountPlus >= 5) {
      setPaddRightCountPlus(0);
      setPaddRightCountMinus(0);
    }
  };
  const paddRightMinusCounter = () => {
    setPaddRightCountMinus(paddRightCountMinus - 1);
    if (paddRightCountMinus <= 0) {
      setPaddRightCountPlus(0);
      setPaddRightCountMinus(0);
    }
  };
  const paddLeftPlusCounter = () => {
    setPaddLeftCountPlus(paddLeftCountPlus + 1);
    if (paddLeftCountPlus >= 5) {
      setPaddLeftCountPlus(0);
      setPaddLeftCountMinus(0);
    }
  };
  const paddLeftMinusCounter = () => {
    setPaddLeftCountMinus(paddLeftCountMinus - 1);
    if (paddLeftCountMinus <= 0) {
      setPaddLeftCountPlus(0);
      setPaddLeftCountMinus(0);
    }
  };
  // Border selecters Function
  const borderTopPlusCounter = () => {
    setBorderTopCountPlus(borderTopCountPlus + 1);
    if (borderTopCountPlus >= 5) {
      setBorderTopCountPlus(0);
      setBorderTopCountMinus(0);
    }
  };
  const borderTopMinusCounter = () => {
    setBorderTopCountMinus(borderTopCountMinus - 1);
    if (borderTopCountMinus <= 0) {
      setBorderTopCountPlus(0);
      setBorderTopCountMinus(0);
    }
  };
  const borderBottomPlusCounter = () => {
    setBorderBottomCountPlus(borderBottomCountPlus + 1);
    if (borderBottomCountPlus >= 5) {
      setBorderBottomCountPlus(0);
      setBorderBottomCountMinus(0);
    }
  };
  const borderBottomMinusCounter = () => {
    setBorderBottomCountMinus(borderBottomCountMinus - 1);
    if (borderBottomCountMinus <= 0) {
      setBorderBottomCountPlus(0);
      setBorderBottomCountMinus(0);
    }
  };
  const borderRightPlusCounter = () => {
    setBorderRightCountPlus(borderRightCountPlus + 1);
    if (borderRightCountPlus >= 5) {
      setBorderRightCountPlus(0);
      setBorderRightCountMinus(0);
    }
  };
  const borderRightMinusCounter = () => {
    setBorderRightCountMinus(borderRightCountMinus - 1);
    if (borderRightCountMinus <= 0) {
      setBorderRightCountPlus(0);
      setBorderRightCountMinus(0);
    }
  };
  const borderLeftPlusCounter = () => {
    setBorderLeftCountPlus(borderLeftCountPlus + 1);
    if (borderLeftCountPlus >= 5) {
      setBorderLeftCountPlus(0);
      setBorderLeftCountMinus(0);
    }
  };
  const borderLeftMinusCounter = () => {
    setBorderLeftCountMinus(borderLeftCountMinus - 1);
    if (borderLeftCountMinus <= 0) {
      setBorderLeftCountPlus(0);
      setBorderLeftCountMinus(0);
    }
  };
  // Margin Selecter Function
  const marginTopPlusCounter = () => {
    setMarginTopCountPlus(marginTopCountPlus + 1);
    if (marginTopCountPlus >= 5) {
      setMarginTopCountPlus(0);
      setMarginTopCountMinus(0);
    }
  };
  const marginTopMinusCounter = () => {
    setMarginTopCountMinus(marginTopCountMinus - 1);
    if (marginTopCountMinus <= 0) {
      setMarginTopCountPlus(0);
      setMarginTopCountMinus(0);
    }
  };
  const marginBottomPlusCounter = () => {
    setMarginBottomCountPlus(marginBottomCountPlus + 1);
    if (marginBottomCountPlus >= 5) {
      setMarginBottomCountPlus(0);
      setMarginBottomCountMinus(0);
    }
  };
  const marginBottomMinusCounter = () => {
    setMarginBottomCountMinus(marginBottomCountMinus - 1);
    if (marginBottomCountMinus <= 0) {
      setMarginBottomCountPlus(0);
      setMarginBottomCountMinus(0);
    }
  };
  const marginRightPlusCounter = () => {
    setMarginRightCountPlus(marginRightCountPlus + 1);
    if (marginRightCountPlus >= 5) {
      setMarginRightCountPlus(0);
      setMarginRightCountMinus(0);
    }
  };
  const marginRightMinusCounter = () => {
    setMarginRightCountMinus(marginRightCountMinus - 1);
    if (marginRightCountMinus <= 0) {
      setMarginRightCountPlus(0);
      setMarginRightCountMinus(0);
    }
  };
  const marginLeftPlusCounter = () => {
    setMarginLeftCountPlus(marginLeftCountPlus + 1);
    if (marginLeftCountPlus >= 5) {
      setMarginLeftCountPlus(0);
      setMarginLeftCountMinus(0);
    }
  };
  const marginLeftMinusCounter = () => {
    setMarginLeftCountMinus(marginLeftCountMinus - 1);
    if (marginLeftCountMinus <= 0) {
      setMarginLeftCountPlus(0);
      setMarginLeftCountMinus(0);
    }
  };

  return (
    <>
      <Head>
        <title>Button Builder || AIOas</title>
      </Head>

      <div className="buttonBuilderBox">
        <div className="BtnBoxModal">
          <label htmlFor="btnNameSelectLabel">Button Name:</label>
          <input
            type="text"
            id="btnNameSelectLabel"
            value={btnName}
            onChange={btnNameChangeHandel}
          />

          <div className="marginDeclearBox position-relative">
            <h2>Margin</h2>

            <div className="value_Margin_AddingBox">
              <div className="d-flex cssPropertValueDeclearer topSide">
                <button
                  className="addValueNo_Plus"
                  onClick={marginTopPlusCounter}
                >
                  +
                </button>
                <div className="valueNumberShowBox">{marginTopCountPlus}</div>
                <button
                  className="addValueNo_Minus"
                  onClick={marginTopMinusCounter}
                >
                  -
                </button>
              </div>

              <div className="cssPropertValueDeclearer rightSide">
                <button
                  className="addValueNo_Plus"
                  onClick={marginRightPlusCounter}
                >
                  +
                </button>
                <div className="valueNumberShowBox">{marginRightCountPlus}</div>
                <button
                  className="addValueNo_Minus"
                  onClick={marginRightMinusCounter}
                >
                  -
                </button>
              </div>

              <div className="d-flex cssPropertValueDeclearer bottomSide">
                <button
                  className="addValueNo_Plus"
                  onClick={marginBottomPlusCounter}
                >
                  +
                </button>
                <div className="valueNumberShowBox">
                  {marginBottomCountPlus}
                </div>
                <button
                  className="addValueNo_Minus"
                  onClick={marginBottomMinusCounter}
                >
                  -
                </button>
              </div>

              <div className="cssPropertValueDeclearer leftSide">
                <button
                  className="addValueNo_Plus"
                  onClick={marginLeftPlusCounter}
                >
                  +
                </button>
                <div className="valueNumberShowBox">{marginLeftCountPlus}</div>
                <button
                  className="addValueNo_Minus"
                  onClick={marginLeftMinusCounter}
                >
                  -
                </button>
              </div>
            </div>

            <div className="borderdeclearBox position-relative">
              <h2>Border</h2>

              <div className="value_Border_AddingBox">
                <div className="d-flex cssPropertValueDeclearer brdrtopSide">
                  <button
                    className="addValueNo_Plus"
                    onClick={borderTopPlusCounter}
                  >
                    +
                  </button>
                  <div className="valueNumberShowBox">{borderTopCountPlus}</div>
                  <button
                    className="addValueNo_Minus"
                    onClick={borderTopMinusCounter}
                  >
                    -
                  </button>
                </div>

                <div className="cssPropertValueDeclearer brdrrightSide">
                  <button
                    className="addValueNo_Plus"
                    onClick={borderRightPlusCounter}
                  >
                    +
                  </button>
                  <div className="valueNumberShowBox">
                    {borderRightCountPlus}
                  </div>
                  <button
                    className="addValueNo_Minus"
                    onClick={borderRightMinusCounter}
                  >
                    -
                  </button>
                </div>

                <div className="d-flex cssPropertValueDeclearer brdrbottomSide">
                  <button
                    className="addValueNo_Plus"
                    onClick={borderBottomPlusCounter}
                  >
                    +
                  </button>
                  <div className="valueNumberShowBox">
                    {borderBottomCountPlus}
                  </div>
                  <button
                    className="addValueNo_Minus"
                    onClick={borderBottomMinusCounter}
                  >
                    -
                  </button>
                </div>

                <div className="cssPropertValueDeclearer brdrleftSide">
                  <button
                    className="addValueNo_Plus"
                    onClick={borderLeftPlusCounter}
                  >
                    +
                  </button>
                  <div className="valueNumberShowBox">
                    {borderLeftCountPlus}
                  </div>
                  <button
                    className="addValueNo_Minus"
                    onClick={borderLeftMinusCounter}
                  >
                    -
                  </button>
                </div>
              </div>

              <div className="paddingDeclearBox  position-relative">
                <h2>Padding</h2>

                <div className="value_Border_AddingBox">
                  <div className="d-flex cssPropertValueDeclearer paddtopSide">
                    <button
                      className="addValueNo_Plus"
                      onClick={paddTopPlusCounter}
                    >
                      +
                    </button>
                    <div className="valueNumberShowBox">{paddTopCountPlus}</div>
                    <button
                      className="addValueNo_Minus"
                      onClick={paddTopMinusCounter}
                    >
                      -
                    </button>
                  </div>

                  <div className="cssPropertValueDeclearer paddrightSide">
                    <button
                      className="addValueNo_Plus"
                      onClick={paddRightPlusCounter}
                    >
                      +
                    </button>
                    <div className="valueNumberShowBox">
                      {paddRightCountPlus}
                    </div>
                    <button
                      className="addValueNo_Minus"
                      onClick={paddRightMinusCounter}
                    >
                      -
                    </button>
                  </div>

                  <div className="d-flex cssPropertValueDeclearer paddbottomSide">
                    <button
                      className="addValueNo_Plus"
                      onClick={paddBottomPlusCounter}
                    >
                      +
                    </button>
                    <div className="valueNumberShowBox">
                      {paddBottomCountPlus}
                    </div>
                    <button
                      className="addValueNo_Minus"
                      onClick={paddBottomMinusCounter}
                    >
                      -
                    </button>
                  </div>

                  <div className="cssPropertValueDeclearer paddleftSide">
                    <button
                      className="addValueNo_Plus"
                      onClick={paddLeftPlusCounter}
                    >
                      +
                    </button>
                    <div className="valueNumberShowBox">
                      {paddLeftCountPlus}
                    </div>
                    <button
                      className="addValueNo_Minus"
                      onClick={paddLeftMinusCounter}
                    >
                      -
                    </button>
                  </div>
                </div>

                <div className="widthHeightDeclearBox">
                  <div className="btnWidthHeightDecider">
                    W:
                    <input
                      type="number"
                      className="btnWidthDecider btnDescider"
                      value={btnWidth}
                      onChange={btnWidthChanger}
                    />
                    <b>x</b>
                    H:
                    <input
                      type="number"
                      className="btnHeightDecider btnDescider"
                      value={btnHeight}
                      onChange={btnHeightChanger}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="PreviewOfCodeBox">

          <div className="HTMLCodeBox">
            <h1 className="yourHtmlCode">HTML Code:</h1>
            <div className="htmlCodeBox" contentEditable="true">
              <b className="TagIcon">&lt;</b>
              <b className="tagName">button</b>
              <b className="TagIcon">&gt;</b>

              <b className="TagPlaceHolder">{btnName}</b>

              <b className="TagIcon">&lt;</b>
              <b className="tagName">/button</b>
              <b className="TagIcon">&gt;</b>
            </div>
          </div>

          <h1>Preview:</h1>
          <div className="reusltBox_Btn">
            <button
              style={{
                width: `${btnWidth}px`,
                height: `${btnHeight}px`,
                paddingTop: `${paddTopCountPlus}rem`,
                paddingBottom: `${paddBottomCountPlus}rem`,
                paddingRight: `${paddRightCountPlus}rem`,
                paddingLeft: `${paddLeftCountPlus}rem`,
                borderTop: `${borderTopCountPlus / 3}rem solid #000`,
                borderRight: `${borderRightCountPlus / 3}rem solid #000`,
                borderBottom: `${borderBottomCountPlus / 3}rem solid #000`,
                borderLeft: `${borderLeftCountPlus / 3}rem solid #000`,
                marginTop: `${marginTopCountPlus}rem`,
                marginRight: `${marginRightCountPlus}rem`,
                marginBottom: `${marginBottomCountPlus}rem`,
                marginLeft: `${marginLeftCountPlus}rem`,
              }}
            >
              {btnName}
            </button>
          </div>

          <div className="CSSCodeBox">
            <h1 className="yourCSSCode">CSS Code:</h1>
            <div className="cssCodeBox" contentEditable="true">
              <b className="styledTagName">button</b>
              <b className="curlyBracket">&#123;</b>
              <br />
              <b className="styleBoxPropety">width:</b> {btnWidth}px;<br />
              <b className="styleBoxPropety">height:</b> {btnHeight}px;<br />
              <b className="styleBoxPropety">padding-top:</b> {paddTopCountPlus}rem;<br />
              <b className="styleBoxPropety">padding-right:</b> {paddRightCountPlus}rem;<br />
              <b className="styleBoxPropety">padding-bottom:</b> {paddBottomCountPlus}rem;<br />
              <b className="styleBoxPropety">padding-left:</b> {paddLeftCountPlus}rem;<br />
              <b className="styleBoxPropety">margin-top:</b> {marginTopCountPlus}rem;<br />
              <b className="styleBoxPropety">margin-right:</b> {marginRightCountPlus}rem;<br />
              <b className="styleBoxPropety">margin-bottom:</b> {marginBottomCountPlus}rem;<br />
              <b className="styleBoxPropety">margin-left:</b> {marginLeftCountPlus}rem;<br />
              <b className="styleBoxPropety">border-top:</b> "{borderTopCountPlus/3}rem solid #000";<br />
              <b className="styleBoxPropety">border-right:</b> "{borderRightCountPlus/3}rem solid #000";<br />
              <b className="styleBoxPropety">border-bottom:</b> "{borderBottomCountPlus/3}rem solid #000;";<br />
              <b className="styleBoxPropety">border-left:</b> "{borderLeftCountPlus/3}rem solid #000";
              <br />
              <b className="curlyBracket">&#125;</b>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
