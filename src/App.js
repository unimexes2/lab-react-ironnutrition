
import foods from './foods.json'
import FoodCard from "./FoodCard";
import { useState } from "react";
import FoodBox from "./Foodbox";
function App() {
  const [foodArr, setFoodArr] = useState(foods);
  return (
<div>

{foodArr.map((food) => {
  //console.log(food)
  return( 
      <FoodBox 
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
