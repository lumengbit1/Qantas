import styled from "styled-components";

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

export const NavItem = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
`;
