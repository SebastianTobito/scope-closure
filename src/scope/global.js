// variables
var a; //declarando
var b = "b"; // declaramos y asignamos
b = "aa"; // reasignar
var a = "ca"; // redeclaración

// global scope

var fruta = "manzana";
console.log(fruta);

function mejorFruta() {
  console.log(fruta);
}

fruta = 'limon';
mejorFruta();

function paises() {
    pais='Colombia'; //global
    let nacion = 'Ecuador'; // local
    console.log(pais);
}
paises();
console.log(pais);