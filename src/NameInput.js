import "./App.css";
import React from "react";

class NameInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onNameChange(e.target.value);
  }
  render() {
    return <input onChange={this.handleChange}></input>;
  }
}
class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>Hello, {this.props.name}</p>;
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { name: "" };
  }
  handleChange(name) {
    this.setState({ name });
  }
  render() {
    return (
      <div>
        <NameInput onNameChange={this.handleChange} />
        <Display name={this.state.name} />
      </div>
    );
  }
}

export default App;
