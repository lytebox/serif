import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
          <div className="lyricContainer">
            <div>{this.props.show.toUpperCase()}</div>
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
