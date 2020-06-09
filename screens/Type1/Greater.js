import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Greater() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.boxtxt}>
          Take carbohydrates as a meal replacement and sip sugar-free liquids
          (at least 100 mL/hour if able)
        </Text>
        <Text style={{ fontSize: 24, color: "red", margin: 15 }}>
          You need food, insulin and fluids to avoid dehydration and serious
          complications
        </Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("urgent")}
      >
        <Text style={{ color: "#fff", opacity: 0.9 }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedede",

    //flexDirection: "row",
    // backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "center",
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
