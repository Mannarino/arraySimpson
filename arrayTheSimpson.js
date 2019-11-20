
		var arrayTheSimpson = [
			 {nombre:"homero",
			  imagen:"homero.png",
			  imagenEliminado:"homeroEliminado.jpg",
			  edad:38,
			  apellido:"simpson",
			  localidad:"springfield"},
			  {nombre:"bart",
			  imagen:"bart.png",
			  imagenEliminado:"bartEliminado.png",
			  edad:11,
			  apellido:"simpson",
			  localidad:"springfield"},
			  {nombre:"magui",
			  imagen:"magui2.jpg",
			  imagenEliminado:"magieEliminada.jpg",
			  edad:1,
			  apellido:"simpson",
			  localidad:"springfield"},
			  {nombre:"lisa",
			  imagen:"lisa.jpg",
			  imagenEliminado:"lisaEliminada.jpg",
			  edad:9,
			  apellido:"simpson",
			  localidad:"springfield"},
			  {nombre:"marge",
			  imagen:"marge.png",
			  imagenEliminado:"margeEliminada.jpg",
			  edad:36,
			  apellido:"simpson",
			  localidad:"springfield"}
		  ];

		var contenedor = document.getElementById('contenedor')  
		var botonera = document.getElementById('botonera') 
		var parrafoExplicativo = document.getElementById('desaparecer') 
		var contenedorElementosEliminados = document.getElementById('elementosEliminados') 
		var titulo = document.querySelector('#desaparecer h1')
		var parrafo = document.querySelector('#desaparecer .lead')
		var elementoEliminado;
		var arrayEliminados = [];
		 var botonReconstruir = document.getElementById('reconstruir')

		  function losSimpsonBegin(){
		  	arrayTheSimpson.forEach(function(element) {
			  var imagen = document.createElement("img")
			  imagen.src="img/"+element.imagen
			  contenedor.appendChild(imagen)
			});
		  }

		  function dibujarBotonesArray(){
		  	arrayTheSimpson.forEach(function(element,index) {
			  var boton = document.createElement("a")
			  boton.className="btn btn-lg btn-primary";
			  boton.innerHTML="eliminar "+element.nombre
			  boton.setAttribute("data-index",index)
			  boton.setAttribute("id",element.nombre)
			  boton.setAttribute("onclick","eliminarElementoDelArray(this);")
			  botonera.appendChild(boton)
			});
		  }
		  function desaparecerParrafoExplicativo(){
		  	titulo.classList.add("display-none")
		  	parrafo.classList.add("display-none")
		  	parrafoExplicativo.classList.add("desaparecido")
		  }
		  function eliminarElementoDelArray(a){
		  	var index = a.getAttribute("data-index");
		  	var elementoEliminadoRecuperado = arrayTheSimpson.splice(index,1)
		  	var elementoEliminado = elementoEliminadoRecuperado[0]
		  	arrayEliminados.push(elementoEliminado)
		  	desaparecerParrafoExplicativo() 
		  	limpiarContenedores()
		  	losSimpsonBegin()
		  	dibujarBotonesArray()
		  	dibujarArrayEliminados()
		  	if (arrayEliminados.length == 5){
		  		mostrarBotonDeRestaurar()
		  	}
		  }
		  function mostrarBotonDeRestaurar(){
		  	botonReconstruir.style.display="block"
		  }
		  function limpiarContenedores(){
		  	contenedor.innerHTML=""
		  	botonera.innerHTML=""
		  }
		  function dibujarArrayEliminados(){
		  	var templateEliminados = "";
		  	arrayEliminados.forEach(function(element){
		  		var templateElemento = `<div class="card-eliminados">
			         <img src="img/${element.imagenEliminado}" class="eliminado">
			         <div class="card-body">
			            <b>Nombre</b>: ${element.nombre} <br>
			            <b>edad</b>: ${element.edad}<br>
			            <b>apellido</b> ${element.apellido}<br>
			            <b>localidad</b> ${element.localidad}<br>
			         </div>
			      </div>`;
			      
			     templateEliminados = templateEliminados + templateElemento
		  	})
		  	contenedorElementosEliminados.innerHTML = templateEliminados
		  }

		  botonReconstruir.addEventListener('click', function(){
				location.reload();
			})
		  
		  losSimpsonBegin()
		  dibujarBotonesArray()

	
		