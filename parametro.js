// function suma(a,b, ...c) {
//    console.log(typeof a);
//    console.log(typeof b);
//    let resultado = 0;
//    for (let i = 0; i < c.length; i++) {
//     if(typeof (c[i]) === "number") resultado
    
//    }
//     return a + b+ c;
   
    
// }
// let resultado = suma( "dos",2,9,21,1,5,"cuatro",8);
// console.log(resultado);

// const arraya =[1,2,3];
// const arrayb =["a","b","c"];

// // mostrar los dos arreglos
// // const arrayc = arraya + arrayb;
// // const arrayc = arraya.concat(arrayb);
// const arrayc = [...arraya, ...arrayb];
// console.log(arrayc);


class Persona{
    constructor(nombrea, apellidoa , edada){
        this.nombre =nombrea;
        this.apellido = apellidoa;
        this.edad= edada;

    }
    // Método
    comer(){
        console.log(`${this.nombre} esta comiendo empanada`);
    }
}
const luisa = new Persona("luisa","ramos", 15);
const camilo = new Persona("camilo","ramos", 16);
console.log(luisa);
console.log(camilo);
luisa.comer();
camilo.comer();