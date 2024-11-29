let palabra = " 123 la culpa la 6  tiene luisa  7 culpa culpa 6 "
// let regex =/[0-9]/;
 let regex  = /^[0-9]{2,6}$/g;
// let regex =/[a-z]/g;
// let regex =/Culpa/i; {i}ignora que la busqueda sea estricta en este caso no importa si alguna es mayuscula

console.log(regex.test(palabra));
console.log(palabra.match(regex)); //  ['culpa', 'culpa', 'culpa']


