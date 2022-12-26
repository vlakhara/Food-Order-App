import React from "react";
import style from "./Navbar.module.css";
import CartButton from "./CartButton";

const Navbar = (props) => {
  return (
    <div className={style.navbar}>
      <div className={style.left}>
        <p className={style.logo}>HappyMeals</p>
      </div>
      <CartButton onClick={props.onShowCart} />
    </div>
  );
};
export default Navbar;
