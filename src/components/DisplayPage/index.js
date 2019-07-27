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
      currentLyric: initialState.lyric.lyricShowing,
      isWatermarkShown: initialState.lyric.isWatermarkShown
    };
  }

  handleChange(event) {
    let newState = JSON.parse(event.newValue);
    console.log(newState);
    this.setState({
      ...this.state,
      currentLyric: newState.lyric.lyricShowing,
      isWatermarkShown: newState.lyric.isWatermarkShown
    });
  }

  componentDidMount() {
    window.addEventListener("storage", e => this.handleChange(e));
  }

  render() {
    const { currentLyric } = this.state;
    const lyric = currentLyric.startsWith("[")
      ? currentLyric
          .split("\n")
          .slice(1)
          .join("\n")
      : currentLyric;
    return (
      <DisplayPageContainer>
        <div className="container">
          <div className="watermarkContainer">
            <div className="divider" />
            {this.state.isWatermarkShown ? <Watermark /> : ""}
          </div>
          <div className="lyricContainer">
            <div style={{ whiteSpace: "pre-wrap", textAlign: "center" }}>
              {lyric.toUpperCase()}
            </div>
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
    show: state.lyric.lyricShowing,
    isWatermarkShown: state.lyric.isWatermarkShown
  };
}

DisplayPage.propTypes = {};

export default connect(
  mapStateToProps,
  null
)(DisplayPage);
