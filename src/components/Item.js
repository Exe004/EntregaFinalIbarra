import React from "react";
import { Link } from "react-router-dom";

function Item({ info }) {
  return (
    <Link to={`/item/${info.id}`}>
      <img src={info.image} alt="" />
      <p>{info.title}</p>
    </Link>
  );
}

export default Item;
