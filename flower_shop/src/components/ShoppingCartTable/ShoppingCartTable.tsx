import ProductsCounter from '../../Pages/Product page/ProductsCounter/ProductsCounter';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { removeItem, updateItemQuantity, updateTotalPrice } from '../../Redux/cartSlice';
import './ShoppingCartTable.scss';
import colorfulCircle from '../../assets/colorful _circle.svg';
import { useEffect, useState } from 'react';

function ShoppingCartTable() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);

    dispatch(updateTotalPrice(total));
  }, [cartItems, dispatch]);

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    dispatch(updateItemQuantity({ productId, quantity }));
  };

  const handleRemoveItem = (productId: number) => {
    dispatch(removeItem(productId));
  };

  return (
    <div className="basket_items">
      <div className="basket_items-head">
        <p className="basket_items-head_name empty"></p>
        <p className="basket_items-head_name">Наименование</p>
        <p className="basket_items-head_name">Цвет</p>
        <p className="basket_items-head_name">Количество</p>
        <p className="basket_items-head_name">Цена</p>
        <p className="basket_items-head_name empty"></p>
      </div>
      {cartItems.map((item) => (
        <div key={item.productId} className="basket-item">
          <img src={item.image} alt="flower image" className="item_image" />
          <div className="item-name_block">
            <p className="item-name_title">{item.title}</p>
            <p>Доступно: {item.stock - item.quantity}</p>
          </div>
          <div className="color">
            <div className="color_circle">
              {item.color.length > 1 ? (
                <img src={colorfulCircle} alt="Colorful Circle" />
              ) : (
                <div className="circle" style={{ backgroundColor: item.color[0] }} />
              )}
            </div>
          </div>
          <div className="item-name_counter">
            <ProductsCounter
              quantity={item.quantity}
              onQuantityChange={(newQuantity) => handleUpdateQuantity(item.productId, newQuantity)}
              stock={item.stock}
            />
          </div>
          <div className="item-price">${item.price * item.quantity}</div>
          <div className="cross" onClick={() => handleRemoveItem(item.productId)}>
            <span className="cross-line"></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCartTable;
