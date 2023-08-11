import React from 'react';
import './Home.css';

function Home() {
    return (
        <div>
            <h1>Welcome to Professor Snape's Potions Challenge!</h1>

            <section className="instructions">
                <h2>Instructions:</h2>
                <p>Welcome to the Potions Challenge! Professor Snape wants to test your knowledge on all of the potions you learned this year at Hogwarts.</p>
                <p>To get started, please create a username and password, and then select your Hogwarts house</p>
                <ol>
                    <li>Select the correct ingredients for the potion</li>
                    <li>Once you've selected three ingredients for the potion prompt, click the 'Brew Potion' button to see if you got the correct answers.</li>
                    <li>If your selections were correct, you'll earn house points for your chosen Hogwarts house</li>
                    <li>Complete all of the potion challenges within the 3 minute time limit to complete the challenge and impress Professor Snape with your potions knowledge! Good luck!</li>
                    <li>**HINT** You can find your potions and ingredients study guides under the 'Potions List' and 'Ingredient List' tabs in the navigation bar.</li>
                </ol>
            </section>

            <section className="about">
                <div>Developed by: Claire McCafferty</div>
            </section>
        </div>
    )
}

export default Home;