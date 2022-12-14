import { useState, useEffect } from "react";
import imageFiles from "./assets/ImageFiles";
import Card from "./Card";
import "./App.css";

function App() {
  const [randomizedCards, setRandomizedCards] = useState(imageFiles);
  const [isRevealed, setIsRevealed] = useState([]);

  const flipHandler = (id) => {
    setRandomizedCards((prevCards) => {
      return prevCards.map((card) => {
        return card.id === id.target.id ? {...card, flipped: !card.flipped} : card
      })
    }
    );
  };

  const shuffleHandler = () => {
    setRandomizedCards((prevState) => {
      return [...prevState.sort(() => Math.random() - 0.5)];
    });
  };

  const cardElements = randomizedCards.map((card, index) => {
return (
    <Card 
    key={index}
    flipHandler={flipHandler}
    alt={card.alt}
    index={index}
    id={card.id}
    flipped={card.flipped ? card.url : card.back}
    /> 
  )})



  return (
    <div className="App">
      <button onClick={shuffleHandler}>Shuffle Cards</button>
      <div className="grid">
        {cardElements}
      </div>
    </div>
  );
}

export default App;