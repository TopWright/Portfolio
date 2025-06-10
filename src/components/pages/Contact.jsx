import React, { useRef } from "react";
import classes from "./Contact.module.css";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

const Contact = () => {
  const container = useRef();
  const titleRef = useRef(null);
  const title2Ref = useRef(null);
  const buttonsRef = useRef([]);
  const socialsRef = useRef([]);

  useGSAP(() => {
    // Animation for the first title
    const splitTitle = new SplitText(titleRef.current, {
      type: "chars,words",
      charsClass: `${classes.char}`,
    });

    // Animation for the second title
    const splitTitle2 = new SplitText(title2Ref.current, {
      type: "chars,words",
      charsClass: `${classes.char}`,
    });

    // Set initial state (hidden)
    gsap.set([...splitTitle.chars, ...splitTitle2.chars], {
      y: "100%",
      opacity: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 0%, 0% 0%)"
    });

    // Create timeline for title animations
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none",
        scrub: true
      }
    });

    // Animate first title
    titleTl.to(splitTitle.chars, {
      y: "0%",
      opacity: 1,
      stagger: 0.05,
      duration: 0.8,
      ease: 'circ.out',
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    });

    // Animate second title
    titleTl.to(splitTitle2.chars, {
      y: "0%",
      opacity: 1,
      stagger: 0.05,
      duration: 0.8,
      ease: 'circ.out',
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    }, "-=0.4");

    // Button animations
    gsap.from(buttonsRef.current, {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: buttonsRef.current[0],
        start: "top 70%",
        toggleActions: "play none none none",
      }
    });

    // Social links animations
    gsap.from(socialsRef.current, {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: socialsRef.current[0],
        start: "top 90%",
        toggleActions: "play none none none",
      }
    });

    // Cleanup function
    return () => {
      splitTitle.revert();
      splitTitle2.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Add ref to each button
  const addButtonRef = (el) => {
    if (el && !buttonsRef.current.includes(el)) {
      buttonsRef.current.push(el);
    }
  };

  // Add ref to each social link
  const addSocialRef = (el) => {
    if (el && !socialsRef.current.includes(el)) {
      socialsRef.current.push(el);
    }
  };

  return (
    <section className={classes.contact} id="Contact" ref={container}>
      <div className={classes.title} ref={titleRef}>
        let's talk about the <span>next</span> big thing...
      </div>
      <div className={classes.title2} ref={title2Ref}>
        let's<span>connect.</span>
      </div>

      <div className={classes.messageCtrl}>
        <Button
          href='mailto:topwrightdev@gmail.com'
          className={classes.control}
          title="Write a message"
          ref={addButtonRef}
        />
        <Button
          href='https://wa.link/6mwq6p'
          className={classes.control}
          title="Discuss Project"
          ref={addButtonRef}
        />
      </div>

      <div className={classes.socialsCtrl}>
        <a
          href="https://www.linkedin.com/in/topwrightdev"
          className={classes.socials}
          target="_blank"
          rel="noreferrer"
          ref={addSocialRef}
        >
          <div className={classes.text}>
            <h1>Linkedin</h1>
            <p>@topwrightdev</p>
          </div>
          <aside className={classes.icon}>
            <FontAwesomeIcon icon={faLinkedin} />
          </aside>
        </a>
        <a
          href="https://github.com/TopWright"
          className={classes.socials}
          target="_blank"
          rel="noreferrer"
          ref={addSocialRef}
        >
          <div className={classes.text}>
            <h1>GitHub</h1>
            <p>@TopWright</p>
          </div>
          <aside className={classes.icon}>
            <FontAwesomeIcon icon={faGithub} />
          </aside>
        </a>
        <a
          href="https://x.com/TopWright01"
          className={classes.socials}
          target="_blank"
          rel="noreferrer"
          ref={addSocialRef}
        >
          <div className={classes.text}>
            <h1>Twitter</h1>
            <p>@TopWright</p>
          </div>
          <aside className={classes.icon}>
            <FontAwesomeIcon icon={faTwitter} />
          </aside>
        </a>
        <a
          href="https://dev.to/topwrightdev"
          className={classes.socials}
          target="_blank"
          rel="noreferrer"
          ref={addSocialRef}
        >
          <div className={classes.text}>
            <h1>DEV</h1>
            <p>@topwrightdev</p>
          </div>
          <aside className={classes.icon}>
            De
          </aside>
        </a>
      </div>

      <div className={classes.footer}>
        @2023 TopWright. All right reserved
      </div>
    </section>
  );
};

export default Contact;