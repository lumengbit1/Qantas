import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;

  @media only screen and (max-width: 30rem) {
    padding: 0;
  }
`;
