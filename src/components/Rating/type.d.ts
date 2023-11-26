import { HotelState } from "../../types/global";

export interface Props extends Pick<HotelState, "rating"> {}

export type IconMapping = {
  [key: string]: IconDefinition;
};
