// https://lenguajejs.com/javascript/fundamentos/funciones/
// http://www.etnassoft.com/2016/06/22/las-funciones-flecha-en-javascript-parte-1/
// https://www.youtube.com/watch?v=MiH3pbP4EFc&ab_channel=FernandoHerrera
addEventListener("DOMContentLoaded", (e)=>{
 
    //La funcion por declaracion es de las mas utlizadas ya que esta 
    //estara declarara para poder utlizarla a lo largo del codigo
    function saludar() {
        return "Hola";
      }
      
      saludar(); //al poner en nombre de la funcion le decimos que ejecute 
       // podriamos ponerlo antes de haber creado la funcion porque 
      //sin embargo javascript leera primero las funciones sin importar el orden 
     
      typeof saludar; // 'function'

    console.log(saludar());
    

})