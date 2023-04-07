import { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyNavbar() {
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
      <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="container">
          <Link href="/">
            <p className="logo">Logo</p>
          </Link>
          <ul className="menu">
            <li>
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );

  };
  
  