import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { numberToArray, renderIcon } from "./utils";
import { Props } from "./type";
import { RatingContainer } from "./Rating.style";

const Rating = ({ rating }: Props) => {
  const ratingArray = numberToArray(rating.value);
  return (
    <RatingContainer>
      {ratingArray.map((value: number) => (
        <FontAwesomeIcon icon={renderIcon(value)} className="icon" />
      ))}
    </RatingContainer>
  );
};

export default Rating;
