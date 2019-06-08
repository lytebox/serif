import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HelloWorld from "../../components/HelloWorld";

import { AppContainer } from "./style";

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <HelloWorld />
      </AppContainer>
    );
  }
}

App.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(
  null,
  mapDispatchToProps
)(App);
