// let n= 8;
// let contador =1;
// while (contador <= n){
//     console.log(contador);
//     contador++
// }

// do {
//     console.log("hola")
    
// } while (false);

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
        
// }

// let numero = prompt("Introduzca el número:");
// if(numero > 0){
//         for( i=1;i<numero;i++){
//                 if(numero % i == 0){
//                             console.log(i);
//                     }
//             }
//     }else   {
//         console.log("no es numero primo");   
//     }


// const esprimo = function (numero){
//     let contador = 0;

//     for (let i = 1; i <= numero; i++) {
//         if (numero % i === 0) {
//             contador++;
            
            
//         }
//     }
//         if (contador > 2) {
//             return "no es un número primo";
            
//         }else if(contador == 2){
//             return "es un número primo";

//         }
//         else{
//             return "no es primo";
            
//         }
// }
// let numero = parseInt(prompt("Ingrese el numero"));
// console.log(esprimo(numero));

// Numeros primos

// for (let i = 1; i <= 40 ;i++) {
//     if (i % 1 == 0) {
//         console.log(i++);
        
//     }
    
    
// }

// let numero = 2;
// let cantidad_primos= 0;
// let contador =0;

// while(cantidad_primos <=10){
//     for (let n = 0; n < numero; n++) {
//        if (numero % n == 0) {
//         contador++;
        
//        }
        
//     }
// }
// if (contador <= 2) {
//     console.log (numero);
//     cantidad_primos++;
// }


// for (let i = 0; i < 10; i++) {
//     if (i === 4) break; 
//     console.log (`Item ${i}`);   
// }

// const numeros = [1,2,3,4,5,6,7,8,9];

// console.log(numeros);


// -------------------------------------

// destructurar objetos

const persona = {
    nombre: "Valentina",
    edad: 17,
    ciudad: "Girón",
    username: "valen",
};
const {nombre: nombre1, edad: age, ciudad: city, username = "valen"} = persona;


// let primero = persona.nombre;
// let segundo = persona.edad;
// let tercero = persona.ciudad;

console.log(nombre1, age, city, username);
// console.log(persona.nombre); 
// console.log(persona["edad"]); 