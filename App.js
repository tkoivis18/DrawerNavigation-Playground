import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import { UserScreen } from "./screens/UserScreen";
import { WelcomeScreen } from "./screens/WelcomeScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerStyle: { backgroundColor: "#5500b6" },
            headerTintColor: "white",
            draweLaber: "Welcome Screen",
            drawerActiveBackgroundColor: "#d8d3dd",
            drawerIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={18} />
            ),
          }}
        />
        <Drawer.Screen name="User" component={UserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
