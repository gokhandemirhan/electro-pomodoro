"use strict";

const React = require("react");
const moment = require("moment");

import Buttons from "./Buttons";
import Timer from "./Timer";

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: moment.duration(25, "minutes"),
      timerState: 0,
      timerInterval: null
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.substractSecond = this.substractSecond.bind(this);
  }
  startTimer() {
    if (this.state.timerState != 1) {
      // If not running
      this.setState({
        timerState: 1,
        timerInterval: setInterval(this.substractSecond, 1000)
      });
    }
  }
  stopTimer() {
    if (this.state.timerState == 1) {
      //If running
      if (this.state.timerInterval) {
        clearTimeout(this.state.timerInterval);
      }
      this.setState({
        timerState: 2
      });
    }
  }
  resetTimer() {
    if (this.state.timerInterval) {
      clearTimeout(this.state.timerInterval);
    }
    this.setState({
      timerState: 0,
      currentTime: moment.duration(25, "minutes")
    });
  }
  substractSecond() {
    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1, "seconds");
    this.setState({ currentTime: newTime });
  }
  render() {
    return (
      <div className="container has-text-centered">
        <h3 className="subtitle is-4">React Pomodoro Timer</h3>
        <Timer currentTime={this.state.currentTime} />
        <Buttons
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          resetTimer={this.resetTimer}
        />
      </div>
    );
  }
}

export default Pomodoro;
