 function agenda (titulo, inic) {
  var _titulo = titulo;
  var _contenido = inic;
 
  return {
    titulo: function()                    { return _titulo; },
    meter:  function(nombre, tf) { _contenido[nombre]=tf; },
    tf:     function(nombre)         { return _contenido[nombre]; },
    borrar: function(nombre)     { delete _contenido[nombre]; },
    toJSON: function()              { return JSON.stringify(_contenido);},
   
    //AÑADIDO
    listar: function() {  
                          var _impresion=""
                          for(nombre in _contenido){
                            _impresion+=(nombre)+", "
                            _impresion+=(_contenido[nombre])+ " \n"
                          }
                          console.log(_impresion)
                        }
  }
}

var amigos = agenda ("Amigos",
             { Pepe: 113278561,
               José: 157845123,
               Jesús: 178512355
             });


//AÑADIDO
amigos.listar()
