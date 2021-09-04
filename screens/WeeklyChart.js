import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import graph from "../assets/graph.png"; // gives image path
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


const main = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
        <h1> <KeyboardBackspaceIcon style={{float: "left", paddingLeft:'10px', marginTop:'10px'}} onClick={() => navigation.push("Main")}></KeyboardBackspaceIcon>Your Weekly Chart</h1>
      <View style={styles.imgContainer}>
        <img
          src={graph}
          style={{
            height: Dimensions.get("window").height * 0.3,
            width: Dimensions.get("window").width * 0.5,
          }}
        />
      </View>
      <View style={styles.subContainer}>
        This week...
        <ul>
          <li>You managed to eat breakfast 6 times!</li>
          <li>You had gastric problems twice</li>
          <li>Your weight decreased by 0.6 kg</li>
          <li>Lorem Ipsum</li>
        </ul>
      </View>
      <View style={{ paddingVertical: -20 }}></View>
      <View style={styles.subContainer}>
        Recommendations
        <ul>
          <li>Take a short walk or exercise break in between study hours</li>
          <li>
            I noticed your sleep cycle starts from 5am to 1pm... Would you like
            to share why? <br />
            <input
              style={{
                marginTop: 10,
                width: Dimensions.get("window").width * 0.7,
              }}
            ></input>
          </li>
        </ul>
      </View>
    </View>
  );
};

export default main;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#faf6ee",
    textAlign: 'center'
  },
  myTitle: {
    textAlign: "center",
    //marginTop: Dimensions.get("window").height * 0.03,
    //marginBottom: Dimensions.get("window").height * 0.03,
    fontSize: 30,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: Dimensions.get("window").height * 0.03,
    fontSize: 30,
  },
  subContainer: {
    marginLeft: Dimensions.get("window").width * 0.05,
    marginRight: Dimensions.get("window").width * 0.05,
    textAlign: "left"
  },
});
