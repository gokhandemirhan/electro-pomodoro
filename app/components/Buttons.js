"use strict";
const React = require("react");
class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons is-centered">
        <a
          className="button is-success is-outlined"
          onClick={this.props.startTimer}
        >
          Start
        </a>
        <a
          className="button is-danger is-outlined"
          onClick={this.props.stopTimer}
        >
          Stop
        </a>
        <a
          className="button is-link is-outlined"
          onClick={this.props.resetTimer}
        >
          Restart
        </a>
      </div>
    );
  }
}

export default Buttons;
