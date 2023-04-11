import Navbar from "@/../components/Navbar";
import Link from "next/link";

export default function allTools() {
  return (
    <>
      <Navbar />
      <div className="ALLToolsList">
        <ul className="ToolsList">
          <li className="toolsList">
            <Link href="/AllTools/FileReaderTools">
              File convert Into .json With Api Url
            </Link>
          </li>
          <li className="toolsList">
            <Link href="/">PDF TO PNG Converter</Link>
          </li>
          <li className="toolsList">
            <Link href="/">JPG TO PNG Converter</Link>
          </li>
          <li className="toolsList">
            <Link href="/">Wave Generator</Link>
          </li>
          <li className="toolsList">
            <Link href="/">Makes Projects Slides</Link>
          </li>
          <li className="toolsList">
            <Link href="/">Design A Logo</Link>
          </li>
          <li className="toolsList">
            <Link href="/TypingTools">Typing Tool</Link>
          </li>
          <li className="toolsList">
            <Link href="/Button-Builder">Button Builder</Link>
          </li>
          <li className="toolsList">
            <Link href="/Button-Builder-Bootstrap">Button-Builder Bootstrap</Link>
          </li>
          <li className="toolsList">
            <Link href="/ButtonBuilderMainBody">Button Builder All Type</Link>
          </li>
          <li className="toolsList">
            <Link href="/SpeechToWrite">speech to write tool</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
