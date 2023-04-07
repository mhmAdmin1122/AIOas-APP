import Navbar from "@/../components/Navbar";
import Footer from "@/../components/Footer";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function index({ news }: any) {
  return (
    <>
      <Head>
        <title>News Feed || AIOas </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alkatra:wght@400;500;600;700&family=Bebas+Neue&family=Fruktur:ital@0;1&family=Lily+Script+One&family=Lobster&family=Pacifico&family=Roboto+Condensed&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <h1 className="PageNewsTitle">News Feed</h1>
      <div className="NewsContainer">
        {news.articles.slice(0, 12).map((news: any) => {
          return (
            <div className="postData" key={news.title}>

              <div className="NewsCard">

                <div className="NewsCardBox">

                  <div className="aboutMoreNews">
                    <h1 className="NewsTitle">{news.title.slice(0, 35)}</h1>
                    <p className="NewsDescription">
                      {news.description.slice(0, 90)}...
                    </p>
                    <p className="authorOfNews">Author: {news.author}</p>
                  </div>

                  <div className="ReadMoreNewsBtn">
                    <button>Read More &#8594;</button>
                  </div>

                </div>

              </div>

            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=apple&from=2023-04-04&to=2023-04-04&sortBy=popularity&apiKey=060b4b10339f4b739d6f5ebd613519a2"
  );
  const data = await response.json();
  return {
    props: {
      news: data,
    },
  };
}
