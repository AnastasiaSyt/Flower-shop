import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.svg";
import cart from "../../assets/small_cart.svg";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="wrapper header_wrapper">
          <Link to="/main" className="header_logo">
            <img src={logo} alt="project logo" />
            <p className="logo_text">flowers shop</p>
          </Link>
          <div className="header_cart">
            <div className="bg_cart">
              <img src={cart} alt="logo cart" className="cart_logo" />
              <p className="text_cart">корзина</p>
              <div className="bg_count">
                <p className="count">0</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
