//reasignacion y redeclaracion

var primerNombre; // se le asigna Undefined
primerNombre = "Enzo";
console.log(primerNombre);

var apellido = "Tobito"; // declarando y asignando una variable
apellido = "Saavedra"; //reasignando
console.log(apellido);

var segundoNombre = "Lola"; // declarando y asgiando
var segundoNombre = "Atenea"; //redeclarando y reasignando
console.log(segundoNombre);

let fruta = "manzana"; // declarar y asignar
fruta = "pera"; // reasignar
console.log(fruta);
// let fruta = "banana"; // redeclarando y reasignando, no es posible

const pais = "colombia"; //declaracion y asignacion
//console.log(pais);
//pais = "peru"; // no se puede reasignar una constante
// const pais = 'chile'; // no se puede redeclarar ni reasignar una variable
console.log(pais);

const vehiculos = [];
vehiculos.push('carro');
console.log(vehiculos);

vehiculos.pop();
console.log(vehiculos);