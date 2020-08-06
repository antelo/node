// function sumar(a, b) {
//     return a + b;
// }

let sumar = (a, b) => a + b;

console.log(sumar(10, 20));

let saludar = () => 'Hola mundo';

console.log(saludar());

let saludarNombre = nombre => `Hola ${nombre}`;

console.log(saludarNombre('David'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

console.log(deadpool.getNombre());