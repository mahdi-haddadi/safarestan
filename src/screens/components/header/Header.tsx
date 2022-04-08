import React from "react";
import Button from "../../../components/button/Button";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import "./header.scss";
const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <header className="header">
      <div className="cover"></div>
      <div className="content text-center">
        <h2 className="text-light">{"با سفرستان ، دور ایران بگردید :)"}</h2>
        <p className="my-16 text-light">
          پلتفرمی برای نوشتن خاطرات سفر و انتخاب مکان دلخواه سفر شما
        </p>
        {width > 769 && <Button>{"کجا دوست داری بری؟"}</Button>}
      </div>
    </header>
  );
};

export default Header;
