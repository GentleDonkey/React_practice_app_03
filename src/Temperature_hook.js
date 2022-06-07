import "./App.css";
import React, { useState } from "react";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Boil</p>;
  }
  return <p>Not Boil</p>;
}

function TemperatureInput(props) {
  return (
    <fieldset>
      <legend>Please input your temperature in {props.scale}</legend>
      <input
        value={props.temperature}
        onChange={props.onTemperatureChange}
      ></input>
    </fieldset>
  );
}
function App() {
  const [status, setStatus] = useState({
    celsius: { value: "" },
    fahrenheit: { value: "" },
  });
  //const [c, setC] = useState(0);
  //const [f, setf] = useState(0);
  const HandleCelsiusChange = (e) => {
    setStatus({
      celsius: { value: e.target.value },
      fahrenheit: { value: "" },
    });
  };
  const HandleFahrenheitChange = (e) => {
    setStatus({
      celsius: { value: "" },
      fahrenheit: { value: e.target.value },
    });
  };
  const celsius =
    status.celsius.value === ""
      ? status.fahrenheit.value - 1
      : status.celsius.value;
  const fahrenheit =
    status.fahrenheit.value === ""
      ? status.celsius.value * 1 + 1
      : status.fahrenheit.value;
  return (
    <div>
      <TemperatureInput
        scale="Celsius"
        temperature={celsius}
        onTemperatureChange={HandleCelsiusChange}
      />
      <TemperatureInput
        scale="Fahrenheit"
        temperature={fahrenheit}
        onTemperatureChange={HandleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}
export default App;
