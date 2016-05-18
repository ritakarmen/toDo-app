function obtenerMensaje(){
	var textarea = document.getElementById("mensaje");
	return textarea.value;
}
//crea div
function crearDiv(mensaje){
	var div = document.createElement("div");
	div.className="mensaje";
	div.innerHTML= "<input type='checkbox' onclick='marcarTexto(this)'><p class='texto'>"+mensaje+"</p><i id=ojito class='fa fa-trash-o' aria-hidden='true' onclick='eliminarDiv(this)'></i>";
	return div;
}
function limpiarTextarea(){
	var textarea = document.getElementById("mensajes");
	textarea.value= "";
}
//almacena div
function enviarMensaje(){
	var mensaje = obtenerMensaje();
	if(mensaje!==""){
		crearDiv(mensaje);
		clean();
	}
	var div=crearDiv(mensaje);
	var contenedor= document.getElementById("mensajes");
	contenedor.appendChild(div);
	limpiarTextarea();
}
function clean(){
	var textarea= document.getElementById("mensaje")
	textarea.value="";
	textarea.focus();
}
function marcarTexto(elemento){
	var marcado = elemento.checked;
	var textoPorMarcar=elemento.nextSibling;
	if(marcado == true){
		textoPorMarcar.className = "tachado";
	}else{
		textoPorMarcar.className="";
	}
}
function eliminarDiv(elemento){
	var div = elemento.parentElement;
	div.remove();
}

// function getInputValue(){
// 	var inputBox = document.getElementById("inputBox");
// 	return inputBox.value;
// }
// function mensaje(){
// 	var inputBoxValue = getInputValue();
// 	if (inputBoxValue !== "") {
// 		doMensaje(inputBoxValue);
// 		clean();
// 	}
// }
// function doMensaje(mensajeText){
// 	var mensajes = document.getElementById("mensajes");
// 	//Crear el elemento
// 	var elemento = document.createElement("div");
// 	elemento.clasName = "mensaje";
// 	elemento.innerHTML = '<input id="tachado" class="checked" type="checkbox" value="checkbox"  onclick="tachar()">'+mensajeText+'<button id=btn> Eliminar </button>';
// 	//Agregar elementos
// 	mensajes.appendChild(elemento);
// 	var ex = mensajes.lastChild;
// 	alert(ex.innerHTML);
// }
// function clean(){
// 	var inputBox = document.getElementById("inputBox");
// 	inputBox.value = "";
// 	inputBox.focus();
// }
// function marcarTexto(elemento){
// 	var marcado=elemento.checked;
// 	var textoPorMarcar = elemento.nextSibling;
// 	if (marcado == true) {
// 		textoPorMarcar.className="tachado";
// 	}else{
// 		textoPorMarcar.className="";
// 			}
// }
// function eliminaDiv(elemento){
// 	var div= elemento.parentElement;
// 	div.remove();
// }
// // function tachar(){
// // 	var tachado=document.getElementById("tachado").checked; //Checked: para que funcione la casilla de verificación como true o false.
// // 	if(tachado==true){
// // 		document.getElementById("mensaje").style.textDecoration="line-through";
// // 	}
// // }
// //  