import React, { Component } from "react";
import InputBox from "./components/InputBox";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <h1>Dummy Text Generator</h1>
        <InputBox />
      </div>
    );
  }
}

export default App;
