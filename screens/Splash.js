import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default class Splash extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate("Home");
    }, 1000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtstyle}> A Complete </Text>
        <Text style={styles.txtstyle}> Guide for </Text>
        <Text style={styles.txtstyle}> Insulin</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedede",

    //flexDirection: "row",
    // backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  txtstyle: {
    fontSize: 35,
    fontWeight: "500",
    paddingTop: 5,
    // opacity: 0.8,
    color: "#052645",
    marginBottom: 20,
  },
  btn: {
    height: 30,
    width: 80,
    backgroundColor: "#698198",
    borderRadius: 20,
    //opacity: 0.9,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
});
