import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from 'react-native';

const App = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleConnect = async () => {
    setButtonDisabled(true);

    const data = {
      id: Math.floor(Math.random() * 1000), // Example dynamic data
      timestamp: new Date().toISOString(),
      message: 'Hello, server!',
    };

    try {
      const response = await fetch('https://example.com/api/connect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const contentType = response.headers.get('content-type');
      let result;

      if (contentType && contentType.indexOf('application/json') !== -1) {
        result = await response.json();
      } else {
        result = await response.text();
        throw new Error(`Unexpected response format: ${result}`);
      }

      console.log(result);
      Alert.alert('Success', 'Connection successful!');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to connect.');
      setButtonDisabled(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/rokulogo.png')} style={styles.image2} />
      <TouchableOpacity
        style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
        onPress={handleConnect}
        disabled={isButtonDisabled}
      >
        <Text style={styles.buttonText}>Connect</Text>
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