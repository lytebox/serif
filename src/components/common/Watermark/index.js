import React from "react";
import PropTypes from "prop-types";

import { WatermarkContainer } from "./style";

class Watermark extends React.Component {
  render() {
    return (
      <WatermarkContainer>
        <div>
          <div>DNA COMMUNITY c/o GOD</div>
          <div>Defining the interaction between men</div>
          <div>and God as the word Worship</div>
        </div>
      </WatermarkContainer>
    );
  }
}

Watermark.propTypes = {};

export default Watermark;
