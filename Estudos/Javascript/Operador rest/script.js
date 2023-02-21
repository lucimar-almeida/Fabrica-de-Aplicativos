

function convidados(...pessoas){
      console.log("Sejam bem vindos " + pessoas)
}

convidados("Lucimar", "Priscila", "Rafael")

console.log("===========================================")

function sorteador(...numeros){

      console.log(numeros)

      const nummeroSorteado = Math.floor(Math.random() * numeros.length)

      console.log(numeros[nummeroSorteado])

}

sorteador("10", "50", "22", "30", "36", "8", "100")