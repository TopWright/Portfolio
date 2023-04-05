import React from "react";

import classes from "./Contact.module.css";
import Button from "../UI/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <section className={classes.contact} id="Contact">
      <div className={classes.title}>
        let's talk about the <span>next</span> big thing.
      </div>
      <div className={classes.title2}>
        let's<span>connect.</span>
      </div>
      {/* <div className="arrow"></div> */}
      <div className={classes.messageCtrl}>
        <Button className={classes.control} title="Write a message" />
        <Button className={classes.control} title="Discuss Project" />
      </div>

      <div className={classes.socialsCtrl}>
        <a href="#twitter" className={classes.socials}>
          <div className={classes.text}>
            <h1>Twitter</h1>
            <p>@Top_WrightDev</p>
          </div>

          <aside className={classes.icon}>
            <FontAwesomeIcon icon={faTwitter} />
          </aside>
        </a>
        <a href="#linkedin" className={classes.socials}>
          <div className={classes.text}>
            <h1>Linkedin</h1>
            <p>@Top_Wright</p>
          </div>

          <aside className={classes.icon}>
            <FontAwesomeIcon icon={faLinkedin} />
          </aside>
        </a>
        <a href="#Github" className={classes.socials}>
          <div className={classes.text}>
            <h1>GitHub</h1>
            <p>@Top_Wright</p>
          </div>

          <aside className={classes.icon}>
            <FontAwesomeIcon icon={faGithub} />
          </aside>
        </a>
        <a href="#instagram" className={classes.socials}>
          <div className={classes.text}>
            <h1>Instagram</h1>
            <p>@Top_Wright</p>
          </div>

          <aside className={classes.icon}>
            <FontAwesomeIcon icon={faInstagram} />
          </aside>
        </a>
      </div>

      <div className={classes.footer}>@2023 TopWright. All right reserved</div>
    </section>
  );
};

export default Contact;
