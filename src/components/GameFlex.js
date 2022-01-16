import React, { Component } from "react";
import GameCompobox from "./GameCompobox";
import "./GameFlex.css";
import GameSandbox from "./GameSandbox";

export class GameFlex extends Component {
  render() {
    return (
      <div className="game__flex">
        <GameCompobox />
        <GameSandbox />
      </div>
    );
  }
}

export default GameFlex;
