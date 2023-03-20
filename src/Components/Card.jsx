import ReactCardFlip from "react-card-flip";
import { useState } from "react";

const Card = ({ card, cardFace, selectHandler, index, status, id }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const reFlipHandler = () => {
    setIsFlipped((prev) => !prev);

    setTimeout(() => {
      setIsFlipped((prev) => !prev);
    }, 1000);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      {/* back component */}
      <div className="h-auto w-24">
        <img
          src={
            status === "matched"
              ? card.cardFace
              : require("../CardImages/Cardback.png")
          }
          alt={card}
          className="w-24 h-auto"
          onClick={() => {
            reFlipHandler();
            selectHandler(card, index);
          }}
        />
      </div>
      {/* front component */}
      <div className="h-auto w-24">
        <img src={cardFace} alt={card} className="w-24 h-auto" />
      </div>
    </ReactCardFlip>
  );
};

export default Card;
