import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";
import { StyleSheet, Dimensions, TouchableHighlight, Text } from "react-native";

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  myCircle,
} from "./../components/styles";

const Login = ({ navigation }) => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover"></PageLogo>
        <PageTitle>Pearline is a monster</PageTitle>
        <Button title="Click me" onPress={() => navigation.push("Login")} />
      </InnerContainer>
    </StyledContainer>
  );
};

export default Login;
