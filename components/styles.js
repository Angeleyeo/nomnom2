import styled from "styled-components/native";
import { View, Text, Image } from "react-native";
import Constants from "expo-constants";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
};
const { primary, secondary, tertiary } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const myCircle = styled.View`
    width: 44,
    height: 44,
    borderRadius: 44/2
    backgroundColor: "green"
`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 200px;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  padding: 10px;
`;
