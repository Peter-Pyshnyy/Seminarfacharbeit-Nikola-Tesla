import React, { Component } from "react";
import "./GameCompobox.css";
import GameCompoElement from "./GameCompoElement";

export class GameCompobox extends Component {
  render() {
    return (
      <div className="game__compobox">
        <GameCompoElement id="0" />
        <GameCompoElement id="1" />
        <GameCompoElement id="2" />
        <GameCompoElement id="3" />
        <GameCompoElement id="4" />
      </div>
    );
  }
}

export default GameCompobox;
