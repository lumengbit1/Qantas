import { HotelState } from "../../reducers/types";

export interface Props {
  name: HotelState.name;
  heroImage: HotelState.heroImage;
  location: HotelState.location;
  rating: HotelState.rating;
  sleep: HotelState.sleep;
}

interface InformationProps {
  $dark?: boolean;
}
