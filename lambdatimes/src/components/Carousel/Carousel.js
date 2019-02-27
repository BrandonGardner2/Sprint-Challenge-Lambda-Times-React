import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImg: "",
      allImgs: []
    };
  }
  componentDidMount() {
    this.setState({
      activeImg: carouselData[0],
      allImgs: carouselData
    });
  }

  timer = setInterval(() => {
    this.rightClick();
  }, 5000);

  leftClick = () => {
    const curIndex = this.state.allImgs.indexOf(this.state.activeImg);
    this.setState({
      activeImg:
        curIndex !== 0
          ? this.state.allImgs[curIndex - 1]
          : this.state.allImgs[3]
    });
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.rightClick();
    }, 5000);
  };

  rightClick = () => {
    const curIndex = this.state.allImgs.indexOf(this.state.activeImg);
    this.setState({
      activeImg:
        curIndex !== 3
          ? this.state.allImgs[curIndex + 1]
          : this.state.allImgs[0]
    });
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.rightClick();
    }, 5000);
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.activeImg}
        style={{ display: "block" }}
        alt="Carousel"
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
