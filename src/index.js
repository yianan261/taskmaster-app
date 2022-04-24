import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tracker from "./pages/Tracker";
// import NavBar from "./pages/NavBar";
import MainPage from "./pages/MainPage";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Tracker" element={<Tracker />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
