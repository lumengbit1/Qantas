import { Root } from "./CardsContainer.style";
import type { Props } from "./type";

const CardsContainer = ({ children }: Props) => {
  return <Root>{children}</Root>;
};

export default CardsContainer;
