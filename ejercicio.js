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

// ciclos
// for

for (let i = 0; i < 5; i++) {
    console.log(`Iteración: ${i}`);
}

// while
let j = 0;
while (j < 5) {
    console.log(`Iteración: ${j}`);
    j++;
}
// do while
let t = 0;
do {
    console.log(`Iteración: ${t}`);
    t++;
} while (t < 5);

// for of

const frutas = ['Manzana', 'Banana', 'Cereza'];
for (const fruta of frutas) {
    console.log(fruta);
}

// for in

const sujeto = { nombre: 'Luisa', edad: 15, ciudad: 'Buacaramanga' };
for (const propiedad in sujeto) {
    console.log(`${propiedad}: ${sujeto[propiedad]}`);
}


// {
  

//   for (let u = 0; u < 10; u++) {
//     let nume = 0;
//     nume += u;
//     console.log("numero:"+nume);
//   }
   
// }

// manejo de errores
try {
    // Bloque de código que puede causar un error
    let resultado = 10 / 0;
    console.log(`El resultado es: ${resultado}`);

    // Lanzamos un error manualmente
    throw new Error('Se generó un error personalizado.');
} catch (error) {
    // Este bloque captura el error
    console.error('Ocurrió un error:', error.message);
} finally {
    // Este bloque siempre se ejecuta
    console.log('Operación finalizada.');
}

// break

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('Se encontró el número 5. Deteniendo el bucle.');
        break; // Sale del bucle aquí
    }
    console.log(`Número: ${i}`);
}

// continue

for (let p = 0; p < 10; p++) {
    if (p % 2 === 0) {
        continue; // Salta a la siguiente iteración si el número es par
    }
    console.log(`Número impar: ${p}`);
}

// destructuración
const colores = ['rojo', 'verde', 'azul'];

// Destructuración del arreglo
const [primero, segundo, tercero] = colores;

console.log(primero);  // rojo
console.log(segundo);  // verde
console.log(tercero);  // azul









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

// (function () {
//     alert("sin llamarme") ;
// })()
console.clear();

// ---arreglos

const v= [1, "letras", true, false [1, "letras"]];
 console.log(v[v.length -1]); //mostrar el ultimo
 

 // objetos

 

const people = {
    nombre: "Valentina",
    edad: 17,
    esEstudiante: true,
    saludar: function() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
};

console.log(people.nombre); // Valentina (acceder a una propiedad)
console.log(people["edad"]); // 17 (otra forma de acceder)
console.log(people.saludar()); // Hola, me llamo Valentina y tengo 17 años.

people.pais = "Colombia"; //agregar atributos al objeto
people.genero = "femenino";

people.despedida = function() {
    return `chao se despide ${this.nombre}`
}
// console.log(people.saludar()); 

// console.log(Object.keys(people).indexOf ("nombre"));

 if (Object.keys(people).indexOf ("genero") === -1) {
    console.log("el genero no fue definido");
    
}









