const Card = (props) => {

    return (
        <div>
          <img
            src={`${props.flipped}`}
            alt={props.alt}
            height="auto"
            width="80px"
            onClick={()=> props.toggle(props.id)}
            value={props.value}
          />
        </div>
      );

}

export default Card;