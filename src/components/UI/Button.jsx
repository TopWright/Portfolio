import React from "react";

// import classes from './Buttonmodule.css';

const Button = (props) => {
  return (
    <a
      href={props.href}
      className={props.className}
      type={props.type}
      onClick={props.onClick}
      target="_blank"
      rel="noreferrer"
    >
      {props.title}
    </a>
  );
};

export default Button;
