import React from "react";
import style from "./Navbar.module.css";
import CartIcon from "../Cart/CartIcon";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.left}>
        <p className={style.logo}>HappyMeals</p>
      </div>
      <div className={style.right}>
        <div className={style.cart}>
          <div className={style.cartIcon}>Cart</div>
          <div className={style.cartNumber}>0</div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
