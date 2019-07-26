import styled, { css } from "styled-components";
import { MaxWidth } from "../Responsive";

const GridWrapper = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  margin-left: -16px;
  margin-right: -16px;
  ${props =>
    props.align
      ? css`
          align-items: ${props.align};
        `
      : null};
  ${props =>
    props.justify
      ? css`
          justify-content: ${props.justify};
        `
      : null};
  ${props =>
    props.text
      ? css`
          text-align: ${props.text};
        `
      : null};
`;

const ColWrapper = styled.div`
  ${props =>
    props.text
      ? css`
          text-align: ${props.text};
        `
      : null};
  ${props =>
    props.lg
      ? css`
          display: inline-block;
          flex-basis: unset;
          width: ${props.lg ? `${(props.lg / 12) * 100}%` : null};
          ${
            props.lg === "hidden"
              ? css`
                  display: none;
                `
              : null
          };
        };
        `
      : null};
  ${props =>
    props.md
      ? css`
          ${MaxWidth.md`
            display: inline-block;
            flex-basis: unset;
            width: ${props.md ? `${(props.md / 12) * 100}%` : null};
            ${
              props.md === "hidden"
                ? css`
                    display: none;
                  `
                : null
            };
          `};
        `
      : null};
  ${props =>
    props.sm
      ? css`
          ${MaxWidth.sm`
            display: inline-block;
            flex-basis: unset;
            width: ${props.sm ? `${(props.sm / 12) * 100}%` : null};
            ${
              props.sm === "hidden"
                ? css`
                    display: none;
                  `
                : null
            };
          `};
        `
      : null};
  ${props =>
    props.xs
      ? css`
          ${MaxWidth.xs`
            display: inline-block;
            flex-basis: unset;
            width: ${props.xs ? `${(props.xs / 12) * 100}%` : null};
            ${
              props.xs === "hidden"
                ? css`
                    display: none;
                  `
                : null
            };
          `};
        `
      : null};
`;

export { GridWrapper, ColWrapper };
