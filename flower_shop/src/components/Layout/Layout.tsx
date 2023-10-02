import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className="layout-wrapper">
        <Header />
        <div className="cover">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
