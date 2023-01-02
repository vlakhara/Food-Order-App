import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import style from "./MealsList.module.css";
import Meal from "./Meal";
import MealsSummary from "./MealsSummary";

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const tempMeals = [];
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-app-c6f36-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();
      for (const key in data) {
        const meal = {
          id: key,
          title: data[key].title,
          desc: data[key].desc,
          price: data[key].price,
        };
        setMeals((prevMeals) => [...prevMeals, meal]);
      }
    };
    fetchMeals();
  }, []);

  return (
    <React.Fragment>
      <MealsSummary />
      <Card className={style.mealsList} color="#FAEAB1">
        {meals.map((item) => (
          <Meal key={item.id} meal={item} />
        ))}
      </Card>
    </React.Fragment>
  );
};

export default MealsList;
