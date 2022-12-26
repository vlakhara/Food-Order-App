import style from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/CartContext";
import { useContext } from "react";

const CartButton = (props) => {
  const context = useContext(CartContext);

  const totalItems = context.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  return (
    <button
      className={style.cartButton}
      color="#e5ba73"
      onClick={props.onClick}
    >
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
