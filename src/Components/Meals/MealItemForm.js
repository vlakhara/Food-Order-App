import React, { useContext, useRef, useEffect, useState } from "react";
import style from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const amountChangeRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountChangeRef.current.value;

    const amount = +enteredAmount;

    if (enteredAmount.trim().length === 0 || amount < 1 || amount > 5) {
      setIsValid(false);
      return;
    }
    props.onAddToCart(amount);
  };

  return (
    <form className={style.mealItemForm} onSubmit={submitHandler}>
      <div>
        <label>Amount</label>
        <input
          ref={amountChangeRef}
          type="number"
          min="1"
          step="1"
          max="5"
          defaultValue="1"
          className={style.itemQnt}
        />
      </div>
      <button className={style.addBtn}>+ Add</button>
      {!isValid && <p>Please enter valid amount.</p>}
    </form>
  );
};

export default MealItemForm;
