//function alcancia(monedas){
  //  let guardarMonedas = 0;
  //  guardarMonedas += monedas;
  //  console.log(`Alcancia: $${guardarMonedas}`);
//}

//alcancia(200);
//alcancia(20);

function alcancia (){
    let guardarMonedas = 0;
    function contarMonedas (monedas){
        guardarMonedas += monedas;
        console.log(`alcancia $${guardarMonedas}`);
    }
    return contarMonedas;
}

const miAlcancia = alcancia();
miAlcancia(200);
miAlcancia(20);

const alcanciaLola = alcancia();
alcanciaLola(12);
alcanciaLola(100);

export function createPetList() {
    let guardarMascotas = [];
    function contarMascotas(mascotas) {
      guardarMascotas.push(mascotas);
      console.log(`lista de animales: ${guardarMascotas} `);
    }
    return contarMascotas;
  }
  
  const listaMascotas = createPetList();
  listaMascotas('perro');
  listaMascotas('gato');


  function createPetList() {
    // Tu código aquí 👈
    const petList = [];
    return function (newPet) {
      if (newPet) {
        petList.push(newPet);
      }
      return petList;
    };
  }
  const myPetList = createPetList();
  
  console.log(myPetList("michi"));
  console.log(myPetList("firulais"));
  console.log(myPetList());