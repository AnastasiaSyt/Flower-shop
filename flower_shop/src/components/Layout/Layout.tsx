import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default Layout;
