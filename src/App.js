import logo from "./logo.svg";
import "./App.css";
import Search from "./Search.js";
import { useState } from "react";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Search foodData={foodData} setFoodData={setFoodData} />
      {foodData.map((food) => (
        <h1>{food.title}</h1>
      ))}
    </div>
  );
}

export default App;
