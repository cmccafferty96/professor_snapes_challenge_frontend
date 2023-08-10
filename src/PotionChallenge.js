import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "./MyProvider";
import "./PotionChallenge.css";

function PotionChallenge() {
    const { ingredients, potions, housePoints, setHousePoints } = useContext(MyContext);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const [currentPotion, setCurrentPotion] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(180);

    // // Check if ingredients and potions are available
    // if (!ingredients || !potions) {
    //     return <div>Loading...</div>;
    // }

    useEffect(() => {
        // Start the timer when the user clicks "Brew Potion"
        if (successMessage === "") {
            const timer = setInterval(() => {
                if (timeRemaining > 0) {
                    setTimeRemaining((prevTime) => prevTime - 1);
                } else {
                    clearInterval(timer);
                    setSuccessMessage("Time's up! Try again.");
                }
            }, 1000);

            return () => {
                clearInterval(timer);
            };
        }
    }, [successMessage, timeRemaining]);

    const handleIngredientToggle = (ingredientId) => {
        if (selectedIngredients.includes(ingredientId)) {
            setSelectedIngredients((prevIngredients) =>
            prevIngredients.filter((id) => id !== ingredientId)
            );
        } else {
            setSelectedIngredients((prevIngredients) => [...prevIngredients, ingredientId]);
        }
    };

    const handleBrewPotion = () => {
        console.log("Potions:", potions);
        console.log("Current Potion Index:", currentPotion)

        const currentPotionIngredients = potions[currentPotion].ingredients;

        if (
            selectedIngredients.length === currentPotionIngredients.length &&
            selectedIngredients.every((id) => currentPotionIngredients.includes(id))
        ) {
            const pointsToAdd = 10;
            const house = "Gryffindor";
            setHousePoints((prevHousePoints) => ({
                ...prevHousePoints,
                [house]: prevHousePoints[house] + pointsToAdd
            }));

            setSuccessMessage("Potion successful!");
            // Calculate the next potion index
            const nextPotionIndex = currentPotion +1;

            if (nextPotionIndex < potions.length) {
                setCurrentPotion(nextPotionIndex);
            } else {
                setSuccessMessage("Congratulations! You've completed all the potion challenges.");
            }

            setSelectedIngredients([]);
        } else {
            setSuccessMessage("Incorrect ingredients. Try again.");
        }    
    };

    return (
        <div className="potion-challenge">
            <h1>Professor Snape's Potions Challenge</h1>
            <div className="background-image-container">
                <img 
                className="background-image"
                src="https://i.imgur.com/iSogRDg.png"
                alt="Hogwarts Potions Classroom" 
                />
            </div>
            <div className="game-container">
                <h2>Challenge: {potions[currentPotion].name}</h2>
                <p className="potion-description">{potions[currentPotion].description}</p>
                {/* Render Inventory */}
                <div className="inventory">
                    {ingredients.map((ingredient) => (
                        <div key={ingredient.id} className="ingredient">
                            <input 
                            type="checkbox"
                            id={`ingredient-${ingredient.id}`}
                            onChange={() => handleIngredientToggle(ingredient.id)}
                            checked={selectedIngredients.includes(ingredient.id)}
                            />
                            <label htmlFor={`ingredient-${ingredient.id}`}>
                                <img src={ingredient.thumbnail} alt={ingredient.name} />
                            </label>
                            <p className="ingredient-name">{ingredient.name}</p>
                        </div>
                    ))}
                </div>
                <button onClick={handleBrewPotion}>Brew Potion</button>
                {timeRemaining > 0 && <p>Time Remaining: {Math.floor(timeRemaining / 60)}:{timeRemaining % 60}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
        </div>
        
    ); 
}

export default PotionChallenge;