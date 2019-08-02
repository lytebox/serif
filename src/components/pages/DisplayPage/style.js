import styled from "styled-components";

export const DisplayPageContainer = styled.div`
  max-height: 100vh;
  .divider {
    flex: 1;
  }
  .container {
    display: flex;
    width: 100vw;
    height: 100vh;
    background: black;
    flex-direction: column;
    justify-content: center;
  }
  .watermarkContainer {
    display: flex;
    min-width: 100vw;
    align-self: flex-start;
    flex-direction: row;
    align-items: flex-end;
    position: absolute;
    right: 0;
    top: 0;
  }
  .lyricContainer {
    align-self: center;
    font-family: "Oxygen Sans", Roboto, sans-serif;
    font-weight: bold;
    font-size: 3em;
    color: white;
  }
`;
