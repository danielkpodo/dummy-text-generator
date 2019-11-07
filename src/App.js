import React, { Component } from "react";
import InputBox from "./components/InputBox";
import "./App.css";
import PageContent from "./components/PageContent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      paragraphs: 2,
      isLoading: true,
      results: []
    };
  }

  componentDidMount() {
    this.handleFetchRequest();
  }

  handleFetchRequest = () => {
    this.setState({ isLoading: true });
    const url = `https://baconipsum.com/api/?type=meat-and-filler&paras=${this.state.paragraphs}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          results: data,
          isLoading: false
        });
      })

  };

  handleInput = e => {
    this.setState({ paragraphs: e.target.value }, () =>
      this.handleFetchRequest()
    );
  };

  handleResultsDisplay = () => {
    if (this.state.isLoading === true)
      return (
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      );
    return this.state.results.map((paragraph, index) => (
      <PageContent passages={paragraph} key={index} />
    ));
  };

  render() {
    return (
      <div className="container">
        <h1>Dummy Text Generator</h1>
        <InputBox onHandleInput={this.handleInput} />
        <> {this.handleResultsDisplay()}</>
      </div>
    );
  }
}

export default App;
