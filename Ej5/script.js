function decimalABinario(numero) {
    if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        return "Por favor, introduce un número entero no negativo válido.";
    }

    if (numero === 0) {
        return "0";
    }

    let binario = "";
    while (numero > 0) {
        const residuo = numero % 2;
        binario = residuo + binario;
        numero = Math.floor(numero / 2);
    }

    return binario;
}

function convertirADecimal() {
    const numeroDecimal = parseInt(prompt("Introduce un número decimal para convertir a binario:"));

    if (isNaN(numeroDecimal)) {
        console.log("Por favor, introduce un número válido.");
        return;
    }

    const binario = decimalABinario(numeroDecimal);

    console.log(`El número binario equivalente a ${numeroDecimal} es: ${binario}`);
}

convertirADecimal();
