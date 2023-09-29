import ProductsCounter from '../../Pages/Product page/ProductsCounter/ProductsCounter';
import React from 'react';
import colorfulCircle from '../../assets/colorful _circle.svg';
import { useNavigate } from 'react-router-dom';
import { ICartItem } from '../../Redux/cartSlice';

interface CartItemProps {
  item: ICartItem;
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

function CartItem({ item, onUpdateQuantity, onRemoveItem }: CartItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${item.id}`, { state: { cardData: item } });
  };

  return (
    <div className="basket-item">
      <img
        src={item.thumbnail}
        alt="flower image"
        className="item_image"
        onClick={() => handleClick()}
      />
      <div className="item-name_block">
        <p className="item-name_title">{item.title} </p>
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
          onQuantityChange={(newQuantity) => onUpdateQuantity(item.id, newQuantity)}
          stock={item.stock}
        />
      </div>
      <div className="item-price">${item.price * item.quantity}</div>
      <div className="cross" onClick={() => onRemoveItem(item.id)}>
        <span className="cross-line"></span>
      </div>
    </div>
  );
}

export default CartItem;
