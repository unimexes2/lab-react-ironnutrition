import { useState } from "react";

function AddFood(props) {
  const [name, setName] = useState("");
  const [calories, setCalorie] = useState("");
  const [image, setImage] = useState("");
  const [servings, setServings] = useState("");

  //FOCO: Funcion manejadora, cambia el state con el estado actual del input

  const setNameInput = (e) => {


    setName(e);
  };

  const setCalorieInput = (e) => {
    setCalorie(e);
  };
  const setImageInput = (e) => {
    setImage(e);
  };
  const setServingsInput = (e) => {
    console.log(e)
    setServings(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
     name:name,
      calories: calories,
      image: image,
      servings:servings
    };

    //console.log("Submitted", newFood);
    props.addFood(newFood);

    // Reset the state
    setName("");
    setCalorie("");
    setImage("");
    setServings("");


  };

  return (
    <div className="AddFood">
      <h4>Add a Movie</h4>
      <form onSubmit={handleSubmit}>
       
        <label>Name:</label>
     
        <input
          type="text"
          name="title"
          value={name}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <label>Calories:</label>
        <input
          type="text"
          name="calories"
          value={calories}
          onChange={(e) => setCalorieInput(e.target.value)}
        />

<label>Link image:</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImageInput(e.target.value)}
        />

<label>Servings:</label>
        <input
          type="text"
          name="servings"
          value={servings}
          onChange={(e) => setServingsInput(e.target.value)}
        />


        <button type="submit">Add a Food</button>
      </form>
    </div>
  );
}

export default AddFood;