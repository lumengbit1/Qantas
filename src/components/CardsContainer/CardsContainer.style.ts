import styled from "styled-components";

export const Root = styled.div`
  display: grid;
  row-gap: 1rem;
  max-width: 80rem;
  min-width: 60rem;
  box-sizing: border-box;

  @media only screen and (max-width: 30rem) {
    max-width: 100%;
  }
`;
