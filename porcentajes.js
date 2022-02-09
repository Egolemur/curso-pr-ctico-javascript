const cupones = [ 
    {nombre: "chocolate", descuento: 10},
    {nombre: "vainilla", descuento: 15},
    {nombre: "fresa", descuento: 20},
];

function precioConDescuento(precio, descuento) {
    const nuevoPorcentaje = 100 - descuento;
    const nuevoPrecio = (nuevoPorcentaje / 100) * precio;
    return nuevoPrecio;
}

function calculoDescuento() {
    const precio = document.getElementById("IdOriginal");
    const precioValor = precio.value;        
    const cupon = document.getElementById("IdCupon");
    const cuponValor = cupon.value;
    const descuentoObjeto = cupones.find(function(item) {
        return item.nombre === cuponValor;
    });
    if (!descuentoObjeto) {
        alert("El cupón " + cuponValor + " no es válido.");
    } else {
        const descuentoCupon = descuentoObjeto.descuento;
        const precioReal = precioConDescuento(precioValor, descuentoCupon);
        const resultP = document.getElementById("resultP");
        resultP.innerText = "El precio con descuento es de: $" + precioReal;
    }
}

// function calculoDescuento() {
//     const descuento = document.getElementById("IdDescuento");
//     const descuentoValor = descuento.value;
//     const precio = document.getElementById("IdOriginal");
//     const precioValor = precio.value;
//     if (!cupones.includes(descuentoValor)) {
//         alert("El cupón " + descuentoValor + "no es válido.");
//     } else if (cupones.includes(descuentoValor)) {        
//         let descuentoCupon;
//         switch(descuentoValor) {
//             case cupones[0]:
//                 descuentoCupon = 10;
//             break;
//             case cupones[1]:
//                 descuentoCupon = 15;
//             break;
//             case cupones[2]:
//                 descuentoCupon = 20;
//             break;                    
//         }
//         const precioReal = precioConDescuento(precioValor, descuentoCupon);
//         const resultP = document.getElementById("resultP");
//         resultP.innerText = "El precio con descuento es de: $" + precioReal;
//     }
// }



    