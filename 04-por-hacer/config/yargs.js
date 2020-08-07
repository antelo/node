

const descripcion = {
    demand: true,
    alias: 'd',
    description: 'Descripcion de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    description: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elelemto por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};