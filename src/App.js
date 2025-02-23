import { motion } from "framer-motion"; 
import './App.css';
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function App() {
  const [drink, setDrink] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [inputValue, setInputValue] = useState("");
  const [submittedText, setSubmittedText] = useState(null);
  const [escapeInput, setEscapeInput] = useState(""); // New state for Escape input
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (inputValue.trim() === "") return;
    setSubmittedText(inputValue);
    setInputValue("");
  };

  const handleEscapeSubmit = () => {
    if (escapeInput.trim().toLowerCase() === "kasper") {
      navigate("/escape"); // Redirect only if "Kasper" is entered
    } else {
      console.log("ksgf");
    }
  };

  const getCookies = () => {
    window.location.href = "https://www.cookieclicker.com";
  };

  const fetchDrink = async () => {
    try {
      const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data.drinks && data.drinks.length > 0) {
        setDrink(data.drinks[0]);
        setPosition({
          x: Math.random() * 300,
          y: Math.random() * 200,
        });
      } else {
        throw new Error("No drink data found!");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="container">
      <button className="drink-button" onClick={fetchDrink}>
        I'm Bored
      </button>

      <motion.div key={drink?.idDrink} className="drink-wrapper">
        {drink && (
          <motion.div
            className="drink-container"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2>{drink.strDrink}</h2>

            <motion.img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
              className="drink-image"
              initial={{ y: -300, opacity: 0, rotate: 0 }}
              animate={{ y: 0, opacity: 1, rotate: 9720 }}
              transition={{
                type: "spring",
                stiffness: 300,
                repeat: Infinity,
                damping: 10,
                duration: 0.6,
              }}
            />

            <motion.p
              initial={{ x: 0, y: 0 }}
              animate={{ x: position.x, y: position.y, rotate: 9720 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 8,
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
              }}
              className="instructions"
            >
              <strong>Instructions:</strong> {drink.strInstructions}
            </motion.p>
          </motion.div>
        )}
      </motion.div>

      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="text-input"
        />
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>

        {submittedText && (
          <div className="output-container">
            <motion.p
              key={submittedText}
              className="flashing-text"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [1, 0.5, 1],
                color: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
                x: [Math.random() * 80 - 40 + "vw", Math.random() * 80 - 40 + "vw"],
                y: [Math.random() * 80 - 40 + "vh", Math.random() * 80 - 40 + "vh"],
              }}
              transition={{
                opacity: { repeat: Infinity, duration: 0.5 },
                color: { repeat: Infinity, duration: 0.5 },
                x: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              }}
            >
              {submittedText} is gay!!!
            </motion.p>
            <motion.img
              key={submittedText}
              src="https://tauepsilonkappa.com/static/media/people/AndrewKasper.WebP"
              alt="Random Member"
              className="submitted-image"
              initial={{ y: -300, opacity: 0, rotate: 0 }}
              animate={{ y: 0, opacity: 1, rotate: 9720, scale: [1, 2, 1] }}
              transition={{
                y: { type: "spring", stiffness: 200, damping: 5, duration: 1.5 },
                rotate: { duration: 1.5, ease: "linear" },
                scale: { repeat: Infinity, repeatType: "reverse", duration: 1, ease: "easeInOut" },
              }}
            />
          </div>
        )}
      </div>

      <button onClick={getCookies}>Get Cookies</button>

      {/* 🚀 Escape Text Field & Button */}
      <div className="escape-container">
        <input
          type="text"
          placeholder="Enter Escape Code"
          value={escapeInput}
          onChange={(e) => setEscapeInput(e.target.value)}
          className="escape-input"
        />
        <button onClick={handleEscapeSubmit} className="escape-button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
