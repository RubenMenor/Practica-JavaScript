//MAP

//Declaracion

let myMap = new Map()

console.log(myMap)

//Inicializacion

myMap = new Map([
    ['nombre', 'Ruben'],
    ['apellido', 'Menor'],
    ['email', 'menorruben'],
    ['edad', 29]
])
console.log(myMap)


//--Metodos y propiedades--//
//set

myMap.set('alias', 'bohemio')       //asi se añade un nuevo 'clave-valor'
myMap.set('nombre', 'bohemitus')        //asi cambia el valor nombre que habiamos puesto anteriormente
console.log(myMap)

//get
console.log(myMap.get('nombre'))        //El get retorna el valor que esta almacenado en la clave

//has
console.log(myMap.has('edad'))      //el has nos dice si la clave que damos esta en el Map

//keys, values & entries
console.log(myMap.keys())       //Retorna un listado con solo las claves
console.log(myMap.values())     //Retorna un listado con solo los valores
console.log(myMap.entries())    //Retorna todo el listado

//delete
myMap.delete('email')       //Eliminamos la clave y su valor que digamos (no se puede eliminar un valor sin eliminar su clave)
console.log(myMap)

//clear
myMap.clear()       //Dejamos vacio el Map
console.log(myMap)