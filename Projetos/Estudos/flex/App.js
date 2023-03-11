import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.container1}></View>

      <View style={styles.container2}></View>

      <View style={styles.container3}></View>

      





      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 23,
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'black',

  },

  container1: {
    width: 50,
    height: 50,
    backgroundColor: "yellow",

  },

  container2: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },

  container3: {
    width: 50,
    height: 50,
    backgroundColor: "green",

  }

});
