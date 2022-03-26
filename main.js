
var conteudoAtividades = document.querySelector(".atividades");
var botaoAdiciona = document.querySelector("#botaoAdiciona");
var textoInput = document.querySelector("#texto");
var IconeLixeira = document.querySelectorAll(".icone");
var erro = document.querySelector(".erro");

botaoAdiciona.addEventListener("click", (event) => {
    
    if(textoInput.value.length == 0){  
        erro.textContent = "Insira um texto"

        return
    }else{
        erro.innerHTML = ""

        var divPrincipal = document.createElement("div");
        divPrincipal.classList.add("conteudo");
        
        var spanAtividade = document.createElement("span");
        spanAtividade.textContent = textoInput.value;
        spanAtividade.classList.add("texto-atividade");
    
        var spanIcone = document.createElement("span")
        spanIcone.classList.add("icone");
        spanIcone.innerHTML = `<img  src="lixeira-icon.png" alt="Lixeira de reciclagem">`;
        
    
        divPrincipal.appendChild(spanAtividade);
        divPrincipal.appendChild(spanIcone);
        conteudoAtividades.appendChild(divPrincipal);

        textoInput.value = ""
    }

});

IconeLixeira.forEach(
    () => {
        conteudoAtividades.addEventListener("click", (event) => {
            event.target.parentNode.parentNode.remove()
        })
    }
)

/*for(var i = 0; i < IconeLixeira.length; i++){
    IconeLixeira[i].addEventListener("click", 
        (event) => {
            event.target.parentNode.parentNode.remove()
        }
    )
}*/