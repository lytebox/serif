import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Normalize } from "styled-normalize";
import HomePage from "../../components/pages/HomePage";
import DisplayPage from "../../components/pages/DisplayPage";
import ControllerPage from "../../components/pages/ControllerPage";
import Navbar from "../../components/common/Navbar";
// React router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContainer } from "./style";

const WithNavbarContainer = () => (
  <React.Fragment>
    <Navbar />
    <Route exact path="/" component={HomePage} />
    <Route exact path="/controller" component={ControllerPage} />
  </React.Fragment>
);

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Normalize />
        <Router>
          <Switch>
            <Route exact path="/display" component={DisplayPage} />
            <WithNavbarContainer />
          </Switch>
        </Router>
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
