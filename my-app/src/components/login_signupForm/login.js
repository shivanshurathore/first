import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const showSignup = () => {
    history.push("/signup");
  };

  return (
    <div className="login">
      <div className="input">
        <label>Email</label> <br />
        <input
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input">
        <label>Password</label> <br />
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button className="button" onClick={handleSubmit}>
          Login
        </button>
        <button className="button" onClick={showSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
