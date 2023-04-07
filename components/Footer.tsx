import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footerContainer">
        <main className="footerBox">
          <div className="footerListArea">

            <ul className="footerTabsList">
              <h1 className="listTabsHeader">Services</h1>
              <li className="foterTabsListItems"> <Link href="/"> Product </Link></li>
              <li className="foterTabsListItems"> <Link href="/"> Education </Link></li>
              <li className="foterTabsListItems"> <Link href="/"> Health and Fitness </Link></li>
              <li className="foterTabsListItems"> <Link href="/"> Skills Improvements </Link></li>
            </ul>

            <ul className="footerTabsList">
              <h1 className="listTabsHeader">Courses</h1>
              <li className="foterTabsListItems"> <Link href="/"> Full-stack Developments Course </Link></li>
              <li className="foterTabsListItems"> <Link href="/"> Youtube Mastery & Video Editing </Link></li>
              <li className="foterTabsListItems"> <Link href="/"> AWS Courses & Ethical Hacking </Link></li>
              <li className="foterTabsListItems"> <Link href="/"> AI & Machines Learning </Link></li>
            </ul>

            <ul className="footerTabsList">
              <h1 className="listTabsHeader">Blog</h1>
              <li className="foterTabsListItems"> <Link href="/"> What is Development OR Programming? </Link></li>
              <li className="foterTabsListItems"> <Link href="/"> How to start AI & Machines Learning? </Link></li>
              <li className="foterTabsListItems"> <Link href="/"> How to grow your Online bussiness skills? </Link></li>
              <li className="foterTabsListItems"> <Link href="/"> What is Video Editing Easy way? </Link></li>
            </ul>

            <ul className="footerTabsList">
              <h1 className="listTabsHeader">About</h1>
              <li className="foterTabsListItems"> <Link href="/"> Our team </Link></li>
              <li className="foterTabsListItems"> <Link href="/"> Our Blog </Link></li>
              <li className="foterTabsListItems"> <Link href="/"> About Us </Link></li>
              <li className="foterTabsListItems"> <Link href="/"> Terms & Services </Link></li>
            </ul>

          </div>

          <div className="footerCopyRightLines">
            <div className="cpyRightLineBox">
                <div className="cpRitLine">
                    <h1 className="logoName">AIOas <b>&#174;</b></h1>
                    <p>&#169; All terms and services are registered From AIOas <b>&#174;</b></p>
                </div>
            </div>
          </div>

        </main>
      </footer>
    </>
  );
}
