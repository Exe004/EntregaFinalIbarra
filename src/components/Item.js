import React from "react";
import { Link } from "react-router-dom";

function Item({ info }) {

  const imageStyles = {
    height: '50vh',
    width: '100%',
    objectFit: 'contain',
  };
  const centerText = {
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: '30px'
  }

  return (
    <Link to={`/item/${info.id}`}>
      <p style={centerText}>{info.title}</p>
      <img style={imageStyles} src={info.image} alt="" />
    </Link>
  );
}

export default Item;
