import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import data from "./seedData.json";

const productosCollection = collection(db, "products");

data.forEach((producto) => {
  // individual, no plural productos
  addDoc(productosCollection, producto) // primero la coleccion a la cual quiero agregar el documento, debe venir de una base ya conectada, el segundo la data, el documento en si que le queres meter a la coleccion. Eso seria ocmo el fetch
    .then((resultado) => {
      console.log(",then - resultado: ", resultado);
      return console.log("Producto agregado");
    })
    .catch((error) => {
      console.log("data.orEach - error: ", error);
      return console.log("todo mal");
    });
});
