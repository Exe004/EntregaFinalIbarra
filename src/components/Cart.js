import React, { useContext, useState } from "react";
import { contexto } from "./CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../db/firebase";

function Cart() {
  const [token, setToken] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [buy, setbuy] = useState(false);

  const { cart, totalPrice } = useContext(contexto);

  const ventasCollection = collection(db, "ventas");

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  

    setNombre("");
    setEmail("");

    setbuy(true);
  };

  const venta = {
    usuario: {
      nombre: nombre,
      email: email,
    },
    fecha: serverTimestamp(),

    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();

    const laVenta = addDoc(ventasCollection, venta);
    laVenta
      .then((resultado) => {
      
        setToken(resultado.id);
      })
      .catch((error) => {
      
      });
  };


  if (buy) {
    return (
      <>
        <p>¡Gracias por su compra!</p>
        <p>Token de venta: {token}</p>
        <Link to="/">Volver a comprar</Link>
      </>
    );
  } else if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    );
  } else {
    return (
      <>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        <p>total: {totalPrice()}</p>
       

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={handleChangeNombre}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail}
            />
          </div>
          <div>
            <button onClick={handleClick} type="submit">
              Emitir Compra
            </button>
          </div>
        </form>

        <p>Token de venta : {token}</p>
      </>
    );
  }
}

export default Cart;
