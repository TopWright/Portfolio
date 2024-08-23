import React from "react";

import ProjectItem from "./ProjectItem";

import classes from "./Projects.module.css";

const Projects = () => {
  const count = 6;

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
        title="Classcube Pro"
        description="A cutting-edge Learning Management System that provides a comprehensive online learning environment. It offers a range of tools and features to facilitate effective learning, course management, and collaboration for educators and learners."
        link="https://pro.classcube.online/"
        code={false}
      />
      <ProjectItem
        title="Dictionary App"
        description="Built A Dictionary web Application that enables users to search for any word, keep records of recent words, and also favorite words with live API and Unlimited searches per day"
        link="https://idiktionary.netlify.app/"
        code="https://github.com/TopWright/IDictionary"
      />
      <ProjectItem
        title="Lions Of Africa(NFT)"
        description="A Landing page for the lions of africa NFT. Lions of africa brings the embodiment of African culture to the NFT market."
        link="https://loa-gamma.vercel.app/"
        code={false}
      />
      <ProjectItem
        title="Liveizy"
        description="A technology-driven, home-rental services application that helps people live better lives, through easy access to quality homes-to-rent, rent-financing, rental-home management, and other essential services."
        link="https://liveizy.com/"
        code={false}
      />
      <ProjectItem
        title="Meals App"
        description="Explore a world of cuisine with this app, powered by the Meal DB API. Discover diverse meal categories from around the globe, filter by category, state, area, and ingredients, or search for specific dishes. Each meal comes with detailed cooking instructions, external resources like Wikipedia, and even a YouTube link to guide you through the process. Perfect for food enthusiasts looking to explore new recipes and cooking techniques."
        link="https://top-meal.netlify.app/"
        code={false}
      />
      <ProjectItem
        title="Revocube Spaces"
        description="A web application for apartment rentals featuring location-based search functionality, detailed apartment listings with photos and amenities, booking capabilities, and real-time communication tools between users and property owners. "
        link="https://revocubespaces.com/"
        code={false}
      />
      <ProjectItem
        title="SANEF Creatives"
        description="Developed a custom application for SANEF Creatives Limited, a Bankers' Committee initiative, aimed at supporting key projects like the restoration of the National Theatre and the reconstruction of 40 police stations across Nigeria"
        link="https://staging.sanef.panera.africa/"
        code={false}
      />
    </section>
  );
};

export default Projects;
