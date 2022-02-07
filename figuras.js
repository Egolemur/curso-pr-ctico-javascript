// Código del cuadrado

console.group("cuadrado");

function perimetroCuadrado(lado) {
    return (Number(lado) + Number(lado) + Number(lado) + Number(lado));
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd(); 

// Código del triángulo

console.group("triángulo");

function perimetroTriangulo(lado1, lado2, base) {
    return (Number(lado1) + Number(lado2) + Number(base));
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
    return (diametro * pi);
}

function areaCirculo(radio) {
    return (radio * radio) * pi;
} 

console.groupEnd();

// Funciones para los botones HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const valor = input.value;
    const perimetro = perimetroCuadrado(valor);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const valor = input.value;
    const area = areaCuadrado(valor);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const valor1 = input1.value;
    const input2 = document.getElementById("InputTriangulo2");
    const valor2 = input2.value;
    const input3 = document.getElementById("InputBaseTriangulo");
    const valor3 = input3.value;    
    const perimetro = perimetroTriangulo(valor1, valor2, valor3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputBaseTriangulo");
    const valor1 = input1.value;
    const input2 = document.getElementById("InputAlturaTriangulo");
    const valor2 = input2.value;
    const area = areaTriangulo(valor1, valor2);
    alert(area);
}

function calcularDiametro() {
    const input = document.getElementById("InputRadio"); 
    const valor = input.value;
    const diametro = diametroCirculo(valor);
    alert(diametro);
}

function calcularCircunferencia() {
    const input = document.getElementById("InputRadio"); 
    const valor = input.value;    
    const perimetro = circunferencia(valor);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputRadio"); 
    const valor = input.value;    
    const area = areaCirculo(valor);
    alert(area);
}