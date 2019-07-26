import styled, { css } from "styled-components";
import theme from "../../../theme";

const CardWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  margin: 1em 2em;
  background: ${theme.white};
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.162902);
`;

const CardHeading = styled.h1`
  margin: 0;
  padding: 0.6em 1em;
`;

export { CardWrapper, CardHeading };
