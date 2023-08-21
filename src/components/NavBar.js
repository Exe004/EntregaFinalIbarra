import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { categories } from "../mock";

function NavBar() {
const separar = {
  width: '175px',
  display: 'flex',
  justifyContent: 'space-between',
  marginRight: '144px'

}

const tamañoCarrito = {
  width: '175px'
}



  return (
    <header>
      <nav className="flex justify-between py-4 bg-slate-800 text-white">
        <NavLink to={"/"}>Concesionaria Corrientes</NavLink>
        <ul style={separar}>
          {categories.map((c) => (
            <li  key={c.id}>
              <NavLink  to={`/category/${c.id}`}>
                {c.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <CartWidget style={tamañoCarrito} />
      </nav>
    </header>
  );
}

export default NavBar;
