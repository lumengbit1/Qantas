import Rating from "../Rating/Rating";
import { CurrencyMapping } from "./constants";
import { Props } from "./type";
import {
  CardContainer,
  HotelContainer,
  HotelName,
  ImageContainer,
  InclusionsContainer,
  InfoContainer,
  Information,
  PriceContainer,
} from "./Card.style";

const Card = ({
  name,
  heroImage,
  location,
  rating,
  sleep,
  price,
  inclusions,
}: Props) => {
  return (
    <CardContainer>
      <ImageContainer role="img" aria-label="hotel_image">
        <img src={heroImage} alt="hotel" />
      </ImageContainer>
      <HotelContainer>
        <InfoContainer>
          <HotelName aria-label="hotel_name">{name}</HotelName>
          <Information aria-label="hotel_location">
            {`${location.city}, ${location.country}`}
          </Information>
          <Rating aria-label="hotel_rating" rating={rating} />
          <Information $dark>{`Sleeps ${sleep}`}</Information>
          <InclusionsContainer aria-label="hotel_inclusions">
            {inclusions.map((inclusion: string) => (
              <li key={inclusion} aria-label={inclusion}>
                {inclusion}
              </li>
            ))}
          </InclusionsContainer>
        </InfoContainer>
        {price.total.amount && price.total.currency && (
          <PriceContainer>
            <span className="currency">
              1 night from [{price.total.currency}]
            </span>
            <span className="price">
              <sup>{CurrencyMapping[price.total.currency.toUpperCase()]}</sup>
              <span>{price.total.amount}</span>
            </span>
          </PriceContainer>
        )}
      </HotelContainer>
    </CardContainer>
  );
};

export default Card;
