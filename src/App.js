import React from 'react';
import dictonary from './dictonary_07-2019.json'
import './App.css';

function App() {
  const words = Object.entries(dictonary.cards)

  return (
    <div className="app">
      <h1>
        Name: {dictonary.name}
      </h1>
      <>
      <div class="words-list">
        {
          words.map(tile => (
            <div key={tile[1].o} className="tile">
              {tile[1].o}
            </div>
          ))
        }
      </div>
      </>
    </div>
  );
}

export default App;
