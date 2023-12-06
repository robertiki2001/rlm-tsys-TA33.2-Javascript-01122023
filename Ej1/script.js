function calcularAreaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcularAreaCuadrado(lado) {
    return Math.pow(lado, 2);
}

function calcularArea() {
    const figura = prompt("¿Qué figura quieres calcular? (círculo, triángulo, cuadrado)").toLowerCase();

    switch (figura) {
        case 'círculo':
            const radioCirculo = parseFloat(prompt("Introduce el radio del círculo:"));
            const areaCirculo = calcularAreaCirculo(radioCirculo);
            console.log(`El área del círculo es: ${areaCirculo}`);
            break;

        case 'triángulo':
            const baseTriangulo = parseFloat(prompt("Introduce la base del triángulo:"));
            const alturaTriangulo = parseFloat(prompt("Introduce la altura del triángulo:"));
            const areaTriangulo = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
            console.log(`El área del triángulo es: ${areaTriangulo}`);
            break;

        case 'cuadrado':
            const ladoCuadrado = parseFloat(prompt("Introduce el lado del cuadrado:"));
            const areaCuadrado = calcularAreaCuadrado(ladoCuadrado);
            console.log(`El área del cuadrado es: ${areaCuadrado}`);
            break;

        default:
            console.log("Figura no reconocida. Por favor, introduce círculo, triángulo o cuadrado.");
            break;
    }
}

calcularArea();
