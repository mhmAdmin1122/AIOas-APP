import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/../components/Navbar";
import Footer from "@/../components/Footer";
import ImageOne from "@/../public/img/tm1.jpeg";

export default function OurTeam() {
  return (
    <>
      <Head>
        <title>Our Team || AIOas</title>
      </Head>
      <Navbar />
      <div className="ourTeamCardBox">
        <div className="card">
          <div className="ImageBox">
            <Image src={ImageOne} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link href="/" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
