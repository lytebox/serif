import React from "react";
import PropTypes from "prop-types";

import { ControllerPageContainer } from "./style";
import LyricCard from "../../components/LyricCard";

class ControllerPage extends React.Component {
  render() {
    return (
      <ControllerPageContainer>
        <div className="container">
          <div className="lyricContainer">
            <div className="songTitle">Song Title</div>
            <div className="lyrics">
              <LyricCard text="Ini contoh text" />
              <LyricCard text="Ini contoh text" />
              <LyricCard text="Ini contoh text" />
            </div>
          </div>
          <div className="divider" />
          <div className="currentContainer">
            <div className="songTitle">Current</div>
            <div className="currentLyric">
              {"Ini contoh text".toUpperCase()}
            </div>
          </div>
        </div>
      </ControllerPageContainer>
    );
  }
}

ControllerPage.propTypes = {};

export default ControllerPage;
