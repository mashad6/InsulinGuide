import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../../component/Card/Card";
const TestBlood = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.txtstyle}>
        Test blood glucose at least 4times a day
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Card title="Is your blood glucose more than 11?" screen="greater" />
        <Card title="Is your blood glucose less than 11?" screen="lesser" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedede",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  txtstyle: {
    fontSize: 18,
    fontWeight: "100",
    color: "#052645",
    marginBottom: 50,
  },
  msgbox: {
    justifyContent: "center",
    alignItems: "flex-end",
    // marginLeft: 10,
    //backgroundColor: "black",
  },
  boxtxt: {
    fontSize: 24,
    color: "#052645",
    marginLeft: 10,
  },
  btn: {
    height: 30,
    width: 80,
    backgroundColor: "#698198",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
});
export default TestBlood;
