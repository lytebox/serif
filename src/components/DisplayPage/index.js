import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { DisplayPageContainer } from "./style";

class DisplayPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DisplayPageContainer>
        <div className="container">
          <div className="lyricContainer" coba={this.props.song.length}>
            <div>{this.props.test}</div>
            {/* {this.props.song.length > 0 ? "ADA ISINYA" : "STANDBY"} */}
          </div>
        </div>
      </DisplayPageContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    song: state.lyric.songList,
    index: state.lyric.currentIndex,
    current: state.lyric.currentSong,
    test: state.lyric.test
  };
};

DisplayPage.propTypes = {};

export default connect(
  mapStateToProps,
  null
)(DisplayPage);
