import { useState, useEffect } from "react";
import imageFiles from "./assets/ImageFiles";
import "./App.css";

function App() {
  const [randomizedCards, setRandomizedCards] = useState(imageFiles);

  // useEffect(()=> {
  //   const identifier = setTimeout(() => {
  // }, 500)
  // },[randomizedCards.id, randomizedCards.flipped])

  const flipHandler = (id) => {
    console.log(id.target)
    setRandomizedCards(
      randomizedCards.map((obj) => {
        if (obj.id === id.target.id) {
          return { ...obj, flipped: !obj.flipped };
        } else {
          return obj;
        }
      })
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