import Navbar from "@/../components/Navbar";
import Footer from "@/../components/Footer";
import { ReactNode, useState } from "react";
import type { SetStateAction } from "react";
import Head from "next/head";

export default function FileReaderTools() {
  const [fileContent, setFileContent] =
    useState<SetStateAction<ArrayBuffer | string | null>>(null);

  const handleFileDataShow = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    console.log(reader);
    reader.onload = () => {
      setFileContent(reader.result);
    };
    reader.onerror = () => {
      console.log("file error", reader.error);
    };
  };

  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown((current) => !current);
  };

  return (
    <>
      <Head>
        <title>API Generator || AIOas</title>
      </Head>
      <Navbar />

      <div className="fileReaderContainer">
        <p className="aboutTool">
          Please select any .json file and create an API of your data!!!
        </p>

        <div className="fileReaderBox">
          <div className="filereaderContainer">
            <div className="inputFileChose">
              <button className="choseFileBtn">Chose file</button>
            </div>

            <input
              type="file"
              name="first"
              accept=".txt"
              className="fileDragDrop"
              onChange={handleFileDataShow}
            />
          </div>

          <div className="showdatabox" contentEditable="true">
            {fileContent as ReactNode}
          </div>
          
        </div>

        <button className="genrate-Api_Btn" onClick={handleClick}>
          &#128279;Generate An Api Url
        </button>

        {isShown && (
          <div className="urlBoxAPI">
            <div className="UrlContainer">
              <p className="urlApi" contentEditable="true" typeof="text">
                https://www.code12point0.tech/
              </p>
            </div>
          </div>
        )}

      </div>

      <Footer />
    </>
  );
}
