import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { numberToArray, renderIcon } from "./utils";
import { RatingContainer } from "./Rating.style";

import type { Props } from "./type";

const Rating = ({ rating }: Props) => {
  const ratingArray = numberToArray(rating.value);

  return (
    <RatingContainer>
      {ratingArray.map((value: number) => (
        <FontAwesomeIcon
          icon={renderIcon(value, rating.type)}
          className="icon"
        />
      ))}
    </RatingContainer>
  );
};

export default Rating;
