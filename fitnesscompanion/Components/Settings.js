import React, { useState, useContext } from 'react';
import { Button, Image, View, TextInput, Text } from 'react-native';
import { styles } from "./Style.js";
import { AppContext } from './AppContext';

export const SettingsScreen = () => {
    const [inputValue, setInputValue] = useState('');
    const { setDefaultIP } = useContext(AppContext);

    const handleSave = () => {
        // Add your save logic here
        setDefaultIP(inputValue);
    };

    return (
        <View style={styles.container}>
            <View style={{width:'100%', alignItems: 'center'}}>
            <Text style={styles.text}>Set IP address:</Text>
            <TextInput
                style={styles.textInput}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="Enter the rokus IP"
            />
            <Button
                title="Save"
                onPress={handleSave}
                style={styles.button}
            />
            </View>
        </View>
    );
}