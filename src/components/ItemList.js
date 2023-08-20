import React from "react";
import Item from "./Item";

function ItemList({ data = [] }) {
  return (
    <div>
      {data.length == 0 ? (
        <p> cargando </p>
      ) : (
        data.map((cars) => <Item key={cars.id} info={cars} />)
      )}
    </div>
  );
}

export default ItemList;
