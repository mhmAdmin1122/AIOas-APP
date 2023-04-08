import Image from "next/image";
import copyClipPic from "@/../public/img/copyClipWhite.png";
import eraseClearPic from "@/../public/img/erase.png";
import Navbar from "@/../components/Navbar";
import Footer from "@/../components/Footer";
import { useEffect, useState } from "react";
import Head from "next/head";

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
  const minutesRead = 0.008 * wordCount;
  // function handler

  const startAndStop = () => {
    if (text === "") {
      setIsRunning(!isRunning);
    } else {
      setIsRunning(isRunning);
    }
  };
  const reset = () => {
    setTime(0);
  };
  const handleOnChange = (e: any) => {
    setText(e.target.value);
    startAndStop();
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
    setIsRunning(!isRunning);
    reset();
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
    let intervalId: any;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // layout
  return (
    <>
      <Head>
        <title>Typing Speed || AIOas</title>
      </Head>
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
                  {minutes < 10 ? "0" + minutes : minutes}m:
                  {seconds < 10 ? "0" + seconds : seconds}s:
                  {milliseconds < 10 ? "0" + milliseconds : milliseconds}ms
                </p>
              </div>
            </div>
            
          </div>
        </div>

        <div className="container typingFormBox">
          <textarea
            className="typing-Area"
            placeholder="Start your typing..."
            id="floatingTextarea2"
            value={text}
            onChange={handleOnChange}
          ></textarea>

          <div className="textSummaryBox">
            <h1>Typing Summary</h1>
            <h2>
              <p>Words </p>
              <b>{wordCount}</b>
            </h2>
            <h2>
              <p>Characters </p>
              <b>{charCount}</b>
            </h2>
            <h2>
              <p>Minutes Read </p>
              <b>
                {minutesRead > 0.55 ? Math.round(minutesRead) : minutesRead}
              </b>
            </h2>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
