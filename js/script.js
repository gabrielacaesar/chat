var formulario = document.querySelector("#formMensagem");
var mensagens = document.querySelector(".mensagens");

var textarea = document.querySelector("#textareaMensagem");
var nome = document.querySelector("#nameMensagem");

function nomeVazio() {
	if (nome.value == "") {
			nome.parentNode.classList.add("errado");
			return false;
	}

	else {
			nome.parentNode.classList.remove("errado");
			return true;
	}
}

nome.onblur = nomeVazio;

function msgVazio() {
	if (textarea.value == "") {
		textarea.parentNode.classList.add("errado");
		return false;
	}

	else {
		textarea.parentNode.classList.remove("errado");
		return true;
	}
}



function adicionarMensagem() {
	if (nomeVazio() == true && msgVazio() == true){
		var textarea = document.querySelector("#textareaMensagem");
		var nome = document.querySelector("#nameMensagem");

		var div = document.createElement("div");
		div.classList.add("mensagem");

		div.innerHTML = "<h3>"+nome.value+"</h3><p>"+textarea.value+"</p>";

		mensagens.appendChild(div);

		textarea.value = "";
		nome.value = "";
	} 
	else {
		alert("Preencha os campos")
	}

	return false;

}

formulario.onsubmit = adicionarMensagem;
