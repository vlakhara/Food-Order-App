import React, { useContext } from "react";
import CartContext from "../../Store/CartContext";
import classes from "./Cart.module.css";
import Model from "../UI/Model";

const Cart = (props) => {
  const context = useContext(CartContext);
  const cartItems = context.items;
  const totalAmount = context.items.reduce(
    (current, next) => current + next.price,
    0
  );
  const cart = (
    <ul className={classes["cart-items"]}>
      {cartItems.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <li className={classes.cartItem}>
              {item.title}
              <button onClick={() => context.removeItem(item)}>X</button>
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );

  const onOrderComplete = () => {
    console.log("Ordering...");
    props.onCartClose();
  };
  return (
    <Model onClose={props.onCartClose}>
      {cart}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCartClose}>
          Close
        </button>
        <button className={classes.button} onClick={onOrderComplete}>
          Order
        </button>
      </div>
    </Model>
  );
};

export default Cart;
