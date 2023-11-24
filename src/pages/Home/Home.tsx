import { useSelector } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Card from "../../components/Card/Card";
import Sort from "../../components/Sort/Sort";
import { Root } from "./Home.style";
import type { RootState } from "../../store/store";

const HomePage = () => {
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

export default HomePage;
