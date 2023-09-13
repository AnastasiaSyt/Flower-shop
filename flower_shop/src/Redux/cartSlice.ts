import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  productId: number;
  title: string;
  color: string[];
  quantity: number;
  price: number;
  stock: number;
  image: string;
}

interface CartState {
  cartItems: CartItem[];
  totalPrice: number;
  promoCode: string | null;
  discount: number;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalPrice: 0,
    promoCode: null,
    discount: 0,
  } as CartState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const { productId } = action.payload;
      const existingItem = state.cartItems.find((item) => item.productId === productId);

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
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
    updateTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    applyPromoCode: (state, action: PayloadAction<{ promoCode: string; discount: number }>) => {
      state.promoCode = action.payload.promoCode;
      state.discount = action.payload.discount;
    },
  },
});

export const {
  addItem,
  updateItemQuantity,
  removeItem,
  clearCart,
  updateTotalPrice,
  applyPromoCode,
} = cartSlice.actions;
export default cartSlice.reducer;
