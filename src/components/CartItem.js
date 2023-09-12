import React, { useContext } from "react";
import { contexto } from './CartContext'  


function CartItem({product}) {
    const {removeProduct} = useContext(contexto)

  return (
    <div>
        <img src={product.image} alt={product.title} />
        <div>
            <p>Titulo: {product.title}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio u. : {product.price}</p>
            <p>subtotal: ${product.quantity * product.price} </p>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
      
    </div>
  )
}

export default CartItem
