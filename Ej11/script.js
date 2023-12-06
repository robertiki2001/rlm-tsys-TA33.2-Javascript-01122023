function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function crearArrayAleatorio(tamano) {
    const array = [];

    for (let i = 0; i < tamano; i++) {
        array.push(generarNumeroAleatorio(1, 10));
    }

    return array;
}

function reasignarValores(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = generarNumeroAleatorio(1, 10);
    }
}

function multiplicarArrays(array1, array2) {
    const resultado = [];

    for (let i = 0; i < array1.length; i++) {
        resultado.push(array1[i] * array2[i]);
    }

    return resultado;
}

function ejecutarPrograma() {
    const tamanoArray = parseInt(prompt("Introduce el tamaño de los arrays:"));

    if (isNaN(tamanoArray) || tamanoArray <= 0) {
        console.log("Por favor, introduce un tamaño de array válido.");
        return;
    }

    const array1 = crearArrayAleatorio(tamanoArray);
    console.log("Array 1:", array1);

    const array2 = array1.slice(); 
    reasignarValores(array2);
    console.log("Array 2:", array2);

    const resultadoMultiplicacion = multiplicarArrays(array1, array2);
    console.log("Resultado de la multiplicación:", resultadoMultiplicacion);
}

ejecutarPrograma();
