import React, { useState } from "react";
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from "react-native";

function App(){

  const [img, setImg] = useState(require('./src/biscoito.png'))

  return(

    <View style={Styles.container}>

      <Image
        source={img}
        style={Styles.img}
      />

      <Text style={Styles.textofrase}>"Essa é minha primeira frase para o biscoito!"</Text>

      <TouchableOpacity style={Styles.botao} onPress={ ()=> alert('Teste!')}>
        <View style={Styles.btnArea}>
        <Text style={Styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[Styles.botao, {margin: 15, borderColor: 'black'}]} onPress={ ()=> alert('Teste!')}>
        <View style={Styles.btnArea}>
        <Text style={[Styles.btnTexto, {color: 'black'}]}>Restaurar biscoito</Text>
        </View>
      </TouchableOpacity>


    </View> 

  )
};

const Styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  img:{
    width:230,
    height: 230,

  },

  textofrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    textAlign: 'center',
    fontStyle: 'italic',

  },

  botao:{
    width: 230,
    height: 50,
    borderWidth: 4,
    borderRadius: 25,
    borderColor: '#dd7b22'

  },

  btnArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'    

  }



})

export default App;
