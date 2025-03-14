const bombillo = document.querySelector('.prender');
const imgbombillo = document.querySelector('.bombilla');

function prender() {
    console.log('Hola');
    bandera = 0;
    bombillo.addEventListener('click', prendeApaga);
}

function prendeApaga() {
    if (bandera === 0) {
        imgbombillo.src = 'img/pic_bulbon.gif';

        bandera = 1
    } else {
        imgbombillo.src = 'img/pic_bulboff.gif';

        bandera = 0;
    }
}

prender();