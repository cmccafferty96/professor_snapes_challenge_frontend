import React, { useContext } from "react";
import { MyContext } from "./MyProvider";

function Ingredients(){
    const { ingredients } = useContext(MyContext);

    return (
        <div className="ingredients" >
            <h2>Ingredients List</h2>
            <ul>
                {ingredients.map((ingredient) => (
                    <li key={ingredient.id}>
                        <h3>{ingredient.name}</h3>
                        <p>{ingredient.description}</p>
                        <img src={ingredient.thumbnail} alt={ingredient.name} style={{ maxWidth: "100px" }} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Ingredients;