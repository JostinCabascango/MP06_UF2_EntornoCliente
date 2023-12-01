// Función principal que realiza el primer ejercicio 
function manipularColores() {
    // Crear un array de colores
    let colores = ['verde', 'rojo', 'amarillo', 'azul', 'negro', 'blanco'];

    // Comprobar si todos los colores son menores que 'marrón'
    let todosMenores = sonTodosMenoresAMarron(colores);
    console.log(todosMenores);

    // Filtrar los colores que son menores que 'marrón'
    let menores = filtraMenoresAMarron(colores);
    console.log(menores);

    // Obtener los últimos dos colores del array
    let ultimosDos = obtenerUltimosDos(colores);
    console.log(ultimosDos);

    // Agregar el color 'turquesa' al array
    colores = agregarColor(colores, 'turquesa');
    console.log(colores);

    // Eliminar el color 'verde' del array
    colores = eliminarColorVerde(colores);
    console.log(colores);
}

// Función que comprueba si todos los colores son menores que 'marrón'
function sonTodosMenoresAMarron(colores) {
    return colores.every(color => color < 'marrón');
}

// Función que filtra los colores que son menores que 'marrón'
function filtraMenoresAMarron(colores) {
    return colores.filter(color => color < 'marrón');
}

// Función que obtiene los últimos dos colores del array
function obtenerUltimosDos(colores) {
    return colores.slice(-2);
}

// Función que agrega un color al final del array
function agregarColor(colores, color) {
    colores.push(color);
    return colores;
}

// Función que elimina el primer color del array (en este caso, 'verde')
function eliminarColorVerde(colores) {
    colores.shift();
    return colores;
}

// Llamada al Ejericio 1
manipularColores();