import React, { useContext, useState } from "react";
import { contexto } from "./CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { db } from "../db/firebase";


function Cart() {
  
  const [token, setToken] = useState("")

  const {cart, totalPrice} = useContext(contexto);
  

//   console.log(cart)
//   console.log(cart.price + ' cart price' )


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
		}
		const venta = {
			usuario : {
				nombre: "Juan",
				email: "juan@mail.com"
			},
			fecha: serverTimestamp(),
			productos: [
				{ id: "asdasdasd", cantidad: 2, precio: 1000 },
				{ id: "asdasdasd", cantidad: 2, precio: 1000 },
			],
			items: cart.map((product) => ({
				id: product.id,
				title: product.title,
				price: product.price,
				quantity: product.quantity,
			})),
			total: totalPrice(),
		}

const handleClick = () => {
	const db = getFirestore();
	const ventasCollection = collection(db, 'ventas')
	const laVenta = addDoc(ventasCollection, venta)
	laVenta
		.then((resultado) => {
			console.log("Se guardo la venta")
			console.log(resultado)
			setToken(resultado.id)
		})
		.catch((error) => {
			console.log(error)
			console.log("Dio mal")
		})
}




if (cart.length === 0) {
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
			
		  <form>
		  <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Email" />
            {/* <button onClick={onBuy}>comprar</button> */}
			<button onClick={handleClick}>Emitir Compra</button>
            </form>
            <p>Token de venta : {token}</p>

		</>
	);
};
}


export default Cart;
