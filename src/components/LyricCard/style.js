import styled from "styled-components";

export const LyricCardContainer = styled.div`
  padding-bottom: 2em;
  .container {
    display: flex;
    min-height: 3em;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.05), 0 15px 12px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .clicked {
    background: lightblue;
    color: white;
  }
  .notClicked {
    background: white;
    color: black;
  }
`;
