import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Header from "./Header";

const Main = (props) => {
  return (
    <Fragment>
      <Navbar onShowCart={props.onCartOpen} />
      <Header />
    </Fragment>
  );
};

export default Main;
