import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"

function App(){

  const [img, setImg] = useState(require('./src/biscoito.png'))
  const [textoFrase, setTextofrase] = useState('')

  let frases = [
    'Siga os bons e aprenda com eles',
    'O bom-senso vale mais do que muito conhecimento',
    'O riso é a menor distancia entre duas pessoas',
    'deixe de lado  as preocupações e seja feliz',
    'Realize o obvio, pense no improvavel e conquiste o impossivel',
    'Acredite em milagres, mas não dependa deles',
    'A maior barreira para o sucesso é o medo do fracasso'
  ]

function quebraBiscoito(){
  let numeroAleatorio = Math.floor(Math.random() * frases.length)
  //let fraseSorteada = frases[numeroAleatorio]
  let fraseSorteada = (frases[numeroAleatorio])

  setTextofrase(' " ' +  fraseSorteada + ' " ')

  setImg(require('./src/biscoito2.png'))
}

function reiniciar(){
  setTextofrase('')
  setImg(require('./src/biscoito.png'))

}

  return(

    <View style={styles.container}>

      <Image style={styles.img} source={img}/>

      <Text style={styles.frase}> { textoFrase } </Text>

      <TouchableOpacity style={[styles.botao, {marginTop: 50}]} onPress={ quebraBiscoito}>
        <View style={styles.areaBtn}>
          <Text style={styles.fraseBtn}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {borderColor: 'white'}]} onPress={ reiniciar }>
        <View style={[styles.areaBtn]}>
          <Text style={[styles.fraseBtn, {color: 'white'}]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>





    </View>

  )
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },

  frase:{
    color: '#dd7b22',
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    padding: 5,
    marginTop: 30,
  },

  img:{
    width: 250,
    height: 250,

  },

  botao: {
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
    width: 200,
    height: 50,
    marginTop: 20,
  },

  areaBtn:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

  fraseBtn:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dd7b22',
  }


})


export default App