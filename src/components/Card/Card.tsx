import { Props } from "./type";
import { Root } from "./Card.style";

const Card = ({ name }: Props) => {
  return <Root>{name}</Root>;
};

export default Card;
