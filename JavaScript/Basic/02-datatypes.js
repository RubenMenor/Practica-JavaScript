//Strings
let myName="Ruben Menor";
let alias='Iberobohemio';
//Numeros
let age= 25;    //enteros
let height= 1.75; //decimales
//Booleanos
let isStudent= true;
let isTeacher= false;

//Undefined
let address; //no se le asigna un valor, por lo que es undefined
//Null
let phoneNumber= null; //se le asigna un valor nulo, indicando que no tiene un valor válido
//Symbol
let mySymbol= Symbol('mysymbol'); //crea un símbolo único con la descripcion que le demos
//BigInt
let bigNumber= 1234567890123456789012345678901234567890n; //La n al final indica que es un BigInt


//Vale ahora vamos a ver los tipos de datos con el operador typeof

console.log(typeof myName); //string
console.log(typeof age); //number
console.log(typeof height); //number
console.log(typeof isStudent); //boolean     
console.log(typeof isTeacher); //boolean
console.log(typeof address); //undefined
console.log(typeof phoneNumber); //object (esto es un error histórico en JavaScript, null se considera un objeto)
console.log(typeof mySymbol); //symbol
console.log(typeof bigNumber); //bigint

