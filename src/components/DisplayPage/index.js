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
            <div>{this.props.index}</div>
          </div>
        </div>
      </DisplayPageContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    songs: state.lyric.songList,
    index: state.lyric.currentIndex
  };
}

DisplayPage.propTypes = {};

export default connect(
  mapStateToProps,
  null
)(DisplayPage);
