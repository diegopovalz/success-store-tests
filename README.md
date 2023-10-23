# Success Store

## Enunciado

**Contexto:**

Se desea desarrollar el front-end de una aplicación web tipo e-commerce. Esta aplicación será desarrollada usando las tecnologías React, Next.js, TypeScript, Node. Adicionalmente, los datos a cargar en las vistas provendrán de la API pública Fake Store API, la cual cuenta con endpoints para traer una lista de productos, para traer un producto específico, para filtrar por categorías, etc.

**Requerimientos:**

1. Header y Footer:

- La aplicación debe contener un header y footer que siempre estarán visibles.

2. Página de Inicio:

- La página de inicio debe mostrar una lista de productos disponibles.
- Cada producto debe incluir una imagen, nombre y precio.
- Los usuarios deben poder agregar productos al carrito desde esta página.
- Debe contar con un buscador donde se filtren los productos.

3. Detalle del producto:

- La página de detalle del producto debe mostrar el nombre, imagen, precio, descripción, categoría y ratings.
- Los usuarios deben poder agregar el producto al carrito desde esta página.

4. Carrito de compras:

- La aplicación debe tener un carrito de compras que muestra los productos agregados.
- Los usuarios deben poder aumentar o disminuir la cantidad de productos en el carrito.
- Los usuarios deben poder eliminar productos del carrito.
- Debe mostrarse el total de la compra en el carrito.

5. (Opcional) Página de Pago:

- La aplicación debe tener una página de pago ficticia que incluye un formulario para la información del usuario.
- El formulario debe incluir campos para el nombre, dirección y datos de tarjeta de crédito (números ficticios).
- Después de completar el formulario, los usuarios deben poder confirmar su compra.

## Objetivos cumplidos

1. **Header y Footer:** se han creado un elemento _Layout_ el cual engloba a los elementos _Header_ y _Footer_. Este componente _Layout_ se renderiza en la página \_app.tsx para englobar a toda la aplicación.
2. **Página de inicio:** se tiene una página de inicio donde se listan todos los productos obtenidos al hacer request a la ruta https://fakestoreapi.com/products. Se puede realizar un filtrado por título, donde se buscará equivalencias entre la palabra introducida en el filtro de búsqueda y los títulos de los productos. Cada producto cuenta con los elementos requeridos.
   **Ruta en la aplicación:** /
3. **Detalle del producto:** se tiene una página de detalle donde se lista el detalle del producto. A esta página se redirige cuando un usuario clickea en el botón de información de un producto en la página principal. La data se obtiene de la ruta https://fakestoreapi.com/products/[id]. Esta página cumple con todos los requerimientos para este punto.
   **Ruta en la aplicación:** /products/\[id\]
4. **Carrito de compras:** en la esquina superior derecha de la página de inicio se encuentra un ícono de carrito que redirige a esta página. Acá se podrán encontrar los productos añadidos ya sea al clickear el botón correspondiente en la página de inicio como al hacerlo en la página de detalle. Esta página también cumple con todos los requerimientos para este punto.
   **Ruta en la aplicación:** /shopping-cart
5. **Página de pago:** se programó un formulario simple con los inputs descritos y se usó un toast para confirmar el pago.
   **Ruta:** la ruta de la página de detalle en la aplicación es: /payment

**Comentarios adicionales:**

- Al clickear en los botones de agregar, disminuir o eliminar producto del carrito, se desplega un toast indicando lo sucedido.
- Para llevar un tracking de los productos que hay en el carrito en las diferentes páginas se ha hecho uso del _local storage_ del navegador junto con un _Contexto_ de _React_.
- De igual manera se usó un _Contexto_ de _React_ para hacer tracking durante los diferentes componentes del filtro de búsqueda (si aplica).
- A la hora de filtrar productos, la práctica estándar es que la API provea de unas rutas especializadas para este proceso, de manera que retornan la lista de objetos ya filtrada. Si bien en esta API contaba con un filtro por categorías, dada la interpretación del enunciado, se ha decidido optar por el filtro por título, aún si esto no es considerado la mejor práctica; mi mayor interés es demostrar mi capacidad técnica.

## Dificultades

No logré realizar los test unitarios. Se intentó las librerías con Jest y React Testing pero por un error (creo yo) de configuración, no se lograba obtener correctamente el componente de página renderizado. Sin embargo, se tenían planteados los siguientes tests:

1. **Validar los productos que se renderizan en la página de inicio:** en el test se hace un request a la API para obtener nuevamente la lista de productos; se obtienen los elementos renderizados de ProductCard y se comparan el tamaño de ambas listas y los títulos de los elementos de cada una de las listas, esperando coincidencia en ambos casos.
2. **Añadir, reducir y eliminar producto del carrito de compras:** se consulta el _local storage_ o el _useState_ de los productos del carrito para obtener el valor actual de la lista del carro de compras. Se clickea el botón de añadir y se vuelve a validar la lista para comprobar que el producto se ha añadido exitosamente. Se realiza el proceso respectivo para reducir y eliminar.
3. **Reducir lista de acuerdo al filtro:** se actualiza el valor del _useState_ del filtro de búsqueda y se obtienen los ProductCard renderizados para la lista filtrada. Se recorre cada uno de estos elementos validando que el título sí contenga la cadena de carácteres introducida en el filtro de búsqueda.

## Despliegue

Para el despliegue se ha utilizado el servicio de Vercel, el cual es perfectamente integrable con las aplicaciones de _Next.js_. Se puede seguir el proceso en esta guía https://nextjs.org/learn/basics/deploying-nextjs-app/deploy.
