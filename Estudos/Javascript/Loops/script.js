// while = enquanto

let x = 0

while(x < 10){

document.write("<br> O valor do X é: " + x)

x++

}


// for = para

let valor = 20

for(i = 0; i < valor; i++){

    document.write("<br> O valor do A é igual: " + i)

}

// switch 

function pedir(){

    let valor = prompt("Digite um valor de 1 a 4: ")

    switch(Number(valor)){
        case 1:
            alert("Você escolheu suco!")
            break;
        case 2:
            alert("Você escolheu agua gelada!")
            break;
        case 3:
            alert("Você escolheu sorvete!")
            break;
        case 4:
            alert("Você chamou o garçom!")
            break;
        default:
            alert("Escolha uma opção entre 1 a 4!")
            break;
    }



}