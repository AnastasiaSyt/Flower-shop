import React from 'react';
import './Counter.scss';
import { useDispatch } from 'react-redux';
import { updateItemQuantity } from '../../../Redux/cartSlice';

interface ProductsCounterProps {
  quantity: number;
  productId: number;
  onQuantityChange: (newQuantity: number) => void; //chheck it
}

function ProductsCounter({ quantity, productId, onQuantityChange }: ProductsCounterProps) {
  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity: number) => {
    dispatch(updateItemQuantity({ productId, quantity: newQuantity }));
  };

  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="counter">
      <button onClick={handleDecrement} className="button_counter">
        -
      </button>
      <input className="input_counter" type="number" value={quantity} readOnly />
      <button onClick={handleIncrement} className="button_counter">
        +
      </button>
    </div>
  );
}

export default ProductsCounter;
