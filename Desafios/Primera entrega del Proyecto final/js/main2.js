function Maquetas(id, nombre, marca, escala, precio) {
	this.id = id;
	this.nombre = nombre;
	this.marca = marca;
	this.escala = escala;
	this.precio = precio;
}

//Catálogo:
const f16f = new Maquetas(001, "F-16F", "Hasegawa", "1/32", 22000);
const f18d = new Maquetas(002, "F-18D", "Hasegawa", "1/48", 14000);
const f14a = new Maquetas(003, "F-14A", "Hasegawa", "1/72", 10000);
const me262a = new Maquetas(004, "Me262A", "Hasegawa", "1/32", 18000);

const catalogo = [f16f, f18d, f14a, me262a];
const carrito = [];
const deseados = [];

///Saludo y presentación del catalogo:
function bienvenida() {
	alert("Bienvenido a Maverick Hobby Store.\nEste es nuestro catalogo:");
	catalogo.forEach((maqueta) => {
		alert(maqueta.nombre + " " + maqueta.marca + " escala en " + maqueta.escala + " " +	maqueta.precio + " pesos.");
	});
}

function agregarCarrito(producto){
    carrito.push(producto);
    console.log('Agregado al carrito:');
    console.log(carrito);
    alert('Agregaste al carrito: \n' + producto.nombre + ' '+ producto.marca +' escala' + producto.escala + ' $'+ producto.precio +'.');
}    

//Agregar a la lista de deseados:
function listaDeDeseados(productoDeseado) {
    deseados.push(productoDeseado);
    console.log('Lista de deseados:');
    console.log(deseados);
    alert('Agregaste a tu lista de deseados: \n' + productoDeseado.nombre + ' '+ productoDeseado.marca +' escala' + productoDeseado.escala + ' $'+ productoDeseado.precio +'.');
}

function actividadTienda() {
	let accion = prompt('Indica lo que quieres hacer en la tienda:').toLowerCase();
		switch(accion) {
			case 'comprar':
				const producto= catalogo.find((maq) => maq.nombre === (prompt('Escribe la maqueta que quieres agregar al carrito (solo el nombre):').toUpperCase()));
				agregarCarrito(producto);
				alert('Tu carrito:\n' + carrito);
				break;
			case 'agregar':
				const productoDeseado= catalogo.find((maq) => maq.nombre === (prompt('Escribe la maqueta que quieres agregar a la lista de deseados (solo el nombre):').toUpperCase()));
				listaDeDeseados(productoDeseado);
				alert('Tu lista de deseados:\n' + deseados);
				break;
			case 'filtrar':
				let requisito = prompt('Precio menores a:');
				filtrar(requisito);
				break;
			case 'ver carrito':
				console.log(carrito);
				break;
			case 'ver lista deseados':
				console.log(deseados);
				break;
			default:
				if (accion === 'salir'){
					alert('Gracias por la visita!');
					break;
				}else {
					alert('Debes responder "comprar","filtrar","agregar" o "salir"');
					break;
				}
			}
	}




bienvenida();
actividadTienda();
