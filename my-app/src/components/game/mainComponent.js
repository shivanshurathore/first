import React, { Component } from "react";
import one from "../img/1.jpeg";
import two from "../img/2.jpeg";
import cat from "../img/cat.jpeg";
import dog from "../img/dog.jpeg";
import elephant from "../img/elephant.jpeg";
import monkey from "../img/monkey.jpeg";
import rabbit from "../img/rabbit.jpeg";
import tiger from "../img/tiger.jpeg";

class MainComponent extends Component {
  state = {
    dataArr: [
      { image: one, open: false },
      { image: two, open: false },
      { image: cat, open: false },
      { image: rabbit, open: false },
      { image: dog, open: false },
      { image: elephant, open: false },
      { image: elephant, open: false },
      { image: two, open: false },
      { image: tiger, open: false },
      { image: monkey, open: false },
      { image: rabbit, open: false },
      { image: cat, open: false },
      { image: tiger, open: false },
      { image: one, open: false },
      { image: dog, open: false },
      { image: monkey, open: false },
    ],
    open1: "",
    open2: "",
    score: 0,
  };

  showImg = (index) => {
    let s1 = { ...this.state };
    s1.dataArr[index].open = true;
    s1.open1
      ? (s1.open2 = s1.dataArr[index].image)
      : (s1.open1 = s1.dataArr[index].image);
    if (s1.open1 && s1.open2) setTimeout(() => this.doCellsMatching(), 1000);
    this.setState(s1);
  };

  doCellsMatching = () => {
    let s1 = { ...this.state };
    if (s1.open1 === s1.open2) {
      s1.open1 = "";
      s1.open2 = "";
      s1.score += 1;
    }
    if (s1.open1 !== s1.open2) {
      let index1 = s1.dataArr.findIndex(
        (val) => val.image === s1.open1 && val.open === true
      );
      s1.dataArr[index1].open = false;
      s1.open1 = "";
      let index2 = s1.dataArr.findIndex(
        (val) => val.image === s1.open2 && val.open === true
      );
      s1.dataArr[index2].open = false;
      s1.open2 = "";
    }
    this.setState(s1);
    setTimeout(() => this.checkWin(), 1000);
  };

  resetGame = () => {
    let s1 = { ...this.state };
    for (let i = 0; i < s1.dataArr.length; i++) {
      s1.dataArr[i].open = false;
    }
    s1.score = 0;
    this.setState(s1);
  };

  checkWin = () => {
    let s1 = { ...this.state };
    if (s1.score === 8) {
      alert("You Win!");
      this.resetGame();
      s1.score = 0;
    }
    this.setState(s1);
  };

  render() {
    const { dataArr, open1, open2, score } = this.state;

    return (
      <div className="main">
        <div className="btnDiv">
          {dataArr.map((item, index) => (
            <button
              disabled={item.open || (open1 && open2) ? true : false}
              className="btn1"
              key={item}
              onClick={() => this.showImg(index)}
            >
              {/* <img src={item.image} alt="animals" /> */}
              {item.open ? <img src={item.image} alt="animals" /> : ""}
            </button>
          ))}
        </div>
        <h4>Your Score: {score}</h4>
        <button className="resetBtn" onClick={this.resetGame}>
          Reset Game
        </button>
      </div>
    );
  }
}

export default MainComponent;
