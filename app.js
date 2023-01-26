function guardarLocalStorage() {

    let persona = {
        nombre: 'David',
        edad: 21,
        correo: 'david1138h@gmail.com',
        coords: {
            lat: 10,
            lng: -10
        }
    };

    let nombre = 'Heiver';

    localStorage.setItem('miNombre', nombre)
    localStorage.setItem('miPersona', JSON.stringify(persona));
};

// guardarLocalStorage();

function obtenerLocalStorage() {

    let miNombre = localStorage.getItem('miNombre');
    let miPersona = JSON.parse(localStorage.getItem('miPersona'));

    console.log(miNombre);
    console.log(miPersona);
};

// obtenerLocalStorage();

