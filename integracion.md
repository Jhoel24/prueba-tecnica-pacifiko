# Integración

Para integrar la aplicación con los requisitos dados:

1. Mostrar una lista de productos y sus cantidades en stock:
   - Usaría la tabla `Productos` y haría una consulta SELECT para obtener todos los productos y sus cantidades en stock.

2. Permitir al usuario buscar productos por su nombre:
   - Implementaría un campo de búsqueda en la interfaz de usuario que filtraría los resultados basándose en la tabla `Productos` usando una consulta LIKE.

3. Permitir al usuario realizar un pedido seleccionando un cliente y agregando ítems de pedido:
   - El usuario seleccionaría un cliente de la tabla `Clientes`.
   - Luego, agregaría productos de la tabla `Productos` a su pedido.
   - Al confirmar el pedido, se crearía una nueva entrada en la tabla `Pedidos` y se agregarían los ítems de pedido correspondientes a la tabla `ItemsPedido`.
