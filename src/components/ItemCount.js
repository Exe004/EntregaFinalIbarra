import { useState, useEffect } from "react";

function ItemCount({ initial, stock, onAdd }) {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const resetear = () => {
    setContador(0);
  };

  useEffect(() => {
    setContador(initial);
  }, [initial]);

  return (
    <main className="">
      <button disabled={contador >= stock} onClick={sumar}>
        +
      </button>

      <p>{contador}</p>

      <button disabled={contador <= 1} onClick={restar}>
        -
      </button>

      <button onClick={resetear}>resetear</button>

      <div>
        <button disabled={stock <= 0} onClick={() => onAdd(contador)}>
          Agregar al carrito
        </button>
      </div>
    </main>
  );
}

export default ItemCount;
