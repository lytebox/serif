import React from "react";
import PropTypes from "prop-types";

import { ControllerPageContainer } from "./style";

class ControllerPage extends React.Component {
  render() {
    return (
      <ControllerPageContainer>
        <h1>Ini controller page</h1>
      </ControllerPageContainer>
    );
  }
}

ControllerPage.propTypes = {};

export default ControllerPage;
