
//Captura de dados e tags

var conteudoAtividades = document.querySelector(".atividades");
var botaoAdicionaElementos = document.querySelector("#botaoAdiciona");
var textoInput = document.querySelector("#texto");
var IconeLixeira = document.querySelectorAll(".icone");
var erro = document.querySelector(".erro");

botaoAdicionaElementos.addEventListener("click", (event) => {
    
    if(textoInput.value.length == 0){  
        erro.textContent = "Insira um texto"
        return
    }else{
        erro.innerHTML = "";
        var divPrincipal = criaDivPrincipal();
        conteudoAtividades.appendChild(divPrincipal);
        textoInput.value = "";
    }

});

//Cria o elemento novo na lista

function criaDivPrincipal(){

    var div = document.createElement("div");
    div.classList.add("conteudo");
        
    //Cria o texto da atividade

    var spanAtividade = document.createElement("span");
    spanAtividade.textContent = textoInput.value;
    spanAtividade.classList.add("texto-atividade");
    
    //Cria o icone de lixeira 

    var spanIcone = document.createElement("span");
    spanIcone.classList.add("icone");
    spanIcone.innerHTML = `<img  src="lixeira-icon.png" alt="Lixeira de reciclagem">`;

    div.appendChild(spanAtividade);
    div.appendChild(spanIcone);

    return div;

};


//Apagando elementos da lista

IconeLixeira.forEach(
    () => {
        conteudoAtividades.addEventListener("click", (event) => {
                    if(event.target.tagName == "IMG"){
                        event.target.parentNode.parentNode.classList.add("desaparecer")
                        setTimeout(
                            ()=>{
                                event.target.parentNode.parentNode.remove()
                            },500)
                        
                    }         
        })
    }
)
