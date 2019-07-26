import styled, { css } from "styled-components";
import theme from "../../../theme";

const HomePageContainer = styled.div`
  width: 100%;
`;

const FullSlide = styled.div`
  height: 100vh;
  display: block;
  padding: 0 10%;
`;

const FullSlideContent = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

const HeroSlide = styled.div`
  height: 90vh;
  display: block;
  padding: 0 10%;
  color: ${theme.white};
  background-color: ${theme.blue};
  background-image: url("/static/images/background/wave1i.svg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 101% auto;
`;

const HeroSlideContent = styled.div`
  padding-top: 14em;
`;

const HeroHeading = styled.h1`
  color: ${theme.white};
  font-size: 4em;
  margin: 0;
  line-height: 1.2em;
  margin-bottom: 1em;
`;

export {
  HomePageContainer,
  FullSlide,
  FullSlideContent,
  HeroSlide,
  HeroSlideContent,
  HeroHeading
};
