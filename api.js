const axios = require('axios');

const BASE_URL = 'http://dummy.restapiexample.com/api/v1';

const fetchTodosEmpleados = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/employees`);
        return response.data;
    } catch (error) {
        console.log('Error', error);
    }
}

const crearEmpleado = async (empleado) => {
    try {
        const response = await axios.post(`${BASE_URL}/create`, empleado);
        return response.data
    } catch (error) {
        console.log('Error', error);
    }
}

// funcion principal
const main = async() => {
    // 1. How many employees earn more than $300,000.00?
    const empleados = await fetchTodosEmpleados()

    // Filtrar empleados que ganan mas de 300,000.00
    const resultado = empleados.data.filter(emp => parseFloat(emp.employee_salary) > 300000);
    console.log('Listado de empleados que ganan más de 300,000', resultado);

    // 2. Create a record with your name. You can use fake data for the other attributes.
    
    const nuevoEmpleado = {
        name: 'Kenneth Moreno',
        occupation: 'Developer',
    }

    const empleadoCreado = await crearEmpleado(nuevoEmpleado);
    console.log('Empleado creado: ', empleadoCreado);
    
    // 3. What’s your user id?
    console.log(`Mi ID de usuario es ${empleadoCreado.id}`)
}

main()