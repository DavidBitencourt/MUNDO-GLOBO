import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterUser from "./pages/RegisterUser";
import RegisterPassword from "./pages/RegisterUser/RegisterPassword";
import SelectServicesBack from "./pages/SelectServicesBack";
import UploadImageUser from "./pages/UploadImageUser";
const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="RegisterUser" component={RegisterUser} />
        <AppStack.Screen name="RegisterPassword" component={RegisterPassword} />
        <AppStack.Screen name="UploadImageUser" component={UploadImageUser} />
        <AppStack.Screen
          name="SelectServicesBack"
          component={SelectServicesBack}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
