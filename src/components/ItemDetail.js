import React from "react";

function ItemDetail(props) {
  return (
    <div>
      <div>
        <h2>Vista item detail</h2>
        <img src={props.data.image} alt="" />
        <p>{props.data.title}</p>
        <p>{props.data.category}</p>
        <p>$ {props.data.price}</p>
      </div>
    </div>
  );
}

export default ItemDetail;
