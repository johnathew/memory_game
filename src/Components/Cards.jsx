import { useRef, useState } from "react";
import Card from "./Card";
const Cards = () => {
  const [firstOption, setFirstOption] = useState(null);
  const [secondOption, setSecondOption] = useState(null);

  const cardsArray = [
    {
      cardFace: require("../CardImages/Ace.png"),
      name: "aceOfClubs",
      status: "",
      id: 0,
    },
    {
      cardFace: require("../CardImages/Ace.png"),
      name: "aceOfClubsPair",
      status: "",
      id: 0,
    },

    {
      cardFace: require("../CardImages/Aceofhearts.png"),
      name: "aceOfHearts",
      status: "",
      id: 1,
    },
    {
      cardFace: require("../CardImages/Aceofhearts.png"),
      name: "aceOfHeartsPair",
      status: "",
      id: 1,
    },
    {
      cardFace: require("../CardImages/Aceofspades.png"),
      name: "aceOfSpades",
      status: "",
      id: 2,
    },
    {
      cardFace: require("../CardImages/Aceofspades.png"),
      name: "aceOfSpadesPair",
      status: "",
      id: 2,
    },
    {
      cardFace: require("../CardImages/Jackofdiamonds.png"),
      name: "jackOfDiamonds",
      status: "",
      id: 3,
    },
    {
      cardFace: require("../CardImages/Jackofdiamonds.png"),
      name: "jackOfDiamondsPair",
      status: "",
      id: 3,
    },
    {
      cardFace: require("../CardImages/King.png"),
      name: "kingOfClubs",
      status: "",
      id: 4,
    },
    {
      cardFace: require("../CardImages/King.png"),
      name: "kingOfClubsPair",
      status: "",
      id: 4,
    },
    {
      cardFace: require("../CardImages/Kingofhearts.png"),
      name: "kingOfHearts",
      status: "",
      id: 5,
    },
    {
      cardFace: require("../CardImages/Kingofhearts.png"),
      name: "kingOfHeartsPair",
      status: "",
      id: 5,
    },
  ];

  const [cards, setCards] = useState(
    cardsArray.sort(() => Math.random() - 0.5)
  );

  const selectHandler = (card) => {
    console.log(card);

    firstOption === null ? setFirstOption(card) : setSecondOption(card);
  };
  console.log(firstOption, "first");
  console.log(secondOption, "second");

  //TODO: fix bug where double clicking a single card reveals the pair
  const evaluate = () => {
    if (
      firstOption.name + "Pair" === secondOption.name ||
      firstOption.name - "Pair" === secondOption.name ||
      firstOption.name === secondOption.name + "Pair" ||
      firstOption.name === secondOption.name - "Pair"
    ) {
      setCards((prevCards) => {
        return prevCards.map((card) => {
          if (card.id === firstOption.id) {
            return { ...card, status: "matched" };
          } else {
            return card;
          }
        });
      });
      setFirstOption(null);
      setSecondOption(null);
    } else {
      setCards((prevCards) => {
        return prevCards.map((card) => {
          if (card.id === firstOption.id || card.id === secondOption.id) {
            return { ...card, status: "incorrect" };
          } else {
            return card;
          }
        });
      });
      setFirstOption(null);
      setSecondOption(null);
    }
  };

  if (firstOption && secondOption) {
    evaluate();
  }

  const shuffleHandler = () => {
    const shuffledArray = [...cards];
    setCards(() => {
      return shuffledArray.sort(() => Math.random() - 0.5);
    });
    alert("cards shuffled! :D");
  };

  return (
    <>
      <button onClick={shuffleHandler}>Shuffle Cards</button>
      <div className="grid">
        {cards.map((card, index) => {
          return (
            <Card
              cardFace={card.cardFace}
              key={index}
              id={card.id}
              card={card}
              index={index}
              status={card.status}
              selectHandler={selectHandler}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cards;

// const shuffleDeck = () => {
//     return;
//   };
