import Image from "next/image";
import logo from "../public/img/logo.png";
import Link from "next/link";
import searchIco from "../public/img/search.png";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const [isSticky, setIsSticky] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lily+Script+One&family=Lobster&family=Roboto+Condensed&display=swap"
          rel="stylesheet"
        />
      </Head>

      <nav className={`Navbar ${isSticky ? "sticky" : ""}`}>
        <div className="logoConatiner">
          <Link href="/">
            <div className="logoBox">
              <Image src={logo} alt="logoPic" className="logoPic" />
              <label className="logoLabel">As</label>
            </div>
          </Link>
        </div>

        <div className="tabsBox">
          <ul className="tabs">

            <li className="tabsList">
              <Link href="/" className="tabsLink">
                Home
              </Link>
            </li>

            <div className="servicesPagesTabs">
              <li className="tabsList">
                <h1
                  className="tabsLink servicesLink"
                  onClick={handleMouseOut}
                  onMouseOver={handleMouseOver}
                >
                  <p>Services</p> 

                </h1>
              </li>

              {isHovering && (
                <li className="Services_Tabs">
                  <Link href="/">Education</Link>
                  <Link href="/">Excercises</Link>
                  <Link href="/">Reference</Link>
                  <Link href="/">Courses</Link>
                  <Link href="/">Products</Link>
                  <Link href="/AllTools">Tools</Link>
                </li>
              )}
            </div>

            <li className="tabsList">
              <Link href="/News" className="tabsLink">
                News
              </Link>
            </li>

            <li className="tabsList">
              <Link href="/blog" className="tabsLink">
                Blog
              </Link>
            </li>

            <li className="tabsList">
              <Link href="/OurTeam" className="tabsLink">
                Our Team
              </Link>
            </li>

            <li className="tabsList">
              <Link href="/AboutUs" className="tabsLink">
                About Us
              </Link>
            </li>

            <li className="tabsList">
              <Link href="/ContactForm" className="tabsLink">
                Contact Us
              </Link>
            </li>

            <li className="tabsList">
              <Link href="/TermsAndServices" className="tabsLink">
                Terms&Services
              </Link>
            </li>
          </ul>
        </div>

        <div className="serchContainer">
          <form className="serchBox">
            <input type="search" name="search" className="search_Input" />
            <button type="submit" className="search_SubmitBtn">
              <Image src={searchIco} alt="searchIco" className="searchIco" />
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

// icon color #882FB0
