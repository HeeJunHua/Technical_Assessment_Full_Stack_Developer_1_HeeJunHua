import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './features/itemSlice';
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';

// Define the store
const store = configureStore({
  reducer: {
    items: itemReducer,
  },
});

// Infer the `RootState` type
export type RootState = ReturnType<typeof store.getState>;

// Define the typed `dispatch` hook
export type AppDispatch = typeof store.dispatch;

// Custom hooks for dispatch and selector
export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default store;
