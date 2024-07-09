import React, { useState, useContext } from 'react';
import { Button, Image, View, TextInput, Text } from 'react-native';
import { styles } from "./Style.js";
import { AppContext } from './AppContext';

export const SettingsScreen = () => {
    //Intialize vairables for ip/health values
    const [inputValue, setInputValue] = useState('');
    const [healthValue, setHealthValue] = useState('');
    //Loads in global variables to set them
    const { setDefaultIP } = useContext(AppContext);
    const { setDefaultHealth } = useContext(AppContext);

    //For IP setting
    const handleSave = () => {
        setDefaultIP(inputValue);
    };
    //For Health setting to be saved
    const handleHealthSave = () => {
        setDefaultHealth(healthValue);
    };
    //Show users the format
    const setDemo = () => {
        setHealthValue('80kg 1.9m 400cal')
    }

    return (
        <View style={styles.container}>
            {/*The IP setting*/}
            <View style={{width:'100%', alignItems: 'center'}}>
                {/*Title*/}
                <Text style={styles.text}>Set IP address:</Text>
                {/*Text input hooked toip variable*/}
                <TextInput
                    style={styles.textInput}
                    value={inputValue}
                    onChangeText={setInputValue}
                    placeholder="Enter the Roku's IP"
                />
                {/*Saves all text changes*/}
                <Button
                    title="Save"
                    onPress={handleSave}
                    style={styles.button}
                />
            </View>
            {/*Same thing but with demo and for health data*/}
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