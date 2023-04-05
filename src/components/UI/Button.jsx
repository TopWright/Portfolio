import React from "react";

// import classes from './Buttonmodule.css';

const Button = (props) => {
  return (
    <button
      className={props.className}
      type={ props.type }
      onClick={ props.onClick }>
      { props.title }
    </button>
  );
};

export default Button;
