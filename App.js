import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 

import Welcome_One from "./screens/Welcome_One";
import Welcome_Two from "./screens/Welcome_Two";
import Welcome from "./screens/Welcome";
import LogIn from "./screens/LogIn";
import Register from "./screens/Register";
import Home from "./screens/Home";
import LostOne from "./screens/LostOne";
import Found from "./screens/Found";

const Stack = createNativeStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Welcome_One" component={Welcome_One} />
      <Stack.Screen options={{headerShown: false}} name="Welcome_Two" component={Welcome_Two} />
      <Stack.Screen options={{headerShown: false}} name="Welcome" component={Welcome} />
      <Stack.Screen options={{headerShown: false}} name="LogIn" component={LogIn} />
      <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
      <Stack.Screen options={{headerShown: true}} name="Home" component={Home} />
      <Stack.Screen options={{headerShown: false}} name="LostOne" component={LostOne} />
      <Stack.Screen options={{headerShown: false}} name="Found" component={Found} />
    </Stack.Navigator>
  </NavigationContainer>
);