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
    // Usar el método every() para comprobar si todos los elementos son menores que 'marron'
    let todosMenores = colores.every(color => color < 'marron');

    return todosMenores;
}
// Función para rellenar un array con un valor usando el método fill()
function rellenarArrayConMarron(colores) {
    // Usar el método fill() para rellenar el array con el color 'marrón'
    colores.fill('naranja');

    return colores;
}
// Función que crea un nuevo array con los elementos que pasan una prueba usando el método filter()
function filtrarColores(colores) {
    // Usar el método filter() para crear un nuevo array con los colores que son menores que 'marron'
    let coloresFiltrados = colores.filter(color => color < 'marron');


    return coloresFiltrados;
}
// Función que devuelve el primer valor que cumple una condición usando el método find()
function encontrarColor(colores) {
    // Usar el método find() para encontrar el primer color que es menor que 'marron'
    let colorEncontrado = colores.find(color => color < 'marron');

    return colorEncontrado;
}
// Función que devuelve el índice del primer valor que cumple una condición usando el método findIndex()
function encontrarIndiceDeColor(colores) {
    // Usar el método findIndex() para encontrar el índice del primer color que es menor que 'marron'
    let indiceColor = colores.findIndex(color => color < 'Marron');

    return indiceColor;
}
// Función que devuelve un nuevo array con los subarrays concatenados usando el método flat()
function aplanarArrayDeNumeros(array) {
    // Usar el método flat() para aplanar el array
    let arrayAplanado = array.flat();

    return arrayAplanado;
}
// Función que aplica una funcion a cada elemento y despues aplana el resultat en un nuevo array
function aplanarArrayDeNumerosConFlatMap(array) {
    // Usar el método flatMap() para aplanar el array
    let arrayAplanado = array.flatMap(x => x * 2);

    return arrayAplanado;
}
// Funcion que ejecuta una funcion por cada elemento del array usando el metodo forEach()
function ejecutarFuncionPorCadaElemento(numeros) {
    // Crear una variable para almacenar el resultado
    let resultado = "";
    // Usar el método forEach() para recorrer el array
    numeros.forEach(numero => {
        // Concatenar cada número al resultado con un espacio
        resultado += numero + " ";
    });
    // Devolver el resultado
    return resultado;
}
// Función que crea un array a partir de un string usando el método from()
function crearArrayDesdeString(string) {
    // Usar el método from() para crear un array a partir del string
    let array = Array.from(string);

    return array;
}
// Función que comprueba si un array incluye un elemento usando el método includes()
function comprobarSiIncluyeElemento(numeros, numero) {
    // Usar el método includes() para comprobar si el array incluye el número
    let incluye = numeros.includes(numero);

    return incluye;
}
// Función que devuelve el índice de un elemento usando el método indexOf()
function encontrarIndiceDeElemento(numeros, numero) {
    // Usar el método indexOf() para encontrar el índice del número
    let indice = numeros.indexOf(numero);

    return indice;
}
// Función que comprueba si un objeto es un array usando el método isArray()
function comprobarSiEsArray(objeto) {
    // Usar el método isArray() para comprobar si el objeto es un array
    let esArray = Array.isArray(objeto);

    return esArray;
}
// Función que convierte un array en un string usando el método join()
function convertirArrayEnString(numeros) {
    // Usar el método join() para convertir el array en un string
    let string = numeros.join();

    return string;
}
// Función que devuelve un iterador de los índices de un array usando el método keys()
function obtenerIteradorDeIndices(numeros) {
    // Guardar el iterador de los índices del array en una variable
    let claves=[];
    for (let clave of numeros.keys()) {
        claves.push(clave);
    }
    return claves;
}
// Función que devuelve el último índice de un elemento usando el método lastIndexOf() si no existe devuelve -1
function encontrarUltimoIndiceDeElemento(numeros, numero) {
    // Usar el método lastIndexOf() para encontrar el último índice del número
    let indice = numeros.lastIndexOf(numero);

    return indice;
}
// Función que devuelve el número de elementos de un array usando la propiedad length
function obtenerNumeroDeElementos(numeros) {
    // Usar la propiedad length para obtener el número de elementos del array
    let numeroElementos = numeros.length;

    return numeroElementos;
}
// Función que crea un nuevo array con los resultados de aplicar una función a cada elemento usando el método map()
function aplicarFuncionANumeros(numeros) {
    // Usar el método map() para aplicar la función a cada elemento del array
    let array = numeros.map(x => x * 2);

    return array;
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
    contenidoEntries += `<p>Resultado al ejecutar el metodo =><span></span></p>`;
    divEntries.innerHTML = contenidoEntries;
    //------------------METODO every() ------------------------------------
    const divEvery = document.getElementById("every()");
    let contenidoEvery = `<p>Array Incial -> <span>${colores.join(', ')}</span></p>`;
    contenidoEvery += `<p>copia del metodo i sus parametros utilizados => <span>colores.every(color => color < 'marron')</span></p>`;
    contenidoEvery += `<p>Resultado al ejecutar el metodo => <span>${comprobarSiTodosSonMenoresAMarron(colores)}</span></p>`;
    divEvery.innerHTML = contenidoEvery;
    //------------------METODO fill() ------------------------------------
    const divFill = document.getElementById("fill()");
    let contenidoFill = `<p>Array Incial -> <span>${colores.join(', ')}</span></p>`;
    contenidoFill += `<p>copia del metodo i sus parametros utilizados => <span>colores.fill('naranja')</span></p>`;
    contenidoFill += `<p>Resultado al ejecutar el metodo => <span>${rellenarArrayConMarron(colores).join(', ')}</span></p>`;
    divFill.innerHTML = contenidoFill;
    //------------------METODO filter() ------------------------------------
    const divFilter = document.getElementById("filter()");
    let contenidoFilter = `<p>Array Incial -> <span>${["Verde", "Rojo", "Amarillo", "Azul", "Negro", "Blanco"].join(', ')}</span></p>`;
    contenidoFilter += `<p>copia del metodo i sus parametros utilizados => <span>colores.filter(color => color < 'marron')</span></p>`;
    contenidoFilter += `<p>Resultado al ejecutar el metodo => <span>${filtrarColores(["Verde", "Rojo", "Amarillo", "Azul", "Negro", "Blanco"]).join(', ')}</span></p>`;
    divFilter.innerHTML = contenidoFilter;
    //------------------METODO find() ------------------------------------
    const divFind = document.getElementById("find()")
    let contenidoFind = `<p>Array Incial -> <span>${["Verde", "Rojo", "Amarillo", "Azul", "Negro", "Blanco"].join(', ')}</span></p>`;
    contenidoFind += `<p>copia del metodo i sus parametros utilizados => <span>colores.find(color => color < 'marron')</span></p>`;
    contenidoFind += `<p>Resultado al ejecutar el metodo => <span>${encontrarColor(["Verde", "Rojo", "Amarillo", "Azul", "Negro", "Blanco"])}</span></p>`;
    divFind.innerHTML = contenidoFind;
    //------------------METODO findIndex() ------------------------------------
    const divFindIndex = document.getElementById("findIndex()");
    let contenidoFindIndex = `<p>Array Incial -> <span>${["Verde", "Rojo", "Amarillo", "Azul", "Negro", "Blanco"].join(', ')}</span></p>`;
    contenidoFindIndex += `<p>copia del metodo i sus parametros utilizados => <span>colores.findIndex(color => color === 'Marron')</span></p>`;
    contenidoFindIndex += `<p>Resultado al ejecutar el metodo => <span>${encontrarIndiceDeColor(["Verde", "Rojo", "Amarillo", "Azul", "Negro", "Blanco"])}</span></p>`;
    divFindIndex.innerHTML = contenidoFindIndex;
    //------------------METODO flat() ------------------------------------
    const array = [1, 2, [3, [4, 5, 6], 7], 8];
    const divFlat = document.getElementById("flat()");
    let contenidoFlat = `<p>Array Incial -> <span> [1, 2, [3, [4, 5, 6], 7], 8]</span></p>`;
    contenidoFlat += `<p>copia del metodo i sus parametros utilizados => <span>array.flat()</span></p>`;
    contenidoFlat += `<p>Resultado al ejecutar el metodo => <span>${aplanarArrayDeNumeros(array)}</span></p>`;
    divFlat.innerHTML = contenidoFlat;
    //------------------METODO flatMap() ------------------------------------
    const divFlatMap = document.getElementById("flatMap()");
    let contenidoFlatMap = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoFlatMap += `<p>copia del metodo i sus parametros utilizados => <span>array.flatMap(x => x, x * 2)</span></p>`;
    contenidoFlatMap += `<p>Resultado al ejecutar el metodo => <span>${aplanarArrayDeNumerosConFlatMap(numeros)}</span></p>`;
    divFlatMap.innerHTML = contenidoFlatMap;
    //------------------METODO forEach() ------------------------------------
    const divForEach = document.getElementById("forEach()");
    let contenidoForEach = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoForEach += `<p>copia del metodo i sus parametros utilizados => <span>numeros.forEach(numero => {  resultado += numero + " ";  });
    });</span></p>`;
    contenidoForEach += `<p>Resultado al ejecutar el metodo => <span>${ejecutarFuncionPorCadaElemento(numeros)}</span></p>`;
    divForEach.innerHTML = contenidoForEach;
    //------------------METODO from() ---------------------------------------
    const divFrom = document.getElementById("from()");
    let contenidoFrom = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoFrom += `<p>copia del metodo i sus parametros utilizados => <span>Array.from('jostin')</span></p>`;
    contenidoFrom += `<p>Resultado al ejecutar el metodo => <span>${crearArrayDesdeString('jostin').join(', ')}</span></p>`;
    divFrom.innerHTML = contenidoFrom;
    //------------------Metodo includes()------------------------------------
    const divIncludes = document.getElementById("includes()");
    let contenidoIncludes = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoIncludes += `<p>copia del metodo i sus parametros utilizados => <span>numeros.includes(2)</span></p>`;
    contenidoIncludes += `<p>Resultado al ejecutar el metodo => <span>${comprobarSiIncluyeElemento(numeros, 2)}</span></p>`;
    divIncludes.innerHTML = contenidoIncludes;
    //------------------Metodo indexOf()--------------------------------------
    const divIndexOf = document.getElementById("indexOf()");
    let contenidoIndexOf = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoIndexOf += `<p>copia del metodo i sus parametros utilizados => <span>numeros.indexOf(4)</span></p>`;
    contenidoIndexOf += `<p>Resultado al ejecutar el metodo => <span>${encontrarIndiceDeElemento(numeros, 4)}</span></p>`;
    divIndexOf.innerHTML = contenidoIndexOf;
    //------------------Metodo isArray()--------------------------------------
    const divIsArray = document.getElementById("isArray()");
    let contenidoIsArray = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoIsArray += `<p>copia del metodo i sus parametros utilizados => <span>Array.isArray(numeros)</span></p>`;
    contenidoIsArray += `<p>Resultado al ejecutar el metodo => <span>${comprobarSiEsArray(numeros)}</span></p>`;
    divIsArray.innerHTML = contenidoIsArray;
    //------------------Metodo join()-----------------------------------------
    const divJoin = document.getElementById("join()");
    let contenidoJoin = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoJoin += `<p>copia del metodo i sus parametros utilizados => <span>numeros.join()</span></p>`;
    contenidoJoin += `<p>Resultado al ejecutar el metodo => <span>${convertirArrayEnString(numeros)}</span></p>`;
    divJoin.innerHTML = contenidoJoin;
    //------------------Metodo keys()-----------------------------------------
    const divKeys = document.getElementById("keys()");
    let contenidoKeys = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoKeys += `<p>copia del metodo i sus parametros utilizados => <span>numeros.keys()</span></p>`;
    contenidoKeys += `<p>Resultado al ejecutar el metodo => <span>${obtenerIteradorDeIndices(numeros)}</span></p>`;
    divKeys.innerHTML = contenidoKeys;
    //------------------Metodo lastIndexOf()----------------------------------
    const divLastIndexOf = document.getElementById("lastIndexOf()");
    let contenidoLastIndexOf = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoLastIndexOf += `<p>copia del metodo i sus parametros utilizados => <span>numeros.lastIndexOf(4)</span></p>`;
    contenidoLastIndexOf += `<p>Resultado al ejecutar el metodo => <span>${encontrarUltimoIndiceDeElemento(numeros, 4)}</span></p>`;
    divLastIndexOf.innerHTML = contenidoLastIndexOf;
    //------------------Metodo length-----------------------------------------
    const divLength = document.getElementById("length");
    let contenidoLength = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoLength += `<p>copia del metodo i sus parametros utilizados => <span>numeros.length</span></p>`;
    contenidoLength += `<p>Resultado al ejecutar el metodo => <span>${obtenerNumeroDeElementos(numeros)}</span></p>`;
    divLength.innerHTML = contenidoLength;
    //------------------Metodo map()-----------------------------------------
    const divMap = document.getElementById("map()");
    let contenidoMap = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoMap += `<p>copia del metodo i sus parametros utilizados => <span>numeros.map(x => x * 2)</span></p>`;
    contenidoMap += `<p>Resultado al ejecutar el metodo => <span>${aplicarFuncionANumeros(numeros)}</span></p>`;
    divMap.innerHTML = contenidoMap;
    //------------------Metodo pop()-----------------------------------------
    //------------------Metodo prototype------------------------------------
    //------------------Metodo push()-----------------------------------------
    //------------------Metodo reduce()-----------------------------------------
    //------------------Metodo reduceRight()------------------------------------
    //------------------Metodo reverse()-----------------------------------------
    //------------------Metodo shift()-----------------------------------------
    //------------------Metodo slice()-----------------------------------------
    //------------------Metodo some()-----------------------------------------
    //------------------Metodo sort()-----------------------------------------
    //------------------Metodo splice()-----------------------------------------
    //------------------Metodo toString()-----------------------------------------
    //------------------Metodo unshift()-----------------------------------------
    //------------------Metodo valueOf()-----------------------------------------

}
main();