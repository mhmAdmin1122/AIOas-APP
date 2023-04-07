import Navbar from "@/../components/Navbar";
import Footer from "@/../components/Footer";
import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <title>Contact Us || AIOas</title>
      </Head>
      <Navbar />
      <form className="contact-Form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>
      <Footer />
    </>
  );
}
