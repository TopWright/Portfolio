import React from "react";

import "./index.css";

import Header from "./components/pages/Header";
import About from "./components/pages/About";
// import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Wrapper from "./components/UI/Wrapper";
import Background from "./components/UI/Background";

const App = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <About />
      </Wrapper>

      <Background />
      <Wrapper>
        <Projects />
      </Wrapper>
      <Contact />
    </>
  );
};

export default App;
