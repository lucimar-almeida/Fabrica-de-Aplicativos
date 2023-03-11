import React, { useState, useStates } from "react"
import { TextInput, StyleSheet, Text, View, Button} from "react-native"

function app(){

  const [nome, setNome] = useState('')
  const [input, setInput] = useState('')
    
  function entrar(){

    if(input === ''){
      alert('Digite seu nome!')
      return
    }

    setNome('Bem vindo: ' + input)
  }


  return(
    <View style={Styles.container}>

      <TextInput
        style={Styles.input}
        placeholder= "Digite seu nome:"
        onChangeText = { (texto)=> setInput(texto) }
      />

      <Button style={Styles.Button} title="Salvar" onPress={ entrar }/>

      <Text style={Styles.text}>{ nome }</Text>

    </View>


  )

}

const Styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
    backgroundColor: "white",
    
  },

  input:{
    margin: 10,
    padding:10,
    borderWidth: 1,
    fontSize: 20,
    borderRadius: 6,


  },

  text:{
    fontSize: 30,
    textAlign: "center",
    color: 'red',
    marginTop: 25,

  },

  Button:{
    backgroundColor: 'green'
  }

})


export default app