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
    let claves = [];
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
// Función que elimina el último elemento de un array y devuelve ese elemento usando el método pop()
function eliminarUltimoElemento(numeros) {
    // Usar el método pop() para eliminar el último elemento del array
    let ultimoElemento = numeros.pop();

    return ultimoElemento;
}
// Función que agrera un nuevo metodo al prototipo de Array que devuelve un array con el doble de los valores del array original
Array.prototype.crearArrayDesdeObjeto = function () {
    return this.map(x => x * 2);
}
// Función que agrega un elemento al final de un array y devuelve la nueva longitud usando el método push()
function agregarElementos(array, elementos) {
    array.push(elementos);
    return array;
}
// Función que reduce los elementos de un array a un único valor usando el método reduce()
function reducirArray(array) {
    // Usar el método reduce() para reducir los elementos del array a un único valor
    // a = acumulador
    // b = valor actual
    let resultado = array.reduce((a, b) => a + b);

    return resultado;
}
// Función que reduce los elementos de un array a un único valor empezando por la derecha usando el método reduceRight()
function reducirArrayPorLaDerecha(array) {
    // Usar el método reduceRight() para reducir los elementos del array a un único valor
    // a = acumulador
    // b = valor actual
    let resultado = array.reduceRight((a, b) => a + b);

    return resultado;
}
// Función que invierte el orden de los elementos de un array usando el método reverse()
function invertirOrdenDeElementos(array) {
    // Usar el método reverse() para invertir el orden de los elementos del array
    array.reverse();

    return array;
}
// Función que elimina el primer elemento de un array y devuelve ese elemento usando el método shift()
function eliminarPrimerElemento(array) {
    // Usar el método shift() para eliminar el primer elemento del array
    let primerElemento = array.shift();

    return `Elemento a eliminar ${primerElemento} y el array queda de la siguiente manera ${array}`;
}
// Función que devuelve una parte de un array usando el método slice()
function obtenerParteDeArray(array, inicio, fin) {
    // Usar el método slice() para obtener una parte del array
    let parteArray = array.slice(inicio, fin);

    return parteArray;
}
// Función que comprueba si algún elemento de un array pasa una prueba usando el método some()
function comprobarSiAlgunoEsMayorAUno(array) {
    // Usar el método some() para comprobar si algún elemento es mayor que 1
    let algunoMayor = array.some(numero => numero > 1);

    return algunoMayor;
}
// Función que ordena los elementos de un array usando el método sort()
function ordenarArray(array) {
    // Usar el método sort() para ordenar los elementos del array
    let arrayOrdenado = array.sort();

    return arrayOrdenado;
}
// Función que elimina elementos de un array y los reemplaza por otros usando el método splice()
function eliminarElementos(array, inicio, fin, elementos) {
    // Usar el método splice() para eliminar elementos del array y reemplazarlos por otros
    array.splice(inicio, fin, elementos);

    return `el array queda de la siguiente manera ${array}`;
}
// Función que convierte un array en un string usando el método toString()
function convertirArrayEnString(numeros) {
    // Usar el método toString() para convertir el array en un string
    let string = numeros.toString();

    return string;
}
// Función que agrega uno o más elementos al principio de un array y devuelve la nueva longitud usando el método unshift()
function agregarElementosAlPrincipio(array, elementos) {
    // Usar el método unshift() para agregar elementos al principio del array
    array.unshift(elementos);

    return array;
}
// Función que devuelve el valor primitivo de un objeto usando el método valueOf()
function obtenerValorPrimitivo(array) {
    // Usar el método valueOf() para obtener el valor primitivo del objeto
    let valorPrimitivo = array.valueOf();

    return `El valor primitivo del objeto es ${valorPrimitivo} y el tipo de dato es ${typeof valorPrimitivo}`;
}
// Programa principal
function main() {
    const colores = ["Verde", "Rojo", "Amarillo", "Azul", "Negro", "Blanco"];
    let numeros = [1, 2, 3, 4, 5]
    let colores1 = ["Verde", "Rojo", "Amarillo"];
    let colores2 = ["Azul", "Negro", "Blanco"];
    //------------------METODO AT()------------------------------------
    const divAt = document.getElementById("at()");
    let contenidoAt = `<p>Array Incial -> <span>${colores.join(', ')}</span></p>`;
    contenidoAt += `<p>Copia del metodo i sus parametros utilizados -> <span>${'colores.at(2)'}</span></p>`;
    contenidoAt += `<p>Resultado al ejecutar el metodo -> <span>${obtenerTercerColor(colores)}</span></p>`;
    divAt.innerHTML = contenidoAt;
    //------------------METODO Concat()------------------------------------
    const divConcat = document.getElementById("concat()");
    let contenidoConcat = `<p>Array Incial  => <br><br>colores1 =></p><span style="font-size: 20px">[${colores1.join(', ')}] </span>,<p>colores2 =></p><span style="font-size: 20px">[${colores2.join(', ')}]</span>`;
    contenidoConcat += `<p>Copia del metodo i sus parametros utilizados  => <span>colores.constructor</span></p>`;
    contenidoConcat += `<p>Resultado al ejecutar el metodo  => <span>${unirArraysDeColores(colores).join(', ')}</span></p>`;
    divConcat.innerHTML = contenidoConcat;
    //------------------METODO constructor()------------------------------------
    const divConstructor = document.getElementById("constructor()");
    let contenidoConstructor = `<p>Array Incial -> <span>${colores.join(', ')}</span></p>`;
    contenidoConstructor += `<p>Copia del metodo i sus parametros utilizados => <span>colores1.concat(colores2)</span></p>`;
    contenidoConstructor += `<p>Resultado al ejecutar el metodo => <span>${obtenerArrayConstructor(colores)}</span></p>`;
    divConstructor.innerHTML = contenidoConstructor;
    //------------------METODO copyWithin()------------------------------------
    const divCopyWithin = document.getElementById("copyWithin()");
    let contenidoCopyWithin = `<p>Array Incial -> <span>${colores.join(', ')}</span></p>`;
    contenidoCopyWithin += `<p>Copia del metodo i sus parametros utilizados => <span>colores.copyWithin(2,0)</span></p>`;
    contenidoCopyWithin += `<p>Resultado al ejecutar el metodo => <span>${copiarColoresEnArray(colores).join(', ')}</span></p>`;
    divCopyWithin.innerHTML = contenidoCopyWithin;
    //------------------METODO entries() ------------------------------------
    let valores = "";
    for (let e of obtenerIndicesYValores(colores)) {
        valores += `<p>indice: <span>${e[0]}</span> valor: <span>${e[1]}</span></p>`;
    }
    const divEntries = document.getElementById("entries()");
    let contenidoEntries = `<p>Array Incial -> <span>${colores.join(', ')}</span></p>`;
    contenidoEntries += `<p>Copia del metodo i sus parametros utilizados => <span>colores.entries()</span></p>`;
    contenidoEntries += `<p>Resultado al ejecutar el metodo =><span></span></p>`;
    divEntries.innerHTML = contenidoEntries;
    //------------------METODO every() ------------------------------------
    const divEvery = document.getElementById("every()");
    let contenidoEvery = `<p>Array Incial -> <span>${colores.join(', ')}</span></p>`;
    contenidoEvery += `<p>Copia del metodo i sus parametros utilizados => <span>colores.every(color => color < 'marron')</span></p>`;
    contenidoEvery += `<p>Resultado al ejecutar el metodo => <span>${comprobarSiTodosSonMenoresAMarron(colores)}</span></p>`;
    divEvery.innerHTML = contenidoEvery;
    //------------------METODO fill() ------------------------------------
    const divFill = document.getElementById("fill()");
    let contenidoFill = `<p>Array Incial -> <span>${colores.join(', ')}</span></p>`;
    contenidoFill += `<p>Copia del metodo i sus parametros utilizados => <span>colores.fill('naranja')</span></p>`;
    contenidoFill += `<p>Resultado al ejecutar el metodo => <span>${rellenarArrayConMarron(colores).join(', ')}</span></p>`;
    divFill.innerHTML = contenidoFill;
    //------------------METODO filter() ------------------------------------
    const divFilter = document.getElementById("filter()");
    let contenidoFilter = `<p>Array Incial -> <span>${["Verde", "Rojo", "Amarillo", "Azul", "Negro", "Blanco"].join(', ')}</span></p>`;
    contenidoFilter += `<p>Copia del metodo i sus parametros utilizados => <span>colores.filter(color => color < 'marron')</span></p>`;
    contenidoFilter += `<p>Resultado al ejecutar el metodo => <span>${filtrarColores(["Verde", "Rojo", "Amarillo", "Azul", "Negro", "Blanco"]).join(', ')}</span></p>`;
    divFilter.innerHTML = contenidoFilter;
    //------------------METODO find() ------------------------------------
    const divFind = document.getElementById("find()")
    let contenidoFind = `<p>Array Incial -> <span>${["Verde", "Rojo", "Amarillo", "Azul", "Negro", "Blanco"].join(', ')}</span></p>`;
    contenidoFind += `<p>Copia del metodo i sus parametros utilizados => <span>colores.find(color => color < 'marron')</span></p>`;
    contenidoFind += `<p>Resultado al ejecutar el metodo => <span>${encontrarColor(["Verde", "Rojo", "Amarillo", "Azul", "Negro", "Blanco"])}</span></p>`;
    divFind.innerHTML = contenidoFind;
    //------------------METODO findIndex() ------------------------------------
    const divFindIndex = document.getElementById("findIndex()");
    let contenidoFindIndex = `<p>Array Incial -> <span>${["Verde", "Rojo", "Amarillo", "Azul", "Negro", "Blanco"].join(', ')}</span></p>`;
    contenidoFindIndex += `<p>Copia del metodo i sus parametros utilizados => <span>colores.findIndex(color => color === 'Marron')</span></p>`;
    contenidoFindIndex += `<p>Resultado al ejecutar el metodo => <span>${encontrarIndiceDeColor(["Verde", "Rojo", "Amarillo", "Azul", "Negro", "Blanco"])}</span></p>`;
    divFindIndex.innerHTML = contenidoFindIndex;
    //------------------METODO flat() ------------------------------------
    const array = [1, 2, [3, [4, 5, 6], 7], 8];
    const divFlat = document.getElementById("flat()");
    let contenidoFlat = `<p>Array Incial -> <span> [1, 2, [3, [4, 5, 6], 7], 8]</span></p>`;
    contenidoFlat += `<p>Copia del metodo i sus parametros utilizados => <span>array.flat()</span></p>`;
    contenidoFlat += `<p>Resultado al ejecutar el metodo => <span>${aplanarArrayDeNumeros(array)}</span></p>`;
    divFlat.innerHTML = contenidoFlat;
    //------------------METODO flatMap() ------------------------------------
    const divFlatMap = document.getElementById("flatMap()");
    let contenidoFlatMap = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoFlatMap += `<p>Copia del metodo i sus parametros utilizados => <span>array.flatMap(x => x, x * 2)</span></p>`;
    contenidoFlatMap += `<p>Resultado al ejecutar el metodo => <span>${aplanarArrayDeNumerosConFlatMap(numeros)}</span></p>`;
    divFlatMap.innerHTML = contenidoFlatMap;
    //------------------METODO forEach() ------------------------------------
    const divForEach = document.getElementById("forEach()");
    let contenidoForEach = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoForEach += `<p>Copia del metodo i sus parametros utilizados => <span>numeros.forEach(numero => {  resultado += numero + " ";  });
    });</span></p>`;
    contenidoForEach += `<p>Resultado al ejecutar el metodo => <span>${ejecutarFuncionPorCadaElemento(numeros)}</span></p>`;
    divForEach.innerHTML = contenidoForEach;
    //------------------METODO from() ---------------------------------------
    const divFrom = document.getElementById("from()");
    let contenidoFrom = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoFrom += `<p>Copia del metodo i sus parametros utilizados => <span>Array.from('jostin')</span></p>`;
    contenidoFrom += `<p>Resultado al ejecutar el metodo => <span>${crearArrayDesdeString('jostin').join(', ')}</span></p>`;
    divFrom.innerHTML = contenidoFrom;
    //------------------Metodo includes()------------------------------------
    const divIncludes = document.getElementById("includes()");
    let contenidoIncludes = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoIncludes += `<p>Copia del metodo i sus parametros utilizados => <span>numeros.includes(2)</span></p>`;
    contenidoIncludes += `<p>Resultado al ejecutar el metodo => <span>${comprobarSiIncluyeElemento(numeros, 2)}</span></p>`;
    divIncludes.innerHTML = contenidoIncludes;
    //------------------Metodo indexOf()--------------------------------------
    const divIndexOf = document.getElementById("indexOf()");
    let contenidoIndexOf = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoIndexOf += `<p>Copia del metodo i sus parametros utilizados => <span>numeros.indexOf(4)</span></p>`;
    contenidoIndexOf += `<p>Resultado al ejecutar el metodo => <span>${encontrarIndiceDeElemento(numeros, 4)}</span></p>`;
    divIndexOf.innerHTML = contenidoIndexOf;
    //------------------Metodo isArray()--------------------------------------
    const divIsArray = document.getElementById("isArray()");
    let contenidoIsArray = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoIsArray += `<p>Copia del metodo i sus parametros utilizados => <span>Array.isArray(numeros)</span></p>`;
    contenidoIsArray += `<p>Resultado al ejecutar el metodo => <span>${comprobarSiEsArray(numeros)}</span></p>`;
    divIsArray.innerHTML = contenidoIsArray;
    //------------------Metodo join()-----------------------------------------
    const divJoin = document.getElementById("join()");
    let contenidoJoin = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoJoin += `<p>Copia del metodo i sus parametros utilizados => <span>numeros.join()</span></p>`;
    contenidoJoin += `<p>Resultado al ejecutar el metodo => <span>${convertirArrayEnString(numeros)}</span></p>`;
    divJoin.innerHTML = contenidoJoin;
    //------------------Metodo keys()-----------------------------------------
    const divKeys = document.getElementById("keys()");
    let contenidoKeys = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoKeys += `<p>Copia del metodo i sus parametros utilizados => <span>numeros.keys()</span></p>`;
    contenidoKeys += `<p>Resultado al ejecutar el metodo => <span>${obtenerIteradorDeIndices(numeros)}</span></p>`;
    divKeys.innerHTML = contenidoKeys;
    //------------------Metodo lastIndexOf()----------------------------------
    const divLastIndexOf = document.getElementById("lastIndexOf()");
    let contenidoLastIndexOf = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoLastIndexOf += `<p>Copia del metodo i sus parametros utilizados => <span>numeros.lastIndexOf(4)</span></p>`;
    contenidoLastIndexOf += `<p>Resultado al ejecutar el metodo => <span>${encontrarUltimoIndiceDeElemento(numeros, 4)}</span></p>`;
    divLastIndexOf.innerHTML = contenidoLastIndexOf;
    //------------------Metodo length-----------------------------------------
    const divLength = document.getElementById("length");
    let contenidoLength = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoLength += `<p>Copia del metodo i sus parametros utilizados => <span>numeros.length</span></p>`;
    contenidoLength += `<p>Resultado al ejecutar el metodo => <span>${obtenerNumeroDeElementos(numeros)}</span></p>`;
    divLength.innerHTML = contenidoLength;
    //------------------Metodo map()-----------------------------------------
    const divMap = document.getElementById("map()");
    let contenidoMap = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoMap += `<p>Copia del metodo i sus parametros utilizados => <span>numeros.map(x => x * 2)</span></p>`;
    contenidoMap += `<p>Resultado al ejecutar el metodo => <span>${aplicarFuncionANumeros(numeros)}</span></p>`;
    divMap.innerHTML = contenidoMap;
    //------------------Metodo pop()-----------------------------------------
    const divPop = document.getElementById("pop()");
    let contenidoPop = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoPop += `<p>Copia del metodo i sus parametros utilizados => <span>numeros.pop()</span></p>`;
    contenidoPop += `<p>Resultado al ejecutar el metodo => <span>${eliminarUltimoElemento(numeros)}</span></p>`;
    divPop.innerHTML = contenidoPop;
    //------------------Metodo prototype------------------------------------
    const divPrototype = document.getElementById("prototype()");
    let contenidoPrototype = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoPrototype += `<p>Copia del metodo i sus parametros utilizados => <span>Array.prototype.crearArrayDesdeObjeto </span></p>`;
    contenidoPrototype += `<p>Resultado al ejecutar el metodo => <span>${numeros.crearArrayDesdeObjeto()}</span></p>`;
    divPrototype.innerHTML = contenidoPrototype;
    //------------------Metodo push()-----------------------------------------
    const divPush = document.getElementById("push()");
    let contenidoPush = `<p>Array Incial -> <span> ${numeros}</span></p>`;
    contenidoPush += `<p>Copia del metodo i sus parametros utilizados => <span>numeros.push([6,7,8])</span></p>`;
    contenidoPush += `<p>Resultado al ejecutar el metodo => <span>${agregarElementos(numeros, [6, 7, 8])}</span></p>`;
    divPush.innerHTML = contenidoPush;
    //------------------Metodo reduce()-----------------------------------------
    const divReduce = document.getElementById("reduce()");
    let contenidoReduce = `<p>Array Incial -> <span>['a', 'b', 'c', 'd', 'e']</span></p>`;
    contenidoReduce += `<p>Copia del metodo i sus parametros utilizados => <span>array.reduce((acumulador, valorActual) => acumulador + valorActual)</span></p>`;
    contenidoReduce += `<p>Resultado al ejecutar el metodo => <span>${reducirArray(['a', 'b', 'c', 'd', 'e'])}</span></p>`;
    divReduce.innerHTML = contenidoReduce;
    //------------------Metodo reduceRight()------------------------------------
    const divReduceRight = document.getElementById("reduceRight()");
    let contenidoReduceRight = `<p>Array Incial -> <span>  ['a', 'b', 'c', 'd', 'e']</span></p>`;
    contenidoReduceRight += `<p>Copia del metodo i sus parametros utilizados => <span>array.reduceRight((acumulador, valorActual) => acumulador + valorActual)</span></p>`;
    contenidoReduceRight += `<p>Resultado al ejecutar el metodo => <span>${reducirArrayPorLaDerecha(['a', 'b', 'c', 'd', 'e'])}</span></p>`;
    divReduceRight.innerHTML = contenidoReduceRight;
    //------------------Metodo reverse()-----------------------------------------
    numeros = [1, 2, 3, 4, 5];
    const divReverse = document.getElementById("reverse()");
    let contenidoReverse = `<p>Array Incial -> <span>  ${numeros}</span></p>`;
    contenidoReverse += `<p>Copia del metodo i sus parametros utilizados => <span>array.reverse()</span></p>`;
    contenidoReverse += `<p>Resultado al ejecutar el metodo => <span>${invertirOrdenDeElementos(numeros)}</span></p>`;
    divReverse.innerHTML = contenidoReverse;
    //------------------Metodo shift()-----------------------------------------
    const divShift = document.getElementById("shift()");
    let contenidoShift = `<p>Array Incial -> <span>  ${numeros}</span></p>`;
    contenidoShift += `<p>Copia del metodo i sus parametros utilizados => <span>array.shift()</span></p>`;
    contenidoShift += `<p>Resultado al ejecutar el metodo => <span>${eliminarPrimerElemento(numeros)}</span></p>`;
    divShift.innerHTML = contenidoShift;
    //------------------Metodo slice()-----------------------------------------
    const divSlice = document.getElementById("slice()");
    let contenidoSlice = `<p>Array Incial -> <span>  ${numeros}</span></p>`;
    contenidoSlice += `<p>Copia del metodo i sus parametros utilizados => <span>array.slice(2,4)</span></p>`;
    contenidoSlice += `<p>Resultado al ejecutar el metodo => <span>${obtenerParteDeArray(numeros, 2, 4)}</span></p>`;
    divSlice.innerHTML = contenidoSlice;
    //------------------Metodo some()-----------------------------------------
    const divSome = document.getElementById("some()");
    let contenidoSome = `<p>Array Incial -> <span>  ${numeros}</span></p>`;
    contenidoSome += `<p>Copia del metodo i sus parametros utilizados => <span>array.some(numero => numero > 1)</span></p>`;
    contenidoSome += `<p>Resultado al ejecutar el metodo => <span>${comprobarSiAlgunoEsMayorAUno(numeros)}</span></p>`;
    divSome.innerHTML = contenidoSome;
    //------------------Metodo sort()-----------------------------------------
    const divSort = document.getElementById("sort()");
    let contenidoSort = `<p>Array Incial -> <span>  ${numeros}</span></p>`;
    contenidoSort += `<p>Copia del metodo i sus parametros utilizados => <span>numeros.sort()</span></p>`;
    contenidoSort += `<p>Resultado al ejecutar el metodo => <span>${ordenarArray(numeros)}</span></p>`;
    divSort.innerHTML = contenidoSort;
    //------------------Metodo splice()-----------------------------------------
    const divSplice = document.getElementById("splice()");
    let contenidoSplice = `<p>Array Incial -> <span>  ${numeros}</span></p>`;
    contenidoSplice += `<p>Copia del metodo i sus parametros utilizados => <span>numeros.splice(2,2,['a','b','c'])</span></p>`;
    contenidoSplice += `<p>Resultado al ejecutar el metodo => <span>${eliminarElementos(numeros, 2, 2, ['a', 'b', 'c'])}</span></p>`;
    divSplice.innerHTML = contenidoSplice;
    //------------------Metodo toString()-----------------------------------------
    const divToString = document.getElementById("toString()");
    let contenidoToString = `<p>Array Incial -> <span>  ${numeros}</span></p>`;
    contenidoToString += `<p>Copia del metodo i sus parametros utilizados => <span>numeros.toString()</span></p>`;
    contenidoToString += `<p>Resultado al ejecutar el metodo => <span>${convertirArrayEnString(numeros)}</span></p>`;
    divToString.innerHTML = contenidoToString;
    //------------------Metodo unshift()-----------------------------------------
    const divUnshift = document.getElementById("unshift()");
    let contenidoUnshift = `<p>Array Incial -> <span>  ${numeros}</span></p>`;
    contenidoUnshift += `<p>Copia del metodo i sus parametros utilizados => <span>numeros.unshift(0)</span></p>`;
    contenidoUnshift += `<p>Resultado al ejecutar el metodo => <span>${agregarElementosAlPrincipio(numeros, 0)}</span></p>`;
    divUnshift.innerHTML = contenidoUnshift;
    //------------------Metodo valueOf()-----------------------------------------
    const divValueOf = document.getElementById("valueOf()");
    let contenidoValueOf = `<p>Array Incial -> <span>  ${numeros}</span></p>`;
    contenidoValueOf += `<p>Copia del metodo i sus parametros utilizados => <span>numeros.valueOf()</span></p>`;
    contenidoValueOf += `<p>Resultado al ejecutar el metodo => <span>${obtenerValorPrimitivo(numeros)}</span></p>`;
    divValueOf.innerHTML = contenidoValueOf;
}
main();