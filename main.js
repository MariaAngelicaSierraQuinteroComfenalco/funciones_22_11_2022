// https://lenguajejs.com/javascript/fundamentos/funciones/
// http://www.etnassoft.com/2016/06/22/las-funciones-flecha-en-javascript-parte-1/
// https://www.youtube.com/watch?v=MiH3pbP4EFc&ab_channel=FernandoHerrera
addEventListener("DOMContentLoaded", (e) => {

    //La funcion anonima son las declaraciones de funciones sin nombre pero estando dentro de una variable
    const saludo = function () {
      return "Hola";
    };
    //Para poder ejecutar la funcion debemos utlizar el nombre de la variable ya que el
    //nombre de la funcion no lo tenfremos
    saludo; // al ponerlas sin parentesis nos devulve la funcion completa ƒ () { return 'Hola'; }
    saludo(); //pero si esta con parentesis nos muestra el retorno de la funcion 
  
    console.log(saludo);//poder visualizar en consola
    console.log(saludo());
  
  })