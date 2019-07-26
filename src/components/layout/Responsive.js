import { css } from "styled-components";

const BreakPoints = {
  xxl: 1700,
  xl: 1440,
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 576
};

// iterate through the sizes and create a media template
const MinWidth = Object.keys(BreakPoints).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = BreakPoints[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

const MaxWidth = Object.keys(BreakPoints).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = BreakPoints[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export { MinWidth, MaxWidth };
