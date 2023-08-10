import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>Professor Snape's Potion Challenge</h1>
            <nav>
                <span>
                    <span>
                        <Link to="/">Home</Link>
                    </span>
                    <span>
                        <Link to="/login">Login</Link>
                    </span>
                    <span>
                        <Link to="/potion-challenge">Professor Snape's Potion Challenge</Link>
                    </span>
                    <span>
                        <Link to="/house-points">House Points</Link>
                    </span>
                    <span>
                        <Link to="/ingredients">Ingredients List</Link>
                    </span>
                    <span>
                        <Link to="/potions">Potions List</Link>
                    </span>
                </span>
            </nav>
        </header>
    )
}

export default Header;