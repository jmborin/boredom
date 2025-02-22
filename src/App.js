import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [text, setText] = useState("I'm bored");
  const buttonStuff = () => {
    if (text == "I'm bored") {
      setText("DRINK");
    } else {
      setText("I'm bored");
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <button className="button" onClick={buttonStuff}>
          {text}
        </button>
      </header>
    </div>
  );
}

export default App;
