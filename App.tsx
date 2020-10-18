import React from "react";
import { StyleSheet, View } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";

import Header from './componets/header/Header';
import Main from './componets/main/Main';

export default function App() {
  return (
    <LinearGradient
      colors={["#cb2142", "#963288"]}
      start={[0, 0.02]}
      end={[0.1, 0]}
      
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <Header />
        <Main />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    height: "100%",
  },
  linearGradient: {
    flex: 1,
    marginTop: 23,
  },
});
