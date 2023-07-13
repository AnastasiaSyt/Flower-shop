import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  productId: number;
  quantity: number;
  // Дополнительные свойства товара
}

interface CartState {
  cartItems: CartItem[];
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  } as CartState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
    },
    updateItemQuantity: (state, action: PayloadAction<{ productId: number; quantity: number }>) => {
      const { productId, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.productId === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter((item) => item.productId !== action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItem, updateItemQuantity, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
