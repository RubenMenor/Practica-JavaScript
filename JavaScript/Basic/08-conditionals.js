//CONDICIONALES

//if, else, else if

let condicion1=29
let condicion2=10

if(condicion1 != 10){
    console.log('En efecto, es igual')
} else {
    console.log('No es igual jodido memo')
};


//operador ternario

const message = condicion1 == 10 ? "En efecto, es igual" : 'No es igual jodido memo'
console.log(message);


//switch

let day = 4

switch (day){
    case 0: 
        dayName='Lunes'
        break
    case 1: 
        dayName='Martes'
        break
    case 2: 
        dayName='Miercoles'
        break
    case 3: 
        dayName='Jueves'
        break
    case 4: 
        dayName='Viernes'
        break
    case 5: 
        dayName='Sabado'
        break
    case 6: 
        dayName='Domingo'
        break
    default:
        dayName='Dia erroneo'
}
console.log(dayName);