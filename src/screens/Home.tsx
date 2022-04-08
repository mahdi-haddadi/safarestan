import React, { Fragment } from "react";
import withLayout from "../HOC/withLayout";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Header from "./components/header/Header";
import "./home.scss";
const Home = () => {
  const { width } = useWindowDimensions();
  return (
    <Fragment>
      <Header />
    </Fragment>
  );
};

export default withLayout(Home);
