import React from 'react';
import cart_icon from '../../../assets/add_cart.svg';
import './CartLabel.scss';

function CartLabel() {
  return (
    <div className="cart_tag">
      <img className="cart_icon" src={cart_icon} />
      <p className="text_tag">добавить</p>
    </div>
  );
}

export default CartLabel;
