import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import {
  faStar as faSolidStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export const numberToArray = (number: number): number[] => {
  const integerPart = Math.floor(number);
  const decimalPart = number - integerPart;
  const arr = Array(5).fill(0);

  for (let i = 0; i < integerPart; i++) {
    if (i < 5) {
      arr[i] = 1;
    }
  }

  if (decimalPart > 0) {
    if (integerPart < 5) {
      arr[integerPart] = decimalPart;
    }
  }

  return arr;
};

export const renderIcon = (value: number | undefined): IconDefinition => {
  if (value === 1) {
    return faSolidStar;
  }

  if (value === 0.5) {
    return faStarHalfStroke;
  }

  return faRegularStar;
};
