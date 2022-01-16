import React from "react";
import "./Schem.css";

class Schem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMobile: window.innerWidth < 850 };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        isMobile: window.innerWidth < 850,
      });
    });
  }
  render() {
    const src = this.state.isMobile ? "mobile" : "pc";

    return <div className={`game__img--${src}`}></div>;
  }
}

export default Schem;
