import styled, { css } from "styled-components";
import theme from "../../../theme";

const HomePageContainer = styled.div`
  width: 100%;
`;

const FullSlide = styled.div`
  height: 100vh;
  display: block;
`;

const FullSlideContent = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

const HeroSlide = styled.div`
  height: 90vh;
  display: block;
  background-color: ${theme.blue};
  background-image: url("/static/images/background/wave1i.svg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 101% auto;
`;

const HeroHeading = styled.h1`
  color: ${theme.white};
  font-size: 4em;
  padding-top: 3.5em;
  margin: 0;
  line-height: 1.2em;
  margin-bottom: 1em;
`;

export {
  HomePageContainer,
  FullSlide,
  FullSlideContent,
  HeroSlide,
  HeroHeading
};
