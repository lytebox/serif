import React from "react";
import PropTypes from "prop-types";

import { LyricCardContainer } from "./style";

class LyricCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  render() {
    return (
      <LyricCardContainer>
        <div
          className={`container ${
            this.state.isClicked ? "clicked" : "notClicked"
          }`}
          onClick={this.handleClick}
        >
          <div>{this.props.text}</div>
        </div>
      </LyricCardContainer>
    );
  }
}

// LyricCard.PropTypes = {
//   text: PropTypes.String
// };

export default LyricCard;
