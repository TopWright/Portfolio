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

      <ProjectItem
        title="Note App"
        description="Developed a Note taking web application that gives users the ability to perform CRUD functionalities with a well-structured user interface, authentication process, and database service"
        link=""
        code="https://github.com/TopWright/INote"
      />
      <ProjectItem
        title="Dictionary App"
        description="Built A Dictionary web Application that enables users to search for any word, keep records of recent words, and also favorite words with live API and Unlimited searches per day"
        link="https://idiktionary.netlify.app/"
        code="https://github.com/TopWright/IDictionary"
      />
      <ProjectItem
        title="Music App"
        description="Implemented A Music Player Web Application for the Jon Bellon Lovers where users can use the play, pause, next, previous, and shuffle controls and also add favorite songs"
        link="https://imusicweb.netlify.app/"
        code="https://github.com/TopWright/Imusic"
      />
      <ProjectItem
        title="Recipie App"
        description="Created a Food Recipe web Application with live API, Enabling users to get their favorite food recipes, with other functional features"
        link="https://ifoodapp.netlify.app/"
        code="https://github.com/TopWright/Foodie"
      />
      <ProjectItem
        title="MetaMask App"
        description="Designed Interactive and modern landing pages with elegant and smooth User interfaces and User Experience for the web and mobile screens"
        link=""
      />
    </section>
  );
};

export default Projects;
