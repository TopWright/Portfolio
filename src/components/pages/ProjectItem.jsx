/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import classes from "./ProjectItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ProjectItem = (props) => {
  const container = useRef();

  useGSAP(() => {
    // Set initial states
    gsap.set(container.current, {
      opacity: 0,
      x: 60,
      delay: 1
    });

    // Animation timeline for the project item
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "top 60%",
        toggleActions: "play none none reverse",
        scrub: true
      }
    });

    // Animate the entire item container
    tl.to(container.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'circ.out',
      stagger: 0.08,
    });

    // // Cleanup function
    // return () => {
    //   container.revert();
    //   ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    // };

  }, { scope: container });

  return (
    <div className={classes.item} ref={container}>
      <div className={classes.content}>
        <h1 className="title">
          {props.title}
        </h1>
        <p className="description">{props.description}</p>
      </div>

      <div className={classes.controls}>
        <a href={props.link} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLink} /> Demo
        </a>
        {props.code ? (
          <a href={props.code} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} /> Source code
          </a>
        ) : (
          <a className={classes.noLink}>&nbsp;</a>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;