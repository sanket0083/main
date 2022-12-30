import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import "./App.css";
import About from "./component/About";
import Blog from "./component/Blog";


const App = () => {
  return (
    <div className="App">
      <div className="d-flex justify-space">
        <div>LOGO</div>
        <div className="d-flex">
          <div className="nav">
            <Link to="/">Home</Link>
          </div>
          <div className="nav">
            <Link to="/about">About</Link>
          </div>
          <div className="nav">
            <Link to="/blog">Blog</Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
