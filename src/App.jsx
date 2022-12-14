import { useState, useEffect } from "react";
import imageFiles from "./assets/ImageFiles";
import "./App.css";

function App() {
  const [randomizedCards, setRandomizedCards] = useState(imageFiles);
  const [isRevealed, setIsRevealed] = useState([]);

  // useEffect(()=> {
  //   const identifier = setTimeout(() => {
  // }, 500)
  // },[randomizedCards.id, randomizedCards.flipped])

  const flipHandler = (id) => {
    setRandomizedCards((prevCards) => {
      const newCards = []
      for (let i=0; i<prevCards.length; i++) {
        const currentCard = prevCards[i]
          if(currentCard.id === id.target.id) {
            console.log(id.target.alt)
            const updatedCards = {
              ...currentCard,
              flipped: !currentCard.flipped
            }
            newCards.push(updatedCards)
            
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



  return (
    <div className="App">
      <button onClick={shuffleHandler}>Shuffle Cards</button>
      <div className="grid">
        {randomizedCards.map((card, index) => {
          return (
            <div key={index}>
              <img
                src={card.flipped ? card.url : card.back}
                alt={`${card.id}`}
                height="auto"
                width="80px"
                id={card.id}
                match={card.match}
                onClick={flipHandler}
              />
            </div>
          );
        })}
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