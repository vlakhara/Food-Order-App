import React from "react";
import style from "./Card.module.css";
const Card = (props) => {
  const classes = `${style.card} ${props.className}`;
  const bgColor = `${props.color}`;
  return (
    <div className={classes} style={{ backgroundColor: bgColor }}>
      {props.children}
    </div>
  );
};

export default Card;
