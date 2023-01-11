import { useState } from "react";
import imageFiles from "./assets/ImageFiles";
import Card from "./Card";
import "./App.css";

function App() {
  const [randomizedCards, setRandomizedCards] = useState(imageFiles);


  const flipHandler = (id) => {
   setRandomizedCards(prevState => prevState.map((card) => { 
      return (card.id === id) ? 
      {...card, flipped: !card.flipped} : 
      card
    })
   )
  };

  const shuffleHandler = () => {
    const [...newOrder] = randomizedCards;
    setRandomizedCards(newOrder.sort(() => Math.random() - 0.5));
  };

  const cardElements = randomizedCards.map((card) => {
    return (
      <Card
        key={card.name}
        toggle={() => {flipHandler(card.id)}}
        alt={card.alt}
        src={card.flipped ? card.url : card.back}
        id={card.id}
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

// setRandomizedCards((prevCards) => {
//   return prevCards.map((card) => {
//     const { flipped } = card;
//     return card.name === name ? { ...card, flipped: !flipped } : card;
//   });
// });
