import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Ten({ route }) {
  const navigation = useNavigation();
  const { unit } = route.params;
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
        <Text style={styles.boxtxt}>
          Give an additional 10% of rapid-acting or mixed insulin every 2 hours
        </Text>
        <Text style={styles.boxtxt}>That is :</Text>
      </View>
      <Text style={{ fontSize: 24, color: "red", margin: 15 }}>
        {unit} Unit(s)
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("check")}
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
    marginTop: 10,
  },
});
