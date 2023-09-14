import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { vehicles } from "../mock";
import { db } from "../db/firebase";
import { collection, getDoc, doc } from "firebase/firestore";


function ItemDetailContainer() {
  const [data, setData] = useState({});

  const { id } = useParams(); 

  useEffect(() => {
    const productosCollection = collection(db, "products");
    const referenciaDelDocumento = doc(productosCollection, id)
    const consulta = getDoc(referenciaDelDocumento)

    consulta
    .then((res)=>{
      console.log('todo bien')
      console.log(res.data())
      setData(res.data())
    })
    .catch((err)=>{
      console.log('todo bien')
      console.log(err)
    })









    // const getData = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(vehicles);
    //   }, 2000);
    // });

    // getData.then((res) => {
    //   setData(res.find((car) => car.id === parseInt(id)));
    // });
  }, []);

  return (    
    <>   
      
      <ItemDetail data={data} />
      <h2>vista desde Item detail container</h2>
    </>
  );
}

export default ItemDetailContainer;
