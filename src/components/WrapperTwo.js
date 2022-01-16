import React, { Component } from "react";
import "./WrapperTwo.css";

export class WrapperTwo extends Component {
  render() {
    return <div className="wrapper-two">{this.props.children}</div>;
  }
}

export default WrapperTwo;
