import { useState, useEffect } from "react";
import imageFiles from "./assets/ImageFiles";
import Card from "./Card";
import "./App.css";

function App() {
  const [randomizedCards, setRandomizedCards] = useState(imageFiles);
  const [isRevealed, setIsRevealed] = useState([]);

  const flipHandler = (id) => {
    setRandomizedCards((prevCards) => {
      const newCards = []
      console.log(id.target.alt)
      for (let i=0; i<prevCards.length; i++) {
        const currentCard = prevCards[i]
          if(currentCard.id === id.target.id) {
            const updatedCards = {
              ...currentCard,
              flipped: !currentCard.flipped
            }
            newCards.push(updatedCards)
            console.log(newCards)
          } else {newCards.push(currentCard)}
      }
      return newCards
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

// randomizedCards.map((obj) => {
//   if (obj.id === id.target.id) {
//     return { ...obj, flipped: !obj.flipped };
//   } else {
//     return obj;
//   }
// })