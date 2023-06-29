import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
  occasions: string[];
  category: string[];
  color: string[];
  flower: string[];
  priceRange: number[];
  sizeRange: number[];
  selectedFilters: string[];
}

const initialState: FilterState = {
  occasions: [],
  category: [],
  color: [],
  flower: [],
  priceRange: [],
  sizeRange: [],
  selectedFilters: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPriceRange: (state, action: PayloadAction<number[]>) => {
      state.priceRange = action.payload;
    },
    setSizeRange: (state, action: PayloadAction<number[]>) => {
      state.sizeRange = action.payload;
    },
    setCategoryFilter: (state, action: PayloadAction<string[]>) => {
      state.category = action.payload;
    },
    setOccasionsFilter: (state, action: PayloadAction<string[]>) => {
      state.occasions = action.payload;
    },
    setFlowerFilter: (state, action: PayloadAction<string[]>) => {
      state.flower = action.payload;
    },
    setColorFilter: (state, action: PayloadAction<string[]>) => {
      state.color = action.payload;
    },
    clearFilters: (state) => {
      state.occasions = [];
      state.category = [];
      state.color = [];
      state.flower = [];
      state.priceRange = [];
      state.sizeRange = [];
      state.selectedFilters = [];
    },
    addSelectedCriteria: (state, action: PayloadAction<string>) => {
      state.selectedFilters.push(action.payload);
    },
    removeSelectedCriteria: (state, action: PayloadAction<string>) => {
      state.selectedFilters = state.selectedFilters.filter(
        (criteria) => criteria !== action.payload
      );
    },
    clearSelectedCriteria: (state) => {
      state.selectedFilters = [];
    },
  },
});

export const {
  setOccasionsFilter,
  setCategoryFilter,
  setColorFilter,
  setFlowerFilter,
  clearFilters,
  setPriceRange,
  setSizeRange,
  addSelectedCriteria,
  removeSelectedCriteria,
  clearSelectedCriteria,
} = filterSlice.actions;
export default filterSlice.reducer;
