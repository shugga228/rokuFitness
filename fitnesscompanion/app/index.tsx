import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
                <Image source={require('../assets/images/companionapp.png')} style={styles.image} />

        <TouchableOpacity style={styles.button} onPress={() => console.log("Woah")}>
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableOpacity>
        <Image source={require('../assets/images/companionapp.png')} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 20,
    width: "80%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 60,
  },
  image: {
    width: "80%",  // Adjust the width as per your requirement
    height: "20%", // Adjust the height as per your requirement
    margin: 10,
  },
});