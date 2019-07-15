import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { NavbarContainer } from "./style";

class Navbar extends React.Component {
  render() {
    return (
      <NavbarContainer>
        <div className="container">
          <div className="title">
            <Link className="menu" to="/">
              Project-Sinai
            </Link>
          </div>
          <div className="divider" />
          <div className="menuContainer">
            <Link className="menu" to="/controller">
              Controller
            </Link>
            <a className="menu" href="/display" target="_blank">
              Display
            </a>
            <Link className="menu" to="/">
              Logout
            </Link>
          </div>
        </div>
      </NavbarContainer>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
