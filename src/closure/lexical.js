const global = 0;

function myFuncion (){
    const myNumero = 1;
    console.log(global);

    function padre() {
        //funcion interna
        const inner = 2;
        console.log(myNumero, global);
        
        function hijo() {
            console.log(inner, myNumero, global);
        }
        return hijo();
    }
    return padre ();
}

myFuncion();