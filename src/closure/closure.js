function saludo(){
 let nonbreUsuario = 'Enzo';
 function apodo() {
    return `Hola ${nonbreUsuario}`;
 }
 return apodo;
};

const s = saludo();
console.log(s);
console.log(s());