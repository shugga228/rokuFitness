import { useNavigation } from '@react-navigation/native';
import { Button, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons'; 
import { ConnectScreen } from "./ConnectScreen";
import { SettingsScreen } from "./Settings";
import { styles } from './Style';
import { LogScreen } from './LogScreen';

const Tabs = createBottomTabNavigator();

export const HomeScreen = props => {
    return (
        //Creates the tab navigator at the bottom of the screen with appropriate settings
        <Tabs.Navigator
            screenOptions={{
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    position: "absolute",
                    backgroundColor: 'black',
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
            }}
         >
            {/*The two screen in it plus their images and header*/}
            <Tabs.Screen 
                name="Connect" 
                component={ConnectScreen} 
                options={{ 
                    tabBarIcon: ({ color }) => <MaterialIcons name="connected-tv" size={24} color={color} />
                }} 
            />
            <Tabs.Screen 
                name="Settings" 
                component={SettingsScreen} 
                options={{ 
                    tabBarIcon: ({ color }) => <Ionicons name="settings-sharp" size={24} color={color} />
                }} 
            />
            <Tabs.Screen 
                name="Logs" 
                component={LogScreen} 
                options={{ 
                    tabBarIcon: ({ color }) => <Feather name="clipboard" size={24} color={color} />
                }} 
            />
        </Tabs.Navigator>
    );
};