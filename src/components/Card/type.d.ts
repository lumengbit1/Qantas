import { HotelState } from "../../reducers/types";

export interface Props {
  name: HotelState.name;
  heroImage: HotelState.heroImage;
  location: HotelState.location;
  rating: HotelState.rating;
  sleep: HotelState.sleep;
  price: HotelState.price;
  inclusions: HotelState.inclusions;
}

export interface InformationProps {
  $dark?: boolean;
}
