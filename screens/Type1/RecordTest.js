import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../../component/Card/Card2";
const { width: WIDTH } = Dimensions.get("window");
const TestBlood = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.txtstyle}>
        Test blood glucose and ketones every 4–6 hours, including through the
        night
      </Text>

      <View style={{ flexDirection: "row" }}>
        <Card
          title="Blood glucose more than 11 mmol/L & either no or low ketones (trace urine ketones or <1.5 mmol/L on blood ketone monitor)"
          screen="greater"
        />
        <Card
          title="Blood glucose less than 11 mmol/L and no ketones"
          screen="lesser"
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Card
          title="Blood glucose more than 11 mmol/L and/or ketones present (>1.5 mmol/L on blood ketone meter or +/++ on urine ketones)"
          screen="greater1"
        />
      </View>
    </View>
  );
};
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
    fontSize: 18,
    fontWeight: "100",
    //paddingTop: 5,
    // opacity: 0.8,
    color: "#052645",
    marginLeft: 10,
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
    //opacity: 0.9,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
});
export default TestBlood;
