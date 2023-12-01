// Función para obtener el tercer color de un array usando el método at()
function obtenerTercerColor() {
    let colores = ["Verde", "Rojo", "Amarillo", "Azul", "Negro", "Blanco"];
    // Usar el método at() para obtener el tercer color
    let tercerColor = colores.at(2);
    return tercerColor;
}
// Función para unir dos arrays de colores usando el método concat()
function unirArraysDeColores() {
    let colores1 = ["Verde", "Rojo", "Amarillo"];
    let colores2 = ["Azul", "Negro", "Blanco"];

    // Usar el método concat() para unir los dos arrays
    let todosLosColores = colores1.concat(colores2);

    return todosLosColores;
}
// Función para obtener el constructor del array
function obtenerArrayConstructor() {
    let colores = ["Verde", "Rojo", "Amarillo", "Azul", "Negro", "Blanco"];
    // Usar la propiedad constructor para obtener la función que creó el array
    let arrayConstructor = colores.constructor;
    // Devolver el constructor del array
    return arrayConstructor;
}