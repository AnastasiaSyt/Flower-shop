import React from 'react';
import './Counter.scss';

interface ProductsCounterProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

function ProductsCounter({ quantity, onQuantityChange }: ProductsCounterProps) {
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
