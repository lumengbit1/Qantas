import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { decrement, increment } from "../../reducers/reducer";
import CardsContainer from "../CardsContainer/CardsContainer";
import Card from "../Card/Card";
import { Root } from "./Home.style";

const HomePage = () => {
  const hotels = useSelector((state: RootState) => state.hotelReducer);
  const dispatch = useDispatch();

  return (
    <Root>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>

      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <CardsContainer>
        {hotels.map((hotel) => (
          <Card
            key={hotel.id}
            name={hotel.name}
            heroImage={hotel.heroImage}
            location={hotel.location}
            rating={hotel.rating}
          />
        ))}
      </CardsContainer>
    </Root>
  );
};

export default HomePage;
