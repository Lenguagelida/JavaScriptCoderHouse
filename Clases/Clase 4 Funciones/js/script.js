// function solicitarNombre (){
//     let nombre = prompt('Dime tu nombre:');
//     alert('Tu nombre es ' + nombre);
// }

// solicitarNombre();

const maquetaPrecio = parseInt(10000);
const maquetaStock = 15;
let maquetaCantidad = prompt('Cuantas unidades quieres comprar:');

function agregarAlCarritoYPagar(maqueta, maquetaCantidad) {
    const validarStock = confirmarStock(maquetaCantidad);    
    if (validarStock === 'Hay stock'){        
        alert('Agregaste al carrito ' + maquetaCantidad + ' unidades de ' + maqueta);
        let metodo = prompt('Ingrese metodo de pago (escriba "tarjeta" o "efectivo"):').toUpperCase();
        modalidadPago(metodo)
    }else{ 
        alert('No hay suficiente stock del maqueta '+ maqueta);
    }
}

function confirmarStock(demanda){
    if ((demanda > 0) && (demanda <= maquetaCantidad)) {
        return 'Hay stock';
    } else {
        return 'No hay stock';
    }
}

function modalidadPago(tipoPago) {
    if (tipoPago === 'EFECTIVO') {
        let totalEfectivo = (maquetaPrecio * maquetaCantidad) - ((maquetaPrecio * maquetaCantidad) * 0.15);
        alert('En un solo pago hay 15% de descuento, el total de su compra es de '+ totalEfectivo + '$.');        
    }else if (tipoPago === 'TARJETA') {
        let cuotas = prompt('En cuantas cuotas quiere pagar:');
        if (cuotas <= 9) {
            let totalTarjeta = maquetaPrecio * maquetaCantidad;
            for (let numCuota = 1; numCuota <= cuotas; numCuota++) {
                let valorCuota = totalTarjeta/cuotas;
                console.log('Cuota numero ' + numCuota + 'de ' + Math.round(valorCuota) + ' pesos sin interes.');
            }
            alert(cuotas + ' pagos sin interes de ' + Math.round(totalTarjeta/cuotas));
        }else {
            let totalTarjeta = (maquetaPrecio * maquetaCantidad)+((maquetaPrecio * maquetaCantidad) * 0.2);
            for (let numCuota = 1; numCuota <= cuotas; numCuota++) {
                let valorCuota = (totalTarjeta/cuotas);
                console.log('Cuota numero ' + numCuota + 'de ' + Math.round(valorCuota) + ' pesos con interes del 20%.');
            }
            alert(cuotas + ' pagos con interes de ' + Math.round(totalTarjeta/cuotas) + '. 20% de interes.');
        }
    }
}


agregarAlCarritoYPagar('F18 1/32', maquetaCantidad);


