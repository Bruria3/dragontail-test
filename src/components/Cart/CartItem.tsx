import React from 'react';
import classes from "../../style/CartItem.module.scss";
import { Button } from '@mui/material';

const CartItem = (props: any) => {
  const { onRemove, item } = props;
  const price = `$${item.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <div className={classes.price}>{price}</div>
          <div className={classes.name}>{item.name}</div>
          <div className={classes.description}>{item.description}</div>
          <Button onClick={onRemove}>x</Button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
