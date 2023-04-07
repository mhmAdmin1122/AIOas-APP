import Head from "next/head";
import Navbar from "@/../components/Navbar";
import Footer from "@/../components/Footer";
import Comments from '../comments'

export default function dynamicPost({ post }: any) {
  return (
    <>
      <Head>
        <title>AIOas || Blog post {post.id}</title>
      </Head>
      <Navbar />
      <div className="postDetailBoxConatiner">
        <div className="postDetailBox">
          <h1>{post.id}</h1>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </div>
      <Comments />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.map((post: any) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}
