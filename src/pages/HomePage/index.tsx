import Navbar from "@/../components/Navbar";
import Footer from "@/../components/Footer";
import Image from "next/image";
import strtPic from "@/../public/img/learning.png";
import Head from "next/head";

export default function homePage() {
  return (
    <>
      <Head>
        <title>Home || AIOas</title>
      </Head>
      <Navbar />
      <div className="startWith">
        <div className="letsStartBox">
          <div className="aboutstart">
            <h2 className="startWithHeadings">Let's Start with AIOas</h2>
            <p className="descriptionStart">
              AIOas is an online platform where your find daily life requirments
              solutions and everything that you considerd from your life from
              Online Searching are present there. So Please keep calm and lets
              begins to start with us.
            </p>
            <button className="letsStartBtn">Let's Start</button>
          </div>
          <div className="StartContentImageBox">
            <Image src={strtPic} alt="startPic" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
