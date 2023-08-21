import React from "react";


function ItemDetail(props) {
  const centerText = {
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: '30px'
  }

  const imageStyles = {
    height: '50vh',
    width: '100%',
    objectFit: 'contain',
  };

  return (
    <div>
      <div style={centerText}>
        <h2>Vista item detail</h2>
        <img style={imageStyles} src={props.data.image} alt="" />
        <p>{props.data.title}</p>
        <p>{props.data.category}</p>
        <p>$ {props.data.price}</p>
      </div>
    </div>
  );
}

export default ItemDetail;
