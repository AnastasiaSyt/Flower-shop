import React from 'react';
import CartItem from '../CartItem/CartItem';
import { ICartItem } from '../../Redux/cartSlice';

interface CartItemsListProps {
  cartItems: ICartItem[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

function CartItemsList({ cartItems, onUpdateQuantity, onRemoveItem }: CartItemsListProps) {
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
        <div key={item.id}>
          <CartItem item={item} onUpdateQuantity={onUpdateQuantity} onRemoveItem={onRemoveItem} />
        </div>
      ))}
    </div>
  );
}

export default CartItemsList;
