import React from 'react';
import classes from "../../style/OrdersSummary.module.scss";
import { Typography } from '@mui/material';

const OrdersSummary = () => {
  return (
    <section className={classes.summary}>
      <Typography variant="h2" gutterBottom>
        Delicious Food, Delivered To You
      </Typography>
      <Typography variant="body1" gutterBottom>
        Choose your favorite order from our broad selection of available orders
          and enjoy a delicious lunch or dinner at home.
      </Typography>
      <Typography variant="body2" gutterBottom>
        All our orders are cooked with high-quality ingredients, just-in-time and
          of course by experienced chefs!
      </Typography>
    </section>
  );
};

export default OrdersSummary;
