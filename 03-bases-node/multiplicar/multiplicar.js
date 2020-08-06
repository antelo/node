
// requireds
const fs = require('fs');
const colors = require('colors');

listarTabla = (base, limite= 10) => {

    console.log('================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('================='.green);
    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base * index}`);
    }
}

crearArchivo = (base, limite= 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
          if (err) reject(err);
          resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = { crearArchivo, listarTabla };