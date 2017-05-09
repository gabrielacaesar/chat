//1. função para publicar novas mensagens 

var mensagens = document.querySelector(".mensagens");
var formulario = document.querySelector("#formMensagem");

function adicionarMensagem() {

	var textarea = document.querySelector("#textareaMensagem");
//pegamos o conteúdo de dentro da id textareaMensagem
	
	var div = document.createElement("div");
//criamos uma div no html 

	div.classList.add("mensagem");
//criamos a classe mensagem dentro da div

	div.innerHTML = "<p>"+textarea.value+"</p>";
//passamos uma string para o innerHTML; 
//conteúdo de dentro da div .mensagem

	mensagens.appendChild(div);
//colocamos a div criada acima dentro da div .mensagens;

	textarea.value = "";

	return false;

}

formulario.onsubmit = adicionarMensagem;
//ao dar um subsmit do formulario, tb adicionamos uma mensagem






//2. função para xxx



