import { describe, it, expect } from "vitest";
import { numberToArray, renderIcon } from "./utils";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import {
  faStar as faSolidStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

describe("numberToArray", () => {
  it.each([
    [0, [0, 0, 0, 0, 0]],
    [1, [1, 0, 0, 0, 0]],
    [2, [1, 1, 0, 0, 0]],
    [2.5, [1, 1, 0.5, 0, 0]],
    [4.5, [1, 1, 1, 1, 0.5]],
    [5, [1, 1, 1, 1, 1]],
    [6, [1, 1, 1, 1, 1]],
  ])(
    "when input is %s, should return %s",
    (input: number, expected: number[]) => {
      const result = numberToArray(input);

      expect(result).toStrictEqual(expected);
    }
  );
});

describe("renderIcon", () => {
  it.each([
    [0, faRegularStar],
    [1, faSolidStar],
    [0.5, faStarHalfStroke],
    [undefined, faRegularStar],
  ])(
    "when input is %s, should return %s",
    (input: number | undefined, expected: IconDefinition) => {
      const result = renderIcon(input);

      expect(result).toStrictEqual(expected);
    }
  );
});
