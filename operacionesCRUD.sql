-- Insertar un nuevo producto
INSERT INTO Productos (product_name, price, stock_quantity) VALUES ('Laptop', 1000.00, 50);

-- Actualizar la cantidad en stock del producto con product_id = 3
UPDATE Productos SET stock_quantity = 75 WHERE product_id = 3;

-- Eliminar el pedido con order_id = 10 y sus items asociados
DELETE FROM ItemsPedido WHERE order_id = 10;
DELETE FROM Pedidos WHERE order_id = 10;

-- Obtener los nombres del cliente que realizó el pedido con order_id = 5
SELECT first_name, last_name FROM Clientes WHERE customer_id = (SELECT customer_id FROM Pedidos WHERE order_id = 5);

-- Calcular el total generado por cada producto
SELECT product_id, SUM(subtotal) as total_revenue FROM ItemsPedido GROUP BY product_id;
