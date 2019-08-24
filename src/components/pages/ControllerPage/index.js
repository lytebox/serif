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
  Button,
  FullWidthButton,
  Card,
  CardHeading,
  CardBody,
  SongList,
  LyricList,
  LyricCard
} from "../../common";
import { inputLyric, showLyric } from "../../../actions/lyricAction";
import NewSongView from "../../views/NewSongView";
import shortid from "shortid";

class ControllerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftPanelDisplay: "list",
      songsList: [],
      scheduledSongs: [],
      activeSongIndex: -1,
      activeScheduleIndex: -1,
      showing: "",
      lyricIndex: 0
    };
  }
  componentDidMount() {
    const blankState = {
      lyric: [],
      currentSong: {},
      currentLyricIndex: 0,
      lyricShowing: ""
    };
    const savedState = JSON.parse(localStorage.getItem("state")) || blankState;
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

  handleNewSong = songData => {
    console.log("handleNewSong");
    console.log(songData);
    this.props.inputLyric(songData);
    this.setState(state => ({
      songsList:
        state.songsList && state.songsList.length > 0
          ? [...state.songsList, songData]
          : [songData],
      leftPanelDisplay: "list"
    }));
  };

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

  selectScheduledSong = index => {
    const { scheduledSongs } = this.state;
    const songIndex = scheduledSongs[index];

    console.log(this.state.songsList[songIndex]);
    this.setState({
      activeSongIndex: songIndex,
      activeScheduleIndex: index
    });
  };

  hideLyric = () => {
    this.setState({
      showing: ""
    });
    this.props.showLyric("");
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
      leftPanelDisplay,
      activeSongIndex,
      activeScheduleIndex,
      lyricIndex,
      showing
    } = this.state;
    return (
      <ControllerPageContainer>
        <Grid>
          <Col lg={4} md={4} sm={12}>
            <Card>
              <Row>
                <CardHeading
                  grey={leftPanelDisplay !== "list"}
                  onClick={() => this.setState({ leftPanelDisplay: "list" })}
                >
                  Song List
                </CardHeading>
                <CardHeading
                  grey={leftPanelDisplay !== "schedule"}
                  onClick={() =>
                    this.setState({ leftPanelDisplay: "schedule" })
                  }
                >
                  Schedule
                </CardHeading>
              </Row>

              {leftPanelDisplay === "schedule" ? (
                <SongList
                  list={scheduledSongs.map(index => songsList[index])}
                  onClick={idx => this.selectScheduledSong(idx)}
                  onButtonClick={idx => console.log("Button click", idx)}
                  active={activeScheduleIndex}
                />
              ) : leftPanelDisplay === "list" ? (
                <SongList list={songsList} onClick={this.scheduleSong} />
              ) : (
                <NewSongView onNewSong={this.handleNewSong} />
              )}

              {leftPanelDisplay !== "new" && (
                <FullWidthButton
                  onClick={() => this.setState({ leftPanelDisplay: "new" })}
                >
                  + New Song
                </FullWidthButton>
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
                active={lyricIndex}
                onClick={this.renderLyric}
              />
            </Card>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Card>
              <CardHeading>Now Showing</CardHeading>
              <CardHeading style={{ display: "flex", flex: "1" }}>
                {showing}
              </CardHeading>
              <CardBody>
                <Button outline invert onClick={this.hideLyric}>
                  Clear
                </Button>
              </CardBody>
            </Card>
            <Card>
              <CardHeading>Properties</CardHeading>
            </Card>
          </Col>
        </Grid>
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
    showLyric: lyric => dispatch(showLyric(lyric)),
    inputLyric: data => dispatch(inputLyric(data))
  };
}

ControllerPage.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControllerPage);
