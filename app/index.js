const React = require("react");
const ReactDOM = require("react-dom");

class App extends React.Component {
  render() {
    return (
      <div className="container has-text-centered">
        <h3 className="subtitle is-4">React Pomodoro Timer</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
