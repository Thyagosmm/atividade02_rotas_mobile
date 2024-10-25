// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ContactListScreen from "./screens/ContactListScreen";
import EditContactScreen from "./screens/EditContactScreen";
import SaveContactScreen from "./screens/SaveContactScreen";

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContactList"
          component={ContactListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditContact"
          component={EditContactScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SaveContact"
          component={SaveContactScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
