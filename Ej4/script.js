function calcularFactorial(numero) {
    if (numero < 0) {
        return "No se puede calcular el factorial de un número negativo.";
    } else if (numero === 0 || numero === 1) {
        return 1; // El factorial de 0 y 1 es 1
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

function calcularFactorialUsuario() {
    const numero = parseInt(prompt("Introduce un número para calcular su factorial:"));

    if (isNaN(numero)) {
        console.log("Por favor, introduce un número válido.");
        return;
    }

    const factorial = calcularFactorial(numero);

    console.log(`El factorial de ${numero} es: ${factorial}`);
}

calcularFactorialUsuario();
