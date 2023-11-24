import { HotelState } from "../../reducers/types";

export interface Props {
  rating: HotelState.rating;
}

export type IconMap = {
  [key: string]: IconDefinition;
};
