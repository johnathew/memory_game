export interface CardTypes {
  cardFace?: string;
  name?: string;
  id: number;
}

export type CardProps = {
  cardInfo: CardTypes;
  cardFace: string;
  options: CardTypes[];
  setOptions: React.Dispatch<React.SetStateAction<CardTypes[]>>;
  setFlippedStates: React.Dispatch<React.SetStateAction<boolean[]>>;
  checkAllFlipped: (flippedStates: boolean[]) => void;
  isFlipped: boolean;
  index: number;
};
