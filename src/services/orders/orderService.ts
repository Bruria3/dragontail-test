import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIError } from "../types";
import { publicRequest, getExceptionPayload } from "../respHandlingUtils";
import { OrderState } from "./orderSlice";
import IOrder from "../../types/IOrder";
import { useAppDispatch } from "../hooks";
import { setSuccessNotification } from "../common/commonSlice";

export const fetchOrders = createAsyncThunk<OrderState, void, { rejectValue: APIError }>(
    "order/fetchOrders",
    async (_, { rejectWithValue }) => {
        // Fetch the backend endpoint:
        try {
            const response = await publicRequest.get<OrderState>('/orders.json');
            return response.data;
        }
        catch (ex) {
            return rejectWithValue(getExceptionPayload(ex));
        }
    }
);

export const moveOrder = createAsyncThunk(
    'order/moveOrder',
    async (order: IOrder, {dispatch}) => {
        try {
            // await publicRequest.post<OrderState>('orders', order);
            dispatch(setSuccessNotification('Order moved successfully!'));
            return order;
        }
        catch(err)  {
            console.log(err);
        }
    }
);
