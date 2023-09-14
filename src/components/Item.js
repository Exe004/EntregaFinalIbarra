import React from "react";
import { Link } from "react-router-dom";

function Item(props) {
  const imageStyles = {
    height: "50vh",
    width: "100%",
    objectFit: "contain",
  };
  const centerText = {
    textAlign: "center",
    fontFamily: "monospace",
    fontSize: "30px",
  };

  return (
    <section>
      {props.data.length == 0 
        ? <p> cargando </p>
        : props.data.map((item, i) => {
          return (
            <article key={i}>
              <Link to={`/item/${item.id}`}>
                
                <p style={centerText}>$ {item.price} - {item.title}</p>
                {/* <p style={centerText}></p> */}
                <img style={imageStyles} src={item.image} alt="" />
              </Link>

              {/* <h2 >${item.price} - {item.title}</h2>
                    <img src={item.image} alt={item.title}  />
                    <Link to={`/item/${item.id}`}>ver detalle</Link> */}
            </article>
          );
        })
      }
    </section>
  );

  // return (
  // );
}

export default Item;
