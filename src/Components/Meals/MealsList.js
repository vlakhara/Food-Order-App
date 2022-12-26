import React from "react";
import Card from "../UI/Card";
import style from "./MealsList.module.css";
import Meal from "./Meal";
import MealsSummary from "./MealsSummary";
const menuList = [
  {
    id: "m1",
    title: "Pizza",
    price: 250,
    desc: "Good pizza",
  },
  {
    id: "m2",
    title: "Burger",
    price: 100,
    desc: "Good burger",
  },
  {
    id: "m3",
    title: "Frankie",
    price: 80,
    desc: "Good frankie",
  },
  {
    id: "m4",
    title: "Dosa",
    price: 60,
    desc: "Good Dosa",
  },
  {
    id: "m5",
    title: "Idli",
    price: 50,
    desc: "Good idli",
  },
];

const MealsList = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <Card className={style.mealsList} color="#FAEAB1">
        {menuList.map((item) => (
          <Meal key={item.id} meal={item} />
        ))}
      </Card>
    </React.Fragment>
  );
};

export default MealsList;
