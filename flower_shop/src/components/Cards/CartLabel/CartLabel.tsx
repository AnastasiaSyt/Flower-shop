import { FC } from 'react';
import cart_icon from '../../../assets/add_cart.svg';
import './CartLabel.scss';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../Redux/cartSlice';

export type CartLabelItem = 'cardItem' | 'listItem';

interface CartLabelProps {
  item: CartLabelItem;
}

const CartLabel: FC<CartLabelProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItem({ productId: cardData.id, quantity: 1 }));
  };

  const labelClassName = `cart_tag ${item}`;
  return (
    <div className={labelClassName} onClick={handleClick}>
      <img className="cart_icon" src={cart_icon} />
      <p className="text_tag">добавить</p>
    </div>
  );
};

export default CartLabel;
