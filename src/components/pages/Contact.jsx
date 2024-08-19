import React from "react";

import classes from "./Contact.module.css";
import Button from "../UI/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <section className={classes.contact} id="Contact">
      <div className={classes.title}>
        let's talk about the <span>next</span> big thing...
      </div>
      <div className={classes.title2}>
        let's<span>connect.</span>
      </div>
      {/* <div className="arrow"></div> */}
      <div className={classes.messageCtrl}>
        <Button href='mailto:topwrightdev@gmail.com' className={classes.control} title="Write a message" />
        <Button href='https://wa.link/6mwq6p' className={classes.control} title="Discuss Project" />
      </div>

      <div className={classes.socialsCtrl}>
        <a href="https://www.linkedin.com/in/topwrightdev" className={classes.socials} target="_blank" rel="noreferrer"
        >
          <div className={classes.text}>
            <h1>Linkedin</h1>
            <p>@topwrightdev</p>
          </div>

          <aside className={classes.icon}>
            <FontAwesomeIcon icon={faLinkedin} />
          </aside>
        </a>
        <a href="https://github.com/TopWright" className={classes.socials} target="_blank" rel="noreferrer">
          <div className={classes.text}>
            <h1>GitHub</h1>
            <p>@TopWright</p>
          </div>

          <aside className={classes.icon}>
            <FontAwesomeIcon icon={faGithub} />
          </aside>
        </a>
        <a href="https://x.com/TopWright01" className={classes.socials} target="_blank" rel="noreferrer">
          <div className={classes.text}>
            <h1>Twitter</h1>
            <p>@TopWright</p>
          </div>

          <aside className={classes.icon}>
            <FontAwesomeIcon icon={faTwitter} />
          </aside>
        </a>
        <a href="https://dev.to/topwrightdev" className={classes.socials} target="_blank" rel="noreferrer">
          <div className={classes.text}>
            <h1>DEV</h1>
            <p>@topwrightdev</p>
          </div>

          <aside className={classes.icon}>
            De
          </aside>
        </a>
      </div>

      <div className={classes.footer}>@2023 TopWright. All right reserved</div>
    </section>
  );
};

export default Contact;
