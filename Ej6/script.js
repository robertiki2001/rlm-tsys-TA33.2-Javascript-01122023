function contarCifras(numero) {
    if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        return "Por favor, introduce un número entero positivo válido.";
    }

    const longitud = numero.toString().length;
    return longitud;
}

function contarCifrasUsuario() {
    const numeroEntero = parseInt(prompt("Introduce un número entero positivo para contar sus cifras:"));

    if (isNaN(numeroEntero)) {
        console.log("Por favor, introduce un número válido.");
        return;
    }

    const cantidadCifras = contarCifras(numeroEntero);

    console.log(`El número de cifras de ${numeroEntero} es: ${cantidadCifras}`);
}

contarCifrasUsuario();
