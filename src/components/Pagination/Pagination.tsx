import { useSelector } from "react-redux";
import CardsContainer from "../CardsContainer/CardsContainer";
import Card from "../Card/Card";
import Sort from "../Sort/Sort";
import { Root } from "./Pagination.style";
import type { RootState } from "../../store/store";

const Pagination = () => {
  const hotels = useSelector((state: RootState) => state.hotelReducer);

  return (
    <Root>
      <Sort />
      <CardsContainer>
        {hotels.map((hotel) => (
          <Card
            key={hotel.id}
            name={hotel.name}
            heroImage={hotel.heroImage}
            location={hotel.location}
            rating={hotel.rating}
            sleep={hotel.sleep}
            price={hotel.price}
            inclusions={hotel.inclusions}
          />
        ))}
      </CardsContainer>
    </Root>
  );
};

export default Pagination;
