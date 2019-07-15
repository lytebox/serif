import styled from "styled-components";

export const NavbarContainer = styled.div`
  .container {
    display: flex;
    background: #fdfdfd;
    height: 5em;
    flex-wrap: wrap;
  }

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
    color: #010101;
    text-decoration: none;
    font-size: 2em;
    padding: 1em;
  }
  .menu:hover {
    text-decoration: underline;
  }
`;
