import React from "react";
import PropTypes from "prop-types";

import { HomePageContainer } from "./style";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { connect } from "react-redux";

import { inputLyric } from "../../actions/lyricAction";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songTitle: "",
      songLyric: ""
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
    this.props.inputLyric(this.state);
  }

  render() {
    return (
      <HomePageContainer>
        <div className="container">
          <div className="mainTitle">Project Sinai</div>
          <div className="subtitle">
            An open source solution towards mainstream lyric-displaying
            software.
            <div>
              <b>F*ck you easyworship.</b>
            </div>
          </div>
          <div className="divider" />
          <div className="inputContainer">
            <Tabs>
              <TabList>
                <Tab>Input a song</Tab>
                <Tab>Upload a txt song</Tab>
              </TabList>
              <TabPanel>
                <div className="formContainer">
                  <div className="inputLabel">Song title</div>
                  <input
                    onChange={this.handleChange}
                    id="songTitle"
                    value={this.state.songTitle}
                    type="text"
                    placeholder="your song title"
                  />
                  <div>
                    <div className="inputLabe;">Song Lyric</div>
                    <textarea
                      onChange={this.handleChange}
                      id="songLyric"
                      type="text"
                      placeholder="Insert your song lyric here"
                    />
                    <button onClick={this.handleSubmit}>Submit song!</button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div>Not yet supported lol</div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
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
