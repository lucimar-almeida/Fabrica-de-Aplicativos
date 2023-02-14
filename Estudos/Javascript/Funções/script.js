alert("Olá, seja bem vindo")
let nome = prompt("Qual é o seu nome?")
console.log("ola, " + nome +"!")

document.write("<h1>Bem vindo ao nosso projeto fabrica de aplicativo " + nome + "</h1>")

document.write("<img src='https://t.ctcdn.com.br/s2JXi8cJqXFQE7SAkzV2IBz8AKw=/400x400/smart/filters:format(webp)/i490761.jpeg' alt='foto do Steve Jobs'/>")

let area = document.getElementById('area')

function entrar() {

    let name = prompt("Qual é o seu nome?")

    if(name === '' || name === null){
        alert("Ops...Algo deu errado, digite novamente seu nome!")
        entrar()
    }
    else{
        area.innerHTML = "Seja bem vindo " + name + "! "
        
        let botaoSair = document.createElement("button")
        botaoSair.innerText = "Sair da conta"
        botaoSair.onclick = sair
        area.appendChild(botaoSair)
    }

}

function sair() {

    alert("Até mais!")
    area.innerText = "Você saiu."

}

//calculando a media com funções

function mediaAluno(nota1, nota2) {
    let media = (nota1 + nota2) / 2

    if(media >= 7) {
        console.log("Aluno aprovado com a media " + media + ".")
    }else{
        console.log("Aluno reprovado com a media " + media + ".")
    }
}

function aluno(estudante, curso) {

    let mensagem = "Seja bem vindo " + estudante + " ao " + curso
    console.log(mensagem)

}