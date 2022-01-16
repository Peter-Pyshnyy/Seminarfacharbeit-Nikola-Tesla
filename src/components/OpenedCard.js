import React, { Component } from "react";
import "./OpenedCard.css";

export class OpenedCard extends Component {
  render() {
    return (
      <div>
        <div className={`opened-card__text ${this.props.format}`}>
          <p>{this.props.text}</p>
        </div>
        <div className="opened-card__bg"></div>
      </div>
    );
  }
}

export default OpenedCard;
