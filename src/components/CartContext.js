import { createContext, useState } from "react";

export const contexto = createContext(); // creo contexto
const Provider = contexto.Provider; // le saco provider, esto es un componente

// export const CartContext = createContext({

//   addItem: () => {}, // Función para agregar un producto al carrito
//   removeItem: () => {}, // Función para eliminar un producto del carrito
//   clearCart: () => {}, // Función para vaciar el carrito
//   increaseItemQuantity: () => {}, // Función para aumentar la cantidad de un producto
//   decreaseItemQuantity: () => {}, // Función para disminuir la cantidad de un producto
//   cart: [], // Inicialmente, el carrito está vacío
//   // totalQuantity: 0, // Inicialmente, la cantidad total es 0
// });

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //   const addItem = (item, newQuantity) => {
  //     const newCart = cart.filter((prod) => prod.id !== item.id);
  //     newCart.push({ ...item, quantity: newQuantity });
  //     setCart(newCart);
  //   };

  // const removeItem = (id) => {
  //   setCart(cart.filter((product) => product.id !== id));
  // };

  //falta aplicar isInCart de alguna forma

  //remove, dejemos pasar todos los productos que no tengan ese id

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
    console.log(cart);
  };
  console.log(cart);

  // const addItem = (item, quantity) => {
  //   const existingProductIndex = cart.findIndex(
  //     (product) => product.id === item.id
  //   );

  //   if (existingProductIndex !== -1) {
  //     // Si el producto ya existe en el carrito, aumentar la cantidad
  //     const updatedCart = [...cart];
  //     updatedCart[existingProductIndex].quantity += quantity;
  //     setCart(updatedCart);
  //   } else {
  //     // Si el producto no existe en el carrito, agregarlo
  //     setCart((prev) => [...prev, { ...item, quantity }]);
  //   }
  // };

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const totalPrice = () => {
    return cart.reduce(
      (prev, act) => prev + act.quantity * act.price,
      0)};

  const totalProducts = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );

  // console.log(totalPrice)

  //1.50.00 de la clase dice que esos hay que inicializarlos como estados para poder modificarlos, cualquier cosa volvé acá. Clase 11,context, 23.08

  //aca lo que pongas de valor puedo ir a cualquier otro componente y usarlo, se puede escribir el valor directamente en el prop y cualquier tipo de valor, pero con una variable es mas ordenado

  const cartContext = {
    totalPrice,
    totalProducts,
    addItem,
    removeProduct,
    isInCart,
    clearCart,
    cart,
  };

  return <Provider value={cartContext}>{children}</Provider>;
};

export default CustomProvider;
