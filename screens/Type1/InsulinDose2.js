import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Card from "../../component/Card/Card";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";

export default function Insulin() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.txtstyle}>Total Daily insulin dose?</Text>
      <View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.list}
            onPress={() => {
              navigation.navigate("twenty", { unit: 2 });
            }}
          >
            <Text style={styles.listtxt}>Upto 14 units</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.list}
            onPress={() => {
              navigation.navigate("twenty", { unit: 4 });
            }}
          >
            <Text style={styles.listtxt}>14-24 units</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.list}
            onPress={() => {
              navigation.navigate("twenty", { unit: 6 });
            }}
          >
            <Text style={styles.listtxt}>25-34 units</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.list}
            onPress={() => {
              navigation.navigate("twenty", { unit: 8 });
            }}
          >
            <Text style={styles.listtxt}>35-44 units</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            style={styles.list}
            onPress={() => {
              navigation.navigate("twenty", { unit: 10 });
            }}
          >
            <Text style={styles.listtxt}>45-54 units</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ fontSize: 18, color: "darkred", padding: 8 }}>
        If you take more than 54 units or if you are unsure how to alter your
        dose,contact your specialist team or GP
      </Text>
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
    fontWeight: "600",
    padding: 5,
    // opacity: 0.8,
    color: "#052645",
    //marginBottom: 50,
  },
  list: {
    margin: 10,
    borderRadius: 20,
    height: 150,
    width: 150,
    backgroundColor: "#ededed",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  listtxt: {
    fontSize: 20,
    padding: 5,
    color: "#053645",
    fontWeight: "500",
  },
});
