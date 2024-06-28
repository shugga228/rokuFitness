import { useNavigation } from '@react-navigation/native';
import { Button, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import { ConnectScreen } from "./ConnectScreen";
import { SettingsScreen } from "./Settings";
import { styles } from './Style';

const Tabs = createBottomTabNavigator();

export const HomeScreen = props => {
    return (
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
            <Tabs.Screen 
                name="Connect" 
                component={ConnectScreen} 
                options={{ 
                    tabBarIcon: ({ color }) => <MaterialIcons name="connected-tv" size={24} color={color} />, 
                    header: () => <Header/>
                }} 
            />
            <Tabs.Screen 
                name="Settings" 
                component={SettingsScreen} 
                options={{ 
                    tabBarIcon: ({ color }) => <Ionicons name="settings-sharp" size={24} color={color} />, 
                    header: () => <Header/>
                }} 
            />
        </Tabs.Navigator>
    );
};

const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'black',
            height: 100,
            justifyContent: 'bottom',
            alignItems: 'left',
        }}>
            <View style={styles.header}>
                <Button 
                    style={styles.button} 
                    title='Logs' 
                    color={'white'} 
                    onPress={() => navigation.navigate('Logs')}
                />
            </View>
        </View>
    );
};