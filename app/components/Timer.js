"use strict";

const React = require("react");

import Utils from "./../helpers/Utils";

class Timer extends React.Component {
  render() {
    let currentTime = this.props.currentTime;
    let minutes = Utils.leftPad(currentTime.get("minutes"));
    let seconds = Utils.leftPad(currentTime.get("seconds"));
    return (
      <h4 className="title is-1">
        {minutes}:{seconds}
      </h4>
    );
  }
}

export default Timer;
