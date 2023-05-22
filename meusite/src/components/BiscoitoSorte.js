import React, { Component } from "react";
import '../estilo.css'

class App extends Component{

    constructor(props){
        super(props)
        this.state={
            textFrase: ''
        }

        this.frases = [
            'Siga os bons e aprenda com eles',
            'O bom-senso vale mais do que muito conhecimento',
            'O riso é a menor distancia entre duas pessoas',
            'deixe de lado  as preocupações e seja feliz',
            'Realize o obvio, pense no improvavel e conquiste o impossivel',
            'Acredite em milagres, mas não dependa deles',
            'A maior barreira para o sucesso é o medo do fracasso'
        ]

        this.quebraBiscoito = this.quebraBiscoito.bind(this)
    }

    quebraBiscoito(){
       let state = this.state
       let aleatorio  = Math.floor(Math.random() * this.frases.length)
       state.textFrase = '" ' + this.frases[aleatorio] + ' "'
       this.setState(state)

       }

    render(){
        return(
            <div className="container">
                <img className="img" src={require("./assets/biscoito.png")}/>
                <Botao nome="Quebrar Biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textFrase}</h3>
        
            </div>
        )
    }    
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        )
    }
}

export default App