import React from 'react';
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "../../style/Cart.module.scss";
import IOrder from "../../types/IOrder";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { removeOrder } from "../../services/orders/orderSlice";

const Cart = (props: any) => {
  const dispatch = useAppDispatch();
  const orderState = useAppSelector((state) => state.order);
  const orders = orderState.readyOrders || [];
  const hasOrders = orders.length > 0;

  const cartItemRemoveHandler = (id: number) => {
    dispatch(removeOrder(id));
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {orders.map((item: IOrder) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            onRemove={() => cartItemRemoveHandler(item.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {!hasOrders && (
        <p className={classes["no-items"]}>No orders in your cart</p>
      )}
      {cartItems}
      <div className={classes.total}>
        <span>Total items delivered</span>
        <span>{orders.length}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
