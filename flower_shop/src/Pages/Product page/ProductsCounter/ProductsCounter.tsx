import React from 'react';
import './Counter.scss';
import { useDispatch } from 'react-redux';
import { updateItemQuantity } from '../../../Redux/cartSlice';

interface ProductsCounterProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  stock: number;
}

function ProductsCounter({ quantity, onQuantityChange, stock }: ProductsCounterProps) {
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
      <button onClick={handleDecrement} className="button_counter" disabled={quantity === 0}>
        -
      </button>
      <input className="input_counter" type="number" value={quantity} readOnly />
      <button onClick={handleIncrement} className="button_counter" disabled={quantity >= stock}>
        +
      </button>
    </div>
  );
}

export default ProductsCounter;
