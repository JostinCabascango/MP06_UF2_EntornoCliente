// Función para obtener el tercer color de un array usando el método at()
function obtenerTercerColor(colores) {
    // Usar el método at() para obtener el tercer color
    let tercerColor = colores.at(2);

    return tercerColor;
}
// Función para unir dos arrays de colores usando el método concat()
function unirArraysDeColores(colores1, colores2) {
    // Usar el método concat() para unir los dos arrays
    let todosLosColores = colores1.concat(colores2);

    return todosLosColores;
}
// Función para obtener el constructor del array
function obtenerArrayConstructor(colores) {
    // Usar la propiedad constructor para obtener la función que creó el array
    let arrayConstructor = colores.constructor;

    // Devolver el constructor del array
    return arrayConstructor;
}
// Función para copiar los primeros dos colores en las posiciones 2 y 3 del array
function copiarColoresEnArray(colores) {
    // Usar el método copyWithin() para copiar los primeros dos colores en las posiciones 2 y 3
    let coloresCopiados = colores.copyWithin(2, 0);

    return coloresCopiados;
}
// Función para obtener los índices y valores de un array usando el método entries()
function obtenerIndicesYValores(colores) {
    // Usar el método entries() para obtener los índices y valores del array
    let iterador = colores.entries();
    return iterador;
}
// Función para comprobar si todos los elementos pasan una prueba usando el método every()
function comprobarSiTodosSonMenoresAMarron(colores) {
    // Usar el método every() para comprobar si todos los elementos son menores que 'marrón'
    let todosMenores = colores.every(color => color < 'marrón');

    return todosMenores;
}
// Función para rellenar un array con un valor usando el método fill()
function rellenarArrayConMarron(colores) {
    // Usar el método fill() para rellenar el array con el color 'marrón'
    colores.fill('marrón');

    return colores;
}
function main() {
    const colores = ["Verde", "Rojo", "Amarillo", "Azul", "Negro", "Blanco"];
    let numeros = [1, 2, 3, 4, 5]
    let colores1 = ["Verde", "Rojo", "Amarillo"];
    let colores2 = ["Azul", "Negro", "Blanco"];
    //------------------METODO AT()------------------------------------
    const divAt = document.getElementById("at()");
    let contenidoAt = `<p>Array Incial -> <span>${colores.join(', ')}</span></p>`;
    contenidoAt += `<p>copia del metodo i sus parametros utilizados -> <span>${'colores.at(2)'}</span></p>`;
    contenidoAt += `<p>Resultado al ejecutar el metodo -> <span>${obtenerTercerColor(colores)}</span></p>`;
    divAt.innerHTML = contenidoAt;
    //------------------METODO Concat()------------------------------------
    const divConcat = document.getElementById("concat()");
    let contenidoConcat = `<p>Array Incial  => <span><p>colores1 =></p>[${colores1.join(', ')}] , <p>colores2 =></p>[${colores2.join(', ')}]</span></p>`;
    contenidoConcat += `<p>copia del metodo i sus parametros utilizados  => <span>colores.constructor</span></p>`;
    contenidoConcat += `<p>Resultado al ejecutar el metodo  => <span>${unirArraysDeColores(colores).join(', ')}</span></p>`;
    divConcat.innerHTML = contenidoConcat;
    //------------------METODO constructor()------------------------------------
    const divConstructor = document.getElementById("constructor()");
    let contenidoConstructor = `<p>Array Incial -> <span>${colores.join(', ')}</span></p>`;
    contenidoConstructor += `<p>copia del metodo i sus parametros utilizados => <span>colores1.concat(colores2)</span></p>`;
    contenidoConstructor += `<p>Resultado al ejecutar el metodo => <span>${obtenerArrayConstructor(colores)}</span></p>`;
    divConstructor.innerHTML = contenidoConstructor;
    //------------------METODO copyWithin()------------------------------------
    const divCopyWithin = document.getElementById("copyWithin()");
    let contenidoCopyWithin = `<p>Array Incial -> <span>${colores.join(', ')}</span></p>`;
    contenidoCopyWithin += `<p>copia del metodo i sus parametros utilizados => <span>colores.copyWithin(2,0)</span></p>`;
    contenidoCopyWithin += `<p>Resultado al ejecutar el metodo => <span>${copiarColoresEnArray(colores).join(', ')}</span></p>`;
    divCopyWithin.innerHTML = contenidoCopyWithin;

    //------------------METODO entries() ------------------------------------
    let valores = "";
    for (let e of obtenerIndicesYValores(colores)) {
        valores += `<p>indice: <span>${e[0]}</span> valor: <span>${e[1]}</span></p>`;
    }
    const divEntries = document.getElementById("entries()");
    let contenidoEntries = `<p>Array Incial -> <span>${colores.join(', ')}</span></p>`;
    contenidoEntries += `<p>copia del metodo i sus parametros utilizados => <span>colores.entries()</span></p>`;
    contenidoEntries += `<p>Resultado al ejecutar el metodo =><span>${valores}</span></p>`;
    divEntries.innerHTML = contenidoEntries;
    //------------------METODO every() ------------------------------------
    const divEvery = document.getElementById("every()");
    let contenidoEvery = `<p>Array Incial -> <span>${colores.join(', ')}</span></p>`;
    contenidoEvery += `<p>copia del metodo i sus parametros utilizados => <span>colores.every(color => color < 'marrón')</span></p>`;
    contenidoEvery += `<p>Resultado al ejecutar el metodo => <span>${comprobarSiTodosSonMenoresAMarron(colores)}</span></p>`;
    divEvery.innerHTML = contenidoEvery;
    //------------------METODO fill() ------------------------------------
    const divFill = document.getElementById("fill()");
    let contenidoFill = `<p>Array Incial -> <span>${colores.join(', ')}</span></p>`;
    contenidoFill += `<p>copia del metodo i sus parametros utilizados => <span>colores.fill('marrón')</span></p>`;
    contenidoFill += `<p>Resultado al ejecutar el metodo => <span>${rellenarArrayConMarron(colores).join(', ')}</span></p>`;
    divFill.innerHTML = contenidoFill;
    //------------------METODO filter() ------------------------------------

    //find()
    //findIndex()
    //flat()
    //flatMap()
    //forEach()
    //from()
    //includes()
    //indexOf()
    //isArray()
    //join()
    //keys()
    //lastIndexOf()
    //length
    //map()
    //pop()
    //prototype
    //push()
    //reduce()
    //reduceRight()
    //reverse()
    //shift()
    //slice()
    // some()
    //sort()
    //splice()
    // toString()
    //unshift()
    //valueOf()

}
main();