import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import MyProvider, { MyContext } from "./MyProvider";
import Login from "./Login";
import HousePoints from "./HousePoints";
import Ingredients from "./Ingredients";
import Potions from "./Potions";
import PotionChallenge from "./PotionChallenge";
import './App.css';

function App() {
  return (
      <div className="app">
        <MyProvider>
          <Router>
            <Header />
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login login={Login}/>} />
                <Route path="/house-points" element={<HousePoints housepoints={HousePoints}/>}/>
                <Route path="/ingredients" element={<Ingredients ingredients={Ingredients}/> }/>
                <Route path="/potions" element={<Potions potions={Potions} />}/>
                <Route path="/potion-challenge" element={<PotionChallenge potionchallenge={PotionChallenge}/>}/>
              </Routes>
          </Router>
        </MyProvider>
    </div>  
  );
}

export default App;
