
const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'david',
        url: req.url
    };
    res.write(JSON.stringify(salida));
    // res.write('Hola mundo');
    res.end();

})
.listen(423);

console.log('Escuchando puerto 423');