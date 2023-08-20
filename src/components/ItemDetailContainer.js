import React from "react";
import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { vehicles } from "../mock";

function ItemDetailContainer() {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(vehicles);
      }, 2000);
    });

    getData.then((res) => {
      setData(res.find((car) => car.id === parseInt(id)));
    });
  }, []);
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades`);
  };

  return (
    <>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      <ItemDetail data={data} />
      <h2>vista desde Item detail container</h2>
    </>
  );
}

export default ItemDetailContainer;
