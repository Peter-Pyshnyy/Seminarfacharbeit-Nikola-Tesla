import React, { Component } from "react";
import "./InventionCard.css";
import OpenedCard from "./OpenedCard";

export class InventionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth < 600,
      isClicked: false,
      currentComp: "",
    };
  }
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        isMobile: window.innerWidth < 600,
      });
    });

    window.addEventListener("click", (e) => {
      if (e.target.parentElement.classList.contains("card") && !this.state.isClicked && e.target.alt === this.props.text) {
        this.setState((prevState) => ({
          isClicked: true,
          currentComp: this.props.type,
        }));
      } else {
        this.setState((prevState) => ({
          isClicked: false,
        }));
      }
    });
  }
  render() {
    const device = this.state.isMobile ? "mobile" : "pc";

    return (
      <div>
        <div className={`card card--${device}`}>
          <img src={this.props.src} alt={this.props.text} />
          <h3 className="card__text">{`${this.props.text}`}</h3>
        </div>
        {this.state.isClicked ? (
          <div className="card__opened">
            <OpenedCard text={this.props.textFull} format={`opened-card--${device}`} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default InventionCard;
