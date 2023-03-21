import React, { useState } from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native"

function App(){

  const [img, setImg] = useState(require('./src/biscoito.png'))

  return(
  
    <View style={styles.container}>

      <Image style={styles.img}
      source={img}
      />

      <Text style={styles.frase}>" Esta é a minha primeira frase! "</Text>

      <TouchableOpacity style={styles.button} onPress={()=> alert("test")}>
        <View style={styles.btn}>
          <Text style={styles.textBtn}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {marginTop: 20, borderColor: 'white'}]} onPress={()=> alert("test")}>
        <View style={styles.btn}>
          <Text style={[styles.textBtn, {color: 'white'}]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>
    
    
    </View>
  
)

}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },

  frase:{
    color: '#dd7b22',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 30,
    textAlign: 'center'


  },

  img: {
    width: 250,
    height: 250,
  },

  button: {
    borderColor: '#dd7b22',
    borderWidth: 3,
    width: 230,
    height: 50,
    borderRadius: 25,
  
  },

  btn: {
    color: '#dd7b22',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },

  textBtn: {
    color: '#dd7b22',
    fontSize: 18,
    fontWeight: 'bold',
  
  }


})

export default App