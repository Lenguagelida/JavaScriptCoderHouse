const carrito= [];
const favoritos = [];

//Productos:
const maquetas =[
    {id:001, nombre: 'F-16F Fighting Falcon Block 60', marca:'Hasegawa', escala:"1/72", precio:15000, image:'./assets/cards/f16d fighting falcon.jpg'},
    {id:002, nombre: 'F-18D Hornet Night Attack', marca:'Hasegawa', escala:"1/48", precio:19000, image:'./assets/cards/f18d hornet night attack.jpg'},
    {id:003, nombre: 'F-14A Tomcat Atlantic fleet squadrons', marca:'Hasegawa', escala:"1/72", precio:20000, image:'./assets/cards/f14a tomcat Atlantic fleet squadrons.jpg'},
    {id:004, nombre: 'Messerschmitt Me262A ISS1', marca:'Hasegawa', escala:"1/32", precio:23000, image:'./assets/cards/me262a iss1.jpg'},
    
];

//Cosntruccion de cards:
let cardsMaquetas = "";
maquetas.forEach((maqueta) => {
    const IdBotonCarrito = `agregar-carrito${maqueta.id}`;
    const IdBotonFavorito = `agregar-favorito${maqueta.id}`;
    cardsMaquetas += `<div class="card col -3" style="width: 22rem;">
                        <img src="${maqueta.image}" class="card-img-top mt-1" alt="image${maqueta.id}">
                        <div class="card-body">
                            <h5 class="card-title">${maqueta.nombre}</h5>
                            <p class="card-text">${maqueta.marca}</p>
                            <p class="card-text">Escala: ${maqueta.escala}</p>
                            <p class="card-text">Precio: $${maqueta.precio}</p>
                            <div class="container d-flex justify-content-center">
                                <a  id="${IdBotonFavorito}" class="btn btn-danger">Agregar a favoritos</a>
                                <a  id="${IdBotonCarrito}" class="btn btn-primary">Agregar al carrito</a>
                            </div>
                        </div>
                    </div>`
});

document.getElementById('seccion-catalogo').innerHTML= cardsMaquetas;
//

//Agregar al carrito:
maquetas.forEach((maqueta) => {
    const IdBotonCarrito = `agregar-carrito${maqueta.id}`;
    document.getElementById(IdBotonCarrito).addEventListener('click', () => {
        carrito.push(maqueta);
        //console.log(carrito);
        document.getElementById('contador-carrito').innerHTML = carrito.length;
    });
});

//

//Agregar a favoritos:
maquetas.forEach((maqueta) => {
    const IdBotonFavorito = `agregar-favorito${maqueta.id}`;
    document.getElementById(IdBotonFavorito).addEventListener('click', () => {
        favoritos.push(maqueta);
        //console.log(favoritos);
        document.getElementById('contador-favoritos').innerHTML = favoritos.length;
    });
});

//TRABAJANDO PARA QUE LOS LINKS DEL NAV TENGAN OPCIONES DE FILTRADO (ESCALA, MARCA, ETC)



