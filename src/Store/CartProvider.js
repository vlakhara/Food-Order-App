import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newCart = state.items.concat(action.item);

    // const newCart = state.items.map((item) => {
    //   if (state.items.length !== 0 && item.id === action.item.id) {
    //     return {
    //       id: item.id,
    //       title: item.title,
    //       amount: item.amount + action.item.amount,
    //       price: item.price,
    //     };
    //   }
    //   return {
    //     id: action.item.id,
    //     title: action.item.title,
    //     amount: action.item.amount,
    //     price: action.item.price,
    //   };
    //});

    console.log(newCart);
    const total = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: newCart,
      totalAmount: total,
    };
  }
  if (action.type === "REMOVE") {
    const total = state.totalAmount - action.item.price * action.item.amount;
    const newCart = state.items.filter((item) => item.id !== action.item.id);

    return {
      items: newCart,
      totalAmount: total,
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
