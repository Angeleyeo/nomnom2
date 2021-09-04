import React from "react";
import { StatusBar } from "expo-status-bar";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from "react-native";

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <TouchableHighlight style={styles.smallCircle}>
        <Text>{item.text}</Text>
        </TouchableHighlight>
      
    </View>
  );
};

const Tracker = ({ navigation }) => {
  return (
    <React.Fragment>
      <div className="Tracker" style={{textAlign:'center', backgroundColor:'#faf6ee'}}>
        <h1>
        <div style={{float: 'left'}}>
          <KeyboardBackspaceIcon style={{marginLeft: '10px'}} onClick={() => navigation.push("Main")}></KeyboardBackspaceIcon>
        </div>
        <Text style={{fontWeight: 'bold', fontSize: '20px' }}>How Are You?</Text>
          </h1>
      </div>

      <View style={styles.container}>
        <StatusBar style="light" />
        <SafeAreaView style={{ flex: 1 }}>
          <SectionList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={SECTIONS}
            renderSectionHeader={({ section }) => (
              <>
                <Text style={styles.sectionHeader}>{section.title}</Text>
                {section.horizontal ? (
                  <FlatList
                    horizontal
                    data={section.data}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                  />
                ) : null}
              </>
            )}
            renderItem={({ item, section }) => {
              if (section.horizontal) {
                return null;
              }
              return <ListItem item={item} />;
              //return <ListItem item={item} />;
            }}
          />
        </SafeAreaView>
      </View>
    </React.Fragment>
  );
};

const SECTIONS = [
  {
    title: "Mood",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Calm",
      },
      {
        key: "2",
        text: "Happy",
      },
      {
        key: "3",
        text: "Energetic",
      },
      {
        key: "4",
        text: "Anxious",
      },
      {
        key: "5",
        text: "Apathetic",
      },
      {
        key: "6",
        text: "Self-critical",
      },
    ],
  },
  {
    title: "Eating Habits",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Morning",
      },
      {
        key: "2",
        text: "Light",
      },
      {
        key: "3",
        text: "Medium",
      },
      {
        key: "4",
        text: "Heavy",
      },
      {
        key: "5",
        text: "Afternoon",
      },
    ],
  },
  {
    title: "Health",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Nausea",
      },
      {
        key: "2",
        text: "Gastric",
      },
      {
        key: "3",
        text: "Light Headache",
      },
      {
        key: "4",
        text: "Loss of Appetite",
      },
      {
        key: "5",
        text: "Unwell",
      },
    ],
  },
  {
    title: "Activity",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Social Interaction",
      },
      {
        key: "2",
        text: "Exercise",
      },
      {
        key: "3",
        text: "Light",
      },
      {
        key: "4",
        text: "Medium",
      },
      {
        key: "5",
        text: "Heavy",
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf6ee",
  },
  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "#000000",
    marginTop: 20,
    marginBottom: 5,
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
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: "#000000",
    marginTop: 5,
  },
});

export default Tracker;
