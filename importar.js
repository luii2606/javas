import { esprimo, llenado } from "./exportar.js";
let numero =parseInt(prompt("Ingrese el número a evaluar"));
let respuesta = esprimo(numero);
let solucion = llenado ();
alert(respuesta);
alert(solucion);