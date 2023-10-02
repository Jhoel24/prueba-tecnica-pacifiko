// En este archivo estan todos los ejercicios resueltos.
// Lista de productos
const productos = [
    {id_producto: 1, nombre_producto: 'Laptop', precio: 1000, porcentaje_descuento: 10},
];

// Tarea 1: Búsqueda de Producto
const buscarProductoPorNombre = (nombreProducto) => {
    return productos.filter(producto => producto.nombre_producto.toLowerCase() === nombreProducto.toLowerCase());
};

// Tarea 2: Total del Carrito
const carrito = [
    {id_producto: 1, cantidad: 2},
];

const calcularTotalCarrito = (itemsCarrito) => {
    return itemsCarrito.reduce((total, item) => {
        const producto = productos.find(p => p.id_producto === item.id_producto);
        return total + (producto.precio * item.cantidad);
    }, 0);
};

// Tarea 3: Cálculo de Descuento
const calcularTotalConDescuento = (itemsCarrito) => {
    return itemsCarrito.reduce((total, item) => {
        const producto = productos.find(p => p.id_producto === item.id_producto);
        const descuento = producto.precio * (producto.porcentaje_descuento / 100);
        return total + ((producto.precio - descuento) * item.cantidad);
    }, 0);
};

// Tarea 4: Productos Más Vendidos
const pedidos = [
    {id_producto: 1, cantidad: 5},
];

const productosMasVendidos = (pedidos, N) => {
    const ventasProducto = {};

    pedidos.forEach(pedido => {
        if (!ventasProducto[pedido.id_producto]) {
            ventasProducto[pedido.id_producto] = 0;
        }
        ventasProducto[pedido.id_producto] += pedido.cantidad;
    });

    const productosOrdenados = Object.keys(ventasProducto).sort((a, b) => ventasProducto[b] - ventasProducto[a]);
    return productosOrdenados.slice(0, N).map(idProducto => productos.find(p => p.id_producto === parseInt(idProducto)));
};

// Mostrar resultados
console.log("Tarea 1: Búsqueda de Producto");
const productosEncontrados = buscarProductoPorNombre('Laptop');
console.log(productosEncontrados);

console.log("\nTarea 2: Total del Carrito");
const total = calcularTotalCarrito(carrito);
console.log(`Total: $${total}`);

console.log("\nTarea 3: Cálculo de Descuento");
const totalDescuento = calcularTotalConDescuento(carrito);
console.log(`Total con descuento: $${totalDescuento}`);

console.log("\nTarea 4: Productos Más Vendidos");
const topProductos = productosMasVendidos(pedidos, 3);
console.log(topProductos);