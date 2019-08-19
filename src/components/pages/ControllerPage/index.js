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
      showSchedule,
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
                  onClick={idx => this.selectScheduledSong(idx)}
                  onButtonClick={idx => console.log("Button click", idx)}
                  active={activeScheduleIndex}
                />
              ) : (
                <SongList list={songsList} onClick={this.scheduleSong} />
              )}

              <FullWidthButton>+ New Song</FullWidthButton>
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
    showLyric: lyric => dispatch(showLyric(lyric))
  };
}

ControllerPage.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControllerPage);
