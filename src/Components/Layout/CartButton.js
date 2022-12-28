import style from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/CartContext";
import { useContext, useEffect, useState } from "react";

const CartButton = (props) => {
  const context = useContext(CartContext);
  const { items } = context;
  const totalItems = items.reduce((total, meal) => total + meal.amount, 0);
  const [btnActive, setBtnActive] = useState(false);
  const classes = `${style.cartButton} ${btnActive ? style.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnActive(true);

    const bumpTimer = setTimeout(() => {
      setBtnActive(false);
    }, 300);

    return () => {
      clearTimeout(bumpTimer);
    };
  }, [items]);

  return (
    <button className={classes} color="#e5ba73" onClick={props.onClick}>
      <div className={style.cart}>
        <div className={style.cartIcon}>
          <CartIcon />
        </div>
        <div className={style.cartNumber}>{totalItems}</div>
      </div>
    </button>
  );
};

export default CartButton;
