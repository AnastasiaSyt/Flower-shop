import './BasketPage.scss';
import Promo from './Promo/Promo';
import image from '../../assets/flowers-green-leaves.jpg';
import ShoppingCartTable from '../../components/ShoppingCartTable/ShoppingCartTable';
import TotalPrice from '../../components/TotalPrice/TotalPrice';

function BasketPage() {
  return (
    <div>
      <img src={image} alt="top picture" className="flowers_top" />
      <div className="basket" id="basketPage">
        <ShoppingCartTable />
        <div>
          <TotalPrice />
          {/* <div className="promo_block">
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
              <input type="text" className="promo_input" placeholder="Введите промокод" />
              <button className="promo_button">Ввод</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default BasketPage;
