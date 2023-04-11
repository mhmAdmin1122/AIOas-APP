import React, { useState } from "react";
import "regenerator-runtime/runtime";
import Image from "next/image";
import clipCpy from '@/../public/img/copyClipWhite.png'
import spekPic from '@/../public/img/speak.png'
import mcroPic from '@/../public/img/playMicro.png'
import pMacroP from '@/../public/img/pauseMicro.png'
import reload from '@/../public/img/reload.png'

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
export default function SpeachToWrite() {
  const { transcript } = useSpeechRecognition();

  const start = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };
  const stop = () => SpeechRecognition.stopListening();
  const speak=()=>{
    let utterance = new SpeechSynthesisUtterance(transcript);
  let voicesArray = speechSynthesis.getVoices();
  utterance.voice = voicesArray[2];
  speechSynthesis.speak(utterance);
}
const pageReload =()=>{
  window.location.reload();
}
  return (
    <>
      <div className="toolBar container">
        <div className="toolNameArea">
          <h1 className="toolNameSpeechToText">Speech To Write Your Words</h1>
        </div>
        <div className="SpeechToWriteToolContainer">
          <div className="toolFunctionalArea">
            <div className="main-contentBox" contentEditable="true">
              <p> {transcript}</p>
            </div>

            <div className="speechToolControlePanel d-flex align-middle">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(transcript);
                }}
                className="btn btn-primary mx-3 my-3 d-flex align-middle"
              >
                <Image src={clipCpy} alt="cpyClip" />
                <b>Copy to clipboard</b>
              </button>
              <button className="btn btn-primary mx-3 my-3 d-flex align-middle" onClick={start}>
                <Image src={mcroPic} alt="cpyClip" />
                <b>Start Listening</b>
              </button>
              <button className="btn btn-primary mx-3 my-3 d-flex align-middle" onClick={stop}>
                <Image src={pMacroP} alt="cpyClip" />
                <b>Stop Listening</b>
              </button>
              <button className="btn btn-primary mx-3 my-3 d-flex align-middle" onClick={speak}>
                <Image src={spekPic} alt="cpyClip" />
                <b>Speak</b>
              </button>
              <button className="btn btn-primary mx-3 my-3 d-flex align-middle" onClick={pageReload}>
                <Image src={reload} alt="cpyClip" />
                <b>Reload</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
