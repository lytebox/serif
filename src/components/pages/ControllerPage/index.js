import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  ControllerPageContainer,
  SectionContainer,
  SectionTitle,
  ListContainer
} from "./style";
import { Grid, Col, Row } from "../../layout";
import {
  Card,
  CardHeading,
  SongList,
  LyricList,
  LyricCard
} from "../../common";
import { showLyric } from "../../../actions/lyricAction";
import shortid from "shortid";

class ControllerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSchedule: false,
      songsList: [],
      scheduledSongs: [],
      activeSongIndex: -1,
      showing: "",
      lyricIndex: 0
    };
  }
  componentDidMount() {
    const savedState = JSON.parse(localStorage.getItem("state"));
    this.setState({
      songsList: savedState.lyric.songList
    });

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

  scheduleSong = index => {
    console.log("Scheduling song", index);
    console.log(this.state.songsList[index]);
    this.setState(prevState => ({
      scheduledSongs:
        prevState.scheduledSongs.push(index) && prevState.scheduledSongs
    }));
  };

  unscheduleSong = index => {
    this.setState(prevState => ({
      scheduledSongs:
        prevState.scheduledSongs.splice(index, 1) && prevState.scheduledSongs
    }));
  };

  selectSong = index => {
    console.log(this.state.songsList[index]);
    this.setState({
      activeSongIndex: index
    });
  };

  renderLyric = index => {
    const { songsList, activeSongIndex } = this.state;
    const activeSong = songsList[activeSongIndex];
    if (index < 0 || index > activeSong.lyrics.length - 1) return false;

    const currentLyric = activeSong.lyrics[index];
    this.setState({
      showing: currentLyric,
      lyricIndex: index
    });
    this.props.showLyric(currentLyric);
  };

  render() {
    const {
      songsList,
      scheduledSongs,
      showSchedule,
      activeSongIndex,
      showing
    } = this.state;
    return (
      <ControllerPageContainer>
        <Grid>
          <Col lg={4} md={4} sm={12}>
            <Card>
              <Row>
                <CardHeading
                  grey={showSchedule}
                  onClick={() => this.setState({ showSchedule: false })}
                >
                  Song List
                </CardHeading>
                <CardHeading
                  grey={!showSchedule}
                  onClick={() => this.setState({ showSchedule: true })}
                >
                  Schedule
                </CardHeading>
              </Row>

              {this.state.showSchedule ? (
                <SongList
                  list={scheduledSongs.map(index => songsList[index])}
                  onClick={idx => this.selectSong(scheduledSongs[idx])}
                />
              ) : (
                <SongList list={songsList} onClick={this.scheduleSong} />
              )}
            </Card>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Card>
              <CardHeading>
                {activeSongIndex > -1
                  ? songsList[activeSongIndex].title
                  : "No songs selected"}
              </CardHeading>
              <LyricList
                list={
                  activeSongIndex > -1 ? songsList[activeSongIndex].lyrics : []
                }
                onClick={this.renderLyric}
              />
            </Card>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Card>
              <CardHeading>Now Showing</CardHeading>
              <CardHeading>{showing}</CardHeading>
            </Card>
            <Card>
              <CardHeading>Properties</CardHeading>
            </Card>
          </Col>
        </Grid>
      </ControllerPageContainer>
    );
    const x = (
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
