// 1. Crea una variable para cada operación aritmética

let a=2;
let b=3;
let c=5;

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b;
let exponente = a ** b;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

suma += 2;
resta -= 2;
multiplicacion *= 2;
division /= 2;
modulo %= 2;
exponente **= 2;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log('Comparaciones verdaderas:');

console.log(5<=5);
console.log(5>=5);
console.log(5==5);
console.log(5===5);
console.log(5!=6);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación       
console.log('\nComparaciones falsas:');

console.log(5<5);
console.log(5>5);
console.log(5!=5);
console.log(5!==5);
console.log(5==='5');


// 5. Utiliza el operador lógico and
console.log('\nOperador lógico AND:');

console.log(5>3 && 2<4);

// 6. Utiliza el operador lógico or
console.log('\nOperador lógico OR:');

console.log(5>3 || 2>4);

// 7. Combina ambos operadores lógicos
console.log('\nCombinación de operadores lógicos:');

console.log((5>3 && 2<4) || (5<3 && 2>4));

// 8. Añade alguna negación
console.log('\nNegación de una comparación:');

console.log(!(5<3));

// 9. Utiliza el operador ternario
console.log('\nOperador ternario:');

let motorEncendido = true;
console.log(motorEncendido ? 'El motor está encendido' : 'El motor está apagado');

let perroLadra = false;
console.log(perroLadra ? 'El perro está ladrando' : 'El perro no está ladrando');

// 10. Combina operadores aritméticos, de comparación y lógicas
console.log('\nCombinación de operadores:');

let resultado = (a + b) > c && (a * b) < (c ** 2);
console.log(resultado);