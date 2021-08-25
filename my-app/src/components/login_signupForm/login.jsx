import React, { Component } from "react";
import http from '../../services/httpService';
import auth from '../../services/authService';

class Login extends Component {
    state = {
        form: { email: "", password: "" },
    };

    handleChange = (e) =>{
        const { currentTarget: input } = e;
        let s1 = {...this.state};
        s1.form[input.name] = input.value;
        this.setState(s1);
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.form);
        // this.login("/login", this.state.form);
    };

    async login(url, obj) {
        try {
            let response = await http.post(url, obj);
            let { data } = response;
            auth.login(data);
            console.log(data);
            window.location = "/home";
        }
        catch (ex) {
            alert("Login Failed");
        }
    }

    showSignUp = () => {
        this.props.history.push("/signup");
    }

    render() {
        
        return (
            <div className="row mt-5">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter Email"
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
                        />
                    </div>
                    <button className="btn btn-primary m-3" onClick={this.handleSubmit}>Login</button>
                    <button className="btn btn-primary m-3" onClick={this.showSignUp}>Sign UP</button>
                </div>
                <div className="col-3"></div>
            </div>
        );
    }
}

export default Login;