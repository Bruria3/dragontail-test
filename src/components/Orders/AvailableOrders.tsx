import React from 'react';
import Card from "../UI/Card";
import OrderItem from "./OrderItem/BaseOrderItem";
import classes from "../../style/AvailableOrders.module.scss";
import { List, Grid, Typography } from '@mui/material';
import IOrder from '../../types/IOrder';
import { useAppSelector } from '../../services/hooks';

const AvailableOrders = () => {
  const orders: IOrder[] = useAppSelector((state: any) => state.order && state.order.orders) || [];

  const ordersList = (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {orders.length ? (
        <Grid container spacing={2} >
          {
            orders.map((order) => (
              <Grid key={order.id} item xs={12} md={6} height={400}>
                <OrderItem order={order} />
              </Grid>
            ))
          }
        </Grid>
      ) : (
          <Grid container spacing={2} justifyContent="center">
            <Typography variant="h3">
              No orders to deliver!
            </Typography>
          </Grid>
        )
      }
    </List>
  );

  return (
    <section className={classes.orders}>
      <Card>{ordersList}</Card>
    </section>
  );
};

export default AvailableOrders;
