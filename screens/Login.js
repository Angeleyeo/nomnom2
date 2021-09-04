import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
} from "./../components/styles";

const Login = ({ navigation }) => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover"></PageLogo>
        <PageTitle>gan is a monster!</PageTitle>
        <Button title="Click me" onPress={() => navigation.push("Second")} />
        <Button title="Tracker" onPress={() => navigation.push("Tracker")} />
      </InnerContainer>
    </StyledContainer>
  );
};

export default Login;
