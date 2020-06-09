import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Card = (props) => {
  const navigation = useNavigation();
  const { title, screen } = props;

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {/* <Text style={styles.txtstyle}>Diabetes</Text> */}

        <Text style={styles.txtstyle}>{title}</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate(screen)}
      >
        <Text style={{ color: "#fff", opacity: 0.9 }}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 20,
    height: 200,
    width: 170,
    backgroundColor: "#ededed",
    justifyContent: "space-between",
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
  txtstyle: {
    fontSize: 17,
    fontWeight: "400",
    paddingTop: 10,
    marginLeft: 5,
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

export default Card;
