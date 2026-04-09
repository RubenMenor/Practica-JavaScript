// 1. Concatena dos cadenas de texto

let cadena1 = 'Mis cojones morenos';
let cadena2 = ' son peludos'

console.log(cadena1 + cadena2);

// 2. Muestra la longitud de una cadena de texto

console.log(cadena1.length);

// 3. Muestra el primer y último carácter de un string

console.log(cadena1[0]);
console.log(cadena1[18]);

// 4. Convierte a mayúsculas y minúsculas un string

console.log(cadena2.toUpperCase());
console.log(cadena2.toLowerCase());

// 5. Crea una cadena de texto en varias líneas

console.log(`Mis cojones
    morenos y peludos`);

// 6. Interpola el valor de una variable en un string

console.log(`Que sepas que mis cojones${cadena2}!`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(cadena1.replace(' ', '-'));

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(cadena1.includes('cojones'));

// 9. Comprueba si dos strings son iguales

console.log(cadena1 === cadena2);

// 10. Comprueba si dos strings tienen la misma longitud

console.log(cadena1.length == cadena2.length);
