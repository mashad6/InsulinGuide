import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Card from "../../component/Card/Card";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Card
          title="Urine ketones + to ++ (1.5–3.0 mmol/L on blood ketone meter)"
          screen="dose"
        />
        <Card
          title="Urine ketones +++ to ++++ (>3.0 mmol/L on blood ketone meter)"
          screen="dose2"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedede",
    justifyContent: "center",
    alignItems: "center",
  },
  txtstyle: {
    fontSize: 25,
    fontWeight: "500",
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
});
