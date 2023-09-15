import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

import { db } from "../db/firebase";
import { collection, getDoc, doc } from "firebase/firestore";

function ItemDetailContainer() {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const productosCollection = collection(db, "products");
    const referenciaDelDocumento = doc(productosCollection, id);
    const consulta = getDoc(referenciaDelDocumento);

    consulta
      .then((res) => {
       
        setData(res.data());
      })
      .catch((err) => {
        
      });
  }, []);

  return (
    <>
      <ItemDetail data={data} />
      <h2>vista desde Item detail container</h2>
    </>
  );
}

export default ItemDetailContainer;
