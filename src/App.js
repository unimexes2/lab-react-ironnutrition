
import foods from './foods.json'
import FoodCard from "./FoodCard";
import { useState } from "react";
import FoodBox from "./Foodbox";
import AddFood from './AddFoodForm.js';
import SearchFood from './Search';



function App() {
 
 
  var [foodArr, setFoodArr] = useState(foods);
 
  const addNewFood = (newFood) => {
    const updateFoods = [...foodArr, newFood];
    setFoodArr(updateFoods);
  };
  const deleteFood= (name) => {
    const filteredFood = foodArr.filter((elem) => {
      return elem.name !== name;
    });
    setFoodArr(filteredFood);
  }



  const searchFood=(nameFood)=>{
    foodArr=[...foods]
    console.log(nameFood,foods)
    const filteredFood = foodArr.filter((elem) => {

      
      console.log(elem.name.includes(nameFood.nameFood))
    
      if( elem.name.includes(nameFood.nameFood)){return elem}
      
      
    });
    setFoodArr(filteredFood);
    
  }

  
 
 
 
 return (
<div>
<SearchFood searchFood={searchFood} />

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
      deleteFood={deleteFood}
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
