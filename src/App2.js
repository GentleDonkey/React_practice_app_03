import "./App.css";
import React from "react";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Boil</p>;
  }
  return <p>Not Boil</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    return (
      <fieldset>
        <legend>Please input your temperature in {}</legend>
        <input
          value={this.props.temperature}
          onChange={this.handleChange}
        ></input>
      </fieldset>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { scale: "Celsius", temperature: "" };
  }
  handleCelsiusChange(temperature) {
    this.setState({ scale: "Celsius", temperature });
  }
  handleFahrenheitChange(temperature) {
    this.setState({ scale: "Fahrenheit", temperature });
  }
  render() {
    const celsius =
      this.state.scale === "Fahrenheit"
        ? this.state.temperature - 1
        : this.state.temperature;
    const fahrenheit =
      this.state.scale === "Celsius"
        ? this.state.temperature * 1 + 1
        : this.state.temperature;
    return (
      <div>
        <TemperatureInput
          scale="Celsius"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="Fahrenheit"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default App;
