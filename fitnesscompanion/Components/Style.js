import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    //For all screens basckgrounds
    container: {
      flex: 1,
      backgroundColor: 'rgb(15, 15, 15)',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    //For the header of the screen - not currently used
    header: {
      backgroundColor: 'rgb(30, 30, 30)',
      alignItems: 'center',
      height: 60,
      justifyContent: 'space-between',
      flexDirection: 'row',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    //For the connect button in the connect screen
    button: {
      backgroundColor: 'white',
      padding: 20,
      width: '80%',
      height: '20%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
    //When the connect button gets disabled - isn't used as of now
    buttonDisabled: {
      backgroundColor: 'grey',
    },
    //Text boxes in settings/connect screens
    buttonText: {
      color: 'black',
      fontSize: 60,
    },
    //For text - mostly used in settings screens
    text: {
      color: 'white',
      fontSize: 35,
    },
    //For connect screen logo image
    image: {
      width: '80%',
      height: '20%',
      margin: 10,
    },
    //For connect screen info image
    image2: {
      width: '100%',
      height: '15%',
      margin: 20,
      borderRadius: 20,
    },
    //For connect screen textlabel
    label: {
      fontSize: 24,
      marginBottom: 10,
      color: "white"
    },
    //For textInput used for inputting text
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
  