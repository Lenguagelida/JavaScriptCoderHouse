const objeto1 = {
    name: 'Luli', age: '8', color: 'negra'
};

console.log(objeto1.name + ' tiene '+ objeto1.age + ' años y es de color ' + objeto1.color);

objeto1.name= 'Noah';

console.log(objeto1.name + ' tiene '+ objeto1.age + ' años y es de color ' + objeto1.color);

function Animal(objetoMascota) {
    this.name = objetoMascota.name;
    this.age = objetoMascota.age;
    this.color = objetoMascota.color;
};

const Gato = {
    name: 'Michi Naranjo',
    age: 4,
    color: 'marron ananjado'
};

const animalIntruso = new Animal(Gato);
console.log(animalIntruso.name + ' tiene '+ animalIntruso.age + ' años y es de color ' + animalIntruso.color);

const animalIntruso2 = new Animal({name:'Tomy', age: 6, color: 'gris'});
console.log(animalIntruso2.name + ' tiene '+ animalIntruso2.age + ' años y es de color ' + animalIntruso2.color);
