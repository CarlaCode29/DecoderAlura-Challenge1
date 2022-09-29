let botonEncriptar = document.querySelector(".btn-encriptar");
let botonDesencriptar = document.querySelector(".btn-desencriptar");
let botonCopiar = document.querySelector(".btn-copiar");
let cajaMunieco = document.querySelector(".caja-munieco");
let h1 = document.querySelector(".caja-h1");
let p = document.querySelector(".caja-p");
let resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar; 
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarTexto;


function encriptar(){
	ocultarAdelante();
	let area = recuperarTexto()
	resultado.textContent = mensajeEncriptado(area)	
}
function desencriptar(){
	ocultarAdelante();
	let area = recuperarTexto()
	resultado.textContent = mensajeDesencriptado(area)
		
}

function copiarTexto(){
	let contenido = document.querySelector(".texto-resultado");
	contenido.select();
	document.execCommand("copy")
	swal("El mensaje fué copiado con éxito!");
}

function recuperarTexto(){

let area = document.querySelector(".area");
return area.value;
}


function ocultarAdelante(){

cajaMunieco.classList.add("ocultar");
h1.classList.add("ocultar");
p.classList.add("ocultar");

}

function mensajeEncriptado (texto){
	var textos = "";

	for(var i = 0; i < texto.length; i++){
		if(texto[i] == "a"){
		   textos += "ai";
		}
		else if(texto[i] == "e"){
		   textos += "enter";
		}
		else if(texto[i] == "i"){
		   textos += "imes";
		}
		else if(texto[i] == "o"){
		   textos += "ober";
		}
		else if(texto[i] == "u"){
		   textos += "ufat";
		}
		else{
		   textos += texto[i];
		}
	 }
  
	 return textos.toLowerCase();
  }


function mensajeDesencriptado(texto){
	var textos = "";

   for(var i = 0; i < texto.length; i++){
      if(texto[i] == "a"){
         textos += "a";
         i = i+1;
      }
      else if(texto[i] == "e"){
         textos += "e";
         i += 4;
      }
      else if(texto[i] == "i"){
         textos += "i";
         i+= 3;
      }
      else if(texto[i] == "o"){
         textos += "o";
         i+=3;
      }
      else if(texto[i] == "u"){
         textos += "u";
         i+=3;
      }
      else{
         textos += texto[i];
      }
   }

   return textos.toLowerCase();
}



		

