import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Range1() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.txtstyle}>
          *Take your prescribed insulin according to these blood glucose levels.
          Once you have given the initial increased dose, contact your GP or DSN
          for advice if you still feel unsure about adjusting your insulin doses
        </Text>
        <Text style={styles.txtstyle}>
          If you are taking more than 50 units in total daily, you should double
          the adjustments. All adjustments are incremental and should be reduced
          gradually as the illness subsides
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    //backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#052645",
    borderWidth: 1,
  },
  txtstyle: {
    fontSize: 20,
    //    fontWeight: "900",//
    padding: 5,
    opacity: 0.7,
    color: "#052645",
    marginLeft: 8,
    width: Dimensions.get("window").width - 50,
    //height: 100,
  },
});
