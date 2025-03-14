const bombillo = document.querySelector('.prender');
const imgbombillo = document.querySelector('.bombilla');
let bandera = 0; // Se declara la variable globalmente

// Agregar el evento directamente
bombillo.addEventListener('click', prendeApaga);

function prendeApaga() {
    if (bandera === 0) {
        imgbombillo.src = 'img/pic_bulbon.gif';

        bandera = 1
    } else {
        imgbombillo.src = 'img/pic_bulboff.gif';

        bandera = 0;
    }
}

