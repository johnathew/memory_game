import ReactCardFlip from "react-card-flip";
import { useEffect, useState } from "react";
import Cardback from '/Cardback.png'
import { CardProps, CardTypes } from "../../types/cardTypes";
import styles from './Card.module.css'


export const Card = ({ cardInfo, cardFace, setOptions, options, setFlippedStates, isFlipped, index, checkAllFlipped }: CardProps) => {
    const [evaluating, setIsEvaluating] = useState(false)

    const selectHandler = (card: CardTypes) => {
        if (!evaluating) {
            setFlippedStates((prev) => {
                const newFlippedStates = [...prev]
                newFlippedStates[index] = !newFlippedStates[index];
                checkAllFlipped(newFlippedStates)
                return newFlippedStates;
            })
            setOptions((prev) => {
                if (prev.length === 0) {
                    return [card]
                } else if (prev.length === 1) {
                    return [...prev, card]
                }
                return prev
            })
        }
    }

    useEffect(() => {
        if (options.length === 2) {
            evaluate()
            setIsEvaluating(true)
        }
    }, [options])

    const evaluate = () => {
        setTimeout(() => {
            if (options[0].name === options[1].name) {
                if (cardInfo.id === options[0].id || cardInfo.id === options[1].id) {
                    setFlippedStates((prev) => {
                        const newFlippedStates = [...prev]
                        newFlippedStates[index] = true
                        return newFlippedStates;
                    })
                }
                setOptions([])
                setIsEvaluating(false)
            } else {
                if (cardInfo.id === options[0].id || cardInfo.id === options[1].id) {
                    setFlippedStates((prev) => {
                        const newFlippedStates = [...prev]
                        newFlippedStates[index] = !newFlippedStates[index];
                        return newFlippedStates;
                    })
                }
                setOptions([])
                setIsEvaluating(false)
            }
        }, 700)
    }


    return (
        <ReactCardFlip isFlipped={isFlipped}>
            {/* back component */}
            <div
                role="button"
                tabIndex={0}
                aria-label={`Card ${index + 1} front`}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        selectHandler(cardInfo);
                    }
                }}
                onClick={() => selectHandler(cardInfo)}
            >
                <img
                    src={Cardback}
                    alt={`Card ${index + 1} back`}
                    className={styles.card}
                />
            </div>
            {/* front component */}
            <div
                role="button"
                aria-label={`Card ${index + 1} front`}
            >
                <img src={cardFace} alt={`Card ${index + 1} front`} className={styles.card} />
            </div>
        </ReactCardFlip>
    );
};

