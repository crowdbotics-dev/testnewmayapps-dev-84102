import { Slider } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { Text } from "react-native";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.TATtiMGv}></View><Text style={styles.lMLyxcup}>{"Testing world"}</Text><ActivityIndicator style={styles.XLjYXigB}></ActivityIndicator><Slider style={styles.rYGYtxIz} thumbStyle={{
        height: 20,
        width: 20
      }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  TATtiMGv: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    transform: [{
      rotate: "0deg"
    }],
    top: 0,
    left: 216,
    position: "absolute"
  },
  lMLyxcup: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 22,
    top: -20,
    transform: [{
      rotate: "4deg"
    }]
  },
  XLjYXigB: {
    width: 50,
    height: 50
  },
  rYGYtxIz: {
    width: 150,
    height: 40
  }
});
export default Untitled3;