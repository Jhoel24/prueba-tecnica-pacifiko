-- Tabla de Clientes
CREATE TABLE Clientes (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(50)
);

-- Tabla de Productos
CREATE TABLE Productos (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(255),
    price DECIMAL(10, 2),
    stock_quantity INT
);

-- Tabla de Pedidos
CREATE TABLE Pedidos (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES Clientes(customer_id)
);

-- Tabla de Items de Pedido
CREATE TABLE ItemsPedido (
    order_item_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    subtotal DECIMAL(10, 2),
    FOREIGN KEY (order_id) REFERENCES Pedidos(order_id),
    FOREIGN KEY (product_id) REFERENCES Productos(product_id)
);