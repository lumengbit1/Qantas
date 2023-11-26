import { getItemsPerPage } from "./utils";
import type { HotelState } from "../../types/global";

describe("getItemsPerPage", () => {
  it.each([
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3, 2, [4, 5, 6]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 5, 1, [1, 2, 3, 4, 5]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 2, 4, [7, 8]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 2, undefined, [1, 2]],
  ])(
    "when size is %s and number is %s, should return %s",
    (input, size, pageNumber, expected) => {
      const result = getItemsPerPage(
        input as unknown as HotelState[],
        size,
        pageNumber
      );

      expect(result).toStrictEqual(expected);
    }
  );
});
