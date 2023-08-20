import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { categories } from "../mock";

function NavBar() {
  return (
    <header>
      <nav className="header flex justify-between py-4 bg-slate-800 text-white">
        <NavLink to={'/'}>Concesionaria Corrientes</NavLink>       
        <ul className="flex flex-row w-full gap-10  ">
          {categories.map((c) => (
            <li key={c.id}>
              <NavLink to={`/category/${c.id}`}>{c.title}</NavLink>
            </li>
          ))}
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
}

export default NavBar;
