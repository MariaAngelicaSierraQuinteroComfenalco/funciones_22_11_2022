// https://lenguajejs.com/javascript/fundamentos/funciones/
// http://www.etnassoft.com/2016/06/22/las-funciones-flecha-en-javascript-parte-1/
// https://www.youtube.com/watch?v=MiH3pbP4EFc&ab_channel=FernandoHerrera
addEventListener("DOMContentLoaded", (e)=>{

    //La funcion por expresion es una de las habituales, en esta se guarda
    // una funcion dentro de una varible con esta podemos lograr menos lineas de codigo
        const saludo = function saludar() {
        return "Hola";
         };
    //Para poder ejecutar la funcion debemos utlizar el nombre de la varaible ya que el
    //nombre de la funcion no existira
        saludo(); 
        console.log(saludo());
    //a esto tambien se le conoce como funciones anonimas 
    
    })
