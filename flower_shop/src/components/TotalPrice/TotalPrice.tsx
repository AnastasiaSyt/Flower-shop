import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import './TotalPrice.scss';
import { RootState } from '../../Redux/store';
import { useState } from 'react';
import Popup from '../PopUp/PopUp';

function TotalPrice() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState('');

  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const discount = useSelector((state: RootState) => state.cart.discount);

  const tax = totalPrice * 0.18;
  const delivery = totalPrice > 200 ? 0 : 20;
  const discountAmount = (totalPrice * discount) / 100;
  const total = totalPrice + tax + delivery - discountAmount;

  const handleInvoiceLinkClick = (text: string) => {
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
            onClick={() => handleInvoiceLinkClick('Налог')}
          >
            Налог
          </span>
          <span className="tax-price">${tax.toFixed(2)}</span>
        </li>
        <li className="invoice">
          <span
            className="invoisce_position invoice_link"
            onClick={() => handleInvoiceLinkClick('Доставка')}
          >
            Доставка
          </span>
          <span className="delivery-price">${delivery}</span>
        </li>
        <li className="invoice">
          <span
            className="invoice_position invoice_link"
            onClick={() => handleInvoiceLinkClick('Скидка')}
          >
            Скидка
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
          <Popup text={popupText} onClose={handleClosePopup} />
        </div>
      )}
    </div>
  );
}

export default TotalPrice;
