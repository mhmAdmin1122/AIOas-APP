import Navbar from "@/../components/Navbar";
import Footer from "@/../components/Footer";
import Head from "next/head";
import Link from "next/link";

export default function index() {
  return (
    <>
      <Head>
        <title>About Us || AIOas</title>
      </Head>
      <Navbar />
      <div className="aboutUsPageBox">
        <h2 className="aUsPageMainTitle">About Us!</h2>

        <h3>
          Welcome To <span id="W_Name1">AIOas</span>
        </h3>

        <p>
          <span id="W_Name2">AIOas</span>
          is a Professional
          <span id="W_Type1"> all Needs </span>
          Platform. Here we will provide you only interesting content, which you
          will like very much. We're dedicated to providing you the best of
          <span id="W_Type2"> all Needs </span>, with a focus on dependability and
          <span id="W_Spec"> Online Asset </span>. We're working to turn our
          passion for
          <span id="W_Type3"> all Needs </span>
          into a booming online website. We hope you enjoy our
          <span id="W_Type4"> all Needs </span>
          as much as we enjoy offering them to you.
        </p>

        <p>
          I will keep posting more important posts on my Website for all of you.
          Please give your support and love.
        </p>

        <p>
          Thanks For Visiting Our Site
          <br />
          <br />
          <span>Have a nice day!</span>
        </p>
      </div>
      <Footer />
    </>
  );
}
