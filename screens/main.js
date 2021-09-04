import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
} from "react-native";
//import { createBottomTabNavigator } from '@react-navigation/bottom'

const main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <div>
        <TouchableHighlight style={styles.bigCircle} underlayColor="#ccc">
          <Text style={{ fontSize: 30 }}>
            HAVE YOU EATEN <br />
            YOUR LUNCH?
          </Text>
        </TouchableHighlight>
      </div>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <TouchableHighlight
          style={styles.smallCircle}
          onPress={() => navigation.push("Tracker")}
        >
          <Text style={styles.smallText}>How Are You? </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.smallCircle}>
          <Text style={styles.smallText}> AHA! </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.smallCircle}
          onPress={() => navigation.push("Chart")}
        >
          <Text style={styles.smallText}> Weekly Chart </Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.smallCircle}>
          <Text style={styles.smallText}> Connect </Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.smallCircle}>
          <Text style={styles.smallText}> Food Options </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#faf6ee",
  },
  bigCircle: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").width * 0.6,
    backgroundColor: "#F0CCCE",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: Dimensions.get("window").height * 0.1,
  },
  smallCircle: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.15,
    height: Dimensions.get("window").width * 0.15,
    backgroundColor: "#f0dccc",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: Dimensions.get("window").width * 0.013,
    marginRight: Dimensions.get("window").width * 0.013,
  },
  smallText: {
    fontSize: 12,
  },
});
