import Rating from "../Rating/Rating";
import { Props } from "./type";
import {
  CardContainer,
  HotelContainer,
  HotelName,
  ImageContainer,
  InfoContainer,
  Information,
  PriceContainer,
} from "./Card.style";

const Card = ({ name, heroImage, location, rating, sleep, price }: Props) => {
  return (
    <CardContainer>
      <ImageContainer role="img" aria-label="hotel_image">
        <img src={heroImage} alt="hotel" />
      </ImageContainer>
      <HotelContainer>
        <InfoContainer>
          <HotelName aria-label="hotel_name">{name}</HotelName>
          <Information aria-label="hotel_location">
            {`${location.city}${
              location.country ? `, ${location.country}` : null
            }`}
          </Information>
          <Rating aria-label="hotel_rating" rating={rating} />
          <Information $dark>{sleep ? `Sleeps ${sleep}` : null}</Information>
        </InfoContainer>
        {price.total.amount && price.total.currency && (
          <PriceContainer>
            <span>
              1 night from&nbsp;
              {price.total.currency ? `[${price.total.currency}]` : null}
            </span>
            <span className="price">
              <sup>$</sup>
              <span>{price.total.amount}</span>
            </span>
          </PriceContainer>
        )}
      </HotelContainer>
    </CardContainer>
  );
};

export default Card;
