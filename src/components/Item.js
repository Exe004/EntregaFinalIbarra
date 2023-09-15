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
      {props.data.length == 0 ? (
        <p> cargando </p>
      ) : (
        props.data.map((item, i) => {
          return (
            <article key={i}>
              <Link to={`/item/${item.id}`}>
                <p style={centerText}>
                  $ {item.price} - {item.title}
                </p>

                <img style={imageStyles} src={item.image} alt="" />
              </Link>
            </article>
          );
        })
      )}
    </section>
  );
}

export default Item;
