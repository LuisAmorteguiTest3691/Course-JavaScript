const boton = document.querySelector('.boton');
const parrafo = document.querySelector('.parrafo');
let bandera = 0;

boton.addEventListener('click', activar);

function activar() {
    console.log('dde')
    if (bandera === 0) {
        parrafo.classList.add('letraGrande');
        parrafo.classList.remove('letraPeque');
        bandera = 1;
    } else {
        parrafo.classList.remove('letraGrande');
        parrafo.classList.add('letraPeque');
        bandera = 0;
    }
}