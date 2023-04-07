import { useState } from "react";
import Image from "next/image";
import sendPic from "@/../public/img/send.png";
import hidePic from "@/../public/img/hide.png";
import showPic from "@/../public/img/show.png";
import Head from "next/head";

export default function index() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [hideComments, setHideComments] = useState(true);

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
    setHideComments(true);
  };

  const newComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const hideComment = () => {
    setHideComments(false);
  };
  // useEffect(() => {
  //   fetchComments()
  // });

  interface type {
    id: number;
    text: string;
  }
   

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alkatra:wght@400;500;600;700&family=Bebas+Neue&family=Fruktur:ital@0;1&family=Lily+Script+One&family=Lobster&family=Pacifico&family=Roboto+Condensed&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="commentsBox">
        <div className="CommentsLoadBtnbOX">
          <label className="commentsPageCommentTitle">Comments Us</label>
          <div className="comentWriterBox">
            <input
              type="text"
              className="writeComments"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="commentsBoxBtns"
              onClick={newComment}
              title="Submit Comments"
            >
              <Image src={sendPic} alt="sendComment" />
            </button>
            <button
              className="commentsBoxBtns"
              onClick={fetchComments}
              title="Show Comments"
            >
              <Image src={showPic} alt="showComment" />
            </button>
            <button
              className="commentsBoxBtns"
              onClick={hideComment}
              title="Hide Comments"
            >
              <Image src={hidePic} alt="hideComment" />
            </button>
          </div>
          {hideComments && (
            <div className="commentsShowBox">
              {comments.map((comments:type) => {
                return (
                  <>
                    <h1 key={comments.id}>{comments.id}</h1>
                    <h1>{comments.text}</h1>
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
