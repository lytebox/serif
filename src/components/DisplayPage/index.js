import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { DisplayPageContainer } from "./style";
import Watermark from "../Watermark";

class DisplayPage extends React.Component {
  constructor(props) {
    super(props);
    let initialState = JSON.parse(localStorage.getItem("state"));
    this.state = {
      currentLyric: initialState.lyric.lyricShowing
    };
  }

  handleChange(event) {
    let newState = JSON.parse(event.newValue);
    this.setState({
      ...this.state,
      currentLyric: newState.lyric.lyricShowing
    });
  }

  componentDidMount() {
    window.addEventListener("storage", e => this.handleChange(e));
  }

  render() {
    return (
      <DisplayPageContainer>
        <div className="container">
          <div className="watermarkContainer">
            <div className="divider" />
            <Watermark />
          </div>
          <div className="lyricContainer">
            <div>{this.state.currentLyric.toUpperCase()}</div>
          </div>
        </div>
      </DisplayPageContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    songs: state.lyric.songList.length,
    index: state.lyric.currentIndex,
    show: state.lyric.lyricShowing
  };
}

DisplayPage.propTypes = {};

export default connect(
  mapStateToProps,
  null
)(DisplayPage);
