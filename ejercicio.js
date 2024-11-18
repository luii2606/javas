// var


var gato = "Draco"; // primera declaracion
gato = "Satanás"; // redeclaro la variable gato
console.log (gato); 

// let
let name = "Luisa";

	if(true) {
		let name = "Jonh";
		console.log(name); // Jonh
	}


console.log(name) // Luisa

//const
const deporte = "Fútbol";
console.log( "deporte:" + deporte);


console.log('Ella dijo: “Adios!”')

// strings

texto = "Hola, me llamo Luisa y tengo 15 años";
texto = "$#2*";
console.log(texto); 

//Template Strings

cadena= 'Habia una vez una iguana, \
con una ruana de lana \
peinandose la melena';
console.log(cadena); 
console.clear();

// Numbers
num=234;
num=-100;
num= 60;
console.log(num);


// booleano

const a = 'palabra';
const b = false;
const c = true;

console.log(a || b); // 'palabra'
console.log(c || a); // true
console.log(b || a); // 'palabra'

// undefined 
let x; 
console.log(x); // undefined

let obj = {};
console.log(obj.name); // undefined (la propiedad 'name' no existe

// Null
let saludo = null; // Asignación explícita de un valor nulo
console.log(saludo); // null

// NaN
let resultado = "abc" / 2; // Operación inválida
console.log(resultado); // NaN

console.log(isNaN(resultado)); // true (verifica si el valor es NaN)

// funciones declarativas

function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

console.log(saludar("Valentina"));

// funciones expresivas
const despedir = function(nombre) {
    return `Adiós, ${nombre}!`;
};

console.log(despedir("Valentina"))

// funciones constructoras
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

const valentina = new Persona("Valentina", 17);
console.log(valentina); // Persona { nombre: 'Valentina', edad: 17 }


// Arreglos (Arrays)
const dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];

console.log(dias[0]); // lunes (acceso al primer elemento)
console.log(dias[6]); // domingo (acceso al último elemento)

// objetos

const persona = {
    nombre: "Valentina",
    edad: 17,
    esEstudiante: true,
    saludar: function() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
};

console.log(persona.nombre); // Valentina (acceder a una propiedad)
console.log(persona["edad"]); // 17 (otra forma de acceder)
console.log(persona.saludar()); // Hola, me llamo Valentina y tengo 17 años.


// operadores aritmeticos
const suma = 10 + 20;
const residuo = 7 % 3;
console.log(suma); // 30
console.log(residuo); // 1

// // Operadores de Asignación
// let numero = 10;
// numero += 5; // Suma 5 al valor de numero
// console.log(numero); // 15

// Operadores de Comparación
console.log(10 === "10"); // false (estricta)
console.log(10 == "10"); // true (débil

// Operadores Lógicos
const esAdulto = true;
const tieneLicencia = false;

if (esAdulto && tieneLicencia) {
    console.log("Puede conducir");
} else {
    console.log("No puede conducir");
}
// Resultado: No puede conducir

// Operador Ternario
const edad = 20;
const mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje); // Mayor de edad

// Operador de Tipo (typeof)
console.log(typeof "Hola"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.clear();

// Tipos de condicionales

// const edad = 18;

// if (edad >= 18) {
//     console.log("Eres mayor de edad.");
// }

// let num = 12.34;
// alert( num.toFixed(1) ); 
// console.clear();

// ingresar numeros

// let entrada= prompt("Quieres ser mi novio? :3");
// console.log(entrada);
// alert(respuet); //imptimir
// let respuet= confirm("salir del porgrama?");
// console.log(respuet);


// -----------



const esprimo = function (numero){
    let contador = 0;

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contador++;
            
            
        }
    }
        if (contador > 2) {
            return "no es un número primo";
            
        }else if(contador == 2){
            return "es un número primo";

        }
        else{
            return "no es primo";
            
        }
}
let numero = parseInt(prompt("Ingrese el numero"));
console.log(esprimo(numero));
console.clear();

(function () {
    alert("sin llamarme") 
})()

