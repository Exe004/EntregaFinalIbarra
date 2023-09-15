import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import data from "./seedData.json";

const productosCollection = collection(db, "products");

data.forEach((producto) => {
  addDoc(productosCollection, producto)
    .then((resultado) => {
      console.log(",then - resultado: ", resultado);
      return console.log("Producto agregado");
    })
    .catch((error) => {
      console.log("data.orEach - error: ", error);
      return console.log("todo mal");
    });
});
