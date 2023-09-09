import Button from '../Button/Button';
import './TotalPrice.scss';

function TotalPrice() {
  return (
    <div className="total_content">
      <h2 className="total_title">Итог</h2>
      <ul className="invoice_ul">
        <li className="invoice">
          <span className="invoice_position">Товары</span>
          <span className="goods-price">$0.00</span>
        </li>
        <li className="invoice">
          <span className="invoice_position invoice_link">Налог</span>
          <span className="tax-price">$10</span>
        </li>
        <li className="invoice">
          <span className="invoisce_position invoice_link">Доставка</span>
          <span className="delivery-price">$18</span>
        </li>
        <li className="invoice">
          <span className="invoice_position invoice_link">Скидка</span>
          <span className="sale-price">0%</span>
        </li>
        <li className="invoice_total">
          <span className="total_position">Всего</span>
          <span className="total_price">$28</span>
        </li>
      </ul>
      <Button>ОФОРМИТЬ ЗАКАЗ</Button>
    </div>
  );
}

export default TotalPrice;
