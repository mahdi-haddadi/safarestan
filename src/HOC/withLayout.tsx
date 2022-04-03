import React, { FC } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const withLayout = (Element: FC) => {
  return (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
    <>
      <Navbar />
      <Element {...props} />
      <Footer />
    </>
  );
};

export default withLayout;
