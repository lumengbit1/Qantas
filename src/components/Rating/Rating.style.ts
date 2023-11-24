import styled from "styled-components";

export const RatingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-content: start;
  column-gap: 0.3rem;

  .icon {
    color: #f3c72b;
    font-size: 0.5rem;
  }
`;
