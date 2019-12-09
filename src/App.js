import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  state = {
    min: 1,
    max: 10,
    number: "",
    guesses: 2
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  handleSubmit = e => {
    e.preventDefault();
    let randomNum = Math.floor(
      Math.random() * (this.state.max - this.state.min + 1) + this.state.min
    );
    if (this.state.number == randomNum) {
      this.messageCorrect();
    } else {
      this.setState({
        guesses: this.state.guesses - 1
      });

      if (this.state.guesses === 0) {
        this.messageGameover(randomNum);
      } else {
        this.messageWrong();
      }
    }
    this.setState({
      number: ""      
    });
  };

  messageGameover = randomNum => {
    const gameOver = (
      <h1 style={{ color: "red" }}>
        Game Over! The{" "}
        <span style={{ textTransform: "uppercase", color: "green" }}>
          correct
        </span>{" "}
        number was {randomNum}.
      </h1>
    );
    this.setState({
      guesses: 2
    });

  };

  messageCorrect = () => {
    const correct = (
      <h1 style={{ color: "green" }}>
        Congratulations, you are correct. You WON!
      </h1>
    );
    this.setState({
      message: correct
    });
  };

  messageWrong = () => {
    const wrong = (
      <h3 style={{ color: "red" }}>
        Wrong guess, you have {this.state.guesses} guesses left.
      </h3>
    );
    this.setState({
      message: wrong
    });
  };

  handleNumber = e => {
    this.setState({
      number: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Number Guesser</h1>
        <div className="game">
          <p>
            Guess a number between <span>{this.state.min}</span> and{" "}
            <span>{this.state.max}</span>
          </p>
          <form onSubmit={this.handleSubmit}>
            <input
              type="number"
              className="guess-input"
              placeholder="enter your guess..."
              onChange={this.handleNumber}
              value={this.state.number}
            />
            <input className="guess-btn" type="submit" value='Submit' />
          </form>
          <input
            className="min"
            onChange={this.handleChange}
            name="min"
            type="number"
            placeholder={this.state.min}
          />
          <input
            className="max"
            onChange={this.handleChange}
            name="max"
            type="number"
            placeholder={this.state.max}
          />
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }
}

export default App;
