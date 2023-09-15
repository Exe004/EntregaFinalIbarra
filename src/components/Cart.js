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
  const [buy, setbuy] = useState(false)

  const { cart, totalPrice } = useContext(contexto);

  //   console.log(cart)
  //   console.log(cart.price + ' cart price' )

  const ventasCollection = collection(db, "ventas");
  const onBuy = () => {
    // const ventasCollection = collection(db, "ventas")
    // const laVenta = addDoc(ventasCollection, venta)
    // laVenta
    // 	.then((resultado) => {
    // 		console.log("Se guardo la venta")
    // 		console.log(resultado)
    // 		setToken(resultado.id)
    // 	})
    // 	.catch((error) => {
    // 		console.log(error)
    // 		console.log("Dio mal")
    // 	})
  };

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Nombre:", nombre);
    console.log("Email:", email);

    setNombre("");
    setEmail("");
	setbuy(true)

  };

  const venta = {
    usuario: {
      nombre: nombre,
      email: email,
    },
    fecha: serverTimestamp(),
    // productos: [
    //   { id: "asdasdasd", cantidad: 2, precio: 1000 },
    //   { id: "asdasdasd", cantidad: 2, precio: 1000 },
    // ],
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
        console.log("Se guardo la venta");
        console.log(resultado);
        setToken(resultado.id);
      })
      .catch((error) => {
        console.log(error);
        console.log("Dio mal");
      });
  };


  console.log(cart)
  if (buy) {
    // Si la compra fue exitosa, mostrar el mensaje de agradecimiento
    return (
      <>
        <p>¡Gracias por su compra!</p>
        <p>Token de venta: {token}</p>
        <Link to="/">Volver a comprar</Link>
      </>
    );
}
  else if (cart.length === 0) {
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
        {console.log(totalPrice())}

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

        {/* <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Email" />
            {/* <button onClick={onBuy}>comprar</button> */}
        {/*<button onClick={handleClick}>Emitir Compra</button> */}
        <p>Token de venta : {token}</p>
      </>
    );
  }
}

export default Cart;
