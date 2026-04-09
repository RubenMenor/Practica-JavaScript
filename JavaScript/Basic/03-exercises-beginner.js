//1. Escribe un comentario en una linea (como este) 
// 2. Escribe un comentario en varias lineas

/*
Mis cojones morenos
*/

//3. Declara variables con valores asociados a todos los datos de tipo primitivo

let myName="Ruben Menor";
let age=29;
let isStudent=true;
let variableUndefined;
let variableNull=null;
let symbol=Symbol('mysymbol');
let bigNumber=1234567890123456789012345678901234567890n;

//4. Imprime los valores de las variables en la consola

console.log(myName);
console.log(age);
console.log(isStudent);
console.log(variableUndefined);
console.log(variableNull);
console.log(symbol);
console.log(bigNumber);

//5. Imprime por consola el tipo de las variables

console.log(typeof myName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof variableUndefined);
console.log(typeof variableNull);
console.log(typeof symbol);
console.log(typeof bigNumber);

//6. Modifica el valor de las variables

myName= 'Ramoncin';
age=30;

//7. Modifica los valores de las variables por otros de distinto tipo

age='Viejo pellejo';

//8. Declara constantes con valores asociados a todos los datos de tipo primitivo

const myNameConst="Ruben Menor";
const ageConst=29;
const isStudentConst=true;

//9. Cambia el valor de las constantes y observa lo que ocurre

myNameConst='Ramoncin'; // TypeError: Assignment to constant variable. No se puede cambiar el valor de una constante.

//10. Comenta las lineas que produzcan errores para que el código se ejecute sin problemas

//Hecho arriba.