import React, { useState, useContext } from 'react';
import { Button, Image, View, TextInput, Text } from 'react-native';
import { styles } from "./Style.js";
import { Weight, Height, Calories } from './HealthAPI.js';

//Thing doesn't work as of right now but should demonstrate API values
export const LogScreen = () => {
    return (
        //List of all Health function values
        <View style={styles.container}>
            <Text style={styles.text}>Logs</Text>
            <Text style={styles.text}>Calories: {Calories()}</Text>
            <Text style={styles.text}>Height: {Height()}</Text>
            <Text style={styles.text}>Weight: {Weight()}</Text>
        </View>
    );
}