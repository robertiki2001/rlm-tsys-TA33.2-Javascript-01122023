function convertirMoneda(cantidadEuros, monedaDestino) {
    let tasaCambio;

    switch (monedaDestino.toLowerCase()) {
        case 'dólares':
            tasaCambio = 1.28611;
            break;

        case 'libras':
            tasaCambio = 0.86;
            break;

        case 'yenes':
            tasaCambio = 129.852;
            break;

        default:
            console.log("Moneda no reconocida. Las opciones son dólares, libras o yenes.");
            return;
    }

    const cantidadConvertida = cantidadEuros * tasaCambio;
    console.log(`${cantidadEuros} euros son aproximadamente ${cantidadConvertida.toFixed(2)} ${monedaDestino}.`);
}

function convertirMonedaUsuario() {
    const cantidadEuros = parseFloat(prompt("Introduce la cantidad de euros a convertir:"));

    if (isNaN(cantidadEuros)) {
        console.log("Por favor, introduce una cantidad válida.");
        return;
    }

    const monedaDestino = prompt("Introduce la moneda a la que deseas convertir (dólares, libras o yenes):");

    convertirMoneda(cantidadEuros, monedaDestino);
}

convertirMonedaUsuario();
