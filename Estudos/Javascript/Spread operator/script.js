

let primeiros = [1, 2, 3]

let numeros = [...primeiros, 4,5,6]

console.log(primeiros)
console.log(numeros)

console.log("===================================================")


let pessoa = {
      nome: "Lucimar",
      sobrenome: "Silva",
      idade: 35,
      trabalho: "Raízen"
}

console.log(pessoa)

let novaPessoa = {
      ...pessoa,
      cidade: "Rio Brilhante",
      rua: "Rui Alves"
}

console.log(novaPessoa)

let tudoJunto = {
      ...novaPessoa,
      ...pessoa
}


console.log(tudoJunto)

console.log("==================================================")

function novoUsuario(info){

      let dados = {
            ...info,
            cidade: "Rio Brilhante",
            status: "ATIVO",
      }

      console.log(dados)

}

novoUsuario({nome: "Lucimar", sobrenome: "Silva", idade: "35"})