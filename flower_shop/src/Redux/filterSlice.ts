import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  price: number | null;
  size: number | null;
  occasions: string[];
  category: string[];
  color: string | null;
  flower: string[];
}

const initialState: FilterState = {
  price: null,
  size: null,
  occasions: [],
  category: [],
  color: null,
  flower: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPriceFilter: (state, action: PayloadAction<number | null>) => {
      state.price = action.payload;
    },
    setSizeFilter: (state, action: PayloadAction<number | null>) => {
      state.size = action.payload;
    },
    setOccasionsFilter: (state, action: PayloadAction<string[]>) => {
      state.occasions = action.payload;
    },
    setCategoryFilter: (state, action: PayloadAction<string[]>) => {
      state.category = action.payload;
    },
    setFlowerFilter: (state, action: PayloadAction<string[]>) => {
      state.flower = action.payload;
    },
    setColorFilter: (state, action: PayloadAction<string | null>) => {
      state.color = action.payload;
    },
    clearFilters: (state) => {
      state.price = null;
      state.size = null;
      state.occasions = [];
      state.category = [];
      state.color = null;
      state.flower = [];
    },
  },
});

export const {
  setPriceFilter,
  setSizeFilter,
  setOccasionsFilter,
  setCategoryFilter,
  setColorFilter,
  setFlowerFilter,
  clearFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
