//LOOPS BUCLES

//for
for(let i = 0; i < 5; i++) {
    console.log('Hola')
}

for(let i = 0; i < 5; i++) {
console.log(`Hola ${i}`)
}


const numbers = [1,2,3,4,5,7,8,9]

for(let i = 0; i < numbers.length; i++) {
console.log(`Elemento ${numbers[i]}`)
}


//while

i = 0
while (i < 5) {
    console.log(`Halo ${i}`)
    i++
}


//do while

i = 0
do {
    console.log(`Hello ${i}`)
    i++
} while (i < 5)


//for of

myArray = [1, 2, 3, 4]

mySet = new Set (['Ruben', 'Menor', 'Iberobohemio', 29, true, 'menorruben@gmail.com'])

myMap = new Map ([
    ['name', 'Ruben'],
    ['email', 'menorruben@gmail.com'],
    ['age', 29]
])

myString = '¡Hola, JavaScript!'

for (let valor of myArray) {
    console.log(valor)
}
for (let valor of mySet) {
    console.log(valor)
}
for (let valor of myMap) {
    console.log(valor)
}
for (let valor of myString) {
    console.log(valor)
}


//Buenas practicas
/*
Break and continue

for (let i = 0; i < 10; i++) {
    if( i == 5 ) {
        continue
    }else if (i == 8) {
            break
            }
        console.log(`Hola ${i}`)
    }
*/

