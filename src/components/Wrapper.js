import React from "react";
import "./Wrapper.css";

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMobile: window.innerWidth < 1120 };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        isMobile: window.innerWidth < 1120,
      });
    });
  }
  render() {
    const className = this.state.isMobile ? "wrapper--mobile" : "wrapper--pc";

    return <div className={className}>{this.props.children}</div>;
  }
}

export default Wrapper;
