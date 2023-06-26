import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import cardsReducer from './sortCardsSlice';
import filterReducer from './filterSlice';
import cardViewReducer from './cardViewSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cards: cardsReducer,
    filters: filterReducer,
    cardView: cardViewReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
