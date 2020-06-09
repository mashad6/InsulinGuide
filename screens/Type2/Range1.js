import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Box from "../../component/GuideBox";
export default function Range1() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.txtstyle}>Add 2 extra units to each dose</Text>
      <Box />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("check2")}
      >
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
    fontSize: 25,
    fontWeight: "900",
    paddingTop: 5,
    // opacity: 0.8,
    color: "#052645",
    //marginLeft: 1,
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
