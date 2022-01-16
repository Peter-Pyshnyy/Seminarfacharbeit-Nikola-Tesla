import React, { Component } from "react";
import "./GameSandbox.css";

let colorDot = "";

export class GameSandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  componentDidMount() {
    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("game__compobox__element") && e.target.getAttribute("active") === "true") {
        this.setState((prevState) => ({
          isClicked: true,
        }));
        return;
      }
      if (e.target.classList.contains("game__compobox__element") && e.target.getAttribute("active") === "false") {
        this.setState((prevState) => ({
          isClicked: false,
        }));
      }
    });
  }
  render() {
    colorDot = this.state.isClicked ? "red" : "grey";

    return (
      <div className="game__sandbox">
        <div style={{ backgroundColor: colorDot }} className="game__sandbox__dot one" />
        <div style={{ backgroundColor: colorDot }} className="game__sandbox__dot two" />
        <div style={{ backgroundColor: colorDot }} className="game__sandbox__dot three" />
        <div style={{ backgroundColor: colorDot }} className="game__sandbox__dot four" />
      </div>
    );
  }
}

export default GameSandbox;
