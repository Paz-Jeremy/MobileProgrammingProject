import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/UserSettings/ProfileScreen";
import SettingsScreen from "../screens/UserSettings/SettingsScreen";
import { MaterialIcons } from "@expo/vector-icons";

//1. declarar tipado para pantallas y sus parametros
type TabsParamList = {
  Profile: undefined;
  Settings: undefined;
};

//2. crear el tabs navigator el cual se va a manejar la navegacion por pestañas
const Tab = createBottomTabNavigator<TabsParamList>();

//3. utilizar el tab navigator
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000",
      }}
    >
      <Tab.Screen
        options={{
          title: "Mi Perfil",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="person" color={color} size={size} />;
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <Tab.Screen
        options={{
          title: "Configuraciones",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="settings" color={color} size={size} />;
          },
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
