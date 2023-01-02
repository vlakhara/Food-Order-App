import { useEffect, useState } from "react";
import Main from "./Components/Layout/Main";
import MealsList from "./Components/Meals/MealsList";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import Loading from "./Components/UI/Loading";

const App = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const showCart = () => {
    setCartIsOpen(true);
  };
  const hideCart = () => {
    setCartIsOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <CartProvider>
      {cartIsOpen && <Cart onCartClose={hideCart} />}
      {!isLoading && <Main onCartOpen={showCart} />}
      {!isLoading && <MealsList />}
      {isLoading && <Loading />}
    </CartProvider>
  );
};

export default App;
