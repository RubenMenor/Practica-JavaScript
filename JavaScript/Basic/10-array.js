//ARRAYS

let myArray1_1=['Ruben',4,2, true]               //Es mejor trabajar con esta forma
let myArray1_2=[1]
let myArray2_1=new Array('Bohemio' , 3, 4, false)     //Esta forma reserva huecas, es mas tecnico a nivel de estructura de programacion, evitar usar a no ser que sea necesario
let myArray2_2=new Array(1) 

console.log(myArray1_1)
console.log(myArray1_2)
console.log(myArray2_1)
console.log(myArray2_2)

let myArray3=new Array(3)       //Da igual reservar 3 huecos, ya que puedes añadir los que quieras luego
myArray3[0]='Menor'
myArray3[1]=8
myArray3[2]=true
myArray3[3]=82993
myArray3[4]='esto no da error'
myArray3[5]='a no ser...'

console.log(myArray3)


//PUSH POP
console.log('\nPUSH & POP')

let myArray=[]

myArray.push('Ruben')           //El comando push sirve para añador elementos al Array
myArray.push('Menor')
myArray.push('Mallorquin')
myArray.push(29)
myArray.push(true)
console.log(myArray)

console.log(myArray.pop())       //El comando pop elimina el ultimo elemento añadido y lo devuelve
myArray.pop()                   
console.log(myArray)


//SHIFT UNSHIFT
console.log('SHIFT & UNSHIFT')
console.log(myArray.shift())      //El comando shift hace lo mismo que el pop, pero con el primer elemento
myArray.shift()
console.log(myArray)

myArray.unshift('Ruben', true, 30)      //UNSHIFT añade el elemento que queramos al principio del Array
console.log(myArray)


//LENGTH
//Esto sierve para ver el tamaño del Array
console.log('LENGTH: ' + myArray.length)


//CLEAR
//No hay que poner esto[[ myArray.clear() ]] pues daria error, simplemente si queremos limpiar el Array, se vuelve a inicializar
myArray=[]
console.log('CLEAR: ' + myArray)
myArray=['Ruben', 'Menor', 'Mallorquin', 29, true]

//SLICE
//Le indicamos "el pedazo(el slice)" que quiero, SIN TENER EN CUENTA LAS POSICIONES QUE PUSE

let myNewArray = myArray.slice(1, 3)
console.log('SLICE: ')
console.log(myArray)
console.log(myNewArray)

//SPLICE

myArray.splice(1, 3, 'Añado nuevo elemento')        //(Donde empiezo, cantidad a borrar, nuevo elemento añadido)
console.log('SPLICE: ' + myArray)