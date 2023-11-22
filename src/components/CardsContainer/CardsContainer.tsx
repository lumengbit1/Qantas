import { Props } from "./type";
import { Root } from "./CardsContainer.style";

const CardsContainer = ({ children }: Props) => {
  return <Root>{children}</Root>;
};

export default CardsContainer;
