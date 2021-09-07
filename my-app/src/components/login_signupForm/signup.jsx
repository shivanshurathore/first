import React, { Component } from "react";
import http from "../../services/httpService";

class SignUp extends Component {
  state = {
    person: { name: "", age: 0, email: "", password: "", file: null },
  };

  handleChange = (e) => {
    const { currentTarget: input } = e;
    let s1 = { ...this.state };
    input.type === "file"
      ? (s1.person[input.name] = input.files[0])
      : (s1.person[input.name] = input.value);
    this.setState(s1);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let person = { ...this.state.person };
    console.log(e.target);
    const forData = new FormData(e.target);
    console.log(forData);
    this.postData("/employee", person);
  };

  async postData(url, obj) {
    let response = await http.post(url, obj);
    let { data } = response;
    console.log(data);
    this.props.history.push("/login");
  }

  showSignIn = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="row mt-5">
        <div className="col-3"></div>
        <div className="col-6">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                placeholder="Enter Age"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter Email"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter Password"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Image</label>
              <input
                type="file"
                name="file"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <button className="btn btn-primary m-3" onClick={this.handleSubmit}>
              Submit
            </button>
            <button className="btn btn-primary m-3" onClick={this.showSignIn}>
              Sign In
            </button>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    );
  }
}

export default SignUp;
