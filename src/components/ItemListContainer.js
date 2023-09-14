import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { vehicles } from "../mock";
import { db } from "../db/firebase";
//getDocs, getDoc, addDoc // collection, query, where, doc
// las consultas consultas son las primeras , las demas son un poco complemtentos de las primeras tres
import { getDocs, collection, query, where } from "firebase/firestore";
import Item from "./Item";

function ItemListContainer(props) {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    //me traigo la referencia de la coelccion que quiero consultar
    const productosCollection = collection(db, "products");


    // const filtroDeConsulta = 
    const laConsulta = getDocs(productosCollection);
    // console.log(laConsulta);
    laConsulta
      .then((resultado) => {
        console.log('dio bien')
        // console.log(resultado.docs);
        // console.log('representacion del doc: ', resultado.docs[0])
        // console.log('ID del doc : ',resultado.docs[0].id)
        // console.log('data del doc: ', resultado.docs[0].data())



        //resultado.docs es un array de objetos, pero esos objetos no son los documentos  con la info, sino mas bien una 'representacion'
        //ya viene con su propio id, le puedo sacar el id por ej. pero falta la data
        //resultado.docs[0].id, resultado.docs[0].data()
        //cada objeto tiene un id  y un metodo data que le extrae la info
        //intentar hacer un mapeo de cada cosa que venga en el arry, extraer la data de cada uno, ocnstruir nu nuevo array con la info real y setearlo como estado.

        const aux = resultado.docs.map((doc) => {
          // console.log(doc)
          //var del profe
          const producto = doc.data()
          producto.id = doc.id
          // console.log('-----------------------------------------')
          // console.log(producto)
          // const producto = {
          //     id: doc.id,
          //     ...doc.data()
          //  }
          //-----------------NO ANDA LO DE ARRIBA, ACA ME QUEDE 13/9 15.34. MINUTO 21
          return producto;
        })
        console.log(aux)


        setData(aux)

      })
      .catch((error) => {
        console.log("dio mal");
      });

    // const getData = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(vehicles);
    //   }, 3000);
    // });
    // if (id) {
    //   getData.then((res) => setData(res.filter((car) => car.category == id)));
    // } else {
    //   getData.then((res) => setData(res));
    // }
  }, [id]);

  return (
    <div className="h-1/2 w-full">
      <h2>{props.greeting}</h2>

      {/* <ItemList data={data} /> */}
      <Item data={data} />
    </div>
  );
}

export default ItemListContainer;
