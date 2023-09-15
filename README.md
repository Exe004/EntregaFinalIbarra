# PreEntrega2Ibarra
Pasos a seguidos para la creación de este proyecto
En primera instancia cree el componente App.js en donde se encuentra alojada la aplicación. A este componente se le adjuntan en forma de etiquetas los demás componentes con sus respectivas importaciones al mismo.
Tambien aquí están alojadas las rutas enviadas a main como childrens.

Luego de eso pasé a la creacion de ItemListContainer la cual va a ser contenedora del componente Item en su interior, el cual renderiza los componentes. Además ItemListContainer es el que recibirá de la base de datos de firestore los productos para mostrarlos en pantalla en la pagina principal.
Este componente tambien permitira la posibilidad de ver los productos por categoria en caso de ser necesario. En este caso motocicletas o automoviles a traves del id de la categoria.

Seguidamente paso a la creacion de ItemDetailContainer. Este componente se caracteriza por recibir un solo producto y tener dentro a ItemDetail, el cual renderizara en detalle los productos traidos, y este a su vez tiene dentro el contador; este componente sumará y/o restará la cantidad de unidades de un mismo producto la cual será nuevamente enviada a ItemDetail que a traves de la funcion onAdd() guardará esta información, y a su vez la misma posee la informacion del contexto global para su posterior manejo

La creacion de CartContext.js me servirá para el manejo de datos de manera global, esta procesará y recibira datos, y a su vez podrá reenviarlos a cualquier componente sin la necesidad de que el antes nombrado tenga ninguna relacion de herencia con cualquier otro elemento de la aplicación.

De esta manera se procede a la creacion del componente Cart.js el cual recibe la información del contenido de cart y el precio total del los productos desde el CartContext, realiza el manejo de evento del formulario, la obtención de los datos necesarios para corroborar el usario de compra, emite un ticket con el ID de compra y sube todo a la base de datos al sector de ventas, que en caso de no estar creado con anterioridad a la primer compra, tambien se encarga de crear la base de datos del sector ventas.
Este componente tambien tiene la funcion de avisar al usuario que no posee elementos seleccionados en el carrito y de brindarle la posibilidad de seguir comprando, asi como tambien al momento de realizada la compra elimina el proceso de seleccion del usuario avisandole que su compra ha sido efectuada con exito y brindandole un token de compra con el ID del producto.

El CartWidget.js se encarga de mostrar el carrito en pantalla, de aumentar el numero de unidades totales que el usuario vaya agregando y, en caso de clickear sobre el mismo, de llevar a la pagina de carrito.