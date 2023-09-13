import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import './TotalPrice.scss';
import { RootState } from '../../Redux/store';

function TotalPrice() {
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const tax = totalPrice * 0.18;

  const delivery = totalPrice > 200 ? 0 : 20;
  return (
    <div className="total_content">
      <h2 className="total_title">Итог</h2>
      <ul className="invoice_ul">
        <li className="invoice">
          <span className="invoice_position">Товары</span>
          <span className="goods-price">{totalPrice}</span>
        </li>
        <li className="invoice">
          <span className="invoice_position invoice_link">Налог</span>
          <span className="tax-price">${tax.toFixed(2)}</span>
        </li>
        <li className="invoice">
          <span className="invoisce_position invoice_link">Доставка</span>
          <span className="delivery-price">${delivery}</span>
        </li>
        <li className="invoice">
          <span className="invoice_position invoice_link">Скидка</span>
          <span className="sale-price">0%</span>
        </li>
        <li className="invoice_total">
          <span className="total_position">Всего</span>
          <span className="total_price">${(totalPrice + tax + delivery).toFixed(2)}</span>
        </li>
      </ul>
      <Button>ОФОРМИТЬ ЗАКАЗ</Button>
    </div>
  );
}

export default TotalPrice;
