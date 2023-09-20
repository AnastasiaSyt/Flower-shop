import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import './TotalPrice.scss';
import { RootState } from '../../Redux/store';
import { useState } from 'react';
import Popup from '../PopUp/PopUp';
import POPUPS from '../../constants/popups';
import icon from '../../assets/icon_info.svg';

function TotalPrice() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState('');
  const [popupTitle, setPopupTitle] = useState('');

  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const discount = useSelector((state: RootState) => state.cart.discount);

  const tax = totalPrice * 0.18;
  const delivery = totalPrice > 200 ? 0 : 20;
  const discountAmount = (totalPrice * discount) / 100;
  const total = totalPrice + tax + delivery - discountAmount;

  const handleInvoiceLinkClick = (title: string, text: string) => {
    setPopupTitle(title);
    setPopupText(text);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="total_content">
      <h2 className="total_title">Итог</h2>
      <ul className="invoice_ul">
        <li className="invoice">
          <span className="invoice_position">Товары</span>
          <span className="goods-price">{totalPrice}</span>
        </li>
        <li className="invoice">
          <span
            className="invoice_position invoice_link"
            onClick={() => handleInvoiceLinkClick(POPUPS.tax.title, POPUPS.tax.message)}
          >
            Налог
            <img src={icon} alt="icon info" />
          </span>
          <span className="tax-price">${tax.toFixed(2)}</span>
        </li>
        <li className="invoice">
          <span
            className="invoisce_position invoice_link"
            onClick={() => handleInvoiceLinkClick(POPUPS.delivery.title, POPUPS.delivery.message)}
          >
            Доставка
            <img src={icon} alt="icon info" />
          </span>
          <span className="delivery-price">${delivery}</span>
        </li>
        <li className="invoice">
          <span
            className="invoice_position invoice_link"
            onClick={() => handleInvoiceLinkClick(POPUPS.discount.title, POPUPS.discount.message)}
          >
            Скидка
            <img src={icon} alt="icon info" />
          </span>
          <span className="sale-price">{discount}%</span>
        </li>
        <li className="invoice_total">
          <span className="total_position">Всего</span>
          <span className="total_price">${total.toFixed(2)}</span>
        </li>
      </ul>
      <Button>ОФОРМИТЬ ЗАКАЗ</Button>

      {isPopupVisible && (
        <div className="popup-overlay">
          <Popup title={popupTitle} text={popupText} onClose={handleClosePopup} />
        </div>
      )}
    </div>
  );
}

export default TotalPrice;
