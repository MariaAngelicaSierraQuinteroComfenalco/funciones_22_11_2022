// https://lenguajejs.com/javascript/fundamentos/funciones/
// http://www.etnassoft.com/2016/06/22/las-funciones-flecha-en-javascript-parte-1/
// https://www.youtube.com/watch?v=MiH3pbP4EFc&ab_channel=FernandoHerrera
addEventListener("DOMContentLoaded", (e) => {

    //La funcion autoejecutables son funciones anonimas que se ejecutan mediante la marcha del codigo
//lo unico que necesitamos es envolver la funcion anonima entre parentesis 

// Función autoejecutable
(function () {
  console.log("Hola!!");
})();


// Función autoejecutable con parámetros
(function (name) {
  console.log(`¡Hola, ${name}!`);
})("Manz");
//no es necesario poner nombre a la funcion ya que es anonima 

//al hacer un return lo que almacena la variable es el valor de la funcion 
const f = (function (name) {
  return `¡Hola, ${name}!`;
})("Manz");

f; // '¡Hola, Manz!`
typeof f; // 'string'


})

