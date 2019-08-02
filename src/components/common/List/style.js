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

const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 0.5em 1em;
  transition: all 0.1s;

  &:nth-child(even) {
    background-color: ${theme.grey};
  }

  &:hover {
    background-color: ${theme.blue};
    color: ${theme.white};
    cursor: pointer;
  }

  ${prop =>
    prop.active &&
    css`
      &:nth-child(even) {
        background-color: ${theme.blue};
      }
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

export { ListContainer, ListWrapper, ListItemWrapper };
