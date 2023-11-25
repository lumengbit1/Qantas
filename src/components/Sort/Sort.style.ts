import styled from "styled-components";

export const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 1rem;
  align-items: center;
  width: 12rem;
  margin-bottom: 1rem;
`;

export const SortButton = styled.button`
  border: solid 1px blue;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: lightblue;
  }
`;
