var socket = io();

socket.on('connect', function () {
    console.log('conectado al servidor');
});
socket.on('disconnect', function () {
    console.log('perdimos conexion al servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function (resp) {
    console.log('Respuesta server', resp);
});

socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor:', mensaje);
});