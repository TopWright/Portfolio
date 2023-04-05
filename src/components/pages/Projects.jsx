import React from "react";

import ProjectItem from "./ProjectItem";

import classes from "./Projects.module.css";

const Projects = () => {
  const count = 5;

  return (
    <section className={classes.project} id="Projects">
      <div className={classes.title}>
        <h1>
          Feat{" "}
          <span className={classes.marl}>
            Wo<span className={classes.color}>r</span>ks
          </span>{" "}
        </h1>
        <span className={classes.count}>{`(${count})`}</span>
      </div>

      <ProjectItem title="Note App" />
      <ProjectItem title="Dictionary App" />
      <ProjectItem title="Music App" />
      <ProjectItem title="Recipie App" />
      <ProjectItem title="MetaMask App" />
    </section>
  );
};

export default Projects;
