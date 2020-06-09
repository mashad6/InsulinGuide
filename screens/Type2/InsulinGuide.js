import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Card from "../../component/Card/Card";
import { useNavigation } from "@react-navigation/native";

const InsulinGuide = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.txtstyle}>
        Select Your Range<Text style={{ fontSize: 11 }}>(in mmol):</Text>{" "}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Card title="Between 11-17" screen="range1" />
        <Card title="Between 17-22" screen="range2" />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Card title="Over 22" screen="range3" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedede",
    justifyContent: "center",
    alignItems: "center",
  },

  boxtxt: {
    fontSize: 18,
    color: "#052645",
    marginLeft: 10,
    marginTop: 20,
  },
  btn: {
    height: 30,
    width: 100,
    backgroundColor: "#698198",
    borderRadius: 20,
    //opacity: 0.9,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  txtstyle: {
    fontSize: 24,
    fontWeight: "500",
    //paddingTop: 5,
    // opacity: 0.8,
    color: "#052645",
    marginBottom: 50,
  },
});
export default InsulinGuide;
