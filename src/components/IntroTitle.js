import React from "react";
import "./IntroTitle.css";

class IntroTitle extends React.Component {
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
    const className = this.state.isMobile ? "intro__title--mobile" : "intro__title--pc";

    return <h1 className={`intro__title ${className}`}>{this.props.children}</h1>;
  }
}

export default IntroTitle;
