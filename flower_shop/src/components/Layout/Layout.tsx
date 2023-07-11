import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="cover">
          <Outlet />
          <Footer />
        </div>
      </>
    );
  }
}

export default Layout;
