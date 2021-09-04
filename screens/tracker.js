import React from "react";
import { StatusBar } from 'expo-status-bar';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import {
    StyleSheet,
    Text,
    View,
    SectionList,
    SafeAreaView,
    Image,
    FlatList
  } from 'react-native';
  

const ListItem =({ item }) => {
    return (
        <View style={styles.item}>
            
            <Image
                source={{
                    uri: item.uri,
                }}
                style={styles.itemPhoto}
                resizeMode="cover"
            />
            <Text style={styles.itemText}>{item.text}</Text>
      </View>
    )
}

const Tracker = ({ navigation }) => {
    return (
    <React.Fragment>
        <div className="Tracker">
            <p>Tracker</p>
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
        title: 'Mood',
        horizontal: true,
        data: [
            {
                key: '1',
                text: 'Calm',
            }, 
            {
                key: '2',
                text: 'Happy'
            }, 
            {
                key: '3',
                text: 'Energetic'
            }, 
            {
                key: '4',
                text: 'Frisky'
            }, 
        ]
    },
    {
        title: 'Symptoms',
        horizontal: true,
        data: [
            {
                key: '1',
                text: 'Fine'
            }, 
            {
                key: '2',
                text: 'Cramps'
            }, 
            {
                key: '3',
                text: 'Headache'
            }, 
            {
                key: '4',
                text: 'Acne'
            }, 
        ]
    },
    {
        title: 'Sex Drive',
        horizontal: true,
        data: [
            {
                key: '1',
                text: 'Fine'
            }, 
            {
                key: '2',
                text: 'Cramps'
            }, 
            {
                key: '3',
                text: 'Headache'
            }, 
            {
                key: '4',
                text: 'Acne'
            }, 
        ]
    },
];

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#faf6ee',
    },
    sectionHeader: {
      fontWeight: '800',
      fontSize: 18,
      color: '#000000',
      marginTop: 20,
      marginBottom: 5,
    },
    item: {
      margin: 10,
    },
    itemPhoto: {
      width: 200,
      height: 200,
    },
    itemText: {
      color: '#000000',
      marginTop: 5,
    },
  });

export default Tracker;