import React from 'react';
import { useAppDispatch } from "../../../services/hooks";
import { moveOrder } from "../../../services/orders/orderService";
import {
  Card, ListItem, CardActions, CardContent, Button, Typography
} from '@mui/material';
import {
  CheesePizza, PepperoniPizza, SupremePizza, VegetarianPizza
} from './OrderTypes';
import UserDetails from './UserDetails';
import Title from './Title';
import IOrder from '../../../types/IOrder';
import { updateOrder } from '../../../services/orders/orderSlice';

interface BaseOrderProps {
  order: IOrder
}

const PizzaComponents: Object = {
  cheese: CheesePizza,
  pepperoni: PepperoniPizza,
  vegetarian: SupremePizza,
  supreme: VegetarianPizza
};

const OrderItem: React.FC<BaseOrderProps> = (props: any) => {
  const dispatch = useAppDispatch();
  const { order } = props;
  const Pizza = PizzaComponents[order.type as keyof Object] || CheesePizza;
  const formattedPrice = `$${order.price.toFixed(2)}`;

  const moveOrderHandler = () => {
    const newOrder = {
      ...order
    };
    dispatch(moveOrder(newOrder));
  }

  const handleIncrement = () => {
    const updatedOrder = {
      ...order,
      items: order.items + 1
    }
    dispatch(updateOrder(updatedOrder));
  };

  const handleDecrement = () => {
    const updatedItems = order.items - 1;
    const updatedOrder = {
      ...order,
      items: updatedItems
    }
    dispatch(updatedItems > 0 ? updateOrder(updatedOrder) : moveOrder(updatedOrder));
  };

  return (
    <ListItem>
      <Card sx={{ width: 350, height: 350 }}>
        <CardContent>
          <Title id={order.id} name={order.name} />
          <Pizza {...order} />
          <UserDetails {...order.userDetails} />
          <Typography>Price: {formattedPrice}</Typography>
          <Typography>No of items to prepare: {order.items}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={moveOrderHandler}>Order is ready!</Button>
          <Button onClick={handleIncrement}>+</Button>
          <Button onClick={handleDecrement}>-</Button>
        </CardActions>
      </Card>
    </ListItem>
  );
};

export default OrderItem;
