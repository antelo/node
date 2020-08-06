

let getNombre = async () => {
    return 'David';
};
let getNombrePromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('David');
        }, 3000);
    });

};

let saludo = async () => {

    let nombre = await getNombrePromise();

    return `Hola ${nombre}`;
};

getNombre().then(nombre => console.log(nombre))
.catch(e => console.log('Error de ASYNC', e));

saludo().then(nombre => console.log(nombre))
.catch(e => console.log('Error de ASYNC', e));