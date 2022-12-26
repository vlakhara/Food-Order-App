import React, { useContext } from "react";
import style from "./Meal.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../Store/CartContext";
const Meal = (props) => {
  const context = useContext(CartContext);
  const addToCartHandler = (amount) => {
    context.addNewItem({
      id: props.meal.id,
      title: props.meal.title,
      amount,
      price: props.meal.price,
    });
  };
  return (
    <div className={style.meal}>
      <div className={style.data}>
        <h3 className={style.title}>{props.meal.title}</h3>
        <div className={style.desc}>{props.meal.desc}</div>
        <div> {props.meal.price}</div>
      </div>
      <div className={style.addForm}>
        <MealItemForm meal={props.meal} onAddToCart={addToCartHandler} />
      </div>
    </div>
  );
};
export default Meal;
