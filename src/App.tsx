import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment>
  );
};

export default App;
