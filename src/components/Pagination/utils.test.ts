import { sizeToPagination } from "./utils";

describe("sizeToPagination", () => {
  it.each([
    [15, 0, [1]],
    [15, 5, [1, 1, 1]],
    [15, 4, [1, 1, 1, 1]],
  ])(
    "when size is %s and number is %s, should return %s",
    (size, number, expected) => {
      const result = sizeToPagination(size, number);

      expect(result).toStrictEqual(expected);
    }
  );
});
