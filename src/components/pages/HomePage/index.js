import React from "react";

import {
  HomePageContainer,
  FullSlide,
  FullSlideContent,
  HeroSlide,
  HeroSlideContent,
  HeroHeading
} from "./style";
import { Button } from "../../common";
import { Grid, Col } from "../../layout";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { inputLyric } from "../../../actions/lyricAction";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songTitle: "",
      songLyric: "",
      hasSubmitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch (event.target.id) {
      case "songTitle":
        this.setState({
          ...this,
          songTitle: event.target.value
        });
        break;
      case "songLyric":
        this.setState({
          ...this,
          songLyric: event.target.value
        });
        break;
    }
  }

  handleSubmit() {
    let lyricArray = this.state.songLyric.split("\n\n");
    let newState = {
      ...this.state,
      songLyric: lyricArray
    };
    this.props.inputLyric(newState);
  }

  render() {
    return (
      <HomePageContainer>
        <HeroSlide>
          <HeroSlideContent>
            <Grid justify="center" text="left">
              <Col lg={6} md={12} sm={12}>
                <HeroHeading>
                  One platform,
                  <br />
                  Endless possibilities.
                </HeroHeading>
                <Link to="/controller">
                  <Button invert large outline>
                    Launch Controller
                  </Button>
                </Link>
              </Col>
              <Col lg={6} md={12} sm={12}>
                {/* Insert image / decoration here */}
              </Col>
            </Grid>
          </HeroSlideContent>
        </HeroSlide>
      </HomePageContainer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    inputLyric: song => dispatch(inputLyric(song))
  };
}

HomePage.propTypes = {};

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
