import React, { useContext } from "react";
import { MyContext } from "./MyProvider";

function HousePoints() {
    const { housePoints } = useContext(MyContext);

    return (
        <div className="house-points">
            <h2>House Points</h2>
            <ul>
                {Object.entries(housePoints).map(([house, points], index) => (
                    <li key={house}>
                        <span>{index + 1}. {house}: {points} points</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HousePoints;