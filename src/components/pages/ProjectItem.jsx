/* eslint-disable jsx-a11y/anchor-is-valid */
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
