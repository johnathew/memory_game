import { useEffect, useRef, useState } from "react";
import { CardTypes } from "../../types/cardTypes"
import { cardsArray } from "../../data/cards"
import styles from './Cards.module.css'
import { Card } from "../Card";
import WonModal from "../WonModal";


const Cards = () => {
    const [cards, setCards] = useState<CardTypes[]>(cardsArray);
    const [options, setOptions] = useState<CardTypes[]>([]);
    const [flippedStates, setFlippedStates] = useState<boolean[]>(new Array(cards.length).fill(false));

    const dialog = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const shuffledArray = [...cards];
        setCards(() => {
            return shuffledArray.sort(() => Math.random() - 0.5);
        });
    }, [])

    const checkAllFlipped = (flippedStates: boolean[]) => {
        if (flippedStates.every(state => state)) {
            dialog?.current?.showModal();
        }
    };

    const newGame = () => {
        setCards((prev) => {
            const newOrder = [...prev]
            const shuffled = newOrder.sort(() => Math.random() - 0.5);
            return shuffled
        });
        setFlippedStates(new Array(cards.length).fill(false))
    }

    return (
        <>
            <WonModal ref={dialog} />
            <div className={styles.cardsMain}>
                <div className={styles.title}>
                    <h1>Memory Game</h1>
                </div>
                <div className={styles.buttonDiv}>
                    <button onClick={newGame}>New Game</button>
                </div>
                <div className={styles.gridStyle}>
                    {cards?.map((card, index) => {
                        return (
                            <Card
                                cardFace={card.cardFace || ""}
                                key={index}
                                cardInfo={card}
                                index={index}
                                options={options}
                                setOptions={setOptions}
                                isFlipped={flippedStates[index]}
                                setFlippedStates={setFlippedStates}
                                checkAllFlipped={checkAllFlipped}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};


export default Cards;
