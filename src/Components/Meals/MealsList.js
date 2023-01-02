import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import style from "./MealsList.module.css";
import Meal from "./Meal";
import MealsSummary from "./MealsSummary";
import Loading from "../UI/Loading";

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-app-c6f36-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      const tempMeals = [];
      for (const key in data) {
        const meal = {
          id: key,
          title: data[key].title,
          desc: data[key].desc,
          price: data[key].price,
        };
        tempMeals.push(meal);
      }
      setMeals(tempMeals);
    };

    fetchMeals().catch((error) => {
      setError(error.message);
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <h1 style={{ textAlign: "center" }}>{error}</h1>;
  }

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
