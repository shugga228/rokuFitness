import React, { useState, useContext } from 'react';
import {Button, Image, View, TouchableOpacity, Text} from 'react-native';
import { styles } from "./Style.js";
import { APIInit } from './HealthAPI.js';
import { AppContext } from './AppContext';

export const ConnectScreen = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [buttonText, setButtonText] = useState('Connect');
    const { defaultIP } = useContext(AppContext);

    const handleConnect = async () => {
        var xhr = new XMLHttpRequest();
        let IP = defaultIP;
        console.log(IP);
        xhr.open("POST", `http://${IP}:8060/keypress/` + 'select', true);
        xhr.send();
        setButtonText('Connected');
        APIInit()
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