import styled, { css } from "styled-components";
import theme from "../../../theme";

const ListContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
`;

const ListWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const ListBackgroundColorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.white};
  &:nth-child(even) {
    background-color: ${theme.grey};
  }
`;

const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 0.5em 1em;
  transition: all 0.1s;

  &:hover {
    background-color: ${theme.blue};
    color: ${theme.white};
    cursor: pointer;
  }

  &:hover div:after {
    color: ${theme.white};
  }

  &:active {
    transform: translateY(3px);
  }

  ${prop =>
    prop.addMargin &&
    css`
      margin-top: 2em;
    `}

  ${prop =>
    prop.active &&
    css`
      background-color: ${theme.blue};
      color: ${theme.white};
    `}

  h3 {
    margin: 0;
    margin-bottom: 0.5em;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5em;
  }
`;

const ListItemButton = styled.div`
  overflow: hidden;
  &:after {
    content: "${prop => prop.label}";
    cursor: pointer;
    padding: 5px 25px;
    font-size: 3.5em;
    color: ${theme.greyDark};
    transition: all 0.1s;
    overflow: hidden;
  }
  &:hover:after {
    color: ${theme.white};
    background-color: ${theme.blue};
  }
  &:active {
    transform: translateY(3px);
  }
`;

export {
  ListContainer,
  ListWrapper,
  ListBackgroundColorWrapper,
  ListItemWrapper,
  ListItemButton
};
