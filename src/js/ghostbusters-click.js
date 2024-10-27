// cargamos en documento DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // guardamos el id en una variable
    const ghostbusters_click = document.getElementById('ghostbusters-buttom-js');

    // le agregamos un evento
    ghostbusters_click.addEventListener('click', () => {

        // agregamos el codigo para que funcione el evento
        alert("¡Bienvenido al blog de los Ghostbusters! Prepárate para descubrir los misterios.");
    });

});