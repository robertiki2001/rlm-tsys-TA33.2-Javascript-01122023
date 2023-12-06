function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function generarPrimoAleatorio(min, max) {
    let numeroAleatorio;

    do {
        numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (!esPrimo(numeroAleatorio));

    return numeroAleatorio;
}

function crearArrayPrimos(tamano, min, max) {
    const arrayPrimos = [];

    for (let i = 0; i < tamano; i++) {
        const primo = generarPrimoAleatorio(min, max);
        arrayPrimos.push(primo);
    }

    return arrayPrimos;
}

function encontrarMayor(array) {
    if (array.length === 0) {
        return undefined;
    }

    return Math.max(...array);
}

function ejecutarPrograma() {
    const tamanoArray = parseInt(prompt("Introduce el tamaño del array de números primos:"));

    if (isNaN(tamanoArray) || tamanoArray <= 0) {
        console.log("Por favor, introduce un tamaño de array válido.");
        return;
    }

    const minimo = parseInt(prompt("Introduce el valor mínimo para los números primos:"));
    const maximo = parseInt(prompt("Introduce el valor máximo para los números primos:"));

    if (isNaN(minimo) || isNaN(maximo) || minimo >= maximo) {
        console.log("Por favor, introduce valores válidos y asegúrate de que el valor máximo sea mayor que el mínimo.");
        return;
    }

    const arrayPrimos = crearArrayPrimos(tamanoArray, minimo, maximo);
    console.log("Array de números primos aleatorios:", arrayPrimos);

    const mayorPrimo = encontrarMayor(arrayPrimos);
    console.log("El mayor número primo es:", mayorPrimo);
}

ejecutarPrograma();
