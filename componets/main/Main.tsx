import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";

import Greeting from './greeting/Greeting';
import UserAndBalance from './userAndBalance/UserAndBalance';

const Main = () => {
  return (
    <View style={styles.main}>
      <Greeting />
      <UserAndBalance />
    </View>
  );
};

const styles = StyleSheet.create({
    main: {
      marginLeft: 15,
      marginRight: 5,
    },
});
  

export default Main;
