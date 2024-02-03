import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./combineReducer";

export const store = configureStore({
  reducer,
});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
