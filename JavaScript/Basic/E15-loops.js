// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i < 21; i++) {
    console.log(`numero ${i}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(`La suma de los números del 1 al 100 es: ${suma}`);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let myArray = ['Ruben', 'Menor', 'Mallorquin']

for (let valor of myArray) {
    console.log(valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let contador = 0;
let myString = 'Hola buenas tardes, que tal todo?';

for (let i = 0; i < myString.length; i++) {
    let char = myString[i].toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        contador++;
    }
}
console.log(`Número de vocales: ${contador}`);
    

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numberArray = [1, 2, 3, 4, 5, 6];
let producto = 1;

for (let i = 0; i < numberArray.length; i++) {
    producto *= numberArray[i];
}
console.log(`El producto de todos los números es: ${producto}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

console.log('Tabla de multiplicar del 5:');
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto

let texto = 'Hola mundo';
let invertido = '';

for (let i = texto.length - 1; i >= 0; i--) {
    invertido += texto[i];
}
console.log(`Texto invertido: ${invertido}`);



// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fib = [0, 1];
for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log('Primeros 10 números de Fibonacci:', fib);



// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numeros = [5, 12, 8, 15, 3, 20];
let mayores = [];
for (let num of numeros) {
    if (num > 10) {
        mayores.push(num);
    }
}
console.log('Números mayores a 10:', mayores);

