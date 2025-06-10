import React, { useRef } from "react";
import ProjectItem from "./ProjectItem";
import classes from "./Projects.module.css";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projectsData } from "../../helper/Constant";

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

const Projects = () => {
  const container = useRef();
  const titleRef = useRef(null);
  const marlRef = useRef(null);
  const countRef = useRef(null);

  useGSAP(() => {
    // Split the title text
    const splitTitle = new SplitText(titleRef.current, {
      type: "chars,words",
      charsClass: `${classes.char}`,
      wordsClass: `${classes.word}`
    });

    // Split the "Works" part
    const splitMarl = new SplitText(marlRef.current, {
      type: "chars",
      charsClass: `${classes.char}`
    });

    // Set initial state (hidden)
    gsap.set([...splitTitle.chars, ...splitMarl.chars], {
      y: "100%",
      opacity: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 0%, 0% 0%)"
    });

    // Create timeline for animations with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 90%",
        end: "top 50%",
        toggleActions: "play none none none",
        scrub: true,
      }
    });

    // Animate "Feat"
    tl.to(splitTitle.chars, {
      y: "0%",
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      stagger: 0.05,
      duration: 0.8,
      ease: 'circ.out',
    });

    // Animate "Works"
    tl.to(splitMarl.chars, {
      y: "0%",
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      stagger: 0.05,
      duration: 0.8,
      ease: 'circ.out',
    }, "-=0.5");

    // Animate the count
    tl.from(countRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8
    }, "-=0.3");

    // Cleanup function
    return () => {
      splitTitle.revert();
      splitMarl.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className={classes.project} id="Projects" ref={container}>
      <div className={classes.title}>
        <h1 ref={titleRef}>
          Feat{" "}
          <span ref={marlRef} className={classes.marl}>
            Wo<span className={classes.color}>r</span>ks
          </span>{" "}
        </h1>
        <span ref={countRef} className={classes.count}>{`(${projectsData.length})`}</span>
      </div>

      {projectsData.map((project, index) => (
        <ProjectItem
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          code={project.code}
        />
      ))}
    </section>
  );
};

export default Projects;