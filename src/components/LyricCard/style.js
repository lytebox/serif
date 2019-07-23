import styled, { css } from "styled-components";

export const LyricCardContainer = styled.div`
  padding: 1em 0.5em;
  display: flex;
  min-height: 3em;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.05), 0 15px 12px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  flex-direction: row;
  justify-content: left;
  align-items: left;
  background: white;
  color: black;
  white-space: pre-wrap;

  ${props =>
    props.active &&
    css`
      background: lightblue;
      color: white;
    `}

  ${props =>
    props.highlight &&
    css`
      border-left: 5px solid darkblue;
      margin-top: 0.5em;
    `}

  &:hover {
    cursor: pointer;
    color: white;
    background: lightblue;
  }
`;
