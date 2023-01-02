import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/CartContext";
import style from "./Cart.module.css";
import Model from "../UI/Model";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const context = useContext(CartContext);
  const { items } = context;
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const addMealHandler = (item) => {
    context.addNewItem({ ...item, amount: 1 });
  };

  const hasItem = items.length > 0;

  const removeMealHandler = (item) => {
    context.removeItem({ ...item, amount: 1 });
  };

  const onOrderComplete = () => {
    setIsCheckingOut(true);
  };

  useEffect(() => {
    if (items.length <= 0) setIsCheckingOut(false);
  }, [items]);

  const totalAmount = items.reduce(
    (current, next) => current + next.price * next.amount,
    0
  );

  const onCheckoutHandler = (userData) => {
    fetch(
      "https://food-order-app-c6f36-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          meals: items,
          user: userData,
        }),
      }
    );
  };

  return (
    <Model onClose={props.onCartClose}>
      <ul className={style["cart-items"]}>
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
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckingOut && (
        <Checkout onConfirm={onCheckoutHandler} onCancel={props.onCartClose} />
      )}
      {!isCheckingOut && (
        <div className={style.actions}>
          <button className={style["button--alt"]} onClick={props.onCartClose}>
            Close
          </button>
          {hasItem && (
            <button className={style.button} onClick={onOrderComplete}>
              Order
            </button>
          )}
        </div>
      )}
    </Model>
  );
};

export default Cart;
