import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/Mealitem";
import Card from "../UI/Card";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Jain BHEL",
    description: "No Onion No garlic",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Jain Pasta",
    description: "Italian Pasta",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Jain Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Jain Bhaji-Pav",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      meal={meal}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <ul>
        <Card>{mealsList} </Card>
      </ul>
    </section>
  );
};

export default AvailableMeals;
