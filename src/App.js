import React from "react";
import { generateWordListFromRememberry, generateFromArray } from "./utils";
import dictonary from "./dictionaries/dictonary_07-2019.json";
import verbs from "./dictionaries/irregular_verbs.json";
import "./App.css";

function App() {
  // const words = Object.entries(dictonary.cards);
  // const pages = generateWordListFromRememberry(words);

  const pages = generateFromArray(verbs);

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
