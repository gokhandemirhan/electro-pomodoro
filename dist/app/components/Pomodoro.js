"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Buttons = require("./Buttons");

var _Buttons2 = _interopRequireDefault(_Buttons);

var _Timer = require("./Timer");

var _Timer2 = _interopRequireDefault(_Timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
var moment = require("moment");

var Pomodoro = function (_React$Component) {
  _inherits(Pomodoro, _React$Component);

  function Pomodoro(props) {
    _classCallCheck(this, Pomodoro);

    var _this = _possibleConstructorReturn(this, (Pomodoro.__proto__ || Object.getPrototypeOf(Pomodoro)).call(this, props));

    _this.state = {
      currentTime: moment.duration(25, "minutes"),
      timerState: 0,
      timerInterval: null
    };

    _this.startTimer = _this.startTimer.bind(_this);
    _this.stopTimer = _this.stopTimer.bind(_this);
    _this.resetTimer = _this.resetTimer.bind(_this);
    _this.substractSecond = _this.substractSecond.bind(_this);
    return _this;
  }

  _createClass(Pomodoro, [{
    key: "startTimer",
    value: function startTimer() {
      if (this.state.timerState != 1) {
        // If not running
        this.setState({
          timerState: 1,
          timerInterval: setInterval(this.substractSecond, 1000)
        });
      }
    }
  }, {
    key: "stopTimer",
    value: function stopTimer() {
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
  }, {
    key: "resetTimer",
    value: function resetTimer() {
      if (this.state.timerInterval) {
        clearTimeout(this.state.timerInterval);
      }
      this.setState({
        timerState: 0,
        currentTime: moment.duration(25, "minutes")
      });
    }
  }, {
    key: "substractSecond",
    value: function substractSecond() {
      var newTime = moment.duration(this.state.currentTime);
      newTime.subtract(1, "seconds");
      this.setState({ currentTime: newTime });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container has-text-centered" },
        React.createElement(
          "h3",
          { className: "subtitle is-4" },
          "React Pomodoro Timer"
        ),
        React.createElement(_Timer2.default, { currentTime: this.state.currentTime }),
        React.createElement(_Buttons2.default, {
          startTimer: this.startTimer,
          stopTimer: this.stopTimer,
          resetTimer: this.resetTimer
        })
      );
    }
  }]);

  return Pomodoro;
}(React.Component);

exports.default = Pomodoro;
//# sourceMappingURL=Pomodoro.js.map