import styled, { css } from "styled-components";
import theme from "../../../theme";

const HomePageContainer = styled.div`
  width: 100%;
`;

const FullSlide = styled.div`
  height: 100vh;
  display: block;

  ${props =>
    props.backgroundURL &&
    css`
      background-image: url('${props.backgroundURL}');
      background-repeat: no-repeat;
      background-position: 0 -5px;
      background-size: 100% auto;
      color: ${theme.white}
    `}
`;

const FullSlideContent = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

const HeroHeading = styled.h1`
  color: ${theme.white};
  font-size: 4em;
  padding-top: 3.5em;
  margin: 0;
`;

export { HomePageContainer, FullSlide, FullSlideContent, HeroHeading };
