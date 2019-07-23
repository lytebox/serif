import styled, { css } from "styled-components";

export const LyricCardContainer = styled.div`
  padding: 1em 0.5em;
  display: flex;
  min-height: 3em;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.05), 0 15px 12px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;

  ${props =>
    props.active &&
    css`
      background: lightblue;
      color: white;
    `}

  &:hover {
    cursor: pointer;
    color: white;
    background: lightblue;
  }
`;
