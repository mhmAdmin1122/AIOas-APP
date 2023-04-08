import Image from "next/image";
import copyClipPic from "@/../public/img/copyClipWhite.png";
import eraseClearPic from "@/../public/img/erase.png";
import Navbar from "@/../components/Navbar";
import Footer from "@/../components/Footer";
import { useEffect, useState } from "react";

export default function TypingTool() {

  // hooks declearation
  const [text, setText] = useState("");
  const [textChange, setTextChange] = useState("Copy Text");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  // variables
  const UpperCase = text.toUpperCase();
  const lowerCase = text.toLowerCase();
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  // function handler

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };
  const reset = () => {
    setTime(0);
  };
  const handleOnChange = (e: any) => {
    setText(e.target.value);
    startAndStop()
  };
  const UpperCaseClick = () => {
    setText(UpperCase);
  };
  const lowerCaseClick = () => {
    setText(lowerCase);
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setTextChange("Copy Text");
    }, 1000);
    setTextChange("Copied");
  };
  const ClearForm = () => {
    setText("");
    reset();
    startAndStop()
  };

  //   useEffect Hook

  useEffect(() => {
    // WORD WRAPPING
    const words = text.split(" ");
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== "") {
        wordCount++;
      }
    });
    setWordCount(wordCount);
    setCharCount(text.length);
  }, [text]);

  useEffect(() => {
    let intervalId:any;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // layout
  return (
    <>
      <Navbar />

      <div className="container my-4">
        <div className="btnConatiner">
          <div className="btnBox d-flex justify-content-evenly position-relative">
            <button
              className="btn btn-primary my-3 mx-2"
              onClick={UpperCaseClick}
            >
              Upper Case
            </button>

            <button
              className="btn btn-primary my-3 mx-2"
              onClick={lowerCaseClick}
            >
              Lower Case
            </button>

            <button
              className="btn btn-success my-3 mx-2 border border-light rounded-pill"
              onClick={copyText}
            >
              <Image src={copyClipPic} alt="copyClipPic" />
              {textChange}
            </button>

            <button
              className="btn btn-light my-3 mx-2  border border-primary rounded-pill"
              onClick={ClearForm}
            >
              <Image src={eraseClearPic} alt="copyClipPic" />
              Clear Form
            </button>

            <div className="timerContainer position-absolute">
              <div className="container">
                <p className="timer">
                  {minutes < 10 ? "0" + minutes : minutes}:
                  {seconds < 10 ? "0" + seconds : seconds}:
                  {milliseconds < 10 ? "0" + milliseconds : milliseconds}
                </p>
              </div>
            </div>
          </div>
        </div>

        <textarea
          className="typing-Area"
          placeholder="Start your typing..."
          id="floatingTextarea2"
          value={text}
          onChange={handleOnChange}
        ></textarea>

        <div className="textSummaryBox">
          <h1>text Summary</h1>
          <p>
            {wordCount} words and {charCount} Characters
          </p>
          <p>{0.008 * wordCount} Minutes Read</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
