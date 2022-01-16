import React, { Component } from "react";
import "./GameCompoElement.css";

let compoColor = "";

export class GameCompoElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  componentDidMount() {
    window.addEventListener("click", (e) => {
      if (e.target.id === `combo-${this.props.id}` && this.state.isClicked === true) {
        this.setState((prevState) => ({
          isClicked: false,
        }));
        return;
      }
      if (e.target.classList.contains("game__compobox__element")) {
        this.setState(() => ({
          isClicked: false,
        }));
      }
      if (e.target.id === `combo-${this.props.id}` && this.state.isClicked === false) {
        this.setState((prevState) => ({
          isClicked: true,
        }));
      }
    });
  }
  render() {
    compoColor = this.state.isClicked ? "red" : "white";
    return (
      <div
        active={`${this.state.isClicked}`}
        style={{ backgroundColor: compoColor }}
        className="game__compobox__element"
        id={`combo-${this.props.id}`}></div>
    );
  }
}

export default GameCompoElement;
