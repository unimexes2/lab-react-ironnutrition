import React from 'react'

function FoodBox(props) {
const {food,deleteFood} = props;
  
  return (
  
  <div>


   <p>card</p>
    <div className="FoodCard">
       <h3>Name {props.name}</h3>
    </div>
     <div >
            <img className="PicPicture" src={props.image}/> 
     </div>
     <div className="FoodCard">
       <h3>Calories{props.calories}</h3>
    </div>
    <div className="FoodCard">
       <h3>Servings{props.servings}</h3>
    </div>
    <button onClick={() => deleteFood(props.name)} className="btn-new">
      Delete
    </button>
    
       </div> 
  )
}

export default FoodBox;