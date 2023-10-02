// Write a function or algorithm to search for a product by name in a list of products. Each product is represented by a dictionary with 'product_id', 'product_name', and 'price'.
const productos = [
    {
        product_id: 1, 
        product_name: 'Laptop',
        price: 2000
    },
    {
        product_id: 2, 
        product_name: 'Televisor',
        price: 1500
    },
    {
        product_id: 3, 
        product_name: 'Teclado',
        price: 600
    },
]

const buscarProductoPorNombre = (nombreProducto) => productos.filter(producto => producto.product_name.toLowerCase() === nombreProducto.toLowerCase())


// Ejemplo
const productoResultado = buscarProductoPorNombre('Teclado');
console.log(productoResultado)