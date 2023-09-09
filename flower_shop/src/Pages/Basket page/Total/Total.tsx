function Total() {
  return (
    <div className="check-content">
      <h2>Итог</h2>
      <ul className="prices_ul">
        <li className="target_li">
          <span className="goods-position">Товары</span>
          <span className="goods-price">$0.00</span>
        </li>
        <li className="target_li">
          <span className="tax-position">Налог</span>
          <span className="tax-price">$10</span>
        </li>
        <li className="target_li">
          <span className="delivery-position">Доставка</span>
          <span className="delivery-price">$18</span>
        </li>
        <li className="target_li">
          <span className="sale-position">Скидка</span>
          <span className="sale-price">0%</span>
        </li>
        <li className="target_li total">
          <span className="total-position">Всего</span>
          <span className="total-price">$28</span>
        </li>
      </ul>
      <button className="button order" id="button_order">
        оформить заказ
      </button>
    </div>
  );
}

export default Total;
