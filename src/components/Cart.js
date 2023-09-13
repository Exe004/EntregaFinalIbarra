import React, { useContext } from "react";
import { contexto } from "./CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function Cart() {
  const {cart, totalPrice} = useContext(contexto);
  

//   console.log(cart)
//   console.log(cart.price + ' cart price' )
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
			
		
		</>
	);
};
}


export default Cart;
