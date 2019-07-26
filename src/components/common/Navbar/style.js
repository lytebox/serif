import styled from "styled-components";
import theme from "../../../theme";

const NavbarWrapper = styled.div`
  display: flex;
  background: ${theme.blue};
  color: ${theme.white};
  flex-wrap: wrap;

  .title {
    padding: 1em;
  }
  .divider {
    flex: 1;
  }
  .menuContainer {
    padding: 1em;
  }
  .menu {
    color: ${theme.white};
    text-decoration: none;
    padding: 1em;
    font-weight: bold;
  }
  .menu:hover {
    text-decoration: underline;
  }
`;

const NavbarContainer = styled.div`
  padding: 1em;
`;

export { NavbarWrapper, NavbarContainer };
