import React from "react";

import classes from "./ProjectItem.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.content}>
        <h1 className="title">
          {" "}
          <span>I</span>
          {props.title}
        </h1>
        <p className="description">{props.description}</p>
      </div>

      <div className={classes.controls}>
        <a href={props.link}>
          {" "}
          <FontAwesomeIcon icon={faLink} /> Demo
        </a>
        <a href={props.code}>
          <FontAwesomeIcon icon={faGithub} /> Source code
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
