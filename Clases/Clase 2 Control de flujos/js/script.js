const edadPersona = 17;
const dineroMano = 10000;
const entrada = 1000

if(edadPersona >= 18 && dineroMano >= entrada){
    console.log('Bienvenido a la taberna de Moe');
        if(edadPersona != 18){
            console.log('Felicidades! Sos mayor de edad pero no tenes 18 años, tenes una duff gratis');
        } else {
            console.log('Tienes 18 años, por eso te regalamos un cupon de 25% de descuento');
        }
} else {
    console.log('No podes entrar a la taberna de Moe');
}