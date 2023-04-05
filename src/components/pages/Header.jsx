import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  const tin = "</>";

  return (
    <header className={classes.header}>
      <div className={classes.top}>
        <div className="logo-box">
          <a href="#Home">TopWrightDev</a>
        </div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={classes.main}>
        <div>
          <h1>
            Fron<i>T</i>end
          </h1>
          <h1 className={classes.text}>
            <span className={classes.e}>{tin}</span> Devel<i>OP</i>er
          </h1>
          <h2>
            Specialized in UI/UX, Frontend Development, Mobile Development and
            Web3 Development.
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
