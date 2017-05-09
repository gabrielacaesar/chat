
var formulario = document.querySelector(".formMensagem");
var formularios = document.querySelectorAll(".formMensagem");
var mensagens = document.querySelectorAll(".mensagens");







function adicionarMensagem() {

	var textarea = this.querySelector(".inputMensagem");
	var nome = this.querySelector(".inputNome");

	if (nome.value != "" && textarea.value != ""){

		var div = document.createElement("div");
		div.classList.add("mensagem");

		div.innerHTML = "<h3>"+nome.value+"</h3><p>"+textarea.value+"</p>";

		
		var mensagens = this.parentNode.querySelector(".mensagens")
		mensagens.appendChild(div);	

		textarea.value = "";
		nome.value = "";
	} 
	return false;
}

for (var i = 0; i < formularios.length; i++){
	formularios[i].onsubmit = adicionarMensagem;
}

var header = document.querySelectorAll(".accordion li header");
function abrirLinks() {
	var li = this.parentNode;
	if(li.className == "") {
		li.className = "visivel";
	}
	else {
		li.className = "";
	}
}


for (var i = 0; i < header.length; i++){
	header[i].onclick = abrirLinks;
}





