import React from "react";

import classes from "./About.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className={classes.about} id="About">
      <div className={classes.content}>
        I'm <span>Temi Wright</span>, i create functional & visually pleasing user
        interfaces for the web and mobile.
      </div>

      <div className={classes.view}>
        <h2>View my Resume for full details</h2>
        <div>
          <a
            className={classes.button}
            href="https://docs.google.com/document/d/e/2PACX-1vSySWsXYMzDSrTZbT9jSKkS8zR8CdurByGt5H_YdVrRYZIdTUuBQ2-yNBWrPAnIfOo-n-eg2darQF00/pub"
          >
            <FontAwesomeIcon icon={faFilePdf} style={{ color: "#060709", marginRight: '5px' }} />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
