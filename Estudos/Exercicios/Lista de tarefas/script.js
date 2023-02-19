

let listElement = document.querySelector("#app ul")
let buttonElement = document.querySelector("#app button")
let inputElement = document.querySelector("#app input")

let tarefas = JSON.parse(localStorage.getItem("@tarefas")) || []

function salvarTarefas(){

      localStorage.setItem("@tarefas", JSON.stringify(tarefas))

}

renderTarefas()

function deletarTarefas(posicao){
      tarefas.splice(posicao, 1)
      renderTarefas()
      salvarTarefas()
}


function renderTarefas(){

      listElement.innerHTML = ""
      
      tarefas.map((todo)=>{

      let posicao = tarefas.indexOf(todo)

      let liElement = document.createElement("li")
      let textLi = document.createTextNode(todo)

      let buttonDeletar = document.createElement("button")
      let deleteText = document.createTextNode("Deletar")
      buttonDeletar.setAttribute("onclick", `deletarTarefas(${posicao})`)   
      buttonDeletar.appendChild(deleteText)       

      liElement.appendChild(textLi)
      
      listElement.appendChild(liElement)
      liElement.appendChild(buttonDeletar)

      })

}

function adicionarTarefas(){
      if(inputElement.value === ""){
            alert("Digite uma tarefa!")
            return false
      }else{
            let newTarefa = inputElement.value

            tarefas.push(newTarefa)

            inputElement.value = ""

            renderTarefas()

            salvarTarefas()
      }
}

buttonElement.onclick = adicionarTarefas