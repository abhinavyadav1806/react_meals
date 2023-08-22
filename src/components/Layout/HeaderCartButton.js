import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartctx = useContext(CartContext);

  const numbersOfCartItems = cartctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numbersOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
