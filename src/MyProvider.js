import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [ingredients, setIngredients] = useState([]);
    const [potions, setPotions] = useState([]);
    const [housePoints, setHousePoints] = useState({
        Gryffindor: 0,
        Hufflepuff: 0,
        Ravenclaw: 0,
        Slytherin: 0
    });
    const [currentPotionData, setCurrentPotionData] = useState(null); // Track current potion data

    useEffect(() => {
        fetch("http://localhost:5000/ingredients")
        .then(response => response.json())
        .then(ingredientsData => setIngredients(ingredientsData))
        .catch(error => {
            console.error("Error fetching ingredients:", error);
        });
      
        fetch("http://localhost:5000/potions")
        .then(response => response.json())
        .then(potionsData => {
            setPotions(potionsData);
            setCurrentPotionData(potionsData[0])
            console.log("Fetched Potions!", potionsData);
        })
        .catch(error => {
            console.error("Error fetching potions:", error);
        });
    }, []);

    return (
        <MyContext.Provider value={{ ingredients, potions, housePoints, setHousePoints }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;