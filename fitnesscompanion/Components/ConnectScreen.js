import React, { useState, useContext } from 'react';
import {Button, Image, View, TouchableOpacity, Text} from 'react-native';
import { styles } from "./Style.js";
import { APIInit, Weight, Height, Calories } from './HealthAPI.js';
import { AppContext } from './AppContext';
import { useNavigation } from '@react-navigation/native';

export const ConnectScreen = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [buttonText, setButtonText] = useState('Connect');
    const { defaultIP } = useContext(AppContext);
    const { defaultHealth, setDefaultHealth } = useContext(AppContext);

    function sendCommand(command) {
        //Sends Roku one command e.g. connect or a letter
        var xhr = new XMLHttpRequest();
        xhr.open("POST", `http://${defaultIP}:8060/keypress/` + command, true);
        xhr.send();
    }

    function sendTextInput(text) {
        let characters = text.split('');

        // adds delay
        function sendCharacter(index) {
            if (index < characters.length) {
                let char = characters[index];
                let encodedChar = encodeURIComponent(char);
                sendCommand(`Lit_${encodedChar}`);

                setTimeout(() => {
                    sendCharacter(index + 1);
                }, 100); 
            }
        }

        // starting with index 0
        sendCharacter(0);
    }

    const handleConnect = async () => {
        //Handles button connect and sends to server information
        console.log(defaultHealth);
        sendTextInput(defaultHealth);
        setButtonText('Connected');
        APIInit()
        setDefaultHealth(Weight()+'kg '+Height()+'m '+Calories()+'cal')
    };

    return (
        <View style={styles.container}>
        <Image source={require('../assets/rokulogo.png')} style={styles.image2} />
        <TouchableOpacity
            style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
            onPress={handleConnect}
            disabled={isButtonDisabled}
        >
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
        <Image source={require('../assets/companionapp.png')} style={styles.image} />
        </View>
    );
}