import React, { useState, useEffect, useRef } from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(SplitText, useGSAP);

const Header = () => {
  const tin = "</>";
  const [showArrow, setShowArrow] = useState(false);
  const container = useRef();
  const h1Ref = useRef(null);
  const h1TextRef = useRef(null);
  const h2Ref = useRef(null);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Scroll handler for arrow visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animations
  useGSAP(() => {
    // Split the text elements
    const splitH1 = new SplitText(h1Ref.current, { type: "chars,words" });
    const splitH1Text = new SplitText(h1TextRef.current, { type: "chars,words" });
    const splitH2 = new SplitText(h2Ref.current, { type: "chars,words" });

    // Set initial state (hidden)
    gsap.set([...splitH1.chars, ...splitH1Text.chars, ...splitH2.chars], {
      y: "100%",
      opacity: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 0%, 0% 0%)"
    });

    // Create timeline for animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate the first heading
    tl.to(splitH1.chars, {
      y: "0%",
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      stagger: 0.05,
      duration: 0.8,
      ease: 'circ.out',
    });

    // Animate the second heading
    tl.to(splitH1Text.chars, {
      y: "0%",
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      stagger: 0.05,
      duration: 0.8,
      ease: 'circ.out',
    }, "-=0.5");

    // Animate the subtitle
    tl.to(splitH2.chars, {
      y: "0%",
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      stagger: 0.005,
      duration: 0.5,
      ease: 'circ.out',
    }, "-=0.3");

    // Cleanup function
    return () => {
      splitH1.revert();
      splitH1Text.revert();
      splitH2.revert();
    };
  }, []);

  return (
    <header className={classes.header} ref={container}>
      <div className={classes.top}>
        <div className="logo-box">
          <a href="#Home">TopWrightDev</a>
        </div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={classes.main}>
        <div>
          <h1 ref={h1Ref} className={classes.splitText}>
            Fulls<i>T</i>ack
          </h1>
          <h1 className={classes.text} ref={h1TextRef}>
            <span className={classes.e}>{tin}</span> 
            <span>
              Devel<i>OP</i>er
            </span>
          </h1>
        </div>
        <h2 ref={h2Ref} className={classes.splitText}>
          Specialized in Frontend and Backend development, <br className={classes.break} /> Mobile and
          Web3 Applications.
        </h2>
      </div>

      {showArrow && (
        <div className={classes.control} onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      )}
    </header>
  );
};

export default Header;