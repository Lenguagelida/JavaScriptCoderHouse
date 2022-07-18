const carrito = [];
const listaDeseados= [];

//Stock de maquetas
const f16 = { id: 1, nombre: 'F-16F', marca: 'Hasegawa', escala: '1/72', precio: 9000,};
const f18 = { id: 2, nombre: 'F-18D', marca: 'Hasegawa', escala: '1/48', precio: 14000,};
const f14 = { id: 3, nombre: 'F-14A', marca: 'Hasegawa', escala: '1/72', precio: 10000,};
const me262 = { id: 4, nombre: 'Me262A', marca: 'Hasegawa', escala: '1/32', precio: 18000,};

//FUNCIONES DE AGREGAR
function agregarCarrito(producto){
    //Antes de agregar al carrito verificar si hay disponibles, pero por ahora el stock es infinito.
    //Un boton en el html agregara al carrito, ese boton tendra como referencia el nombre de la maqueta.
    carrito.push(producto);
    console.log('Agregado al carrito:');
    console.log(carrito);
}

agregarCarrito(f14);
agregarCarrito(f18);
agregarCarrito(f16);
agregarCarrito(me262);

function listaDeDeseados(producto) {
    //Crea una lista con los productos deseados del usuario de la tienda.
    //Si bien hay stock infinito, si un producto se encuentra sin stock deberia notificar que no hay stock del producto.
    listaDeseados.push(producto);
    console.log('Lista de deseados:');
    console.log(listaDeseados);
}

listaDeDeseados(f16);
listaDeDeseados(me262);

//FUNCIONES DE ELIMINAR
function eliminarDelCarrito(idProducto){
    //El usuario con un boton podra eliminar un producto del carrito.
    const indice = carrito.findIndex(producto => producto.id === idProducto); 
    //console.log(indice);
    if (indice != -1) {
        carrito.splice(indice, 1);
    }
    console.log(carrito);
}

console.log('Nuevo carrito');
eliminarDelCarrito(1); //Elimina la maqueta f16d.
eliminarDelCarrito(4); //Elimina la maqueta me262.

function eliminarDeDeseados(idProducto){
    //El usuario con un boton podra eliminar un producto del carrito.
    const indice = listaDeseados.findIndex(producto => producto.id === idProducto); 
    //console.log(indice);
    if (indice != -1) {
        listaDeseados.splice(indice, 1);
    }
    console.log(listaDeseados);
}

console.log('Nueva lisa de deseados:');
eliminarDeDeseados(1); // Elimina la maqueta f16d de la lista de deseados.
