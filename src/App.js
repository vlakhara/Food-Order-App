import { Fragment } from "react";
import Main from "./Layout/Main";
import MealsSummary from "./Meals/MealsSummary";

const App = () => {
  return (
    <Fragment>
      <Main />
      <MealsSummary />
    </Fragment>
  );
};

export default App;
