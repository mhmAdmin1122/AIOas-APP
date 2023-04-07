import Navbar from "@/../components/Navbar"
import Link from "next/link"

export default function allTools() {
  return (
    <>
    <Navbar />
        <div className="ALLToolsList">
            <ul className="ToolsList">
                <li className="toolsList"><Link href="/AllTools/FileReaderTools">File convert Into .json With Api Url</Link></li>
                <li className="toolsList"><Link href="/">PDF TO PNG Converter</Link></li>
                <li className="toolsList"><Link href="/">JPG TO PNG Converter</Link></li>
                <li className="toolsList"><Link href="/">Wave Generator</Link></li>
                <li className="toolsList"><Link href="/">Makes Projects Slides</Link></li>
                <li className="toolsList"><Link href="/">Design A Logo</Link></li>
            </ul>
        </div>
    </>
  )
}
