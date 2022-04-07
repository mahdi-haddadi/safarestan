import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
const App = () => {
  return (
    <div
      className="app"
      style={{ maxWidth: "1440px", margin: "auto", overflowX: "hidden" }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
