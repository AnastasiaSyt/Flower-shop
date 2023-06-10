import React, { useState } from "react";
import "./Counter.scss";

function ProductsCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="counter">
      <button onClick={handleDecrement} className="button_counter">
        -
      </button>
      <input
        className="input_counter"
        type="number"
        value={count}
        onChange={() => {}}
        readOnly
      />
      <button onClick={handleIncrement} className="button_counter">
        +
      </button>
    </div>
  );
}

export default ProductsCounter;
