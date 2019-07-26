import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { NavbarWrapper, NavbarContainer } from "./style";

class Navbar extends React.Component {
  render() {
    return (
      <NavbarWrapper>
        <NavbarContainer>
          <Link className="menu" to="/">
            Project-Sinai
          </Link>
        </NavbarContainer>
        <div className="divider" />
        <NavbarContainer>
          <Link className="menu" to="/controller">
            Controller
          </Link>
          <Link className="menu" to="/display" target="_blank">
            Display
          </Link>
          <Link className="menu" to="/">
            Sign in
          </Link>
        </NavbarContainer>
      </NavbarWrapper>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
