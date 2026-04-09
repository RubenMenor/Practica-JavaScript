/* var:
En JavaScript, existen tres formas de declarar variables: var, let y const. Cada una tiene sus propias características y usos.    
var es la forma más antigua de declarar variables en JavaScript. Las variables declaradas con var tienen un alcance global o de función, 
lo que significa que pueden ser accedidas desde cualquier parte del código, incluso antes de su declaración debido al hoisting.
Sin embargo, el uso de var puede llevar a problemas de mantenimiento y errores debido a su alcance amplio y comportamiento de hoisting.
*/

var helloWorld = "¡Hola, JavaScript!"
console.log(helloWorld)

helloWorld = "¡Hola de nuevo, JavaScript!"
console.log(helloWorld)

/* let 
let es una forma más moderna de declarar variables en JavaScript. Las variables declaradas con let tienen un alcance de bloque,
lo que significa que solo pueden ser accedidas dentro del bloque en el que fueron declaradas. Esto ayuda a evitar
problemas de mantenimiento y errores relacionados con el alcance de las variables.
*/

let helloWorld2 = "¡Hola, JavaScript 2!"
console.log(helloWorld2)

helloWorld2 = "¡Hola de nuevo, JavaScript 2!"
console.log(helloWorld2)

/* const 
const es otra forma de declarar variables en JavaScript. 
Las variables declaradas con const también tienen un alcance de bloque, 
pero a diferencia de let, las variables declaradas con const no pueden ser reasignadas después de su declaración. 
Esto significa que una vez que se asigna un valor a una variable const, no se puede cambiar. 
Sin embargo, si el valor es un objeto o un array, 
pueden modificarse sus propiedades o elementos, pero no se puede reasignar la variable a un nuevo objeto o array.
*/

const helloWorld3 = "¡Hola, JavaScript 3!"
console.log(helloWorld3)

// Error
// helloWorld3 = "¡Hola de nuevo, JavaScript 2!"
// console.log(helloWorld3)


//-----RESUMEN-----//
// var: alcance global o de función, puede ser reasignada, hoisting.
// let: alcance de bloque, puede ser reasignada, no hay hoisting.
// const: alcance de bloque, no puede ser reasignada, no hay hoisting.