import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ControllerPageContainer } from "./style";
import LyricCard from "../../components/LyricCard";

class ControllerPage extends React.Component {
  render() {
    return (
      <ControllerPageContainer>
        <div className="container">
          <div className="lyricContainer">
            <div className="songTitle">Song List</div>
            <div className="lyrics">
              <LyricCard text="Ini contoh lagu" />
              {this.props.songs.map(song => (
                <div key={song.title}>
                  <LyricCard text={song.title} />
                </div>
              ))}
            </div>
          </div>
          <div className="divider" />
          <div className="lyricContainer">
            <div className="songTitle">Song Title</div>
            <div className="lyrics">
              <LyricCard text="Ini contoh text" />
              <LyricCard text="Ini contoh text" />
              <LyricCard text="Ini contoh text" />
            </div>
          </div>
          <div className="divider" />
          <div className="currentContainer">
            <div className="songTitle">Current</div>
            <div className="currentLyric">
              {"Ini contoh text".toUpperCase()}
            </div>
          </div>
        </div>
      </ControllerPageContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    songs: state.lyric.songList,
    index: state.lyric.currentIndex
  };
}

ControllerPage.propTypes = {};

export default connect(
  mapStateToProps,
  null
)(ControllerPage);
