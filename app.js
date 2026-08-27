// app.js - Práctica de Git (Tarea 2)
// Aplicación simple en Node.js usada para practicar commits, ramas y merges.

console.log('Iniciando aplicación...');

function saludar(nombre) {
    return `Hola, ${nombre}! Bienvenido a la práctica de Git.`;
}

console.log(saludar('Diego'));

function despedir(nombre) {
    return `Adios, ${nombre}. Hasta la proxima!`;
}

console.log(despedir('Diego'));

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

console.log(`3 + 5 = ${sumar(3, 5)}`);
console.log(`10 - 4 = ${restar(10, 4)}`);
