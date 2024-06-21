import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from 'react-native';
var IP = 10

const App = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("");

  const handleConnect = async () => {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", `http://${IP}:8060/keypress/` + "connect", true);
    xhr.send();
    setButtonDisabled(true)
    setButtonText("connected")
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/rokulogo.png')} style={styles.image2} />
      <TouchableOpacity
        style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
        onPress={handleConnect}
        disabled={isButtonDisabled}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
      <Image source={require('../assets/images/companionapp.png')} style={styles.image} />
    </View>
  );
};

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
    width: '80%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonDisabled: {
    backgroundColor: 'grey',
  },
  buttonText: {
    color: 'black',
    fontSize: 60,
  },
  image: {
    width: '80%', // Adjust the width as per your requirement
    height: '20%', // Adjust the height as per your requirement
    margin: 10,
  },
  image2: {
    width: '60%', // Adjust the width as per your requirement
    height: '25%', // Adjust the height as per your requirement
    margin: 20,
    borderRadius: 20,
  },
});

export default App;