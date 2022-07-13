
import foods from './foods.json'
import FoodCard from "./FoodCard";
import { useState } from "react";
import FoodBox from "./Foodbox";
import AddFood from './AddFoodForm.js';

function App() {
  const [foodArr, setFoodArr] = useState(foods);
  
  const addNewFood = (newFood) => {
    const updateFoods = [...foodArr, newFood];
    setFoodArr(updateFoods);
  };

 
 
 
 return (
<div>
<AddFood addFood={addNewFood} />


{foodArr.map((food) => {
  //console.log(food)
  return( 
      <FoodBox 
      key={food.name}
       name={food.name}
       calories={food.calories}
      image={food.image}
      servings= {food.serving}
    />)
})
}

{foodArr.map((food) => {
  //console.log(food)
  return( <FoodCard
    key={food.name}
    food={food}
     />
      )
})
}
</div>
 )
}
export default App;
