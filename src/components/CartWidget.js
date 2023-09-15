import React, { useContext } from "react";
import { contexto } from "./CartContext";
import { NavLink } from "react-router-dom";

function CartWidget() {
  const { totalProducts } = useContext(contexto);

  return (
    <NavLink to="/cart">
      <i className="material-icons">shopping_cart</i>
      <span>{totalProducts() || ""}</span>
    </NavLink>
  );
}

export default CartWidget;
