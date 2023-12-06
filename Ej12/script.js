function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function crearArrayAleatorio(tamano) {
    const array = [];

    for (let i = 0; i < tamano; i++) {
        array.push(generarNumeroAleatorio(1, 300));
    }

    return array;
}

function filtrarPorDigito(array, digito) {
    const resultado = [];

    for (let i = 0; i < array.length; i++) {
        const ultimoDigito = array[i] % 10;
        if (ultimoDigito === digito) {
            resultado.push(array[i]);
        }
    }

    return resultado;
}

function ejecutarPrograma() {
    const tamanoArray = parseInt(prompt("Introduce el tamaño del array de números:"));

    if (isNaN(tamanoArray) || tamanoArray <= 0) {
        console.log("Por favor, introduce un tamaño de array válido.");
        return;
    }

    const arrayAleatorio = crearArrayAleatorio(tamanoArray);
    console.log("Array Aleatorio:", arrayAleatorio);

    const digitoFiltrar = parseInt(prompt("Introduce el dígito para filtrar los números terminados en ese dígito:"));

    if (isNaN(digitoFiltrar) || digitoFiltrar < 0 || digitoFiltrar > 9) {
        console.log("Por favor, introduce un dígito válido (0-9).");
        return;
    }

    const arrayFiltrado = filtrarPorDigito(arrayAleatorio, digitoFiltrar);
    console.log(`Números terminados en ${digitoFiltrar}:`, arrayFiltrado);
}

ejecutarPrograma();
