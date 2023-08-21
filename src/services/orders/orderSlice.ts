import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import IOrder from "../../types/IOrder";
import { fetchOrders, moveOrder } from "./orderService";
import { APIStatus, APIError } from "../types";

export interface OrderState {
  orders: IOrder[];
  totalAmount: number;
  readyOrders: IOrder[] | undefined;
  status: APIStatus,
  error: APIError
}

const initialState: OrderState = {
  orders: [],
  totalAmount: 0,
  readyOrders: [],
  status: APIStatus.IDLE,
  error: { code: 0, message: '' }
};

export const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    removeOrder: (state: OrderState, action: PayloadAction<number>) => {
      state.readyOrders = state.readyOrders && state.readyOrders.filter((order: IOrder) => order.id !== action.payload);
    },
    updateOrder: (state: OrderState, action: PayloadAction<IOrder>) => {
      const selectedOrderIndex = state.orders.findIndex(
        (item) => item.id === action.payload.id
      );
      const currentOrders = state.orders;
      currentOrders[selectedOrderIndex] = action.payload;
      state.orders = currentOrders;
    }
  },
  extraReducers: (builder: any) => {
    // The `builder` callback form is used here because it provides correctly typed reducers from the action creators
    builder
      .addCase(fetchOrders.fulfilled, (state: OrderState, action: PayloadAction<OrderState>) => {
        state.orders = action.payload.orders;
        state.totalAmount = action.payload.totalAmount;
        state.status = APIStatus.FULFILLED
      })
      .addCase(fetchOrders.rejected, (state: OrderState, action: any) => {
        state.error = action.payload
        state.status = APIStatus.REJECTED
      })
      .addCase(fetchOrders.pending, (state: OrderState) => {
        state.status = APIStatus.PENDING
      })
      .addCase(moveOrder.fulfilled, (state: OrderState, action: PayloadAction<IOrder>) => {
        const selectedOrderIndex = state.orders.findIndex(
          (item) => item.id === action.payload.id
        );
        const currentOrders = state.orders;
        currentOrders.splice(selectedOrderIndex, 1);
        state.orders = currentOrders;
        if (state.readyOrders) {
          state.readyOrders = state.readyOrders.concat(action.payload);
        } else {
          state.readyOrders = [action.payload];
        }
      });
  }
});

export const { removeOrder, updateOrder } = orderSlice.actions;
export const selectOrder = (state: RootState) => state.order.orders.values;
export default orderSlice.reducer;
