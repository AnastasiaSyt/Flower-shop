import { FC } from 'react';
import cart_icon from '../../../assets/add_cart.svg';
import './CartLabel.scss';

export type CartLabelItem = 'cardItem' | 'listItem';

interface CartLabelProps {
  item: CartLabelItem;
}

const CartLabel: FC<CartLabelProps> = ({ item }) => {
  const labelClassName = `cart_tag ${item}`;
  return (
    <div className={labelClassName}>
      <img className="cart_icon" src={cart_icon} />
      <p className="text_tag">добавить</p>
    </div>
  );
};

export default CartLabel;
