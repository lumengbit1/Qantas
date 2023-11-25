import styled from "styled-components";

export const Root = styled.div`
  display: grid;
  row-gap: 1rem;
  width: 80rem;

  @media only screen and (max-width: 30rem) {
    width: 100vw;
  }
`;
