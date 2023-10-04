import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import './Header.scss';
import logo from '../../assets/newLogo.svg';
import cart from '../../assets/small_cart.svg';
import ROUTES from '../../constants/routes';
import { useState, useEffect } from 'react';
import ToggleLanguage from '../ToggleLanguage/ToggleLanguage';

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsSticky(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className={`header sticky-header ${isSticky ? 'is-sticky' : ''}`}>
      <div className="wrapper header_wrapper">
        <Link to={ROUTES.main} className="header_logo">
          <img src={logo} alt="project logo" />
        </Link>
        <div className="header_menu">
          <p className="header_menu_item">о нас</p>
          <Link to={ROUTES.shop}>
            <p className="header_menu_item">каталог</p>
          </Link>
          <p className="header_menu_item">контакты</p>
        </div>
        <ToggleLanguage />
        <Link to={ROUTES.basket} className="header_cart">
          <div className="bg_cart">
            <img src={cart} alt="logo cart" className="cart_logo" />
            <p className="text_cart">корзина</p>
            <div className="bg_count">
              <p className="count">{totalCount}</p>
            </div>
          </div>
        </Link>
        <p className="enter">Войти</p>
      </div>
    </header>
  );
}

export default Header;
