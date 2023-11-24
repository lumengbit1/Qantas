import styled from "styled-components";
import { InformationProps } from "./type";

const padding = "1rem";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  box-shadow: 0 0.25rem 0.625rem rgb(0 0 0 / 0.2);
  justify-content: start;
  border-radius: 0.5rem;

  @media only screen and (max-width: 30rem) {
    grid-template-columns: auto;
  }
`;

export const ImageContainer = styled.div`
  img {
    height: 100%;
    width: 100%;

    @media only screen and (max-width: 30rem) {
      width: 100%;
    }
  }
`;

export const HotelContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 1rem;
  align-items: start;
  padding: ${padding};
  justify-content: space-between;
  box-sizing: border-box;

  @media only screen and (max-width: 30rem) {
    grid-template-columns: auto;
  }
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(5, auto);
  row-gap: 1rem;
  align-items: start;
`;

export const HotelName = styled.span`
  font-weight: 800;
  font-size: 2rem;
`;

export const Information = styled.span<InformationProps>`
  display: flex;
  color: ${(props) => (props.$dark ? "#555555" : "#838383")};
`;

export const InclusionsContainer = styled.ul`
  padding-left: ${padding};
  margin-top: 0;

  li {
    font-size: 0.75rem;
  }
`;

export const PriceContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  row-gap: 1rem;
  justify-content: end;
  padding-top: calc(${padding} / 2);

  .price {
    font-size: 1.5rem;
    font-weight: 800;
  }

  @media only screen and (max-width: 30rem) {
    justify-content: start;
  }
`;
