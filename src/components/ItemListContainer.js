import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { vehicles } from "../mock";

function ItemListContainer(props) {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(vehicles);
      }, 3000);
    });
    if (id) {
      getData.then((res) => setData(res.filter((car) => car.category == id)));
    } else {
      getData.then((res) => setData(res));
    }
  }, [id]);

  return (
    <div className="h-1/2 w-full">
      <h2>{props.greeting}</h2>

      <ItemList data={data} />
    </div>
  );
}

export default ItemListContainer;
