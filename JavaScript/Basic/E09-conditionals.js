// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myNombre = 'Ruben'
if(myNombre=='Ruben'){
    console.log('Es igual')
} else {console.log('No es igual jodido mearra')}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usu='RMM'
let pas=133
if(usu=='RMM' && pas==123){
    console.log('Efectivi wondere')
} else {console.log('Usuario o contraseña incorrecta')}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero1=0

if (numero1<0){
    console.log('El numero es negativo')
} else if(numero1>0){
    console.log('El numero es positivo')
} else {console.log('El numero es 0')}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad=12
const mayoriaEdad=18

if(edad>=mayoriaEdad){
    console.log('Puedes votar')
} else {
    mediaEdad=mayoriaEdad-edad
    console.log('No puedes votar. Te quedan ' + mediaEdad + ' años')
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const vejez= edad >= 18 ? 'adulto' : 'menor';
console.log(vejez)


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes='septiembre'

if(mes==='diciembre' || mes==='enero' || mes==='febrero'){
    estacion='invierno'
} else if (mes==='marzo' || mes==='abril' || mes==='mayo'){
    estacion='primavera'
} else if (mes==='junio' || mes==='julio' || mes==='agosto'){
    estacion='verano'
} else if (mes==='septiembre' || mes==='octubre' || mes==='noviembre'){
    estacion='otoño'
} else {estacion='[ERROR]'}
console.log(`Estamos en ${estacion}`)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes==='enero' || mes==='marzo' || mes==='mayo' || mes==='julio' || mes==='agosto' || mes==='octubre' || mes==='diciembre'){
    dias=31
} else if (mes==='abril' || mes==='junio' || mes==='septiembre' || mes==='noviembre'){
    dias=30
} else if(mes==='febrero'){
    dias=28
} else{dias='[ERROR]'}
console.log('Tiene ' + `${dias}` + ' dias')

// switch



// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma='japones'

switch (idioma){
    case 'español':
        saludo='Buenos dias'
        break
    case 'ingles':
        saludo='Good morning'
        break
    case 'aleman':
        saludo='guten tag'
        break
    case 'japones':
        saludo='良い一日'
        break
    default:
        saludo='Dime un idioma valido para ver el saludo'
}
console.log(`${saludo}`)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch(mes){
    case 'diciembre':
    case 'enero':
    case 'febrero':
        estacion2='invierno'
        break
    case 'marzo':
    case 'abril':
    case 'mayo':
        estacion2='primavera'
        break
    case 'junio':
    case 'julio':
    case 'agosto':
        estacion2='verano'
        break
    case 'septiembre':
    case 'octubre':
    case 'noviembre':
        estacion2='otoño'
        break
    default:
        estacion2='[ERROR]'
} console.log(`${estacion2}`)

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch(mes){
    case 'enero':
    case 'marzo':
    case 'mayo':
    case 'julio':
    case 'agosto':
    case 'octubre':
    case 'diciembre':
        dias2=31
        break
    case 'abril':   
    case 'junio':
    case 'septiembre':
    case 'noviembre':
        dias2=30
        break
    case 'febrero':
        dias2=28
        break
    default:
        dias2='[ERROR]'
} console.log(`${dias2}`)