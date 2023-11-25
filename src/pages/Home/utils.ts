import { HotelState } from "../../reducers/types";

export const getItemsPerPage = (
  items: HotelState[],
  size: number,
  pageNumber: number
) => {
  const startIndex = (pageNumber - 1) * size;
  const endIndex = startIndex + size;

  return items.slice(startIndex, endIndex);
};
