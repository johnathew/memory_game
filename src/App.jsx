import { useState, useEffect } from "react";
import imageFiles from "./assets/ImageFiles";
import Card from "./Card";
import "./App.css";

function App() {
  const [randomizedCards, setRandomizedCards] = useState(imageFiles);
  const [isRevealed, setIsRevealed] = useState([]);

  const flipHandler = (id) => {

    const { name } = id;

    setRandomizedCards((prevCards) => {
      return prevCards.map((card) => {
        const { flipped } = card;
        return card.name === name ? { ...card, flipped: !flipped } : card;
      });
    });

    setIsRevealed([...isRevealed, {id}])
    console.log(isRevealed)
   
  };

  const shuffleHandler = () => {
    const [...newOrder] = randomizedCards
    setRandomizedCards(newOrder.sort(() => Math.random() - 0.5))
  };

  const cardElements = randomizedCards.map((card, index) => {
    return (
      <Card
        key={index}
        toggle={flipHandler}
        alt={card.alt}
        value={randomizedCards.alt}
        id={card}
        flipped={card.flipped ? card.url : card.back}
      />
    );
  });

  return (
    <div className="App">
      <button onClick={shuffleHandler}>Shuffle Cards</button>
      <div className="grid">{cardElements}</div>
    </div>
  );
}

export default App;
