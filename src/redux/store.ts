import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { newsSlice } from "./newsSlice";
import { errorSlice } from "./errorSlice";

const rootReducer = combineReducers({
  news: newsSlice.reducer,
  error: errorSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
