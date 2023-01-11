const Card = (props) => {

    return (
        <div onClick={props.toggle}>
          <img
            src={`${props.src}`}
            alt={props.alt}
            height="auto"
            width="80px"
            value={props.id}
          />
        </div>
      );

}

export default Card;