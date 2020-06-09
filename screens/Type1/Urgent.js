import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Urgent() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 34, fontWeight: "bold" }}>! ! !</Text>
      <View style={styles.box}>
        <Text style={styles.txtstyle}>
          *Take your prescribed insulin according to these blood glucose levels.
          Once you have given the initial increased dose, contact your GP or DSN
          for advice if you still feel unsure about adjusting your insulin doses
        </Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("ketone")}
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
  },
  box: {
    //backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "darkred",
    borderWidth: 2,
  },
  txtstyle: {
    fontSize: 25,
    fontWeight: "900", //
    padding: 5,
    //opacity: 0.7,
    color: "#052645",
    marginLeft: 8,
    width: Dimensions.get("window").width - 50,
    //height: 100,
  },
});
