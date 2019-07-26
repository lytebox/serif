import styled from "styled-components";

const ControllerPageContainer = styled.div`
  margin: 0 3em;
  height: 100%;
  .divider {
    flex: 1;
  }
  .songTitle {
    font-weight: bold;
    font-size: 2em;
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

const SectionContainer = styled.div`
  display: inline-block;
  width: calc(100% / 3);
  vertical-align: top;
  height: 100%;
`;
const SectionTitle = styled.div`
  font-weight: bold;
`;

const ListContainer = styled.div`
  height: 100%;
  max-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export {
  ControllerPageContainer,
  SectionContainer,
  SectionTitle,
  ListContainer
};
