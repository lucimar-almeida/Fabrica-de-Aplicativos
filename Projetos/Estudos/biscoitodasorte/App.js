import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"

function App(){
  const [img, setImg] = useState(require('./src/biscoito.png'))

  return(
    <View style={styles.container}>

    
      <Image source={ img }
        style={styles.img}
      />

      <View style={styles.caixaFrase}>
        <Text style={styles.frase}> " Texto do biscoito "</Text>
      </View>

      <TouchableOpacity style={styles.btn}>
        <View style={styles.btnArea}>
          <Text style={styles.btnFrase}>Quebrar o biscoito!</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, { marginTop: 20, borderColor: 'black'}]}>
        <View style={[styles.btnArea, {}]}>
          <Text style={[styles.btnFrase, {color: 'black'}]}>Quebrar o biscoito!</Text>
        </View>
      </TouchableOpacity>



    </View>
    
  )


}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img:{
    width: 230,
    height: 230,
  },

  caixaFrase:{
    margin: 20,

  },

  frase:{
    fontSize: 20,
    fontStyle: 'italic',
    color: '#dd7b22',
    marginTop: 30,
    marginBottom: 30,

  },

  btn:{
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#dd7b22',

  },

  btnArea:{
    padding: 14,
    justifyContent: 'center',
    alignItems: "center",
    
    
  },

  btnFrase:{
    fontSize: 15,
    color: '#dd7b22',
    
  },

})

export default App