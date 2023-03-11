import React, { Component } from "react"
import { View, Text, Image } from "react-native"

class app extends Component{

  render(){
   
    return(
      <View style={{ marginTop: 25, }}>

      <Text style={{ backgroundColor: 'blue', color:'white', padding: 10, textAlign: 'center', fontSize: 18}}>meu primeiro app!</Text>

      <Logo largura={300} altura={300} nome="Desenvolvedor: Lucimar A. da Silva" />

    </View>
    )
  }
  
}

export default app



function Logo(props){

  let img = "https://sujeitoprogramador.com/reactlogo.png"


  return(
    <View>

    <Image source={{ uri: img}} style={{width: props.largura, height: props.altura, textAlign: 'center'}} />

    <Text style={{ textAlign:"center", color: "red", backgroundColor: "gray", fontSize: 20 }}>{props.nome}</Text>

    </View>
  

  )
}
