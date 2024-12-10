import React, { useState } from "react";
import FoodItems from "./components/FoodItems";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  const [foodItems, setFoodItems] = useState(["Pizza", "Momo", "Burger"]);

  function handleKeyDown(event) {
    let food_item = event.target.value;
    if (event.key === "Enter") {
      event.target.value=""
      if (food_item && !foodItems.includes(food_item)) {
        setFoodItems([...foodItems, food_item]);
      }
    }
  }

  function handleBuyButton(items){
    setFoodItems(items)
  }

  return (
    <>
      <Container>
        <h1 className="food-heading">Food Items</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleKeyDown={handleKeyDown}></FoodInput>
        <FoodItems handleBuyButton={handleBuyButton} items={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>This is another container</p>
      </Container>
      <Container>
        <p>This is again another container</p>
      </Container>
    </>
  );
}

export default App;
