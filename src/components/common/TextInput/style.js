import styled, { css } from "styled-components";
import theme from "../../../theme";

const CommonStyle = css`
  background: ${theme.white};
  border: 0;
  border-bottom: 1px solid ${theme.grey};
  transition: all 0.2s;

  &:hover,
  &:focus {
    border-bottom: 1px solid ${theme.greyDark};
    background-color: ${theme.grey};
  }
`;

const TextInputWrapper = styled.input`
  ${CommonStyle}
  display: block;
  padding: 0.75em 1.5em;
`;

const TextAreaWrapper = styled.textarea`
  ${CommonStyle}
  display: flex;
  flex: 1;
  padding: 1em 1.5em;
  resize: none;
`;

export { TextInputWrapper, TextAreaWrapper };
