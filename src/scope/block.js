function frutas() {
  if (true) {
    var fruta1 = "manzana"; //function scope
    let fruta2 = "limon"; //block scope
    const fruta3 = "banana"; //block scope
    console.log(fruta2);
    console.log(fruta3);
  }
  console.log(fruta1);

}

frutas();


