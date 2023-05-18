import React, { Component } from "react";

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            hora: '00:00:00'
        }

    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({hora: new Date().toLocaleTimeString() })
        }, 1000)
    }

    componentDidUpdate(){
        console.log("Atualizou!")
    }

//   shouldComponentUpdate(){
//        esse composnente ele retorn a true/false, ele perguntará "vc quer que esse cara atualize?"
//    }

    render(){
        return(
            <div>
                <h1>Meu Projeto {this.state.hora}</h1>
            </div>
        )
    }
}

export default App