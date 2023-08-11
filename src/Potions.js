import React, { useContext } from "react";
import { MyContext } from "./MyProvider";

function Potions(){
   const { potions, ingredients } = useContext(MyContext);
   console.log("Potions in Potions Component:", potions);

   return (
    <div className="potions">
        <h2>Potions List</h2>
        <ul>
            {potions.map((potion) => (
                <li key={potion.id}>
                    <h3>{potion.name}</h3>
                    <p>{potion.description}</p>
                    <img src={potion.thumbnail} alt={potion.name} style={{ maxWidth: "100px" }} />
                    <ul>
                        <li>Ingredients:</li>
                        {/* <ul>
                            {potion.correct_ingredients.map((ingredientId) => (
                                <li key={ingredientId}>
                                    {ingredients.find((ingredient) => ingredient.id === ingredientId)?.name}
                                </li>
                            ))}
                        </ul> */}
                    </ul>
                </li>
            ))}
        </ul>
    </div>
   )
}

export default Potions;