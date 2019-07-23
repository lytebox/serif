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
  .callToAction {
    margin: 3em 0;
  }
  .ctaButton {
    font-size: 2em;
    color: #fff;
    background: #222;
    padding: 0.5em 2em;
    border: 1px solid #333;
    border-radius: 1em;
    text-decoration: none;
    transition: all 0.2s;
  }
  .ctaButton:hover {
    background-color: transparent;
    color: #222;
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
  .hidden {
    display: none;
  }
`;
