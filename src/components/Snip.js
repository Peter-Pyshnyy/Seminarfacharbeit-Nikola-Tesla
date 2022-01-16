import React, { Component } from "react";
import "./Snip.css";

export class Snip extends Component {
  render() {
    return <div className="snip">{this.props.children}</div>;
  }
}

export default Snip;
