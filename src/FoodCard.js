import React from 'react'

function FoodCard(props) {
  const {food} = props;
  console.log(food) 
  return (
  
  <div>
  
   <p>card</p>
    <div className="FoodCard">
       <h3>{food.name}</h3></div>
     <div >
            <img className="PicPicture" src={food.image}/> 
     </div>
   
       </div> 
  )
}

export default FoodCard;