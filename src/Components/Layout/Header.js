import React from "react";
import Meals from "../../Assets/meals.jpg";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <img className={style.headerImage} src={Meals} alt="" />
    </div>
  );
};

export default Header;
