import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import { ConnectScreen } from "./ConnectScreen";
import { SettingsScreen } from "./Settings"

const Tabs = createBottomTabNavigator();

export const HomeScreen = props => {
    return (
        <Tabs.Navigator
            screenOptions={{
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    position: "absolute"
                }
            }}
         >
            <Tabs.Screen name="Connect" component={ConnectScreen} options={{ tabBarIcon: () => <MaterialIcons name="connected-tv" size={24} color="white" />, headerShown: false} } />
            <Tabs.Screen name="Settings" component={SettingsScreen} options={{ tabBarIcon: () => <Ionicons name="settings-sharp" size={24} color="white" />, headerShown: false }} />
        </Tabs.Navigator>
    );
};