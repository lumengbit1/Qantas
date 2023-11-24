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
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { IconMapping } from "./type";

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

export const renderIconType = (type: string | undefined): string => {
  const isSelf = type?.toLocaleLowerCase() === "self";

  return isSelf ? "Circle" : "Star";
};

export const renderIcon = (
  value: number | undefined,
  type: string | undefined
): IconDefinition => {
  const mappingIcon: IconMapping = {
    faRegularStar: faRegularStar,
    faSolidStar: faSolidStar,
    faRegularCircle: faRegularCircle,
    faSolidCircle: faSolidCircle,
    faCircleHalfStroke: faCircleHalfStroke,
    faStarHalfStroke: faStarHalfStroke,
  };

  if (value === 1) {
    return mappingIcon[`faSolid${renderIconType(type)}`];
  }

  if (value === 0.5) {
    return mappingIcon[`fa${renderIconType(type)}HalfStroke`];
  }

  return mappingIcon[`faRegular${renderIconType(type)}`];
};
