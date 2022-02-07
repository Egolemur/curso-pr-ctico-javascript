// Código del cuadrado

console.group("cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd(); 

// Código del triángulo

console.group("triángulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Código del círculo

console.group("círculo");

const pi = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function circunferencia(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo(radio) {
    return (radio * radio) * pi;
} 

console.groupEnd();