// 1. Crea un array que almacene cinco animales

let myArray = ['Perro', 'Gato', 'Oso', 'Leon', 'Caballo']

// 2. Añade dos más. Uno al principio y otro al final

myArray.push('Pez')
myArray.unshift('Camaleon')

// 3. Elimina el que se encuentra en tercera posición

myArray.splice(2, 1)

// 4. Crea un set que almacene cinco libros

let mySet=new Set(['El Quijote', 'Amanecer rojo', 'Elantris', 'El ojo del mundo', 'El nombre del viento'])

// 5. Añade dos más. Uno de ellos repetido
/*
Un set no permite duplicados
*/
// 6. Elimina uno concreto a tu elección

mySet.delete('Elantris')

// 7. Crea un mapa que asocie el número del mes a su nombre

const myMap = new Map([
    [1, 'Enero'],
    [2, 'Febrero'],
    [3, 'Marzo'],
    [4, 'Abril'],
    [5, 'Mayo'],
    [6, 'Junio'],
    [7, 'Julio'],
    [8, 'Agosto'],
    [9, 'Septiembre'],
    [10, 'Octubre'],
    [11, 'Noviembre'],
    [12, 'Diciembre']
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(myMap.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let myArray2=['Junio', 'Julio', 'Agosto']
myMap.set('Verano', myArray2)
console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray3 = [1, 2, 2, 3]
let mySet2 = new Set(myArray3)

const myMap2 = new Map([
    [mySet2, myArray3]
])
console.log(myMap2)