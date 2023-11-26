import styled from "styled-components";
import type { PaginationProps } from "./type";

export const Root = styled.div`
  display: flex;
  margin-top: 2rem;

  & > * {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const NavItem = styled.button<PaginationProps>`
  background-color: lightblue;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
    color: white;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    pointer-events: none;
  }

  ${({ $active }) =>
    $active &&
    `
        background-color: lightgreen;
        color: white;
        pointer-events: none;
    `}
`;
