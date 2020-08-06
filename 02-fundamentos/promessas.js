let empleados = [{
    id: 1,
    nombre: 'David'
}, {
    id: 2,
    nombre: 'Maria'
}, {
    id: 3,
    nombre: 'Elisa'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];


let getEmpleado = (id) => {

    return new Promise( (resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe el empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
};

let getSalario = (empleado) => {

    return new Promise( (resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontro un salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    });
};

getEmpleado(2).then(empleado => {
    console.log('El empleado de bd', empleado);
    getSalario(empleado).then(salario => console.log(`El salario de ${salario.nombre} es de ${salario.salario}`), err => console.log(err));
}, err => console.log(err));

getEmpleado(10).then(empleado => {
    return getSalario(empleado);
}).then(salario => console.log(`El salario de ${salario.nombre} es de ${salario.salario}`))
.catch(err => console.log(err));