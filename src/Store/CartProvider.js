import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let newCart = [...state.items];
  if (action.type === "ADD") {
    if (newCart.find((item) => item.id === action.item.id)) {
      newCart.forEach((item) => {
        if (item.id === action.item.id) {
          item.id = item.id;
          item.title = item.title;
          item.amount += action.item.amount;
          item.price = item.price;
        }
      });
    } else {
      newCart = [...newCart, action.item];
    }

    const total = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: newCart,
      totalAmount: total,
    };
  }
  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    let newTotalAmount = state.totalAmount - existingItem.price;
    if (existingItem.amount === 1) {
      newTotalAmount =
        state.totalAmount - action.item.price * action.item.amount;
      newCart = state.items.filter((item) => item.id !== action.item.id);
    } else {
      newCart[existingItemIndex] = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
    }

    return {
      items: newCart,
      totalAmount: newTotalAmount,
    };
  }

  return defaultCart;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);
  const addNewItem = (item) => {
    dispatchCart({ type: "ADD", item });
  };
  const removeItem = (item) => {
    dispatchCart({ type: "REMOVE", item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addNewItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
