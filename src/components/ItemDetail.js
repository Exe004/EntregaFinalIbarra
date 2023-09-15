import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { contexto } from "./CartContext";

function ItemDetail(props) {
  const [info, setInfo] = useState();
  const [goToCart, setGoToCar] = useState(false);

  const valorActualDelContexto = useContext(contexto);
  //  console.log('valor del contexto ' + valorActualDelContexto.addItem);

  const centerText = {
    textAlign: "center",
    fontFamily: "monospace",
    fontSize: "30px",
  };

  const imageStyles = {
    height: "50vh",
    width: "100%",
    objectFit: "contain",
  };

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
    setInfo(quantity);
    setGoToCar(true);
    valorActualDelContexto.addItem(props.data, quantity);
  };

  //  console.log(valorActualDelContexto.addItem)

  // console.log(info)
  //falta desaparecer el itemCount

  return (
    <div>
      <div style={centerText}>
        <img style={imageStyles} src={props.data.image} alt="" />
        <p>$ {props.data.price}</p>
        <p>{props.data.title}</p>
        <p>{props.data.category}</p>

        {goToCart ? (
          <>
            <Link to="/cart">
              <p>Terminar Compra</p>
            </Link>
            <Link to="/">
              <p>Seguir Comprando</p>
            </Link>
          </>
        ) : (
          <ItemCount
            initial={1}
            stock={valorActualDelContexto.cart.stock}
            onAdd={onAdd}
          />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
