// App.js
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={console.log("Woah")}>
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 20,
    width: "70%",
    height: "33%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 60,
  },
});