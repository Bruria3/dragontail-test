import CartIcon from "../Cart/CartIcon";
import React, { useState } from "react";
import classes from "../../style/HeaderCartButton.module.scss";

const HeaderCartButton = (props: any) => {
  const [itemAdded, setItemAdded] = useState(false);

  const btnClasses = `${classes.button} ${itemAdded && classes.bump}`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Already Delivered</span>
    </button>
  );
};

export default HeaderCartButton;
