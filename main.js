
//Captura de dados e tags

var conteudoAtividades = document.querySelector(".atividades");
var botaoAdicionaElementos = document.querySelector("#botaoAdiciona");
var textoInput = document.querySelector("#texto");
var IconeLixeira = document.querySelectorAll(".icone");
var erro = document.querySelector(".erro");

const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach( (elemento) => {
    criaDivPrincipal(elemento)
})

botaoAdicionaElementos.addEventListener("click", function(){
       
        var itemAtual = {
            "texto": textoInput.value
        }
        
        var existe = itens.find( elemento => elemento.texto === itemAtual.texto)

        if(existe){
            itemAtual.id = existe.id
        }else{
            itemAtual.id = itens.length
            criaDivPrincipal(itemAtual);
            itens.push(itemAtual)
        }

        localStorage.setItem("itens", JSON.stringify(itens))

        textoInput.value = "";
        erro.innerHTML = "";

});

//Cria o elemento novo na lista

function criaDivPrincipal(item){

    var div = document.createElement("div");
    div.classList.add("conteudo");
        
    //Cria o texto da atividade

    var spanAtividade = document.createElement("span");
    spanAtividade.textContent = item.texto;
    spanAtividade.classList.add("texto-atividade");
    
    //Cria o icone de lixeira 



    //Adicionando na tela

    div.dataset.id = item.id
    div.appendChild(spanAtividade);
    div.appendChild(criaBotaoIcone(item.id, div));

    conteudoAtividades.appendChild(div)
};


//Apagando elementos da lista
function criaBotaoIcone(id,tag){

    var spanIcone = document.createElement("span");
    spanIcone.classList.add("icone");
    spanIcone.innerHTML = `<img  src="lixeira-icon.png" alt="Lixeira de reciclagem">`;

    var id = id;
    var tag = tag
    spanIcone.addEventListener("click", function(){
        deletarElemento(tag, id)
    })

    return spanIcone
}

function deletarElemento(tag, id){

    tag.classList.add("desaparecer")

    setTimeout( () => {
        tag.remove()
        itens.splice(itens.find( elemento => elemento.id === id),1)
        localStorage.setItem("itens" , JSON.stringify(itens))
    },500)
        
}
