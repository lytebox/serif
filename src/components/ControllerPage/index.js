import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  ControllerPageContainer,
  SectionContainer,
  SectionTitle,
  ListContainer
} from "./style";
import LyricCard from "../../components/LyricCard";
import { showLyric } from "../../actions/lyricAction";
import shortid from "shortid";

class ControllerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songsList: {},
      selectedSong: {},
      selectedSongTitle: "",
      showing: "",
      lyricIndex: 0
    };
  }
  componentDidMount() {
    let test = JSON.parse(localStorage.getItem("state"));
    let songItems = test.lyric.songList;
    this.setState({
      songsList: songItems
    });
    this.selectSong = this.selectSong.bind(this);
    this.renderLyric = this.renderLyric.bind(this);

    document.addEventListener("keydown", e => {
      console.log(e);
      if (e.key === "ArrowUp") {
        this.renderLyric(this.state.lyricIndex - 1);
      } else if (e.key === "ArrowDown") {
        this.renderLyric(this.state.lyricIndex + 1);
      } else if (e.key === "c" && e.ctrlKey && !e.altKey && !e.shiftKey) {
        // toggle clear lyrics
        if (this.state.showing.length < 1) {
          // show lyrics
          this.renderLyric(this.state.lyricIndex);
        } else {
          // clear lyrics
          this.setState({ showing: "" });
          this.props.showLyric("");
        }
      }
    });
  }

  selectSong(song) {
    let selectedSong = this.state.songsList[song];
    this.setState({
      selectedSong: selectedSong,
      selectedSongTitle: song
    });
  }

  renderLyric(index) {
    if (index < 0 || index > this.state.selectedSong.lyric.length - 1)
      return false;

    const currentLyric = this.state.selectedSong.lyric[index];
    this.setState({
      showing: currentLyric,
      lyricIndex: index
    });
    this.props.showLyric(currentLyric);
  }

  render() {
    return (
      <ControllerPageContainer>
        <SectionContainer>
          <SectionTitle>Song List</SectionTitle>
          <ListContainer>
            {Object.keys(this.state.songsList).map(songTitle => (
              <LyricCard
                text={songTitle}
                key={shortid.generate()}
                onClick={() => this.selectSong(songTitle)}
                active={this.state.selectedSongTitle === songTitle}
              />
            ))}
          </ListContainer>
        </SectionContainer>
        <SectionContainer>
          <SectionTitle>
            {this.state.selectedSong.title === undefined
              ? "Song Title"
              : this.state.selectedSong.title}
          </SectionTitle>
          <ListContainer>
            {this.state.selectedSong.lyric === undefined
              ? "Please select song"
              : this.state.selectedSong.lyric.map((lyric, index) => (
                  <LyricCard
                    key={shortid.generate()}
                    onClick={() => this.renderLyric(index)}
                    text={lyric}
                    highlight={lyric.startsWith("[")}
                    active={this.state.lyricIndex === index}
                  />
                ))}
          </ListContainer>
        </SectionContainer>
        <SectionContainer>
          <SectionTitle>Active Lyrics</SectionTitle>
          <div style={{ whiteSpace: "pre-wrap" }}>
            {this.state.showing.toUpperCase()}
          </div>
        </SectionContainer>
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
