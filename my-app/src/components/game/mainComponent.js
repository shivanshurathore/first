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
  };

  render() {
    const { dataArr } = this.state;

    return (
      <div className="main">
        {dataArr.map((item) => (
          <button key={item}>
            <img src={item.image} alt="animals" />
          </button>
        ))}
      </div>
    );
  }
}

export default MainComponent;
