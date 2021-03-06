import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login.js";
import Main from "../screens/Main.js";
import Tracker from "../screens/Tracker.js";
import Chart from "../screens/WeeklyChart";

const homeStack = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tracker"
          component={Tracker}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chart"
          component={Chart}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default homeStack;
