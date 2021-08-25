import React, { Component } from "react";

class MainComponent extends Component {
  state = {};

  jump = () => {
    // let currentYear = parseInt(selectYear.value);
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container-calender">
          <h3 id="monthAndYear">fd</h3>
          <div className="button-container-calender">
            <button id="previous" onClick={() => this.previous()}>
              &#8249;
            </button>
            <button id="next" onClick={() => this.next()}>
              &#8250;
            </button>
          </div>
          <table className="table-calendar" id="calendar" data-lang="en">
            <thead id="thead-month"></thead>
            <tbody id="calendar-body"></tbody>
          </table>
          <div className="footer-container-calendar">
            <label for="month">Jump To: </label>
            <select id="month" onChange={() => this.jump()}>
              <option value="0">Jan</option>
              <option value="1">Feb</option>
              <option value="2">Mar</option>
              <option value="3">Apr</option>
              <option value="4">May</option>
              <option value="5">Jun</option>
              <option value="6">Jul</option>
              <option value="7">Aug</option>
              <option value="8">Sep</option>
              <option value="9">Oct</option>
              <option value="10">Nov</option>
              <option value="11">Dec</option>
            </select>
            <select id="year" onChange={() => this.jump()}></select>
          </div>
        </div>
      </div>
    );
  }
}

export default MainComponent;
