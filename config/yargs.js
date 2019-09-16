const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado
    }).command('listar', 'Lista todas las tareas por hacer')
    .command('borrar', 'Borrar una de las tareas', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}