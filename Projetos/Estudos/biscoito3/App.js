import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";

function App(){

       const [img, setImg] = useState(require('./src/biscoito.png'))
       const [textoFrase, setTextoFrase] = useState('')

       let frases = [
              'Siga os bons e aprenda com eles',
              'O bom-senso vale mais do que muito conhecimento',
              'O riso é a menor distancia entre duas pessoas',
              'deixe de lado  as preocupações e seja feliz',
              'Realize o obvio, pense no improvavel e conquiste o impossivel',
              'Acredite em milagres, mas não dependa deles',
              'A maior barreira para o sucesso é o medo do fracasso'
       ]

       function quebrar(){
              let numeroAleatorio = Math.floor(Math.random() * frases.length)
              let fraseSorteada = frases[numeroAleatorio]
              setTextoFrase('"' + fraseSorteada + '"')
              setImg(require('./src/biscoito2.png'))
       }

       function reiniciar(){
              setImg(require('./src/biscoito.png'))
              setTextoFrase('')
       }


       return(
              <View style={styles.container}>

                     <Image style={styles.img} source={ img }/>

                     <Text style={styles.fraseTexto}> { textoFrase } </Text>
                              
                     <TouchableOpacity style={styles.botao} onPress={quebrar}>
                            <View style={styles.areaBtn}>
                                   <Text style={styles.textoBtn}>Quebrar Biscoito</Text>
                            </View>
                     </TouchableOpacity>

                     <TouchableOpacity style={[styles.botao, {borderColor: 'white'}]} onPress={reiniciar}>
                            <View style={styles.areaBtn}>
                                   <Text style={[styles.textoBtn, { color: 'white'}]}>Reiniciar Biscoito</Text>
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
              backgroundColor: 'black',
       },

       fraseTexto:{
              color: '#dd7b22',
              fontSize: 20,
              fontStyle: 'italic',
              marginBottom: 30, 
              
       },

       img:{
              width: 230,
              height: 230,
              marginBottom: 25,
       },

       botao:{
              borderWidth: 3,
              borderColor: '#dd7b22',
              marginTop: 20,
              borderRadius: 25,
              width: 200,
              height: 60,
              
              

       },

       areaBtn:{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',

       },

       textoBtn:{
              color: '#dd7b22',
              fontSize: 18,
              fontWeight: 'bold',
       },



})

export default App