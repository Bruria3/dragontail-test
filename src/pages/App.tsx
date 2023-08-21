import React, { useEffect } from "react";
import Header from "../components/Layout/Header";
import Orders from "../components/Orders/Orders";
import { fetchOrders } from "../services/orders/orderService";
import { useAppDispatch, useAppSelector } from "../services/hooks";
import Alert from '@mui/material/Alert';

const App = () => {
  const dispatch = useAppDispatch();
  const notification = useAppSelector((state: any) => state.common && state.common.successMessage);
  console.log(notification);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <>
      <Header />
      <Orders />
      {notification && <Alert severity="success">{notification}</Alert>}
    </>
  );
};

export default App;
