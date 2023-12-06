function rellenarArray() {
    const array = [];

    for (let i = 0; i < 10; i++) {
        const valor = parseFloat(prompt(`Introduce el valor para la posición ${i + 1}:`));

        if (isNaN(valor)) {
            console.log("Por favor, introduce un valor numérico válido.");
            return;
        }

        array.push(valor);
    }

    return array;
}

function mostrarArray(array) {
    if (!Array.isArray(array) || array.length !== 10) {
        console.log("El array no está correctamente llenado.");
        return;
    }

    console.log("Índice - Valor");
    for (let i = 0; i < array.length; i++) {
        console.log(`${i} - ${array[i]}`);
    }
}

function ejecutarPrograma() {
    const miArray = rellenarArray();

    if (miArray) {
        mostrarArray(miArray);
    }
}

ejecutarPrograma();
