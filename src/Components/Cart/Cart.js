import React, { useContext } from "react";
import CartContext from "../../Store/CartContext";
import classes from "./Cart.module.css";
import Model from "../UI/Model";
import CartItem from "./CartItem";

const Cart = (props) => {
  const context = useContext(CartContext);
  const { items } = context;

  const onOrderComplete = () => {
    console.log("Ordering...");
    props.onCartClose();
  };

  const removeMealHandler = (item) => {
    context.removeItem({ ...item, amount: 1 });
  };
  const addMealHandler = (item) => {
    context.addNewItem({ ...item, amount: 1 });
  };
  const hasItem = items.length > 0;

  const totalAmount = items.reduce(
    (current, next) => current + next.price * next.amount,
    0
  );

  return (
    <Model onClose={props.onCartClose}>
      <ul className={classes["cart-items"]}>
        {items.map((item, i) => {
          return (
            <CartItem
              key={`${item.id}_${i}`}
              item={item}
              addNewItem={() => addMealHandler(item)}
              removeItem={() => removeMealHandler(item)}
            />
          );
        })}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCartClose}>
          Close
        </button>
        {hasItem && (
          <button className={classes.button} onClick={onOrderComplete}>
            Order
          </button>
        )}
      </div>
    </Model>
  );
};

export default Cart;
