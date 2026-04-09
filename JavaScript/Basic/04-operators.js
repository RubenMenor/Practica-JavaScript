/* Operadores aritmeticos */ console.log('Operadores aritmeticos');

let a = 10;
let b = 5;

console.log(a + b); //Suma
console.log(a - b); //Resta
console.log(a * b); //Multiplicacion
console.log(a / b); //Division

console.log(a % b); //Modulo        Es el resto de la division
console.log(a ** b); //Exponente      Es el resultado de elevar a a la potencia de b

a++; //Incremento      Incrementa el valor de a en 1
console.log(a);
a--; //Decremento      Decrementa el valor de a en 1
console.log(b);

/* Operadores de asignacion */ console.log('\nOperadores de asignacion');

let c = 2;

c += 3;
console.log(c); 
c -= 3;
console.log(c);
c *= 3;
console.log(c);
c /= 3;
console.log(c);
c %= 3;
console.log(c);
c **= 3;
console.log(c);

/* Operadores de comparacion */ console.log('\nOperadores de comparacion');

let d = 10;
let e = '10';

console.log(d == e); //Igualdad (compara el valor, no el tipo)
console.log(d === e); //Igualdad estricta (compara el valor y el tipo)
console.log(d != e); //Desigualdad
console.log(d !== e); //Desigualdad estricta
console.log(d > e); //Mayor que
console.log(d < e); //Menor que
console.log(d >= e); //Mayor o igual que
console.log(d <= e); //Menor o igual que

/* Operadores logicos */ console.log('\nOperadores logicos');

console.log(5 > 10 && 10 < 5); //AND (&&)      Devuelve true si ambas condiciones son verdaderas, devuelve false si al menos una de las condiciones es falsa.
console.log(5 > 10 || 10 < 5); //OR (||)       Devuelve true si al menos una de las condiciones es verdadera.
console.log(!(5 > 10)); //NOT (!)              Devuelve true si la condicion es falsa, devuelve false si la condicion es verdadera. 


/*
TRUTHY: Valores que se consideran verdaderos en un contexto booleano
    Todos los numeros positivos y negativos (excepto 0)
    Cadenas de texto no vacias

FALSY: Valores que se consideran falsos en un contexto booleano (ejemplo: 0, '', null, undefined, NaN, etc)
    0
    0n (BigInt)
    '' (cadena de texto vacia)
    null
    undefined
    NaN (Not a Number)
*/


/*Operadores ternarios*/ console.log('\nOperadores ternarios');

const isRaining = true;

isRaining ? console.log('Lleva un paraguas') : console.log('No necesitas un paraguas'); 
//El resultado depende de si la variable esta en true o false.
