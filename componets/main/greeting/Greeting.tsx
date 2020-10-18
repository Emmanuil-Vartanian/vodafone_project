import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Greeting = () => {
  return (
    <View style={styles.greeting}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText1}>Хэй!</Text>
        <Text style={styles.greetingText2}>Добро пожаловать в My Vodafone</Text>
        <View style={styles.redStick}></View>
      </View>

      <View style={styles.dashForSquare}></View>
      <View style={styles.removeUnnecessaryFromDash}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  greeting: {
    backgroundColor: "#2c1029",
    borderRadius: 30,
    position: "relative",
    marginBottom: 15
  },
  greetingContainer: {
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 38,
    position: "relative",
  },
  greetingText1: {
    color: "white",
    fontSize: 25,
    paddingBottom: 5,
  },
  greetingText2: {
    color: "white",
    fontSize: 14,
  },
  redStick: {
    width: 4,
    height: 55,
    backgroundColor: "red",
    position: "absolute",
    left: 20,
    top: 22,
    borderRadius: 5,
  },
  dashForSquare: {
    width: 35,
    height: 30,
    backgroundColor: "#2c1029",
    borderRadius: 50,
    position: "absolute",
    bottom: 0,
    left: -20,
  },
  removeUnnecessaryFromDash: {
    width: 30,
    height: 40,
    backgroundColor: "#cb2142",
    borderRadius: 10,
    position: "absolute",
    bottom: 1,
    left: -30,
  },
});

export default Greeting;
