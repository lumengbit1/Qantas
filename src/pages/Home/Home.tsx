import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
// import { size } from "../../reducers/constants";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import Sort from "../../components/Sort/Sort";

import { Root } from "./Home.style";
import type { RootState } from "../../store/store";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page"));
  const hotels = useSelector((state: RootState) => state.hotelReducer);
  console.log(currentPage);

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
      <Pagination />
    </Root>
  );
};

export default HomePage;
