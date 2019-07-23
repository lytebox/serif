import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ControllerPageContainer } from "./style";
import LyricCard from "../../components/LyricCard";
import { showLyric } from "../../actions/lyricAction";
import shortid from "shortid";

class ControllerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songsList: {},
      selectedSong: {},
      showing: ""
    };
  }
  componentDidMount() {
    let test = JSON.parse(localStorage.getItem("state"));
    let songItems = test.lyric.songList;
    this.setState({
      ...this.state,
      songsList: songItems
    });
    this.selectSong = this.selectSong.bind(this);
    this.renderLyric = this.renderLyric.bind(this);
  }

  selectSong(song) {
    let selectedSong = this.state.songsList[song.target.children[0].innerHTML];
    this.setState({
      ...this.state,
      selectedSong: selectedSong
    });
  }

  renderLyric(lyric) {
    this.setState({
      ...this.state,
      showing: lyric.target.children[0].innerHTML
    });
    this.props.showLyric(lyric.target.children[0].innerHTML);
  }

  render() {
    return (
      <ControllerPageContainer>
        <div className="container">
          <div className="lyricContainer">
            <div className="songTitle">Song List</div>
            <div className="lyrics ">
              {Object.keys(this.state.songsList).map(songTitle => (
                <div key={shortid.generate()} onClick={this.selectSong}>
                  <LyricCard text={songTitle} key={shortid.generate()} />
                </div>
              ))}
            </div>
          </div>
          <div className="divider" />
          <div className="lyricContainer">
            <div className="songTitle">
              {this.state.selectedSong.title === undefined
                ? "Song Title"
                : this.state.selectedSong.title}
            </div>
            <div className="lyrics">
              {this.state.selectedSong.lyric === undefined
                ? "Please select song"
                : this.state.selectedSong.lyric.map(lyrics => (
                    <div key={shortid.generate()} onClick={this.renderLyric}>
                      <LyricCard text={lyrics} />
                    </div>
                  ))}
            </div>
          </div>
          <div className="divider" />
          <div className="currentContainer">
            <div className="songTitle">Current</div>
            <div className="currentLyric">
              {this.state.showing === ""
                ? "EXAMPLE LYRICS".toUpperCase()
                : this.state.showing.toUpperCase()}
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
    index: state.lyric.currentLyricIndex
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showLyric: lyric => dispatch(showLyric(lyric))
  };
}

ControllerPage.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControllerPage);
