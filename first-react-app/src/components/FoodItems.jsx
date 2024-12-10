import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items, handleBuyButton }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    // for highlighting bought item
    // let newItems = [...activeItems, item];
    // setActiveItems(newItems);

    let updatedItems = items.filter((food_item)=>food_item!=item)
    handleBuyButton(updatedItems)
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
