import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../../store";

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
          <div className="lyricContainer" coba={this.props.current.length}>
            {/* {this.props.song[this.props.index].lyric.toUpperCase()} */}
            {`${
              this.props.current.length > 0
                ? this.props.current[this.props.index].title
                : "standby"
            }`.toUpperCase()}
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
    current: state.lyric.currentSong
  };
};

DisplayPage.propTypes = {};

export default connect(mapStateToProps)(DisplayPage);
