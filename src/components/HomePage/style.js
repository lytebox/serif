import styled from "styled-components";

export const HomePageContainer = styled.div`
  .container {
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
    flex-direction: column;
    align-content: center;
    text-align: center;
  }
  .mainTitle {
    font-size: 3em;
    font-weight: bold;
    padding-top: 1em;
  }
  .subtitle {
    padding-top: 1em;
    font-size: 2em;
  }
  .divider {
    flex: 0.2;
  }
  .inputContainer {
    font-size: 2em;
    padding-top: 2em;
  }
  #songLyric {
    height: 200px;
    width: 100%;
  }
  .inputLabel {
    font-size: 1em;
  }
  .formContainer {
    padding-bottom: 2em;
    padding-top: 1em;
  }
`;
