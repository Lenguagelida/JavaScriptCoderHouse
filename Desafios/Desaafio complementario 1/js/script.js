const valorProducto = parseInt(prompt('Ingrese el valor del producto que se desea comprar:'));
const cantidadCuotas = prompt('Cantidad de cuotas que se dividira el pago:');

if (cantidadCuotas<= 6){
    for(let i = 1; i <= cantidadCuotas; i++){           
            let valorCuotas = valorProducto / cantidadCuotas;
            alert('Cuota numero '+ i + ': ' + Math.round(valorCuotas)+ ' pesos aproximadamente');        
        }
    }else{
        alert('Lo siento, no se puede pagar en mas de 6 cuotas.');
}
