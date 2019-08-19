import styled, { css } from "styled-components";
import theme from "../../../theme";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${props => css`
    flex-grow: ${props.flexGrow || 1};
    flex-shrink: ${props.flexShrink || 1};
  `}
  margin: 1em 2em;
  background: ${theme.white};
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.162902);
  overflow: hidden;
`;

const CardHeading = styled.h1`
  margin: 0;
  padding: 0.6em 1em;

  ${props =>
    props.onClick &&
    css`
      cursor: pointer;
    `}

  ${props =>
    props.grey &&
    css`
      color: ${theme.greyDark};
    `}
`;

const CardBody = styled.div`
  padding: 1em;
`;

export { CardWrapper, CardHeading, CardBody };
