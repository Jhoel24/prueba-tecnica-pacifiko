CREATE PROCEDURE TotalGeneradoPorCliente(IN cliente_id INT)
BEGIN
    SELECT SUM(subtotal) as total_cliente FROM ItemsPedido 
    JOIN Pedidos ON ItemsPedido.order_id = Pedidos.order_id
    WHERE Pedidos.customer_id = cliente_id;
END;