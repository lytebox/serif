import React from "react";

import {
  HomePageContainer,
  FullSlide,
  FullSlideContent,
  HeroSlide,
  HeroHeading
} from "./style";
import { Button } from "../../common";
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
          <FullSlideContent>
            <HeroHeading>
              One platform
              <br />
              Endless possibilities.
            </HeroHeading>
            <Button invert large outline>
              Launch Controller
            </Button>
          </FullSlideContent>
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
