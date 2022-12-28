import React from "react";

import style from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={style.cartItem}>
      <div className={style.data}>
        <h2>{props.item.title}</h2>
        <div className={style.summary}>
          <span className={style.price}>{props.item.price}</span>
          <span className={style.amount}>
            <span>x</span>
            <span className={style.innerAmt}> {props.item.amount}</span>
          </span>
        </div>
      </div>
      <div className={style.actions}>
        <button className={style.remove} onClick={props.removeItem}>
          -
        </button>
        <button className={style.add} onClick={props.addNewItem}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
