

let listElement = document.querySelector("#app ul")
let inputElement = document.querySelector("#app input")
let buttonElement = document.querySelector("#app button")

let tarefas = []

function renderTarefas(){

      listElement.innerHTML = ""

      let posicao = tarefas.map((todo)=>{

            let liElement = document.createElement("li")
            let liText = document.createTextNode(todo)

            let linkElement = document.createElement("a")
            linkElement.setAttribute("href", "#")
            let linkText = document.createTextNode("Excluir")
            linkElement.appendChild(linkText)
           
            liElement.appendChild(liText)
            liElement.appendChild(linkElement)
            listElement.appendChild(liElement)

            let posicao = tarefas.indexOf(todo)

            linkElement.setAttribute("onclick", `excluirTarefa(${posicao})`)

      })

}

function adicionarTarefas(){
    if(inputElement.value === ''){
      alert("Digite uma tarefa!")
      return false
    }else{

      let novaTarefa = inputElement.value

      tarefas.push(novaTarefa)

      inputElement.value = ""

      renderTarefas()


    }
      
}

buttonElement.onclick = adicionarTarefas



function excluirTarefa(posicao){
      tarefas.splice(posicao, 1)
      renderTarefas()
}