import React, { Fragment } from "react";
import Button from "../components/button/Button";
import withLayout from "../HOC/withLayout";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "./home.scss";
const Home = () => {
  const { width } = useWindowDimensions();
  return (
    <Fragment>
      salam
      {/* <header className="header">
        <div className="content text-center">
          <h2 className="text-light">{"با سفرستان ، دور ایران بگردید :)"}</h2>
          <p className="my-16 text-light">
            پلتفرمی برای گذاشتن سفرنامه و انتخاب مکان دلخواه سفر شما
          </p>
          {width > 769 && <Button>{"کجا دوست داری بری؟"}</Button>}
        </div>
      </header> */}
    </Fragment>
  );
};

export default withLayout(Home);
