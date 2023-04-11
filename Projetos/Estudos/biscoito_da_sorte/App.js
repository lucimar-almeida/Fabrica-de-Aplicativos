import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

function App(){

  const [img, setImg] = useState(require('./src/biscoito.png'))
  const [textoFrase, setTextoFrase] = useState('')

  function quebrandoBiscoito(){
    let numeroAleatorio = Math.floor(Math.random()* frases.length)
    let frase = frases[numeroAleatorio]
    setTextoFrase('" ' + frase + ' "')
    setImg(require('./src/biscoito2.png'))

  }

  function reinicioBiscoito(){
    setImg(require('./src/biscoito.png'))
    setTextoFrase('')
  }

  let frases = [
    'Siga os bons e aprenda com eles',
    'O bom-senso vale mais do que muito conhecimento',
    'O riso é a menor distancia entre duas pessoas',
    'deixe de lado  as preocupações e seja feliz',
    'Realize o obvio, pense no improvavel e conquiste o impossivel',
    'Acredite em milagres, mas não dependa deles',
    'A maior barreira para o sucesso é o medo do fracasso'
  ]

  return(
      <View style = {styles.container}>

        <View style={styles.title}>
          <Text style={styles.titleText}>Biscoito da Sorte</Text>
        </View>

        <Image source={ img }
        style = {styles.img}
        /> 

        <Text style = {styles.frase}> { textoFrase } </Text>

        <TouchableOpacity style={styles.btn} onPress={quebrandoBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, {margin: 15, borderColor: 'white'}]} onPress={reinicioBiscoito}>
          <View style={styles.btnArea}>
            <Text style={[styles.btnTexto, {color: 'white'}]}>Reiniciar biscoito</Text>
          </View>
        </TouchableOpacity>


      </View>

  )

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'

  },

  title:{
    flex: 1,
    margin: 20,
    
  },

  titleText:{
    color: 'white',
    fontSize: 40,

  },

  frase:{
    fontSize: 18,
    color: '#dd7b22',
    textAlign: 'center',
    margin: 50,
    fontStyle: 'italic'

  },

  img:{
    width: 250,
    height: 230,
  },

  btn:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#dd7b22',

  },

  btnArea:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
btnTexto:{
  fontSize: 18,
  fontWeight: 'bold',
  color: '#dd7b22',
},

  

})


export default App