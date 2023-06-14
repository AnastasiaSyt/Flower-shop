import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ICards from '../types/ICards';

interface CardsState {
  cards: ICards[];
  sortCriteria: string;
}

const initialState: CardsState = {
  cards: [],
  sortCriteria: '',
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<ICards[]>) => {
      state.cards = action.payload;
    },
    setSortCriteria: (state, action: PayloadAction<string>) => {
      state.sortCriteria = action.payload;
    },
    sortByRating: (state) => {
      state.cards.sort((a, b) => b.rating - a.rating);
    },
    sortByPriceCheap: (state) => {
      state.cards.sort((a, b) => a.price - b.price);
    },
    sortByPriceExpensive: (state) => {
      state.cards.sort((a, b) => b.price - a.price);
    },
    cancelSort: (state) => {
      state.sortCriteria = '';
    },
  },
});

export const {
  setCards,
  setSortCriteria,
  sortByRating,
  sortByPriceCheap,
  sortByPriceExpensive,
  cancelSort,
} = cardsSlice.actions;
export default cardsSlice.reducer;
