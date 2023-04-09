import React, { useState } from "react";
import Select from "react-select";

export default function index() {
  // arrays
  let paddingAllList = [
    {
      value: "p-auto",
      label: "p-auto",
    },
    {
      value: "p-1",
      label: "p-1",
    },
    {
      value: "p-2",
      label: "p-2",
    },
    {
      value: "p-3",
      label: "p-3",
    },
    {
      value: "p-4",
      label: "p-4",
    },
    {
      value: "p-5",
      label: "p-5",
    },
  ];
  let paddingTopBottomList = [
    {
      value: "py-auto",
      label: "py-auto",
    },
    {
      value: "py-1",
      label: "py-1",
    },
    {
      value: "py-2",
      label: "py-2",
    },
    {
      value: "py-3",
      label: "py-3",
    },
    {
      value: "py-4",
      label: "py-4",
    },
    {
      value: "py-5",
      label: "py-5",
    },
  ];
  let paddingLeftRightList = [
    {
      value: "px-auto",
      label: "px-auto",
    },
    {
      value: "px-1",
      label: "px-1",
    },
    {
      value: "px-2",
      label: "px-2",
    },
    {
      value: "px-3",
      label: "px-3",
    },
    {
      value: "px-4",
      label: "px-4",
    },
    {
      value: "px-5",
      label: "px-5",
    },
  ];

  // hooks
  const [btnName, setBtnName] = useState("write some text");
  const [paddTop, setPaddTop] = useState(0);
  const [paddRight, setPaddRight] = useState(0);
  const [paddBottom, setPaddBottom] = useState(0);
  const [paddLeft, setPaddLeft] = useState(0);
  const [bstrapAllValue, setBstrapAllValue] = useState(paddingAllList.label);
  const [bstrapTopBottomValue, setBstrapTopBottomValue] = useState(paddingTopBottomList.label);
  const [bstrapLeftRightValue, setBstrapLeftRightValue] = useState(paddingLeftRightList.label);

  const nameOfBtn = (e: any) => {
    setBtnName(e.target.value);
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
  const handleAllPaddChange = (e:any) => {
    setBstrapAllValue(e.label)
    console.log(bstrapAllValue)
  };
  const handletopBottomPaddChange = (e:any) => {
    setBstrapTopBottomValue(e.label)
    console.log(bstrapAllValue)
  };
  const handleLeftRightPaddChange = (e:any) => {
    setBstrapLeftRightValue(e.label)
    console.log(bstrapAllValue)
  };

  return (
    <>
      <div className="container my-4">
        <label htmlFor="Top">Button Name:</label>
        <input
          type="text"
          className="valuePaddingAdd"
          id="Top"
          value={btnName}
          onChange={nameOfBtn}
        />

        <br />
        <br />

        <div className="slecterCssBox">
          <div className="customSlecterContainer">
            <h1 className="customCSSelecter">Custom Selector</h1>

            <label htmlFor="Top">Padding Top:</label>
            <input
              type="number"
              className="valuePaddingAdd"
              id="Top"
              value={paddTop}
              onChange={paddingTop}
            />

            <br />
            <br />

            <label htmlFor="Right">Padding Right:</label>
            <input
              type="number"
              className="valuePaddingAdd"
              id="Right"
              value={paddRight}
              onChange={paddingRight}
            />

            <br />
            <br />

            <label htmlFor="Bottom">Padding Bottom:</label>
            <input
              type="number"
              className="valuePaddingAdd"
              id="Bottom"
              value={paddBottom}
              onChange={paddingBootom}
            />

            <br />
            <br />

            <label htmlFor="Left">Padding Left:</label>
            <input
              type="number"
              className="valuePaddingAdd"
              id="Left"
              value={paddLeft}
              onChange={paddingLeft}
            />

            <br />
            <br />
          </div>

          <div className="BootsrapSelecter">
            <h1 className="bootstrapSelecter">Bootstrap 5 Selector</h1>

            <h5>Chose Padding:</h5>

            <div className="slecterBtsrpBox">
              <label htmlFor="bstrapPadd">Bootstrap 5 All Padding:</label>
              <Select options={paddingAllList} onChange={handleAllPaddChange} />
            </div>

            <div className="slecterBtsrpBox">
              <label htmlFor="bstrapPadd">
                Bootstrap 5 TOP-BOTTOM Padding:
              </label>
              <Select options={paddingTopBottomList} onChange={handletopBottomPaddChange} />
            </div>

            <div className="slecterBtsrpBox">
              <label htmlFor="bstrapPadd">
                Bootstrap 5 left-right Padding:
              </label>
              <Select options={paddingLeftRightList} onChange={handleLeftRightPaddChange} />
            </div>

          </div>
        </div>

        <h1 className="yourHtmlCode">HTML Code:</h1>
        <div className="htmlCodeBox" contentEditable="true">
          <b className="TagIcon">&lt;</b>
          <b className="tagName">button style=&#123;{bstrapAllValue} {bstrapTopBottomValue} {bstrapLeftRightValue}&#125;</b>
          <b className="TagIcon">&gt;</b>

          <b className="TagPlaceHolder">{btnName}</b>

          <b className="TagIcon">&lt;</b>
          <b className="tagName">/button</b>
          <b className="TagIcon">&gt;</b>
        </div>

        <h1 className="yourCSSCode">CSS Code:</h1>
        <div className="cssCodeBox" contentEditable="true">
          <b className="styledTagName">button</b>
          <b className="curlyBracket">&#123;</b>
          <br />
          <b className="styleBoxPropety">padding-top:</b> {paddTop};<br />
          <b className="styleBoxPropety">padding-right:</b> {paddRight};<br />
          <b className="styleBoxPropety">padding-bottom:</b> {paddBottom};<br />
          <b className="styleBoxPropety">padding-left:</b> {paddLeft};
          <br />
          <b className="curlyBracket">&#125;</b>
        </div>

        <h1 className="yourRESULT">RESULT:</h1>
        <div className="buttonBoxModel">
          <button
            style={{
              paddingTop: `${paddTop}px`,
              paddingRight: `${paddRight}px`,
              paddingBottom: `${paddBottom}px`,
              paddingLeft: `${paddLeft}px`,
            }}
            className={`${bstrapAllValue} ${bstrapTopBottomValue} ${bstrapLeftRightValue}`}
          >
            {btnName}
          </button>
        </div>
      </div>
    </>
  );
}
