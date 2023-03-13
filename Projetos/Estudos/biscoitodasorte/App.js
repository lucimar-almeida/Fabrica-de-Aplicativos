import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet} from "react-native"

function App(){

  const [ img, setImg] = useState(require('./src/biscoito'))

  return(
    <View style={styles.container} >

      <Image
      src={ img }
      />

      <TouchableOpacity>
        <View>
          <Text></Text>
        </View>

      </TouchableOpacity>









    </View>


  )



}

const styles = StyleSheet.create({

  container:{



  }



})

export default App