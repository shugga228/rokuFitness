import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { HomeScreen } from "./HomeScreen";
import { AppProvider } from './AppContext';
import { LogScreen } from "./LogScreen";

const Stack = createStackNavigator();

export const StartApp = () => {
    return (
        <AppProvider>
             <SafeAreaProvider forceInset={{ bottom: 0 }}>
                <NavigationContainer theme={theme} >
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Logs"
                            component={LogScreen}
                            options={{ headerShown: false, presentation: 'modal' }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </AppProvider>
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