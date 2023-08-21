import React, { useState } from "react";
import classes from "../../style/Header.module.scss";
import ordersImage from "../../assets/img/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import Cart from "../Cart/Cart";

const Header = (props: any) => {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header className={classes.header}>
        <h1>React Orders</h1>
      </header>
      <div className={classes["main-image"]}>
        <img className="img" src={ordersImage} alt="A table full of delicious food!" />
      </div>
      <HeaderCartButton onClick={() => setCartOpen(!isCartOpen)} />
      {isCartOpen && <Cart onHideCart={() => setCartOpen(!isCartOpen)} />}
    </>
  );
};

export default Header;
