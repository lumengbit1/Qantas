import Rating from "../Rating/Rating";
import { Props } from "./type";
import {
  CardContainer,
  HotelContainer,
  HotelName,
  InfoContainer,
  Information,
} from "./Card.style";

const Card = ({ name, heroImage, location, rating, sleep }: Props) => {
  return (
    <CardContainer>
      <HotelContainer>
        <div role="img" aria-label="hotel_image">
          <img src={heroImage} alt="hotel" />
        </div>
        <InfoContainer>
          <HotelName aria-label="hotel_name">{name}</HotelName>
          <Information aria-label="hotel_location">
            {`${location.city}${
              location.country ? `, ${location.country}` : null
            }`}
          </Information>
          <Rating aria-label="hotel_rating" rating={rating} />
          <Information aria-label="hotel_room" $dark>
            {sleep ? `Sleeps ${sleep}` : null}
          </Information>
        </InfoContainer>
      </HotelContainer>
      <p> {name}</p>
    </CardContainer>
  );
};

export default Card;
