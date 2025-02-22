import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [drink, setDrink] = useState(null);
  
  const fetchDrink = async () => {
    try {
      const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
      console.log("Response Status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
      const data = await response.json();
      console.log("API Response:", data.drinks);
      if (data.drinks && data.drinks.length > 0) {
        setDrink(data.drinks[0]); // Always set drink
      } else {
        throw new Error("No drink data found!");
      }
  
    } catch (error) {
      console.log("Error catching:", error);
    }
  };
  return (
    <div className="container">
      <button className="drink-button" onClick={fetchDrink}>
        I'm Bored
      </button>

      {drink && (
        <div className="drink-container">
          <h2>{drink.strDrink}</h2>
          <img src={drink.strDrinkThumb} alt={drink.strDrink} className="drink-image" />
          <p><strong>Instructions:</strong> {drink.strInstructions}</p>
        </div>
      )}
    </div>
  );
}

export default App;
