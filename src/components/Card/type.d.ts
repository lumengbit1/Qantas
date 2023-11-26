import { HotelState } from "../../types/global";

export interface Props extends Omit<HotelState, "id"> {}

export interface InformationProps {
  $dark?: boolean;
}
