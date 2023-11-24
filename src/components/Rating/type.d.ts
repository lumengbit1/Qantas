import { HotelState } from "../../reducers/types";

export interface Props {
  rating: HotelState.rating;
}

export type IconMapping = {
  [key: string]: IconDefinition;
};
