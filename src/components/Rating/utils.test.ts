import { numberToArray, renderIcon, renderIconType } from "./utils";
import {
  faCircle as faRegularCircle,
  faStar as faRegularStar,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCircle as faSolidCircle,
  faStar as faSolidStar,
  faCircleHalfStroke,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

describe("numberToArray", () => {
  it.each([
    [0, [0, 0, 0, 0, 0]],
    [1, [1, 0, 0, 0, 0]],
    [2, [1, 1, 0, 0, 0]],
    [2.5, [1, 1, 0.5, 0, 0]],
    [4.5, [1, 1, 1, 1, 0.5]],
    [5, [1, 1, 1, 1, 1]],
    [6, [1, 1, 1, 1, 1]],
  ])("when input is %s, should return %s", (input, expected) => {
    const result = numberToArray(input);

    expect(result).toStrictEqual(expected);
  });
});

describe("renderIcon", () => {
  it.each([
    [0, "star", faRegularStar],
    [1, "star", faSolidStar],
    [0.5, "star", faStarHalfStroke],
    [0, "self", faRegularCircle],
    [1, "self", faSolidCircle],
    [0.5, "self", faCircleHalfStroke],
    [undefined, undefined, faRegularStar],
  ])(
    "when input is %s and type is %s, should return %s",
    (input, type, expected) => {
      const result = renderIcon(input, type);

      expect(result).toStrictEqual(expected);
    }
  );
});

describe("renderIconType", () => {
  it.each([
    ["self", "Circle"],
    ["star", "Star"],
    [undefined, "Star"],
  ])("when input is %s, should return %s", (input, expected) => {
    const result = renderIconType(input);

    expect(result).toStrictEqual(expected);
  });
});
