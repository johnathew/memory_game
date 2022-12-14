import imageFiles from "./assets/ImageFiles";

const Card = (props) => {

    return (
        <div>
          <img
            src={`${props.flipped}`}
            alt={props.alt}
            height="auto"
            width="80px"
            id={props.id}
            onClick={props.flipHandler}
          />
        </div>
      );

}

export default Card;