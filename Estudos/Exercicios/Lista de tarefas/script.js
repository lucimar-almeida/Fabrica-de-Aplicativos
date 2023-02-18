

let listElement = document.querySelector("#app ul")
let buttonElement = document.querySelector("#app button")
let inputElement = document.querySelector("#app input")

let tarefas = []

function renderTarefas(){

      listElement.innerHTML = ""

      tarefas.map((todo)=>{

            let liElement = document.createElement("li")
            let liText = document.createTextNode(todo)

            let linkElement = document.createElement("button")

            let linktext = document.createTextNode("Excluir")
            linkElement.appendChild(linktext)
            

            liElement.appendChild(liText)
            liElement.appendChild(linkElement)
            listElement.appendChild(liElement)

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