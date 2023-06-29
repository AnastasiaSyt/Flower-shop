import { createSlice } from '@reduxjs/toolkit';

type CardViewState = 'cards' | 'list';

interface CardViewSliceState {
  view: CardViewState;
}

const initialState: CardViewSliceState = {
  view: 'cards',
};

const cardViewSlice = createSlice({
  name: 'cardView',
  initialState,
  reducers: {
    toggleView: (state) => {
      state.view = state.view === 'cards' ? 'list' : 'cards';
    },
  },
});

export const { toggleView } = cardViewSlice.actions;
export default cardViewSlice.reducer;
