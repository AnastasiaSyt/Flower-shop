import ProductsCounter from '../Product page/ProductsCounter/ProductsCounter';
import './BasketPage.scss';
import Promo from './Promo/Promo';
import image from '../../assets/flowers-green-leaves.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { removeItem, updateItemQuantity } from '../../Redux/cartSlice';
import Total from './Total/Total';

function BasketPage() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    dispatch(updateItemQuantity({ productId, quantity }));
  };

  const handleRemoveItem = (productId: number) => {
    dispatch(removeItem(productId));
  };

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
          {cartItems.map((item) => (
            <div key={item.productId} className="basket-item">
              <input type="checkbox" className="checked" />
              <div className="item-name_block"></div>
              <ProductsCounter
                quantity={item.quantity}
                onQuantityChange={(newQuantity) =>
                  handleUpdateQuantity(item.productId, newQuantity)
                }
              />
              <div className="cross" onClick={() => handleRemoveItem(item.productId)}>
                <span className="cross-line"></span>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Total />
          <Promo />
        </div>
      </div>
    </div>
  );
}

export default BasketPage;
