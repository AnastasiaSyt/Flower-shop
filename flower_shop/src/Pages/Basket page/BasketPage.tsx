import ProductsCounter from "../Product page/ProductsCounter/ProductsCounter";
import "./BasketPage.scss";
import "./Promo/promo.scss";
import image from "../../assets/flowers-green-leaves.jpg";

function BasketPage() {
  return (
    <div>
      <img src={image} alt="top picture" className="flowers_top" />
      <div className="basket" id="basketPage">
        <div className="basket_items">
          <div className="basket_items-head">
            <p className="basket_items-head_name">Наименование</p>
            <p className="basket_items-head_name">Цвет</p>
            <p className="basket_items-head_name">Количество</p>
            <p className="basket_items-head_name">Цена</p>
          </div>
          <div className="basket-item">
            <input type="checkbox" className="checked" />
            <div className="item-name_block">
              <img
                src="../../img/data_img/flowers_1.jpg"
                className="basket-item_img"
              />
              <div className="item-name">
                <h2>Красная роза</h2>
                <p>Доступно: 94</p>
              </div>
            </div>
            <div className="item-color">
              <p className="color_text">Красный</p>
              <div className="color-chooser base darkred"></div>
              <a className="color-chooser_text">Изменить</a>
              <div className="colors_block">
                <div className="color-chooser color darkred"></div>
              </div>
            </div>
            <ProductsCounter />
            <p className="price">$2</p>
            <div className="cross">
              <span className="cross-line"></span>
            </div>
          </div>
        </div>
        <div>
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
          <div className="promo_block">
            <div className="promo_text">Можно ввести следующие промокоды:</div>
            <div className="enter_promo">
              <p className="promotion">J5YU0</p>
              <p className="promotion">VD6YA</p>
              <p className="promotion">13ZTQ</p>
              <p className="promotion">HM1V4</p>
              <p className="promotion">CA9JS</p>
              <p className="promotion">E11L3</p>
              <p className="promotion">009N5</p>
              <p className="promotion">1BAXE</p>
              <p className="promotion">J8SIV</p>
              <p className="promotion">LF0UN</p>
            </div>
            <div className="input_block">
              <input
                type="text"
                className="promo_input"
                placeholder="Введите промокод"
              />
              <button className="promo_button">Ввод</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketPage;
