import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { DisplayPageContainer } from "./style";
import Watermark from "../../common/Watermark";

class DisplayPage extends React.Component {
  constructor(props) {
    super(props);
    const blankState = {
      lyric: [],
      currentSong: {},
      currentLyricIndex: 0,
      lyricShowing: ""
    };
    let initialState = JSON.parse(localStorage.getItem("state")) || blankState;
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
    const { currentLyric } = this.state;
    const lyric =
      currentLyric && currentLyric.startsWith("[")
        ? currentLyric
            .split("\n")
            .slice(1)
            .join("\n")
        : currentLyric;
    return (
      <DisplayPageContainer>
        <div className="container">
          <div className="lyricContainer">
            <div style={{ whiteSpace: "pre-wrap", textAlign: "center" }}>
              {lyric && lyric.toUpperCase()}
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
    show: state.lyric.lyricShowing
  };
}

DisplayPage.propTypes = {};

export default connect(
  mapStateToProps,
  null
)(DisplayPage);
