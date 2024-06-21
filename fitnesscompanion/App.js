import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

// Consider using a configuration file or environment variables for IP
const DEFAULT_IP = '10'; // Placeholder for actual configuration

const App = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Connect');

  const handleConnect = async () => {
    setButtonText('connected');

    try {
      const ip = 
        DEFAULT_IP;
      const url = `http://${ip}:8060/keypress/connect`;

      const response = await fetch(url, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to connect to device');
      }

      setIsButtonDisabled(true);
      setButtonText('connected');
    } catch (error) {
      console.error('Error connecting:', error);
      // Handle errors appropriately (e.g., display an error message)
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/rokulogo.png')} style={styles.image2} />
      <TouchableOpacity
        style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
        onPress={handleConnect}
        disabled={isButtonDisabled}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
      <Image source={require('./assets/companionapp.png')} style={styles.image} />
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
