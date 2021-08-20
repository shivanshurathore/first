import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./img/W3Schools_logo.svg.png";

class NavBar extends Component {
    render() {

        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="w3schools logo" title="Home" width="50px" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Tutorials</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">References</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Exercises</Link>
                        </li>
                    </ul>
                    <div className="ml-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Spaces</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Paid Courses</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link btn btn-success text-white px-4" style={{borderRadius: "25px"}} to="/">Log in</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default NavBar;