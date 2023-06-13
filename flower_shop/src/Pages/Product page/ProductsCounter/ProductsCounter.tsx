import React, { useState } from "react";

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
      <button onClick={handleDecrement}>-</button>
      <input type="number" value={count} onChange={() => {}} readOnly />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default ProductsCounter;
