

let pessoas = ["Lucimar", "José", "Priscila", "Rafael"]

pessoas.map((item, index)=>{

      console.log(`Passando por ${item} na posição ${index}`)

})

console.log("===========================")

let numeros = [5, 2, 3, 8]

let total = numeros.reduce((acumulador, numero, index, original)=>{

      console.log(`${acumulador} valor acumulado até o momento.`)
      console.log(`${numero} valor atual`)
      console.log(`${index} indice`)
      console.log(`${original} array original`)

      console.log("============================")
      
      return acumulador += numero
})

console.log("==============================")

let pessoa = ["Lucimar", "Laura", 2, "Priscila", 5, "Pedro", "Lucimar"]

let selecionarPessoa = pessoa.find((item)=>{

      return item === "Lucimar"      

})
console.log(selecionarPessoa)

console.log("======================================")

let filtroPessoa = pessoa.filter((item)=>{

    return item.length >= 5
})

console.log(filtroPessoa)