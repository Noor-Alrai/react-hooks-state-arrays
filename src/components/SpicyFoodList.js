import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [fliterBy ,seFilterBy] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray)
    console.log(newFood);
  }
  function handleRemoveFood(id){
    const newFoodArray = foods.filter(food => food.id !== id)
    setFoods(newFoodArray);

  }
  function handleUpdate(id){

    const newFoodArray = foods.map(food =>{
      if(food.id === id ){
        return { ...food ,
        heatLevel : food.heatLevel + 1}
      }else{
        return food
      }
    })
    setFoods(newFoodArray);
  }
  /*function handleFilterBy(){
    const foodsToDisplay = foods.filter(food => {
      if(fliterBy === "all"){
        return true;
      }
      else{
        return (food.cuisine === fliterBy)
      }
    })
 
  } */

  const foodList = foods.map((food) => {
  return ( <li key={food.id} > 
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine} <button onClick = { () => handleUpdate(food.id)}>update</button>
      <button onClick = { () => handleRemoveFood(food.id)}>delete</button>
    </li>)

});



  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
