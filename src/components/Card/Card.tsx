import Rating from "../Rating/Rating";
import { Props } from "./type";
import { CardContainer, HotelContainer, InfoContainer } from "./Card.style";

const Card = ({ name, heroImage, location, rating }: Props) => {
  return (
    <CardContainer>
      <HotelContainer>
        <div role="img" aria-label="hotel image">
          <img src={heroImage} alt="hotel" />
        </div>
        <InfoContainer>
          <p> {name}</p>
          <p> {location.city}</p>
          <p> {rating.value}</p>
          <Rating rating={rating} />
        </InfoContainer>
      </HotelContainer>
      <p> {name}</p>
    </CardContainer>
  );
};

export default Card;
