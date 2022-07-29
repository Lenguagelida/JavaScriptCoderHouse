const carrito= [];
const deseados = [];

//Productos:
const maquetas =[
    {id:001, nombre: 'F-16F Fighting Falcon Block 60', marca:'Hasegawa', escala:"1/72", precio:15000, image:'./assets/cards/f16d fighting falcon.jpg'},
    {id:002, nombre: 'F-18D Hornet Night Attack', marca:'Hasegawa', escala:"1/72", precio:19000, image:'./assets/cards/f18d hornet night attack.jpg'},
    {id:003, nombre: 'F-14A Tomcat Night Attack', marca:'Hasegawa', escala:"1/72", precio:20000, image:'./assets/cards/f14a tomcat Atlantic fleet squadrons.jpg'},
    {id:004, nombre: 'Messerschmitt Me262A ISS1', marca:'Hasegawa', escala:"1/32", precio:23000, image:'./assets/cards/me262a iss1.jpg'},
    
]
console.log(maquetas); //Test

let cardsMaquetas = "";
maquetas.forEach((maqueta) => {
    cardsMaquetas += `<div class="card col -3" style="width: 22rem;">
                        <img src="${maqueta.image}" class="card-img-top mt-1" alt="image${maqueta.id}">
                        <div class="card-body">
                            <h5 class="card-title">${maqueta.nombre}</h5>
                            <p class="card-text">${maqueta.marca}</p>
                            <p class="card-text">Escala: ${maqueta.escala}</p>
                            <p class="card-text">Precio: $${maqueta.precio}</p>
                            <div class="container d-flex justify-content-center">
                                <a href="#" class="btn btn-danger">Agregar a deseados</a>
                                <a href="#" class="btn btn-primary">Agregar a mi carrito</a>
                            </div>
                        </div>
                    </div>`
});

let bienvenidoUsuario = prompt("Escribe tu nombre: ").toLocaleUpperCase();
document.getElementById("bienvenida").innerHTML = `<h1>Bienvenido: ${bienvenidoUsuario}</h1>`;
document.getElementById('seccion-catalogo').innerHTML= cardsMaquetas;
