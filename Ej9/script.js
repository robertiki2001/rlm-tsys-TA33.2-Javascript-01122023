function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rellenarArray(tamano, min, max) {
    const array = [];

    for (let i = 0; i < tamano; i++) {
        array.push(generarNumeroAleatorio(min, max));
    }

    return array;
}

function mostrarArrayYSuma(array) {
    console.log("Contenido del array:");

    for (let i = 0; i < array.length; i++) {
        console.log(`Posición ${i}: ${array[i]}`);
    }

    const suma = array.reduce((acc, valor) => acc + valor, 0);
    console.log(`Suma total: ${suma}`);
}

function ejecutarPrograma() {
    const tamanoArray = parseInt(prompt("Introduce el tamaño del array:"));

    if (isNaN(tamanoArray) || tamanoArray <= 0) {
        console.log("Por favor, introduce un tamaño de array válido.");
        return;
    }

    const arrayGenerado = rellenarArray(tamanoArray, 0, 9);

    mostrarArrayYSuma(arrayGenerado);
}

ejecutarPrograma();
