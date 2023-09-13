import './promo.scss';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyPromoCode } from '../../Redux/cartSlice';

type TPromoCodeDiscounts = {
  [key: string]: number;
};

function Promo() {
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const dispatch = useDispatch();

  const handleApplyPromoCode = () => {
    const promoCodeDiscounts: TPromoCodeDiscounts = {
      J5YU0: 10,
      VD6YA: 15,
      H3ZTQ: 15,
      HM1V4: 18,
      CA9JS: 20,
      E11L3: 30,
      K09N5: 35,
      KBAXE: 40,
      J8SIV: 50,
      LF0UN: 50,
    };

    const discount = promoCodeDiscounts[promoCodeInput] || 0;

    dispatch(applyPromoCode({ promoCode: promoCodeInput, discount }));
  };

  return (
    <div className="promo_block">
      <div className="promo_text">Можно ввести следующие промокоды:</div>
      <div className="enter_promo">
        <p className="promotion">J5YU0</p>
        <p className="promotion">VD6YA</p>
        <p className="promotion">H3ZTQ</p>
        <p className="promotion">HM1V4</p>
        <p className="promotion">CA9JS</p>
        <p className="promotion">E11L3</p>
        <p className="promotion">K09N5</p>
        <p className="promotion">KBAXE</p>
        <p className="promotion">J8SIV</p>
        <p className="promotion">LF0UN</p>
      </div>
      <div className="input_block">
        <input
          type="text"
          className="promo_input"
          placeholder="Введите промокод"
          value={promoCodeInput}
          onChange={(e) => setPromoCodeInput(e.target.value)}
        />
        <button className="promo_button" onClick={handleApplyPromoCode}>
          Ввод
        </button>
      </div>
    </div>
  );
}

export default Promo;
