import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"

function App(){

  const [img, setImg] = useState(require('./src/biscoito.png'))


  return(

    <View style={styles.container}>

      <Image style={styles.img} source={img}/>

      <Text style={styles.frase}>" Minha primeira frase em React Native! "</Text>









    </View>

  )
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  frase:{
    color: '#dd7b22',
    fontSize: 17,
    fontStyle: 'italic',
    textAlign: 'center',
  },

  img:{
    width: 250,
    height: 250,

  }


})


export default App