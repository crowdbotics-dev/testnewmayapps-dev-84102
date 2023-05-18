import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled10 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.aRHtCxiG}>Lorem ipsum…</Text><FlatList style={styles.qSPFFInJ} renderItem={({
        item
      }) => <View style={styles.rohzPCKR}></View>} ItemSeparatorComponent={() => <View style={styles.HHOJNXwz} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList><ActivityIndicator style={styles.GJelnCkk}></ActivityIndicator></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  aRHtCxiG: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  qSPFFInJ: {
    position: "absolute",
    width: 100,
    height: 150
  },
  rohzPCKR: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  HHOJNXwz: {
    backgroundColor: "#000000",
    height: 1
  },
  GJelnCkk: {
    width: 50,
    height: 50
  }
});
export default Untitled10;