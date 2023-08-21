import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./orders/orderSlice";
import commonReducer from "./common/commonSlice";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    common: commonReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
