import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  constructor(props){
    super(props);
    this.state = { x: value1,
                   y: value2,
                   z: value3,
                   proposedAnswer: proposedAnswer,
                   numQuestions: 0,
                   numCorrect: 0};    
  }
  sum() {
    return this.state.x + this.state.y + this.state.z;
  }
  loadXYZ() {
    this.setState({x: value1,
                   y: value2,
                   z: value3});
  }
  loadProposedAnswer() {
    this.setState({proposedAnswer : Math.floor(Math.random() * 3) + this.state.x + this.state.y + this.state.z});
  }
  registryChoice(choice) {
    let increment = 0;
    if (choice === true && this.sum() === this.state.proposedAnswer){
      increment +=1;
    }else if(choice === false && this.sum() !== this.state.proposedAnswer){
      increment +=1;
    }
    this.setState((currentState) => ({numQuestions: currentState.numQuestions + 1, 
                                      numCorrect: currentState.numCorrect + increment}));
    this.loadXYZ();
    this.loadProposedAnswer();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.x} + ${this.state.y} + ${this.state.z} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={this.registryChoice(true)}>True</button>
          <button onClick={this.registryChoice(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
