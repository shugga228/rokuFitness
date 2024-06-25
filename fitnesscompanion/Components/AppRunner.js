import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { HomeScreen } from "./HomeScreen";

const Stack = createStackNavigator();

export const StartApp = () => {
    return (
        <SafeAreaProvider forceInset={{ bottom: 0 }}>
                <NavigationContainer theme={theme} >
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
    );
}
const theme = {
    dark: true,
    colors: {
        card: 'rgb(30, 30, 30)',
        text: 'white',
        primary: 'rgb(255, 255, 255)',
    },
};