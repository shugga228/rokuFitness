import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(15, 15, 15)',
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
    text: {
      color: 'white',
      fontSize: 35,
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
    label: {
      fontSize: 24,
      marginBottom: 10,
      color: "white"
    },
    textInput: {
      width: '85%',
      borderColor: 'white',
      borderWidth: 1,
      fontSize: 24,
      color: 'white',
      backgroundColor: 'rgb(60, 60, 60)',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
  },
  });
  