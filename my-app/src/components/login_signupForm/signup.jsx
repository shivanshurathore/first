import React, { Component } from "react";
import http from '../../services/httpService';

class SignUp extends Component {
    state = {
        person: { name: "", age: 0, email: "", password: "" },
    }

    handleChange = (e) => {
        const { currentTarget: input } = e;
        let s1 = { ...this.state };
        s1.person[input.name] = input.value;
        this.setState(s1);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let s1 = { ...this.state };
        console.log(s1.person);
        this.postData("/person", s1.person);
    }

    async postData(url, obj) {
        let response = http.post(url, obj);
        // let { data } = response;
        console.log(response);
        this.props.history.push("/login");
    }

    showSignIn = () => {
        this.props.history.push("/login");
    }

    render() {
        
        return (
            <div className="row mt-5">
                <div className="col-3"></div>
                <div className="col-6">
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
                            type="text"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className="btn btn-primary m-3" onClick={this.handleSubmit}>Submit</button>
                    <button className="btn btn-primary m-3" onClick={this.showSignIn}>Sign In</button>
                </div>
                <div className="col-3"></div>
            </div>
        );
    }
}

export default SignUp;