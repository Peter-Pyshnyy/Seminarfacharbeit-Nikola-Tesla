import React, { Component } from "react";
import "./gameSnip.css";

export class GameSnip extends Component {
  constructor(props) {
    super(props);
    this.state = { isMobile: window.innerWidth < 600 };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        isMobile: window.innerWidth < 600,
      });
    });
  }
  render() {
    const className = this.state.isMobile ? "mobile" : "pc";
    return <div className={`game-snip game-snip--${className}`}>{this.props.children}</div>;
  }
}

export default GameSnip;
