import React from "react";
import PropTypes from "prop-types";

import { LyricCardContainer } from "./style";

class LyricCard extends React.Component {
  render() {
    const { onClick, active } = this.props;
    return (
      <LyricCardContainer active={active} onClick={onClick}>
        {this.props.text}
      </LyricCardContainer>
    );
  }
}

// LyricCard.PropTypes = {
//   text: PropTypes.String
// };

export default LyricCard;
