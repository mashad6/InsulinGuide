import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Lesser() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.boxtxt}>Take insulin as normal.</Text>
      <Text style={styles.boxtxt}>
        Take carbohydrates as a meal replacement and sip sugar-free liquids (at
        least 100 mL/hour if able)
      </Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
        <Text style={{ color: "#fff", opacity: 0.9 }}>Record</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedede",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  txtstyle: {
    fontSize: 30,
    fontWeight: "900",
    paddingTop: 5,
    // opacity: 0.8,
    color: "#052645",
    //marginBottom: 50,
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
  boxtxt: {
    fontSize: 34,
    color: "#052645",
    marginLeft: 10,
  },
});
