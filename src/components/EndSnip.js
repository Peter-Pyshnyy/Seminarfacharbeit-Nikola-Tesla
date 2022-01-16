import React, { Component } from "react";
import "./EndSnip.css";

export class EndSnip extends Component {
  render() {
    return <div className="end-snip">{this.props.children}</div>;
  }
}

export default EndSnip;
