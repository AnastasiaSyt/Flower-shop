import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { removeItem, updateItemQuantity, updateTotalPrice } from '../../Redux/cartSlice';
import './ShoppingCartTable.scss';
import { useEffect, useState } from 'react';
import CartItemsList from '../CartItemsList/CartItemsList';

function ShoppingCartTable() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);

    dispatch(updateTotalPrice(total));
  }, [cartItems, dispatch]);

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateItemQuantity({ id, quantity }));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <CartItemsList
      cartItems={cartItems}
      onUpdateQuantity={handleUpdateQuantity}
      onRemoveItem={handleRemoveItem}
    />
  );
}

export default ShoppingCartTable;
