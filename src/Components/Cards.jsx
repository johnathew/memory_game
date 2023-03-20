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
      name: "aceOfClubs",
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
      name: "aceOfHearts",
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
      name: "aceOfSpades",
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
      name: "jackOfDiamonds",
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
      name: "kingOfClubs",
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
      name: "kingOfHearts",
      status: "",
      id: 5,
    },
  ];

  const [cards, setCards] = useState(
    cardsArray.sort(() => Math.random() - 0.5)
  );

  const selectHandler = (card) => {
    firstOption ? setSecondOption(card) : setFirstOption(card);
  };

  const evaluate = () => {
    if (firstOption.name === secondOption.name) {
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

  return (
    <>
      <button>Shuffle Cards</button>
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
