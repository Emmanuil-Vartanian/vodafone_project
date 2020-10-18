import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";

const UserAndBalance = () => {
  return (
    <View style={styles.userAndBalance}>
      <View style={styles.userAndTelephone}>
        <View style={styles.user}>
          <IconAntDesign name="user" size={40} style={{ color: "white" }} />
        </View>

        <View style={styles.myNumberAndTelephone}>
          <Text style={styles.myNumber}>Мой номер</Text>
          <Text style={styles.telephone}>095 095 95 95</Text>
        </View>
      </View>

      <View style={styles.balanceAndAddbalance}>
        <View style={styles.balance}>
          <Text style={{ fontSize: 12 }}>Баланс</Text>
          <Text style={{ fontSize: 17 }}>0.00$</Text>
        </View>

        <View style={styles.addBalance}>
          <View style={styles.verticalStick}></View>
          <View style={styles.horizontalStick}></View>
        </View>

        <View style={styles.componentBalanceCircle}></View>
        <View style={styles.componentOtherCircle}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginLeft: 15,
    marginRight: 5,
  },
  userAndBalance: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  user: {
    backgroundColor: "#333333",
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  userAndTelephone: {
    alignItems: "center",
  },
  myNumberAndTelephone: {
    alignItems: "center",
  },
  myNumber: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  telephone: {
    color: "white",
    fontSize: 14,
    marginTop: -2,
  },

  balanceAndAddbalance: {
    marginBottom: 35,
    position: "relative",
  },
  balance: {
    width: 175,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    backgroundColor: "#b383b5",
    borderRadius: 50,
  },
  addBalance: {
    width: 52.5,
    height: 52.5,
    backgroundColor: "black",
    borderRadius: 50,
    borderWidth: 10,
    borderStyle: "solid",
    borderColor: "white",
    position: "absolute",
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  verticalStick: {
    width: 1,
    height: 20,
    backgroundColor: "white",
  },
  horizontalStick: {
    width: 20,
    height: 1,
    backgroundColor: "white",
    position: "absolute",
  },
  componentBalanceCircle: {
    width: 8,
    height: 8,
    backgroundColor: "white",
    borderRadius: 50,
    position: "absolute",
    bottom: -15,
    left: 70,
  },
  componentOtherCircle: {
    width: 8,
    height: 8,
    backgroundColor: "white",
    opacity: 0.3,
    borderRadius: 50,
    position: "absolute",
    bottom: -15,
    left: 90,
  },
});

export default UserAndBalance;
