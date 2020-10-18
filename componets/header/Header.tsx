import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logoAndText}>
        <Image
          source={require("../.././assets/logo.png")}
          style={styles.image}
        />
        <Text style={styles.textLogo}>joice</Text>
      </View>

      <View>
        <View style={styles.navBar}></View>
        <View style={styles.navBar}></View>
        <View style={styles.navBar}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 15,
  },
  logoAndText: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 45,
    height: 45,
  },
  textLogo: {
    color: "white",
    fontSize: 30,
    paddingLeft: 30,
    fontWeight: "bold"
  },
  navBar: {
    backgroundColor: "white",
    fontSize: 35,
    width: 30,
    height: 1,
    marginTop: 9,
  },
});

export default Header;
