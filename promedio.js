// const lista1 = [
//     100,
//     250,
//     120,
//     300,
//     180,
//     200,
// ];

function calcularPromedio(lista) {    
    // for (i = 0; i < lista.length; i++) {
    // sumaLista = sumaLista + lista[i];
    // }

    let sumaLista = lista.reduce(function(contador, item) {
        return contador + item;
    }, 0);
    const promedio = sumaLista / lista.length;
    return promedio;
}

const lista2 = [
    100,
    200,
    300,
    400,
    500,
    200,
];

const lista3 = [
    100,
    200,
    300,
    400,    
];

const listaDesordenada = [
    500, 
    200, 
    605, 
    30, 
    100, 
    1000,
];

const listaModa = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];

const listaOrdenada = listaDesordenada.sort(function(num1, num2) {
    return num1 - num2;
})

function medianaFinal(lista) {
    
    let mitadLista;
    
    function esPar(numero) {
        if(numero % 2 === 0){
            return true
        } else {
            return false
        }
    }
    
    if(esPar(lista.length)) {
        const mediana1 = lista[(lista.length / 2) - 1];
        const mediana2 = lista[(lista.length / 2)];
        mitadLista = calcularPromedio([mediana1, mediana2]);        
    } else { 
        mitadLista = lista[parseInt(lista.length / 2)];            
    }
    
    console.log(mitadLista);
}

function calcModa(lista) {
    const arrayMapObj = {};
    lista.map(function(elemento) {
          if (arrayMapObj[elemento]) {
            arrayMapObj[elemento] += 1;
          } else {
            arrayMapObj[elemento] = 1;
        }
    });
    const obj2array = Object.entries(arrayMapObj).sort(function(a, b) {
        return a[1] - b[1];
    });
    const moda = obj2array[obj2array.length - 1];    
    console.log(moda);
}

// function esPar(numero) {
//     if(numero % 2 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// const mitadLista = parseInt(lista2.length / 2);

// let mediana;

// if(esPar(lista2.length)) {
//     const mediana1 = lista2[mitadLista - 1];
//     const mediana2 = lista2[mitadLista];
//     mediana = calcularPromedio([
//         mediana1, 
//         mediana2,
//     ]);    
// } else { 
//     mediana = lista2[mitadLista];    
// }