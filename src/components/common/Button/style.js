import styled, { css } from "styled-components";
import theme from "../../../theme";

const ButtonWrapper = styled.button`
  color: ${theme.white};
  background: ${theme.blue};
  border: 1px solid ${theme.blue};
  border-radius: 1em;
  padding: 0.2em 1em;
  cursor: pointer;
  transition: all 0.2s;

  ${props =>
    props.large &&
    css`
      font-size: 2em;
      border-width: 4px;
    `}

  ${props =>
    props.invert &&
    css`
      border: 1px solid ${theme.white};
      &:hover {
        border: 1px solid ${theme.blue};
      }

      ${props.outline
        ? css`
            background: ${theme.blue};
            color: ${theme.white};
            &:hover {
              background: ${theme.white};
              color: ${theme.blue};
            }
          `
        : css`
            background: ${theme.white};
            color: ${theme.blue};
            &:hover {
              background: ${theme.blue};
              color: ${theme.white};
            }
          `}
    `}
`;

const FullWidthButtonWrapper = styled.button`
  color: ${theme.greyDark};
  background: ${theme.grey};
  width: 100%;
  padding: 0.5em 1em;
  text-align: center;
  font-size: 1.2em;
  border: 0;
`;

export { ButtonWrapper, FullWidthButtonWrapper };
