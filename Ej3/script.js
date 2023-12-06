function esNumeroPrimo(numero) {
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

function verificarNumeroPrimo() {
    const numero = parseInt(prompt("Introduce un número para verificar si es primo:"));

    if (isNaN(numero)) {
        console.log("Por favor, introduce un número válido.");
        return;
    }

    const esPrimo = esNumeroPrimo(numero);

    if (esPrimo) {
        console.log(`${numero} es un número primo.`);
    } else {
        console.log(`${numero} no es un número primo.`);
    }
}

verificarNumeroPrimo();
