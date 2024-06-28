import React, { useState, useContext } from 'react';
import { Button, Image, View, TextInput, Text } from 'react-native';
import { styles } from "./Style.js";
import { AppContext } from './AppContext';

export const SettingsScreen = () => {
    const [inputValue, setInputValue] = useState('');
    const [healthValue, setHealthValue] = useState('');
    const { setDefaultIP } = useContext(AppContext);
    const { setDefaultHealth } = useContext(AppContext);

    const handleSave = () => {
        setDefaultIP(inputValue);
    };
    const handleHealthSave = () => {
        setDefaultHealth(inputValue);
    };
    const setDemo = () => {
        setHealthValue('80kg 1.9m 400cal')
    }

    return (
        <View style={styles.container}>
            <View style={{width:'100%', alignItems: 'center'}}>
                <Text style={styles.text}>Set IP address:</Text>
                <TextInput
                    style={styles.textInput}
                    value={inputValue}
                    onChangeText={setInputValue}
                    placeholder="Enter the Roku's IP"
                />
                <Button
                    title="Save"
                    onPress={handleSave}
                    style={styles.button}
                />
            </View>
            <View style={{width:'100%', alignItems: 'center'}}>
                <Text style={styles.text}>Set HealthData:</Text>
                <Button
                    title="Demo"
                    onPress={setDemo}
                    style={styles.button}
                />
                <TextInput
                    style={styles.textInput}
                    value={healthValue}
                    onChangeText={setDemo}
                    placeholder="Enter the Roku's IP"
                />
                <Button
                    title="Save"
                    onPress={handleHealthSave}
                    style={styles.button}
                />
            </View>
        </View>
    );
}