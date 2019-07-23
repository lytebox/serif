import styled from "styled-components";

export const ControllerPageContainer = styled.div`
  margin-left: 3em;
  margin-right: 3em;
  flex-wrap: wrap;
  .divider {
    flex: 1;
  }
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .lyricContainer {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .songTitle {
    font-weight: bold;
    font-size: 4em;
  }
  .lyrics {
    margin-top: 1em;
    min-height: 100vh;
    max-width: 50vw;
  }
  .currentContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .currentLyric {
    font-weight: bold;
    font-size: 2em;
    text-align: left;
  }
`;
