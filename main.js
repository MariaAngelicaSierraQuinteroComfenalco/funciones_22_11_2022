// https://lenguajejs.com/javascript/fundamentos/funciones/
// http://www.etnassoft.com/2016/06/22/las-funciones-flecha-en-javascript-parte-1/
// https://www.youtube.com/watch?v=MiH3pbP4EFc&ab_channel=FernandoHerrera
addEventListener("DOMContentLoaded", (e)=>{
 
    //La funcion como objeto no estan utlizada pero es interesante
    //Esta utilizamos la creacion de un objeto y la funcion juntas 
    const saludar = new Function("return 'Hola';");
    //el nombre a utlizar seria el de la variable 
    saludar(); // 'Hola'
    console.log(saludar());

})