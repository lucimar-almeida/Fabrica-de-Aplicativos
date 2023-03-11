import { StatusBar } from 'expo-status-bar';
import react, { useState } from "react"
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [nome, setNome] = useState('Evandro')
  const [Idade, setIdade] = useState(32)

  function entrar(nome, Idade){

    setNome(nome)
    setIdade(Idade)

  }

  return (
    <View style={styles.container}>

      <Button title='mudar nome' onPress={()=> entrar("Lucimar", 35)}/>

        <Text style={{ color: 'white' }}>{nome}</Text>
        <Text style={{ color: 'white' }}>{Idade}</Text>




      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
