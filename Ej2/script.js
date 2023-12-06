function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarNumerosAleatorios() {
    const cantidadNumeros = parseInt(prompt("¿Cuántos números enteros aleatorios quieres generar?"));
    const rangoMinimo = parseInt(prompt("Introduce el valor mínimo del rango:"));
    const rangoMaximo = parseInt(prompt("Introduce el valor máximo del rango:"));

    if (isNaN(cantidadNumeros) || isNaN(rangoMinimo) || isNaN(rangoMaximo)) {
        console.log("Por favor, introduce valores numéricos válidos.");
        return;
    }

    console.log(`Generando ${cantidadNumeros} números enteros aleatorios entre ${rangoMinimo} y ${rangoMaximo}:`);

    for (let i = 0; i < cantidadNumeros; i++) {
        const numeroAleatorio = generarNumeroAleatorio(rangoMinimo, rangoMaximo);
        console.log(numeroAleatorio);
    }
}

generarNumerosAleatorios();
