import { configureStore } from '@reduxjs/toolkit';
import  carReducer from "../features/carSlice/car"

export const store = configureStore({
  reducer: {
    car: carReducer
  },
});
