import styled, { css } from "styled-components";

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

  h3 {
    margin: 0;
    margin-bottom: 0.5em;
  }
  p {
    margin-top: 0;
  }
`;

export { ListContainer, ListWrapper, ListItemWrapper };
