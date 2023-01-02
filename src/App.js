import { useEffect, useState } from "react";
import Main from "./Components/Layout/Main";
import MealsList from "./Components/Meals/MealsList";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import Loading from "./Components/UI/Loading";

const App = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const showCart = () => {
    setCartIsOpen(true);
  };
  const hideCart = () => {
    setCartIsOpen(false);
  };

  return (
    <CartProvider>
      {cartIsOpen && <Cart onCartClose={hideCart} />}
      <Main onCartOpen={showCart} />
      <MealsList />
    </CartProvider>
  );
};

export default App;
