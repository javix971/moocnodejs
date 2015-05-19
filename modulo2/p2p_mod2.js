function agenda (titulo, inic) {
  var _titulo = titulo;
  var _contenido = inic;
  
 
  return {
    titulo: function()           	{return _titulo; },
    meter:  function(nombre, tf) 	{_contenido[nombre]=tf; },
    tf:     function(nombre)     	{return _contenido[nombre]; },
    borrar: function(nombre)     	{delete _contenido[nombre]; },
    toJSON: function()           	{return JSON.stringify(_contenido);},
    listar: function()           	{var listado="";
                  									 for (var i in _contenido) { //Bucle para recorrer el objeto
                  											listado = listado + i + ": " + _contenido[i] + "\n";
                  											//Cada iteración, concatenamos la nueva entrada de la agenda
                  											}
                  									 return listado; //devolvemos el string con la agenda Amigos//
                                   }
  };
}
var amigos = agenda ("Amigos",
             { Pepe: 113278561,
               José: 157845123,
               Jesús: 178512355
             });

console.log("EJERCICIO OBLIGAROTIO. MÓDULO 2");
console.log("===============================");
console.log(amigos.listar()); //mostramos la agenda por pantalla