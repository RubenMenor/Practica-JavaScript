//STRINGS

let myName= 'Ruben';
let greeting = 'Hola, mi nombre es ' + myName + '.';

console.log(greeting);
console.log(typeof myName);

//LONGITUD
console.log('\n');

console.log('La longitud de mi nombre es: ' + myName.length);


//ACCESO A CARACTERES
console.log('\n');

console.log(greeting[0])
console.log(greeting[3])


//METODOS COMUNES
console.log('\n');

console.log(greeting.toUpperCase());  //Todo a mayusculas
console.log(greeting.toLowerCase());  //Todo a minusculas
console.log(greeting.indexOf('Ruben')); //Detalla el indice donde esta la palabra, en este caso, Ruben
console.log(greeting.includes('Ruben'));    //Para ver si la cadena de texto incluye, en este caso, Ruben
console.log(greeting.slice(2,4))   //Da los elementos que tu le pidas de la cadena del texo
console.log(greeting.replace('Ruben', 'Iberobohemio'))  //Reemplaza lo que elijas por otra palabra


//TEMPLATES LITERALS (PLANTILLAS LITERALES)
console.log('\n');

let mesagge = `Hola, este es
el curso de JavaScript
que estoy haciendo`;    //Con esas comillas podremos escribir en varias lineas

console.log(mesagge);

console.log(`Hola, ${myName}!`); //Interpolacion de variables.  De esta manera le asignamos el valor que tenia en la propia cadena String