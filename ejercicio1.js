// Función principal que realiza el primer ejercicio 
function manipularColores() {
    // Crear un array de colores
    let colores = ['verde', 'rojo', 'amarillo', 'azul', 'negro', 'blanco'];

    // Comprobar si todos los colores son menores que 'marrón'
    let todosMenores = sonTodosMenoresAMarron(colores);

    // Filtrar los colores que son menores que 'marrón'
    let menores = filtraMenoresAMarron(colores);

    // Obtener los últimos dos colores del array
    let ultimosDos = obtenerUltimosDos(colores);

    // Agregar el color 'turquesa' al array
    colores = agregarColor(colores, 'turquesa');

    // Eliminar el color 'verde' del array
    colores = eliminarColorVerde(colores);

    // Mostrar los resultados en html
    const div = document.getElementById("Ejercicio1");
    let contenido = "<p><b>Función que crea un array de 6 colores y probamos lo siguiente:</b></p>";
    contenido += "<p>¿Todos los colores son menores que marrón? " + todosMenores + "</p>";
    contenido += "<p>Los colores que son menores que marrón son: " + menores.join(', ') + "</p>";
    contenido += "<p>Los últimos dos colores son: " + ultimosDos.join(', ') + "</p>";
    contenido += "<p>El array con el color turquesa agregado es: " + colores.join(', ') + "</p>";
    contenido += "<p>El array sin el color verde eliminado es: " + colores.join(', ') + "</p>";
    div.innerHTML = contenido;
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
