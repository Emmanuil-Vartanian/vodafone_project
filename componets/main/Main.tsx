import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconFontisto from "react-native-vector-icons/Fontisto";
import IconFeather from "react-native-vector-icons/Feather";
import IconSimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import IconMaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";

import Greeting from "./greeting/Greeting";
import UserAndBalance from "./userAndBalance/UserAndBalance";

const InfoAboutTarife = () => {
  return (
    <View style={styles.infoAboutTarife}>
      <View>
        <View style={styles.iconWorld}>
          <IconFontisto name="world-o" size={27} style={{ color: "white" }} />
        </View>
        <View style={styles.iconPhone}>
          <IconFeather name="phone" size={27} style={{ color: "white" }} />
        </View>
        <View style={styles.twoIconsMessage}>
          <View style={styles.iconMessageOutlineAndMessageTextOutline}>
            <IconMaterialCommunity
              name="message-outline"
              size={23}
              style={styles.iconMessageOutline}
            />
            <IconMaterialCommunity
              name="message-text-outline"
              size={23}
              style={styles.iconMessageTextOutline}
            />
          </View>
        </View>
        <View style={styles.iconPresent}>
          <IconSimpleLineIcons
            name="present"
            size={27}
            style={{ color: "white" }}
          />
        </View>
      </View>

      <View style={styles.infoAboutEthernet}>
        <Text style={{ color: "white", fontSize: 17 }}>Интернет</Text>
        <Text style={{ color: "white", fontSize: 40, fontWeight: "bold" }}>
          6 ГБ
        </Text>
        <Text style={{ color: "white", fontSize: 17 }}>из 6 ГБ</Text>
      </View>

      <View style={styles.operatorCallCentr}>
        <View style={styles.containerOperatorCallCentr}>
          <Text style={{ color: "#963288", fontSize: 18 }}>24/7</Text>
        </View>
      </View>
    </View>
  );
};

const Main = () => {
  return (
    <View style={styles.main}>
      <Greeting />
      <UserAndBalance />
      <InfoAboutTarife />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginLeft: 15,
    marginRight: 5,
  },
  infoAboutTarife: {
    justifyContent: "space-between",
    flexDirection: "row",
    position: "relative",
    height: 230,
  },
  iconWorld: {
    width: 55,
    height: 55,
    borderRadius: 50,
    // backgroundColor: "white",
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 5,
    top: 25,
  },
  iconPhone: {
    width: 55,
    height: 55,
    borderRadius: 50,
    // backgroundColor: "white",
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 95,
    left: 5,
  },
  twoIconsMessage: { position: "absolute", bottom: 15, left: 40 },
  iconMessageOutlineAndMessageTextOutline: {
    width: 55,
    height: 55,
    borderRadius: 50,
    // backgroundColor: "white",
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  iconMessageOutline: {
    color: "white",
    position: "absolute",
    left: 11,
    top: 15,
    zIndex: 1,
  },
  iconMessageTextOutline: {
    transform: [{ rotateY: "180deg" }],
    color: "white",
    position: "absolute",
    right: 11,
    bottom: 9,
    zIndex: 2,
    backgroundColor: "#cb2142",
  },
  iconPresent: {
    width: 55,
    height: 55,
    borderRadius: 50,
    // backgroundColor: "white",
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -15,
    left: 110,
  },
  infoAboutEthernet: {
    width: 160,
    height: 160,
    borderColor: "#b55a99",
    // opacity: 0.5,
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 70,
  },
  operatorCallCentr: {
    flexDirection: "column-reverse",
    // marginRight: 400
  },
  containerOperatorCallCentr: {
    backgroundColor: "white",
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    
  },
});

export default Main;
