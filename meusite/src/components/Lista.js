import React, { Component } from "react";
import Feed from './Membro/Feed'

class App extends Component{

    constructor(props){
        super(props)
        this.state={
            feed: [
                {id: 1, username: "Lucimar", curtidas: 10, comentarios: 4},
                {id: 2, username: "Lenadro", curtidas: 15, comentarios: 23},
                {id: 3, username: "Luiz", curtidas: 8, comentarios: 10},
                {id: 4, username: "Ana", curtidas: 1, comentarios: 0}
            ]
        }
    
    }

    render(){
        return(

            <div>
                {this.state.feed.map((item) => {
                    return(
                       <Feed id={item.id} username={item.username}
                       curtidas={item.curtidas} comentarios={item.comentarios}/>
                    
                    )
                })}


            </div>
        )

    }
}

export default App
