import { useState } from "react";

function SearchFood(props) {
  const [nameFood, setNameInput] = useState("");
  
  const handleInput = (val) => {
   setNameInput( val.target.value)
//console.log(val.target.value)

   
   // e.preventDefault();
    props.searchFood({nameFood:nameFood});

  };



  return (
    <div className="AddFood">
      <h4>Search a Food</h4>
     
       
        <label>Name:</label>
     
        <input
          type="text"
          name="title"
          value={nameFood}
          onChange={handleInput}
        />
  
  



        </div>)
        }

export default SearchFood;