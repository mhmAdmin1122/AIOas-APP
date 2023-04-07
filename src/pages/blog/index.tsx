import Navbar from "@/../components/Navbar";
import Head from "next/head";
import Link from "next/link";
import Footer from "@/../components/Footer";

export default function blog({ posts }: any) {
  return (
    <>
      <Head>
        <title>AIOas || Blog</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alkatra:wght@400;500;600;700&family=Bebas+Neue&family=Fruktur:ital@0;1&family=Lily+Script+One&family=Lobster&family=Pacifico&family=Roboto+Condensed&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <h1 className="BlogPageMainTitle">List of Blog post</h1>
      <div className="postContainerBlog">
        {posts.map((post: any) => {
          return (
            <div className="postDataBox" key={post.id}>
              <div className="PostDataContainer">
                <Link href={`/blog/${post.id}`}>
                  <h2 className="BlogPostTitle">{post.title.slice(0, 25)}</h2>
                </Link>
                <p className="BlogDescr">{post.body.slice(0, 60)}...</p>
                <div className="ReadPostMoreBtn">
                  <Link href={`/blog/${post.id}`}>
                    <button>Read More &rarr;</button>
                  </Link>
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
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data.slice(0, 8),
    },
  };
}
