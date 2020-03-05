import React from "react";
import { generateWordListFromRememberry } from "./utils";
import dictonary from "./dictonary_07-2019.json";
import "./App.css";

function App() {
  const words = Object.entries(dictonary.cards);

  const pages = generateWordListFromRememberry(words);

  return (
    <div className="app">
      {pages.map((wordList, index) => (
        <div key={index} className="page">
          <div className="words-list">
            {wordList.map((word, index) => (
              <div className="tile" key={index}>
                <span>{word}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
