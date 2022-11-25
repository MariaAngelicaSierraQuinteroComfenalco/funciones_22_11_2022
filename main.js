// https://lenguajejs.com/javascript/fundamentos/funciones/
// http://www.etnassoft.com/2016/06/22/las-funciones-flecha-en-javascript-parte-1/
// https://www.youtube.com/watch?v=MiH3pbP4EFc&ab_channel=FernandoHerrera
addEventListener("DOMContentLoaded", (e) => {

// una clausura se podria definir como una funcion que encierra las variables 
//la variable es incr esta guardando lo que devuelve la funcion es uan funcion anonima y autoejecutable que tiene clausura 
//estamos creando dentro de la funcion una varible que va aumentando el valor y devolverlo 
// Clausura: Función incr()
const incr = (function () {
  let num = 0; // la declaramos en cero
  return function () {
  num++;// hace que vaya aumentando 
  return num;//retorna el valor
  };
})();

typeof incr; // 'function'
incr(); // 1
incr(); // 2
incr(); // 3

console.log(incr());
console.log(incr());
console.log(incr());
console.log(incr());
})

