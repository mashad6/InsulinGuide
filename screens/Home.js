import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Card from "../component/Card/Card";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  // navigation.canGoBack(true);
  return (
    <View style={styles.container}>
      <Text style={styles.txtstyle}>
        What type of diabetic patient are you?
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Card title="Type 2 diabetes" screen="testblood" />
        <Card title="Type 1 diabetes" screen="record" />
      </View>
    </View>
  );
}
// make splash screen before it. and main mpage asking feeling unwell?
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedede",

    //flexDirection: "row",
    // backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  txtstyle: {
    fontSize: 25,
    fontWeight: "500",
    padding: 5,
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
});
