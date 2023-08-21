import React, { useEffect } from "react";
import Header from "../components/Layout/Header";
import Orders from "../components/Orders/Orders";
import { fetchOrders } from "../services/orders/orderService";
import { useAppDispatch, useAppSelector } from "../services/hooks";
import Alert from '@mui/material/Alert';

const App = () => {
  const dispatch = useAppDispatch();
  const notification = useAppSelector((state: any) => state.common.successMessage);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <>
      {notification && (
        <Alert style={{ width: "50%", margin: "100px", position: "fixed", zIndex: "99" }} severity="success">
          {notification}
        </Alert>
      )}
      <Header />
      <Orders />
    </>
  );
};

export default App;
