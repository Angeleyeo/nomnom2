import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login.js";
import Second from "../screens/secondpage.js";
import Tracker from "../screens/tracker.js";


const homeStack = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Second"
          component={Second}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tracker"
          component={Tracker}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default homeStack;
