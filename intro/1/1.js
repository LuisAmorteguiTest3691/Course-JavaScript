const boton = document.querySelector('.boton');
const texto = document.querySelector('#demo');

function evento() {
    var bandera = 0;
    boton.addEventListener('click', () => {
        if (bandera === 1) {
            texto.innerHTML = 'JavaScript puede cambiar el contenido del HTML';
            bandera = 0;
        } else {
            texto.innerHTML = 'Hola desde JavaScript';
            bandera = 1;
        }
    });
}

evento();