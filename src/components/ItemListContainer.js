import React from "react";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { db } from "../db/firebase";

import { getDocs, collection, query, where } from "firebase/firestore";
import Item from "./Item";

function ItemListContainer(props) {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const productosCollection = collection(db, "products");

    const laConsulta = getDocs(productosCollection);

    laConsulta
      .then((resultado) => {
      

        const aux = resultado.docs.map((doc) => {
          const producto = doc.data();
          producto.id = doc.id;

          return producto;
        });
        
        if (id) {
          setData(aux.filter((car) => car.category == id));
        } else {
          setData(aux);
        }
      })
      .catch((error) => {
        return error
      });
  }, [id]);

  return (
    <div className="h-1/2 w-full">
      <h2>{props.greeting}</h2>

      <Item data={data} />
    </div>
  );
}

export default ItemListContainer;
