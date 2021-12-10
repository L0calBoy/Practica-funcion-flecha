"use strict";
(function () {
    const mi_funcuion = function (a) {
        return a.toUpperCase();
    };
    const mi_funcion2 = (a) => a.toUpperCase(); // me ahorro escribir el retorno siempre que solo tenga 1 linea de codigo 
    //console.log(mi_funcuion("normal"));
    //console.log(mi_funcion2("flecha"));
    const sumarN = function (a, b) {
        return a + b;
    };
    const sumarF = (a, b) => a + b; //no ocupa return
    //console.log(`Suma normal de 1 mas 2 nos da = ${sumarN(1,2)}`);
    //console.log(`Suma de flecha de 1 mas 2 nos da = ${sumarF(1,2)}`);
    const joker = {
        nombre: "Juaquin Fenix",
        sociedad() {
            setTimeout(() => {
                // esto no pasa con la funcion flecha ella no modifica lo que apunta this!!!!!!
                console.log(`Vivimos en una sociedad donde ${this.nombre} es la victima !!!!`);
            }, 1000); //, y en cuanto tiempo quiero q se ejecute mi funcion ) //permite ejecutar un call back en cierto tiempo
        }
    };
    joker.sociedad();
})(); //dentro de promesa funcion q recibe 2 argumentos
