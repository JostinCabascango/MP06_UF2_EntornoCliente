function manipularColores() {
    let colores = ['verde', 'rojo', 'amarillo', 'azul', 'negro', 'blanco'];
    let todosMenoresAMarron = sonTodosMenoresAMarron(colores);
    console.log(todosMenoresAMarron);

    let menoresAMarron = filtraMenoresAMarron(colores);
    console.log(menoresAMarron);

    let ultimosDos = obtenerUltimosDos(colores);
    console.log(ultimosDos);

    colores = agregarColor(colores, 'turquesa');
    console.log(colores);

    colores = eliminarColorVerde(colores, 'verde');
    console.log(colores);
}

function sonTodosMenoresAMarron(colores) {
    return colores.every(color => color < 'marrón');
}

function filtraMenoresAMarron(colores) {
    return colores.filter(color => color < 'marrón');
}

function obtenerUltimosDos(colores) {
    return colores.slice(-2);
}

function agregarColor(colores, color) {
    colores.push(color);
    return colores;
}

function eliminarColorVerde(colores) {
    return colores.shift();
}

manipularColores();