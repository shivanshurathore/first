import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./components/game/style.css";
import { BrowserRouter } from "react-router-dom";
import MainComponent from "./components/login_signupForm/mainComponent";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
