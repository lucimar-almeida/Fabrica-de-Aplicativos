/*
Crie uma lista de produtos
 1 - A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse,
 Teclado Exiba essa lista no console quando abrir o index.html.

 2 - Mostre no console quantos produtos tem nessa lista.

 3 - Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.

 4 - Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e
 caso exista esse produto na sua lista exiba um console falando que este produto existe e
 mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.


 5 - Remova o segundo item da sua lista.

Crie uma lista de apenas numeros 1,3,5,7,0,9​
 1 - Ordene essa lista do menor para o maior.
 2 - Retire o primeiro numero desta lista.
 3 - Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]

 Crie uma string que contenha o dia de hoje, exemplo: 

let hoje = '20/07/2019';

 Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes, e ano onde contenha apenas o ano.
*/

let lista = ["Computador", "Telefone", "Mouse", "Teclado"]

console.log(`Existem ${lista.length} na lista.`)

function deleteItem(){

    lista.splice(2, 1)

    renderItens()

}

function renderItens(){
    lista.map((item)=>{

        console.log(item)
        let posicao = lista.indexOf(item)
        console.log(posicao)

        

    })
}

let materiais = lista.find((materiais)=>{ return materiais.item === "Computador")
console.log(materiais)
}
renderItens()

//deleteItem()