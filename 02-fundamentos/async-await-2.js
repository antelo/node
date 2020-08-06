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


let getEmpleado = async (id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe el empleado con el ID ${id}`);
    } else {
        return empleadoDB;
    }
};

let getSalario = async (empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontro un salario para el empleado ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        };
    }
};


let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario ${resp.salario}`;
};

getInformacion(1).then( mensaje => console.log(mensaje)).catch(console.log);
getInformacion(2).then( mensaje => console.log(mensaje)).catch(console.log);
getInformacion(3).then( mensaje => console.log(mensaje)).catch(console.log);
getInformacion(10).then( mensaje => console.log(mensaje)).catch(console.log);
