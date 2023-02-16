

let inputElement = document.querySelector("#app input")
let buttonElement = document.querySelector("#app button")
let listaElement = document.querySelector("#app ul")

let tarefas = []

function renderTarefas(){

      listaElement.innerHTML = ""

      tarefas.map((todo)=>{
            let liElement = document.createElement("li")
            let tarefaText = document.createTextNode(todo)

            let linkElement = document.createElement("a")
            linkElement.setAttribute("href", "#")

            let linkText = document.createTextNode("Excluir")
            linkElement.appendChild(linkText)

            liElement.appendChild(tarefaText)
            liElement.appendChild(linkElement)
            listaElement.appendChild(liElement)

            linkElement.onclick = deleteElement

            let posicao = tarefas.indexOf(todo)

            linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`)

      })

}

function adicionarTarefa(){
      if(inputElement.value === ""){
            alert("Digite uma tarefa!")
            return false
      }else{

            let novaTarefa = inputElement.value

            tarefas.push(novaTarefa)
            inputElement.value = ""
            renderTarefas()

      }
}

buttonElement.onclick = adicionarTarefa

function deletarTarefa(posicao){
      tarefas.splice(posicao, 1)
      renderTarefas()
}
