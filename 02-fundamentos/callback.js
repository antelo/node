setTimeout(() => {
    console.log('Hola mundo');
}, 300);

let getUsusarioById = (id, callback) => {
    let usuario = {
        nombre: 'David',
        id
    };

    if (id === 20) {
        callback(`El usuario con id ${id} no existe`);
    } else {
        callback(null, usuario);
    }

};

getUsusarioById(10, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});