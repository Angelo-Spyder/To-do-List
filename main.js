
var conteudoAtividades = document.querySelector(".atividades");
var botaoAdiciona = document.querySelector("#botaoAdiciona");
var textoInput = document.querySelector("#texto");

botaoAdiciona.addEventListener("click", () => {
    var divPrincipal = document.createElement("div");
    divPrincipal.classList.add("conteudo");
    
    var spanAtividade = document.createElement("span");
    spanAtividade.textContent = textoInput.value;
    spanAtividade.classList.add("texto-atividade");

    var spanIcone = document.createElement("span")
    spanIcone.innerHTML = `<img  src="lixeira-icon.png" alt="Lixeira de reciclagem">`;
    spanIcone.classList.add("icone")

    divPrincipal.appendChild(spanAtividade);
    divPrincipal.appendChild(spanIcone)
    conteudoAtividades.appendChild(divPrincipal)

});