import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import './Header.scss';
import logo from '../../assets/logo.svg';
import cart from '../../assets/small_cart.svg';
import ROUTES from '../../constants/routes';

function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="wrapper header_wrapper">
        <Link to={ROUTES.shop} className="header_logo">
          <img src={logo} alt="project logo" />
          <p className="logo_text">flowers shop</p>
        </Link>
        <Link to={ROUTES.basket} className="header_cart">
          <div className="bg_cart">
            <img src={cart} alt="logo cart" className="cart_logo" />
            <p className="text_cart">корзина</p>
            <div className="bg_count">
              <p className="count">{totalCount}</p>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
