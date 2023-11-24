import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  box-shadow: 0 0.25rem 0.625rem rgb(0 0 0 / 0.2);
`;

export const HotelContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 1rem;
`;
