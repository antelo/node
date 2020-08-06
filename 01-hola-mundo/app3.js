console.log('Inicio del programa');

setTimeout( function (params) {

    console.log('Primer timeout');

}, 3000);

setTimeout( function (params) {

    console.log('Segundo timeout');

}, 0);

setTimeout( function (params) {

    console.log('Tercero timeout');

}, 0);

console.log('Fin del programa');