import React, { Component } from "react";

class App extends Component{

    constructor(props){
        super(props)
        this.state={
            status: false

        }

        this.entrar = this.entrar.bind(this)
        this.sair = this.sair.bind(this)
    }

    entrar(){
        this.setState({status: true})
    }

    sair(){
        this.setState({status: false})
    }

    render(){
        return(
            <div>                    
                {this.state.status ?
                    <div>
                        <h2>Bem vindo ao sistema</h2>
                        <button onClick={this.sair}>Sair do sistema</button>                        
                    </div> :
                    <div>
                        <h2>Faça o Login!</h2>
                        <button onClick={this.entrar}>Entar no sistema</button>
                    </div>
                
            
                }

            </div>
            
        )
    
    }
}

export default App