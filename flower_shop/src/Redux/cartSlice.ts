import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICartItem {
  quantity: number;
  id: number;
  title: string;
  description: string;
  flower: string[];
  price: number;
  rating: number;
  stock: number;
  size: number;
  country: string[];
  occasions: string[];
  category: string;
  color: string[];
  thumbnail: string;
  images: string[];
}

interface CartState {
  cartItems: ICartItem[];
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
    addItem: (state, action: PayloadAction<ICartItem>) => {
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    updateItemQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
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
