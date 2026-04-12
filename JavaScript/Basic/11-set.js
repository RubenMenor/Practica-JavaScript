//SETS

//Declaracion
let mySet=new Set()     

//Inicializacion
mySet=new Set(['Ruben', 'Menor', 'Mallorquin', 29, true])

console.log(mySet)


//--Metodos comunes--//

//Add y delete

mySet.add("menorruben")     //este add añade al final del Set
console.log(mySet)

mySet.delete("menorruben")     //elimina el elemento que elijas, pero se lo tienes que pasar tal cual, no vale con indices concretos
console.log(mySet)
console.log(mySet.delete('Ruben'))      //tambien retorna un boolean para confirmacion del comando, si lo haces directamente en el console.log


//has
//retorna un boolean para comprobar si lo buscado se encuentra en el Set
console.log(mySet.has('Menor'))
console.log(mySet.has('Ruben'))

//size
//manera de llamar al lenght
console.log(mySet.size)


//convertir Set en Array
let myArray = Array.from(mySet)
console.log(myArray)

//concertir un Array en Set
mySet = new Set(myArray)
console.log(mySet)



/* 

Principal diferencia entre Array y Set:
    EL ARRAY PERMITE DUPLICADOS, EL SET NO PERMITE DUPLICADOS(casesensitive)

*/